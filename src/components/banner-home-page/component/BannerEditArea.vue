<template>
  <div class="banner-edit-area">
    <div class="banner-edit-tabs">
      <button @click="activeTab = 'text'" :class="{active: activeTab === 'text'}">텍스트</button>
      <button @click="activeTab = 'image'" :class="{active: activeTab === 'image'}">이미지</button>
    </div>
    <div class="banner-edit-content">
      <div style="width: 100%;" v-if="activeTab === 'text'">
        <div class="text-area-title">
          <h3>텍스트 수정하기</h3>
        </div>
        <div class="text-area-fields">
          <div class="fields-textarea">
            <div class="textarea-container">
              <label for="text-top">상단 텍스트</label>
              <textarea name="text-top" id="text-top" rows="3" placeholder="텍스트를 입력하세요"></textarea>
              <div class="idea-button" @click="requestSuggestion">
                <svg width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_70_154)">
                    <path d="M30.2752 0V10.1559H33.7248V0H30.2749H30.2752ZM16.1894 3.052L13.3631 5.03083L19.1873 13.3479L22.012 11.3691L16.1894 3.052ZM47.81 3.052L41.9875 11.3691L44.8126 13.348L50.6367 5.03083L47.8104 3.052H47.81ZM31.9993 12.9346C23.5605 12.9346 16.7197 18.059 16.7197 24.3813L25.4008 50.6718H38.5992L47.2797 24.3813C47.2797 18.0591 40.4392 12.9346 32.0001 12.9346H31.9993ZM4.55801 15.9826L3.37939 19.226L12.918 22.6987L14.101 19.4569L4.55779 15.9826H4.55801ZM59.4413 15.9826L49.8981 19.4571L51.077 22.6994L60.6203 19.226L59.4413 15.9826ZM13.6402 30.8097L3.83219 33.4404L4.72211 36.77L14.5301 34.1431L13.6404 30.8097H13.6402ZM50.3591 30.8097L49.4698 34.143L59.2779 36.7695L60.1671 33.4398L50.3591 30.8095V30.8097ZM25.2084 52.5884V57.1583H38.7917V52.5891H25.2085L25.2084 52.5884ZM25.2084 59.4301V64H38.7917V59.4308H25.2085L25.2084 59.4301Z" fill="#DBE1E6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_70_154">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="textarea-container">
              <label for="text-middle">중간 텍스트</label>
              <textarea name="text-middle" id="text-middle" rows="3" placeholder="텍스트를 입력하세요"></textarea>
              <div class="idea-button" @click="requestSuggestion">
                <svg width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_70_154)">
                    <path d="M30.2752 0V10.1559H33.7248V0H30.2749H30.2752ZM16.1894 3.052L13.3631 5.03083L19.1873 13.3479L22.012 11.3691L16.1894 3.052ZM47.81 3.052L41.9875 11.3691L44.8126 13.348L50.6367 5.03083L47.8104 3.052H47.81ZM31.9993 12.9346C23.5605 12.9346 16.7197 18.059 16.7197 24.3813L25.4008 50.6718H38.5992L47.2797 24.3813C47.2797 18.0591 40.4392 12.9346 32.0001 12.9346H31.9993ZM4.55801 15.9826L3.37939 19.226L12.918 22.6987L14.101 19.4569L4.55779 15.9826H4.55801ZM59.4413 15.9826L49.8981 19.4571L51.077 22.6994L60.6203 19.226L59.4413 15.9826ZM13.6402 30.8097L3.83219 33.4404L4.72211 36.77L14.5301 34.1431L13.6404 30.8097H13.6402ZM50.3591 30.8097L49.4698 34.143L59.2779 36.7695L60.1671 33.4398L50.3591 30.8095V30.8097ZM25.2084 52.5884V57.1583H38.7917V52.5891H25.2085L25.2084 52.5884ZM25.2084 59.4301V64H38.7917V59.4308H25.2085L25.2084 59.4301Z" fill="#DBE1E6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_70_154">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="textarea-container">
              <label for="text-bottom">하단 텍스트</label>
              <textarea name="text-bottom" id="text-bottom" rows="1" placeholder="텍스트를 입력하세요"></textarea>
            </div>
          </div>
          <div class="fields-suggestions">
            <div class="suggestions-title">
              <h4 style="color:#67757E; font-weight: 700">이런 문구는 어떠세요?</h4>
              <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="18" rx="9" fill="#5F0080"/>
                <path d="M13.808 4.252L17.42 13.084H16.076L15.092 10.672H11.048L10.04 13.084H8.684L12.368 4.252H13.808ZM11.492 9.592H14.636L13.088 5.788L11.492 9.592ZM18.8844 4.252H20.1324V13.084H18.8844V4.252Z" fill="white"/>
              </svg>
            </div>
              <div class="suggestions-contents">
               <div class="guide-text" v-if="!suggestionRequested">
                <svg width="32" height="34" viewBox="0 0 58 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.2752 0V10.1559H30.7248V0H27.2749H27.2752ZM13.1894 3.052L10.3631 5.03083L16.1873 13.3479L19.012 11.3691L13.1894 3.052ZM44.81 3.052L38.9875 11.3691L41.8126 13.348L47.6367 5.03083L44.8104 3.052H44.81ZM28.9993 12.9346C20.5605 12.9346 13.7197 18.059 13.7197 24.3813L22.4008 50.6718H35.5992L44.2797 24.3813C44.2797 18.0591 37.4392 12.9346 29.0001 12.9346H28.9993ZM1.55801 15.9826L0.379395 19.226L9.91801 22.6987L11.101 19.4569L1.55779 15.9826H1.55801ZM56.4413 15.9826L46.8981 19.4571L48.077 22.6994L57.6203 19.226L56.4413 15.9826ZM10.6402 30.8097L0.832195 33.4404L1.72211 36.77L11.5301 34.1431L10.6404 30.8097H10.6402ZM47.3591 30.8097L46.4698 34.143L56.2779 36.7695L57.1671 33.4398L47.3591 30.8095V30.8097ZM22.2084 52.5884V57.1583H35.7917V52.5891H22.2085L22.2084 52.5884ZM22.2084 59.4301V64H35.7917V59.4308H22.2085L22.2084 59.4301Z" fill="#DBE1E6"/>
              </svg>
                <span>를 눌러 AI 문구 제안을 받아보세요</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%;" v-if="activeTab === 'image'">
        <div class="text-area-title">
          <h3>이미지 수정하기</h3>
        </div>
        <div class="text-area-fields">
          <div class="fields-original-image">
            <div class="fields-top-text">원본 이미지</div>
            <input type="file" @change="loadOriginalImage" hidden ref="fileInput">
            <img :src="originalImageSrc" alt="원본 이미지 미리보기">
            <div>{{ originalImagePath }}</div>
            <button @click="triggerFileInput">변경하기</button>
          </div>

          <div class="fields-generated-image">
            <div class="fields-top-text">확장 이미지</div>
            <img :src="generatedImageSrc" alt="확장 이미지 미리보기">
            <button @click="refreshGeneratedImage">새로고침</button>
            <button @click="applyGeneratedImage">적용하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerEditArea",
  data() {
    return {
      activeTab: 'text',
      originalImagePath: `이미지를 선택해주세요 (jpg, png, gif, svg, jpeg 등)`,
      originalImageSrc: null,
      suggestionRequested: false,
      generatedImageSrc: null,

    }
  },
  methods: {
    requestSuggestion() {
      this.suggestionRequested = true;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    loadOriginalImage(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        this.originalImagePath = file.name;
        this.originalImageSrc = URL.createObjectURL(file);
      }
    },
    refreshGeneratedImage() {
      console.log('새로고침');
    },
    applyGeneratedImage() {
      console.log('적용하기');
    },
  }
}
</script>

