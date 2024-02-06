<template>
  <div class="content">
    <MainBannerHeader/>

    <div class="banner-edit-area">
      <div class="banner-edit-tabs">
        <button @click="activeTab = 'text'" :class="{active: activeTab === 'text'}">텍스트</button>
        <button @click="activeTab = 'image'" :class="{active: activeTab === 'image'}">이미지</button>
      </div>
      <div class="banner-edit-content">
        <div v-if="activeTab === 'text'">
          <div class="text-area-title">
            <h3>텍스트 수정하기</h3>
          </div>
          <div class="text-area-fields">
            <div class="fields-textarea"></div>
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
  max-width: 1600px;
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
  margin-top: 50px;
  border: 1px solid #CDD5DC;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
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


</style>