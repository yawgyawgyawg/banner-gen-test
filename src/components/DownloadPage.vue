<template>
  <div class="screen">
    <button @click="loadImage">Load Image</button>
    <div class="canvas-container">
      <h2>모바일 캔버스</h2>
      <canvas ref="mobileCanvas" width="720" height="652"></canvas>
      <div class="sub-buttons">
        <button @click="zoomIn('mobile')">Zoom In (Mobile)</button>
        <button @click="zoomOut('mobile')">Zoom Out (Mobile)</button>
      </div>
      <button @click="downloadImage('mobile')">Download Mobile Banner</button>
    </div>

    <div class="canvas-container">
      <h2>PC 캔버스</h2>
      <canvas ref="pcCanvas" width="1900" height="370"></canvas>
      <div class="sub-buttons">
        <button @click="zoomIn('pc')">Zoom In (PC)</button>
        <button @click="zoomOut('pc')">Zoom Out (PC)</button>
      </div>
      <button @click="downloadImage('pc')">Download PC Banner</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadPage",
  mounted() {
    this.$refs.mobileCanvas.addEventListener('mousedown', (e) => this.startDrag(e, 'mobile'));
    this.$refs.mobileCanvas.addEventListener('mousemove', (e) => this.onDrag(e, 'mobile'));
    window.addEventListener('mouseup', () => this.stopDrag('mobile'));

    this.$refs.pcCanvas.addEventListener('mousedown', (e) => this.startDrag(e, 'pc'));
    this.$refs.pcCanvas.addEventListener('mousemove', (e) => this.onDrag(e, 'pc'));
    window.addEventListener('mouseup', () => this.stopDrag('pc'));
  },
  data() {
    return {
      image: null,
      mobile: {
        dragging: false,
        imageX: 0,
        imageY: 0,
        imageScale: 1,
        lastMouseX: null,
        lastMouseY: null,
      },
      pc: {
        dragging: false,
        imageX: 0,
        imageY: 0,
        imageScale: 1,
        lastMouseX: null,
        lastMouseY: null,
      },
    }
  },
  methods: {
    loadImage() {
      this.image = new Image();
      this.image.onload = () => {
        this.initializeCanvas('mobile');
        this.initializeCanvas('pc');
      };
      this.image.crossOrigin = '*';
      this.image.src = require('@/assets/sampleimage.png');
    },
    initializeCanvas(canvasType) {
      const canvas = this.$refs[`${canvasType}Canvas`];
      const ctx = canvas.getContext('2d');
      const canvasData = this[canvasType];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ratio = this.image.width / this.image.height;
      let scaleWidth, scaleHeight;

      if (canvasType === 'pc') {
        // PC 캔버스: 가로 기준 맞춤
        scaleWidth = canvas.width;
        scaleHeight = canvas.width / ratio;
        canvasData.imageScale = scaleWidth / this.image.width;
        canvasData.imageX = 0;
        canvasData.imageY = (canvas.height - scaleHeight) / 2; // 중앙 정렬
      } else {
        // 모바일 캔버스: 세로 기준 맞춤
        scaleWidth = canvas.height * ratio;
        scaleHeight = canvas.height;
        canvasData.imageScale = scaleHeight / this.image.height;
        canvasData.imageX = (canvas.width - scaleWidth) / 2;
        canvasData.imageY = 0;
      }

      ctx.drawImage(this.image, canvasData.imageX, canvasData.imageY, scaleWidth, scaleHeight);
    },

    updateCanvas(canvasType) {
      const canvasData = this[canvasType];
      const canvas = this.$refs[`${canvasType}Canvas`];
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scaledWidth = this.image.width * canvasData.imageScale;
      const scaledHeight = this.image.height * canvasData.imageScale;

      ctx.drawImage(this.image, canvasData.imageX, canvasData.imageY, scaledWidth, scaledHeight);
    },

    downloadImage(canvasType) {
      const canvas = this.$refs[`${canvasType}Canvas`];
      const link = document.createElement('a');
      link.download = `${canvasType}_image.png`;
      link.href = canvas.toDataURL();
      link.click();
    },
    startDrag(event, canvasType) {
      const canvasData = this[canvasType];
      canvasData.lastMouseX = event.clientX;
      canvasData.lastMouseY = event.clientY;
      canvasData.dragging = true;
    },
    onDrag(event, canvasType) {
      const canvasData = this[canvasType];
      const canvas = this.$refs[`${canvasType}Canvas`];

      if (canvasData.dragging) {
        const dx = event.clientX - canvasData.lastMouseX;
        const dy = event.clientY - canvasData.lastMouseY;

        canvasData.imageX += dx / canvasData.imageScale;
        canvasData.imageY += dy / canvasData.imageScale;

        this.adjustImageBounds(canvasData, canvas);

        canvasData.lastMouseX = event.clientX;
        canvasData.lastMouseY = event.clientY;

        this.updateCanvas(canvasType);
      }
    },

    adjustImageBounds(canvasData, canvas) {
      const scaledWidth = this.image.width * canvasData.imageScale;
      const scaledHeight = this.image.height * canvasData.imageScale;

      canvasData.imageX = Math.min(Math.max(canvasData.imageX, canvas.width - scaledWidth), 0);
      canvasData.imageY = Math.min(Math.max(canvasData.imageY, canvas.height - scaledHeight), 0);
    },
    stopDrag(canvasType) {
      this[canvasType].dragging = false;
    },
    zoomIn(canvasType) {
      const canvasData = this[canvasType];
      canvasData.imageScale *= 1.05;
      this.updateCanvas(canvasType);
    },
    zoomOut(canvasType) {
      const canvasData = this[canvasType];
      const canvas = this.$refs[`${canvasType}Canvas`];
      const minScaleX = canvas.width / this.image.width;
      const minScaleY = canvas.height / this.image.height;
      const minScale = Math.max(minScaleX, minScaleY);

      if (canvasData.imageScale > minScale) {
        canvasData.imageScale /= 1.05;
        canvasData.imageScale = Math.max(canvasData.imageScale, minScale);
        this.updateCanvas(canvasType);
      }
    },
  },
}
</script>

<style scoped>
canvas {
  border: 1px solid black;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.canvas-container {
  margin: 20px;
}

.sub-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.main-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
