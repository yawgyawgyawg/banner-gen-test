<template>
  <div class="content">
    <MainBannerHeader/>
  </div>
</template>

<script>
import MainBannerHeader from "@/components/banner-home-page/component/MainBannerHeader";
export default {
  name: "MainBannerPage",
  components: {MainBannerHeader}
}
</script>

<style scoped>
.content{
  margin-right: 30px;
}

</style>