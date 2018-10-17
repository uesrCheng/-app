<template>
  <ul class="Main-list">
     <li  v-for="infor in infor" :key="infor.id" >
            {{ infor }}
      </li>
  </ul>
</template>

<script>
export default {
  name: 'GFguojia',
  data () {
    return {
      
    }
  },
  props:['infor']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .Main-list{
    padding-top: 1.5rem;
   font-size: 0.5rem;
 }
 .Main-list li{
   padding:0.5rem 0.4rem;
   border-bottom: #B7B7B7 solid 1px;
 }
</style>
