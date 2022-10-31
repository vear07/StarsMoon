<template>
	<div class="navBar">
		<div class="logoPanel">
			<img src="@/assets/logo.png" width="60" height="60" />
			<h1>Exercise</h1>
		</div>
		<div>
			<template>
				<div>登录</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'navBar'
}
</script>

<style lang="scss" scoped>
.navBar {
	width: 100%;
  height: 80px;
	position: fixed;
	top: 0;
	padding: 10px 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logoPanel {
	display: flex;
	align-items: center;
}
</style>
