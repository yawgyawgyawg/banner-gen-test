<template>
  <!-- this service is best in 1366x768 resolution -->
  <div id="app">
    <div class="nav-bar">
      <div class="nav-bar-logo">
        <img src="@/assets/logo.png" alt="로고" width="200px" height="auto"/>
      </div>
      <router-link class="nav-item" to="/mainbanner" active-class="active-link">메인 홈 배너</router-link>
      <router-link class="nav-item" to="/download" active-class="active-link">특가혜택 탭 띠배너</router-link>
      <router-link class="nav-item" to="/download" active-class="active-link">상세페이지</router-link>
      <router-link class="nav-item" to="/download" active-class="active-link">아웃풋 갤러리</router-link>
      <router-link class="nav-item" to="/download" active-class="active-link">설정</router-link>
    </div>
    <div class="top-bar">

    </div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
  font-family: 'Pretendard-Regular', 'SUIT';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff'),
  url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

#app {
  font-family: 'SUIT','Pretendard-Regular', Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}

h2{
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

h3{
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

h4{
  font-size: 20px;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
p{
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

.nav-bar {
  width: 300px; /* 네비게이션 바의 너비 */
  position: fixed;
  height: 100vh; /* 전체 뷰포트 높이 */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-left: 50px;
  padding-top: 52px;
  box-sizing: border-box; /* 여기에 추가 */
  gap: 50px;
  z-index: 1000;

  background-color: #5F0080; /* 배경색 */
  color: white;
  /* 추가 스타일링 */
}

.nav-bar-logo{
  margin-bottom: 54px;
}

.nav-item {
  display: block; /* 블록 레벨 요소로 만들어 줄 공간 확보 */

  color: #BD76FF; /* 텍스트 색상 */
  text-decoration: none; /* 밑줄 제거 */
  transition: background-color 0.3s; /* 배경색 변경 시 애니메이션 */
  font-size: 20px;
  font-weight: bold;
}

.top-bar{
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 300px;
  box-sizing: border-box;
  border-bottom: 1px solid #DBE1E6;
  background-color: #F7F9FB;
  z-index: 999;
}

.nav-item.active-link {
  color: white; /* 활성화된 링크 색상 */
}

.main-content {
  margin-top: 120px;
  margin-left: 300px; /* 네비게이션 바의 너비에 맞춰 조정 */
  padding: 60px;
  width: calc(100vw - 300px); /* 뷰포트 너비에서 네비게이션 바의 너비를 뺀 나머지 */
  min-width: 1200px;
  box-sizing: border-box;
  /* 추가 스타일링 */
}

body {
  font-family: 'Pretendard-Regular', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #F7F9FB;
  box-sizing: border-box;
}
</style>
