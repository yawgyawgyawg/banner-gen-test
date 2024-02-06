<template>
  <div class="content">
    <MainBannerHeader/>
    <BannerTextEditArea/>
  </div>
</template>

<script>
import MainBannerHeader from "@/components/banner-home-page/component/MainBannerHeader";
import BannerTextEditArea from "@/components/banner-home-page/component/BannerTextEditArea";
export default {
  name: "MainBannerPage",
  components: {BannerTextEditArea, MainBannerHeader},
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