<style scoped>

.banner-edit-area{
  position: relative;
}
.banner-edit-tabs{
  position: absolute;
  top: -40px;
  left: 36px;
}

.banner-edit-area {
  margin-top: 90px;
  border: 1px solid #CDD5DC;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
}

.banner-edit-area .banner-edit-tabs button {
  width: 128px;
  height: 40px;
  border: 1px solid #CDD5DC;
  background-color: #F7F9FB;
  color: #979797;
  border-radius: 30px 30px 0 0;
  margin-right: 12px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  box-sizing: border-box;

}

.banner-edit-area .banner-edit-tabs button.active {
  border: 1px solid #CDD5DC;
  border-bottom: none;
  background-color: white;
  color: #000000;
}

.banner-edit-area .banner-edit-content {
  display: flex;
  width: 100%;
  height: 341px;
  flex-direction: column;
  gap: 30px;
  justify-content: start;
  align-items: start;
  text-align: left;
  /* 필요한 추가 스타일링 */
}

.text-area-fields {
  display: flex; /* Flexbox 레이아웃 적용 */
  width: 100%; /* 상위 div의 너비를 가득 채움 */
  gap: 30px; /* 자식 요소 사이의 간격 */
  margin-top: 30px;
}

.fields-textarea {
  position: relative; /* 부모를 상대 위치로 설정 */
  display: flex; /* Flexbox 레이아웃 적용 */
  flex-direction: column; /* 세로 방향 배치 */
  flex: 400; /* 비율에 따른 유연한 너비 설정 */
  gap: 20px; /* textarea 간의 간격 */
}

