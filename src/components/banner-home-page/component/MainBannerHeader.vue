<template>
  <div class="header-section">
    <div class="header-title">
      <h2>메인 홈 배너 편집하기</h2>
      <h4 style="color:#97A4AE">메인 홈 배너를 편집하고 컨펌할 수 있습니다.</h4>
    </div>
    <div class="header-info">
      <div class="grid-item">ID 158</div>
      <div class="grid-item">생성일자: 2024-02-04  08:01</div>
      <div class="grid-item">기획: ED서희주</div>
      <div class="grid-item">상태: 배포대기</div>
      <div class="grid-item">배포예정일자: 2024-02-16  11:00</div>
      <div class="grid-item">담당: DE김옥신</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBannerHeader"
}
</script>

<style scoped>



.header-section{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-title{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 10px;
}
.header-info{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 다른 너비의 열 */
  grid-template-rows: repeat(2, auto); /* 2행 */
  gap: 6px; /* 그리드 항목 사이의 간격 */
  padding: 16px;

  border: 1px solid #CDD5DC;
  border-radius: 15px;
}
.grid-item{
  text-align: left;
  color: #67757E;
  font-weight: 500;
}
</style>