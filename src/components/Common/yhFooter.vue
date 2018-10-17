<template>
  <ul class="yhFooter">
    <li><router-link to="/yhmain">首页</router-link></li>
    <li><router-link to="/scroll">public</router-link></li>
    <li><router-link to="/user">我的</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'yhFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yhFooter{
  position: fixed;
  bottom: 0;
  width: 12.8rem;
  height: 2rem;
  color: #000;
  background: #ffffff;
  font-size: 0.1rem
}
.yhFooter li{
  float: left;
  text-align: center;
  line-height: 2rem;
  width: calc( 100% / 3 )
}
</style>