.textarea-container {
  position: relative; /* 부모를 상대 위치로 설정 */
}

.textarea-container label {
  position: absolute; /* 절대 위치 */
  top: -12px; /* textarea의 상단 테두리 바깥에 위치 */
  left: 20px; /* 좌측 여백 조정 */
  background-color: white; /* 배경색 */
  padding: 0 10px; /* 레이블 패딩 */
  color: #5F0080;
  font-weight: 700;
  z-index: 11
}

.textarea-container textarea {
  position: relative;
  border-radius: 10px;
  border: 1px solid #CDD5DC;
  padding: 15px 24px; /* 세로 15px, 가로 24px 패딩 */
  box-sizing: border-box;
  font-size: 16px; /* 텍스트 크기 */
  resize: none; /* 사용자가 크기 변경 불가능 */
  width: 100%; /* 너비를 부모 컨테이너에 맞춤 */
  overflow: hidden;
}

.idea-button{
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
}

.fields-textarea textarea::placeholder {
  color: grey; /* placeholder 색상 */
}

.fields-suggestions {
  position: relative;
  flex: 650;
  border: 1px solid #CDD5DC;
  border-radius: 10px;
  background-color: #F7F9FB;
  box-sizing: border-box;
  padding: 30px;
}

.suggestions-title {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 8px;
}

.suggestions-contents {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.guide-text{
  display: flex;
  align-items: center;
  gap: 8px;
  color: #C6C7C9;
  font-weight: 600;
  font-size: 18px;
  transform: translateY(-15px);
}

.fields-original-image {
  position: relative; /* 부모를 상대 위치로 설정 */
  display: flex; /* Flexbox 레이아웃 적용 */
  flex-direction: column; /* 세로 방향 배치 */
  align-items: flex-end;
  flex: 400; /* 비율에 따른 유연한 너비 설정 */
  gap: 20px; /* textarea 간의 간격 */
  border: 1px solid #CDD5DC;
  border-radius: 10px;
}
.fields-generated-image {
  position: relative; /* 부모를 상대 위치로 설정 */
  display: flex; /* Flexbox 레이아웃 적용 */
  align-items: flex-end;
  flex-direction: column; /* 세로 방향 배치 */
  flex: 600; /* 비율에 따른 유연한 너비 설정 */
  gap: 20px; /* textarea 간의 간격 */
  border: 1px solid #CDD5DC;
  border-radius: 10px;
}
.fields-top-text {
  position: absolute; /* 절대 위치 */
  top: -12px; /* textarea의 상단 테두리 바깥에 위치 */
  left: 20px; /* 좌측 여백 조정 */
  background-color: white; /* 배경색 */
  padding: 0 10px; /* 레이블 패딩 */
  color: #5F0080;
  font-weight: 700;
  z-index: 11
}
.fields-original-image img, .fields-generated-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  background-color: #F7F9FB; /* 빈 사각형 배경색 */
  height: 150px; /* 고정된 높이 설정 */
  border: 1px solid #CDD5DC; /* 이미지 로드 전 테두리 */
}

.fields-original-image, .fields-generated-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
}


.fields-top-text {
  font-weight: bold;
  color: #5F0080;
}


.fields-original-image button,
.fields-generated-image button{
  width: 120px;
  height: 34px;
  border: 1.5px solid #5F0080;
  color: #5F0080;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  border-radius: 8px;
}

</style>