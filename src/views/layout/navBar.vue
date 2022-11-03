<template>
	<div class="navBar py-10 shadow-md">
		<div class="w-1080 flex flex-row justify-between items-center m-auto">
			<div class="flex flex-row items-center">
				<img src="@/assets/logo.png" width="60" height="60" />
				<h1 class="text-16 font-bold">StarsMoon</h1>
			</div>
			<template>
				<div class="flex flex-row items-center">
					<div class="navBar_Button gradient_border" @click="openTip">登录</div>
					<div class="navBar_Button gradient_border ml-10" @click="signUpOpen">注册</div>
				</div>
			</template>
		</div>
		
		<sign-up v-if="showSignUp" :showDialog="showSignUp" @cancelClick="signUpClose"></sign-up>
	</div>
</template>

<script>
import signUp from '@/views/layout/signUp.vue'
export default {
	name: 'navBar',
	
	components: {
		signUp
	},
	
	data() {
		return {
			showSignUp: false
		}
	},
	
	methods: {
		openTip() {
			this.showSignUp = true
			// this.$messageDialog.openDialog('confirm', {
			// 	title: '提示',
			// 	content: '是否登录？',
			// 	confirmText: '确认',
			// 	cancelText: '取消'
			// }).then(() => {
			// 	console.log('确认')
			// }).catch(() => {
			// 	console.log('取消,shi')
			// })
		},
		getTip() {
			setTimeout(() => {
				return 'tim'
				console.log('tim')
			}, 3000)
		},
		
		signUpOpen() {
			this.showSignUp = true
		},
		
		signUpClose() {
			this.showSignUp = false
		}
	}
}
</script>

<style lang="scss" scoped>
.navBar {
	width: 100%;
  height: 80px;
	background: #fff;
	position: fixed;
	top: 0;
}

.navBar_Button {
	color: #70c6da;
	font-size: 14px;
	font-weight: bold;
	line-height: 20px;
	background: #fff;
	border-radius: 100px;
	padding: 6px 30px;
	transition: 0.5s;
	cursor: pointer;
	
	&:hover {
		color: #fff;
		background: transparent;
	}
}

.gradient_border {
  --border-width: 3px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 100px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
			#4278c3,
			#5ea5ec,
			#70c6da,
			#5ff2f0,
			#5ff281,
			#f9ef63,
			#f4dd45,
			#f2cb5f,
			#abf25f
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 200px;
    animation: moveGradient 4s alternate infinite;
  }
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
