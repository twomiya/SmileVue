<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 669985 */
  src: url('//at.alicdn.com/t/font_669985_s3yq4749hsd78pvi.eot');
  src: url('//at.alicdn.com/t/font_669985_s3yq4749hsd78pvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_669985_s3yq4749hsd78pvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_669985_s3yq4749hsd78pvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_669985_s3yq4749hsd78pvi.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
