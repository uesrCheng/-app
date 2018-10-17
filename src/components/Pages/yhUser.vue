<template>
  <div class="hello">
  	<yhSearch></yhSearch>
  </div>
</template>

<script>
import yhSearch from "../Common/yhSearch";
export default {
  name: 'yhMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	yhSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
