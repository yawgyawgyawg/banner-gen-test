<template>
  <div class="banner-preview-area">
    <div class="banner-preview-tabs">
      <button @click="activeTab = 'mobile'" :class="{active: activeTab === 'mobile'}">MO</button>
      <button @click="activeTab = 'pc'" :class="{active: activeTab === 'pc'}">PC</button>
    </div>
    <div class="banner-preview-content">
      <div v-if="activeTab === 'mobile'">
        <!-- 모바일 콘텐츠 -->
      </div>
      <div v-if="activeTab === 'pc'">
        <!-- PC 콘텐츠 -->
      </div>
    </div>
  </div>
  </template>

<script>
export default {
  name: "BannerPreviewArea",
  data() {
    return {
      activeTab: 'mobile'
    }
  },
}
</script>

<style scoped>

.banner-preview-area{
  position: relative;
  width: calc(100% - 40px);
  transform: translateX(40px);
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
  flex-direction: column;
  gap: 30px;
  justify-content: start;
  align-items: start;
  text-align: left;
  /* 필요한 추가 스타일링 */
}
</style>