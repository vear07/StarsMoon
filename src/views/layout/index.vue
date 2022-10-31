<template>
	<div class="layout">
		<nav-bar></nav-bar>

		<router-view class="theRouter" />
	</div>
</template>

<script>
import navBar from './navBar.vue'

export default {
	name: 'layout',
	components: {
		navBar
	}
}
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
}
.theRouter {
	margin-top: 80px;
}
</style>
