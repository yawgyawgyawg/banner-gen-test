<template>
  <div class="content">
    <MainBannerHeader/>
    <BannerEditArea/>
    <BannerPreviewArea/>
  </div>
</template>

<script>
import MainBannerHeader from "@/components/banner-home-page/component/MainBannerHeader";
import BannerEditArea from "@/components/banner-home-page/component/BannerEditArea";
import BannerPreviewArea from "@/components/banner-home-page/component/BannerPreviewArea";
export default {
  name: "MainBannerPage",
  components: {BannerPreviewArea, BannerEditArea, MainBannerHeader},
  data() {

  },
}
</script>

<style scoped>
.content{
  margin-right: 30px;
  max-width: 1280px;
}


</style>