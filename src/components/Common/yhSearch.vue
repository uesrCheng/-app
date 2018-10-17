<template>
	<div class="yh-Search">
		<div class="Search">
			<img src="../../assets/search.png" />
			<input type="text" placeholder="搜索，请输入关键字" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'yhSearch',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yh-Search{
	position: sticky;
	top: 0;
	width: 12.8rem;
	box-sizing: border-box;
}
	.Search {
		position: relative;
		top: 0;
		background: #ED4040;
		padding: 0.3rem 0.4rem;
		background: #ED4040;
		font-size:0.5rem
	}
	.Search img{
		width: 0.6rem;
		position: absolute;
		top:0.6rem;
		left: 0.8rem;
	}
	.Search input {
		width: 12rem;
		padding: 0.4rem 1.3rem;
		margin: 0 auto;
		border-radius: 0.3rem;
		box-shadow: none;
		font-size: 0.4rem;
		border: none;
	}
	.Search input :focus{
		border: none;
		outline: none !important;
	}
</style>