<template>
	<div class="layout">
		<nav-bar></nav-bar>

		<router-view />
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
	padding-top: 80px;
}
</style>
