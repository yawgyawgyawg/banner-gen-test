<template>
  <div class="content">
    <MainBannerHeader/>
    <BannerEditArea :textContents="textContents"
                    @updateTextContents="handleTextUpdate"
                    @updateData="handleGenImage"
                    :banner-id="bannerId"/>
    <BannerPreviewArea :textContents="textContents" :banner-id="bannerId" :new-file="newFile"/>
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
      newFile: null,
    }
  },
  mounted() {
    this.bannerId = parseInt(this.$route.query.idx);
    this.setTextContentsByBannerId(); // bannerId에 따라 textContents 설정
  },
  methods: {
    handleTextUpdate(payload) {
      this.textContents[payload.key] = payload.value;
    },
    handleGenImage(file) {
      this.newFile = file;
    },
    setTextContentsByBannerId() {
      switch(this.bannerId) {
        case 1:
          this.textContents = {
            title: "멍냥이를 위한 설날 선물<br><strong>2024 설 펫 페어</strong>",
            subTitle: "인기 간식부터 S/S 패션까지<br>최대 65% 할인 + 10% 쿠폰",
            disclaimer: "02.08 - 02.21",
          };
          break;
        case 2:
          this.textContents = {
            title: "인기 간편식 특가 찬스<br><strong>CJ 브랜드위크</strong>",
            subTitle: "찌개 · 간식 최대 22% 할인<br>+ 4천원 쿠폰",
            disclaimer: "12.08 - 12.15",
          };
          break;
        case 3:
          this.textContents = {
            title: "구매할수록 커지는 적립금<br><strong>최대 7% 페이백 이벤트</strong>",
            subTitle: "목표 수량 달성 하면<br>구매 고객 전원 추가 적립",
            disclaimer: "02.15 - 02.22",
          };
          break;
        default:
          // 기본값 혹은 예외 처리
          this.textContents = {
            title: "특별 할인 이벤트",
            subTitle: "다양한 상품을 할인가에 만나보세요",
            disclaimer: "이벤트 기간 한정",
          };
      }
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