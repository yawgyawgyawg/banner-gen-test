<template>
  <div class="content">
    <MainBannerHeader/>

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
              </div>
              <div class="textarea-container">
                <label for="text-middle">중간 텍스트</label>
                <textarea name="text-middle" id="text-middle" rows="3" placeholder="텍스트를 입력하세요"></textarea>
              </div>
              <div class="textarea-container">
                <label for="text-bottom">하단 텍스트</label>
                <textarea name="text-bottom" id="text-bottom" rows="1" placeholder="텍스트를 입력하세요"></textarea>
              </div>
            </div>
            <div class="fields-suggestions"></div>
          </div>

        </div>


        <div v-if="activeTab === 'image'">
          <!-- 이미지 관련 내용 -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MainBannerHeader from "@/components/banner-home-page/component/MainBannerHeader";
export default {
  name: "MainBannerPage",
  components: {MainBannerHeader},
  data() {
    return {
      activeTab: 'text'
    }
  },
}
</script>

<style scoped>
.content{
  margin-right: 30px;
  max-width: 1280px;
}

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
  flex-direction: column;
  gap: 30px;
  justify-content: center;
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
}

.textarea-container textarea {
  border-radius: 10px;
  border: 1px solid #CDD5DC;
  padding: 15px 24px; /* 세로 15px, 가로 24px 패딩 */
  box-sizing: border-box;
  font-size: 16px; /* 텍스트 크기 */
  resize: none; /* 사용자가 크기 변경 불가능 */
  width: 100%; /* 너비를 부모 컨테이너에 맞춤 */
  overflow: hidden;
}

.fields-textarea textarea::placeholder {
  color: grey; /* placeholder 색상 */
}

.fields-suggestions {
  flex: 730;
  border: 1px solid #CDD5DC;
  border-radius: 10px;
  background-color: #F7F9FB;
  padding: 20px;
  box-sizing: border-box;

}


</style>