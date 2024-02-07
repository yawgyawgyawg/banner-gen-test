<template>
  <div class="content">
    <MainBannerHeader/>
    <BannerEditArea :textContents="textContents" @updateTextContents="handleTextUpdate" :banner-id="bannerId"/>
    <BannerPreviewArea :textContents="textContents" :banner-id="bannerId"/>
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
    return {
      bannerId: 1,
      textContents: {
        title: "인기 간편식 특가 찬스<br><strong>CJ 브랜드위크</strong>",
        subTitle: "찌개 · 간식 최대 22% 할인<br>+ 4천원 쿠폰",
        disclaimer: "12.08 - 12.15",
      },
    }
  },
  mounted() {
    this.bannerId = parseInt(this.$route.query.idx);
  },
  methods: {
    handleTextUpdate(payload) {
      this.textContents[payload.key] = payload.value;
    },
  }
}
</script>

<style scoped>
.content{
  margin-right: 30px;
  max-width: 1280px;
}


</style>