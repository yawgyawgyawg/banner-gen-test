<template>
  <div class="banner-preview-area">
    <div class="banner-preview-tabs">
      <button @click="changeTab('mobile')" :class="{active: activeTab === 'mobile'}">MO</button>
      <button @click="changeTab('pc')" :class="{active: activeTab === 'pc'}">PC</button>
    </div>
    <div class="banner-preview-content">
      <div class="preview-button">
        <div class="zoom-in" @click="zoomIn(activeTab)">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.39 9.02V16.4H27.77V19.46H20.39V26.81H17.36V19.46H9.98V16.4H17.36V9.02H20.39Z" fill="#5F0080"/>
            <circle cx="18.5" cy="18.5" r="18" stroke="#5F0080"/>
          </svg>
        </div>
        <div class="zoom-out" @click="zoomOut(activeTab)">
          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.95 17.4H25.03V20.49H11.95V17.4Z" fill="#5F0080"/>
            <circle cx="18.5" cy="18.5" r="18" stroke="#5F0080"/>
          </svg>

        </div>
        <div class="save-button" @click="downloadImage(activeTab)">다운로드</div>
        <div class="save-button" @click="saveImage(activeTab)">저장하기</div>
      </div>
      <div v-if="activeTab === 'mobile'">
        <canvas ref="mobileCanvas" class="mobile-canvas" width="720" height="652"></canvas>
      </div>
      <div v-if="activeTab === 'pc'">
        <canvas ref="pcCanvas" class="pc-canvas" width="1900" height="370"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerPreviewArea",
  data() {
    return {
      activeTab: 'mobile',
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
      textStyles: {
        title: {
          pc: { size: "40px", weight: "400", color: "#000000" },
          mobile: { size: "50px", weight: "400", color: "#000000" },
        },
        subTitle: {
          pc: { size: "18px", weight: "400", color: "#000000" },
          mobile: { size: "27px", weight: "400", color: "#000000" },
        },
        disclaimer: {
          pc: { size: "16px", weight: "400", color: "#000000" },
          mobile: { size: "21px", weight: "400", color: "#000000" },
        },
      },
      textColor: '#000000',
    }
  },
  props: {
    textContents: Array,
    bannerId: Number,
  },
  async mounted() {
    await this.loadImage();
    this.updateCanvas(this.activeTab);
  },
  watch: {
    // textContents 객체 전체를 감시합니다.
    textContents: {
      deep: true,
      handler() {
        if(this.activeTab === 'mobile' && this.$refs.mobileCanvas) {
          this.updateCanvas('mobile');
        } else if(this.activeTab === 'pc' && this.$refs.pcCanvas) {
          this.updateCanvas('pc');
        }
      }
    }
  },
  methods: {
    changeTab(activeTab) {
      this.activeTab = activeTab;
      this.$nextTick(() => {
        if (activeTab === 'mobile' && this.$refs.mobileCanvas) {
          this.addEventListenersToCanvas(this.$refs.mobileCanvas, 'mobile');
          this.updateCanvas('mobile');
        } else if (activeTab === 'pc' && this.$refs.pcCanvas) {
          this.addEventListenersToCanvas(this.$refs.pcCanvas, 'pc');
          this.updateCanvas('pc');
        }
      });
    },
    addEventListenersToCanvas(canvas, canvasType) {
      canvas.addEventListener('mousedown', (e) => this.startDrag(e, canvasType));
      canvas.addEventListener('mousemove', (e) => this.onDrag(e, canvasType));
      window.addEventListener('mouseup', () => this.stopDrag(canvasType));
    },
    loadImage() {
      return new Promise((resolve, reject) => {
        this.image = new Image();
        this.image.onload = () => {
          resolve();
        };
        this.image.onerror = reject;
        this.image.crossOrigin = '*';
        const genImagePaths = {
          '1': 'generated1.jpg',
          '2': 'generated2.jpg',
          '3': 'generated3.jpg',
          '1-1': 'generated1-1.jpg',
          '2-1': 'generated2-1.jpg',
          '3-1': 'generated3-1.jpg',
        };
        this.generatedImageSrc = genImagePaths[this.bannerId];
        this.image.src = require(`@/assets/images/${this.generatedImageSrc}`);
      });
    },
    applyTextColor() {
      this.updateCanvas('mobile');
      this.updateCanvas('pc');
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
      this.updateCanvas(canvasType); // 캔버스 업데이트 호출 추가
    },
    updateCanvas(canvasType) {
      const canvasData = this[canvasType];
      const canvas = this.$refs[`${canvasType}Canvas`];
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scaledWidth = this.image.width * canvasData.imageScale;
      const scaledHeight = this.image.height * canvasData.imageScale;

      ctx.drawImage(this.image, canvasData.imageX, canvasData.imageY, scaledWidth, scaledHeight);

      // 텍스트 그리기
      const textPositions = {
        pc: {
          title: [98, 150], // title 줄바꿈 위치 추가
          subTitle: [217, 244, 271], // subTitle 줄바꿈 위치 추가
          disclaimer: [338]
        },
        mobile: {
          title: [72, 134], // title 줄바꿈 위치 추가
          subTitle: [224, 258, 292], // subTitle 줄바꿈 위치 추가
          disclaimer: [596]
        }
      };
      const xOffset = canvasType === 'pc' ? 505 : 37;

      Object.keys(this.textContents).forEach(key => {
        const yPositions = textPositions[canvasType][key];
        const style = this.textStyles[key][canvasType];
        this.drawText(ctx, this.textContents[key], xOffset, yPositions, style);
      });
    },
    downloadImage(canvasType) {
      console.log('downloadImage', canvasType);
      const canvas = this.$refs[`${canvasType}Canvas`];
      const link = document.createElement('a');
      link.download = `${canvasType}_image.jpg`;
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
    drawText(ctx, text, x, yPositions, style) {
      // HTML 태그 파싱 및 텍스트 줄바꿈 처리
      const lines = text.split("<br>");
      lines.forEach((line, index) => {
        const y = yPositions[index]; // 각 줄마다 고정된 y 위치 사용
        this.drawSingleLineText(ctx, line, x, y, style);
        ctx.fillStyle = this.textColor; // 새로운 텍스트 컬러 적용
      });
    },
    drawSingleLineText(ctx, text, x, y, style) {
      ctx.textBaseline = 'top'; // 텍스트 기준선을 상단으로 설정
      ctx.textAlign = 'left'; // 텍스트 정렬을 왼쪽으로 설정
      const strongRegex = /<strong>(.*?)<\/strong>/g;
      let match;
      let lastIndex = 0;

      const drawTextSegment = (segment, bold = false) => {
        ctx.fillStyle = this.textColor; // 새로운 텍스트 컬러 적용
        ctx.font = `${bold ? '600' : style.weight} ${style.size} Gotham`;
        ctx.fillText(segment, x, y);
        x += ctx.measureText(segment).width;
      };

      while ((match = strongRegex.exec(text)) !== null) {
        // 강조되지 않은 일반 텍스트 그리기
        const normalText = text.substring(lastIndex, match.index);
        drawTextSegment(normalText);

        // 강조 텍스트 그리기
        const boldText = match[1];
        drawTextSegment(boldText, true);

        lastIndex = match.index + match[0].length;
      }

      // 마지막 일반 텍스트 그리기
      const remainingText = text.substring(lastIndex);
      if (remainingText) {
        drawTextSegment(remainingText);
      }
    },
  }
}
</script>

