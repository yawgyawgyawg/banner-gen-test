<template>
  <div class="screen">
    <div class="main-buttons">
      <button @click="loadImage">Load Image</button>
      <button @click="downloadImage">Download</button>
    </div>
    <div class="sub-buttons">
      <button @click="zoomIn">Zoom In</button>
      <button @click="zoomOut">Zoom Out</button>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "DownloadPage",
  mounted() {
    this.$refs.canvas.addEventListener('mousedown', this.startDrag);
    this.$refs.canvas.addEventListener('mousemove', this.onDrag);
    window.addEventListener('mouseup', this.stopDrag);
  },
  data() {
    return {
      image: null,
      dragging: false,
      imageX: 0,
      imageY: 0,
      imageScale: 1,
      lastMouseX: null,
      lastMouseY: null,
    }
  },
  methods: {
    loadImage() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      canvas.width = 1200; // 캔버스 너비 설정
      canvas.height = 1200; // 캔버스 높이 설정

      this.image = new Image();
      this.image.onload = () => {
        ctx.drawImage(this.image, this.imageX, this.imageY, this.image.width * this.imageScale, this.image.height * this.imageScale);
      };
      this.image.crossOrigin = '*';
      this.image.src = require('@/assets/sampleimage.jpg');
    },
    downloadImage() {
      const canvas = this.$refs.canvas;
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = canvas.toDataURL();
      link.click();
    },
    startDrag(event) {
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
      this.dragging = true;
    },
    onDrag(event) {
      if (this.dragging) {
        const dx = event.clientX - this.lastMouseX;
        const dy = event.clientY - this.lastMouseY;
        this.imageX += dx;
        this.imageY += dy;
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
        this.updateCanvas();
      }
    },
    stopDrag() {
      this.dragging = false;
    },
    updateCanvas() {
      const ctx = this.$refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      ctx.drawImage(this.image, this.imageX, this.imageY, this.image.width * this.imageScale, this.image.height * this.imageScale);
    },
    zoomIn() {
      this.imageScale *= 1.1;
      this.updateCanvas();
    },
    zoomOut() {
      this.imageScale /= 1.1;
      this.updateCanvas();
    },
  }
}
</script>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.sub-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