<style scoped>

.banner-preview-area{
  position: relative;
  width: calc(100% - 40px);
  transform: translateX(40px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-preview-area {
  margin-top: 60px;
  border: 1px solid #CDD5DC;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
  background-image: linear-gradient(45deg, rgba(242, 228, 255, 0.5) 25%, transparent 25%, transparent 50%, rgba(242, 228, 255, 0.5) 50%, rgba(242, 228, 255, 0.5) 75%, transparent 75%, transparent);
  background-size: 15px 15px; /* 사선 크기 조정 */
}

.banner-preview-tabs{
  position: absolute;
  top: 20px;
  left: -40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  height: 220px;
}

.banner-preview-tabs button {
  width: 40px;
  border: 1px solid #CDD5DC;
  background-color: #F7F9FB;
  color: #979797;
  border-radius: 30px 0 0 30px;
  margin-right: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  padding: 80px 0;
}

.banner-preview-tabs button.active {
  border: 1px solid #CDD5DC;
  border-right: none;
  background-color: white;
  background-image: linear-gradient(45deg, rgba(242, 228, 255, 0.5) 25%, transparent 25%, transparent 50%, rgba(242, 228, 255, 0.5) 50%, rgba(242, 228, 255, 0.5) 75%, transparent 75%, transparent);
  background-size: 15px 15px; /* 사선 크기 조정 */
  color: #000000;
}

.banner-preview-area .banner-preview-content {
  display: flex;
  width: 100%;
  height: 341px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  /* 필요한 추가 스타일링 */
}

.banner-preview-content .mobile-canvas {
  transform: translateY(-15px) scale(0.5); /* 모바일 캔버스 크기 조정 */
  transform-origin: center;
}

.banner-preview-content .pc-canvas {
  transform: scale(0.5); /* PC 캔버스 크기 조정 */
  transform-origin: center;
}

.preview-button{
  position:absolute;
  bottom: 10px;
  right: 20px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.save-button{
  width: 120px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1.5px solid #5F0080;
  color: #5F0080;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  border-radius: 8px;
}


</style>