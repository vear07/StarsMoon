<template>
	<transition name="myDialog">
		<div v-if="showDialog" class="myDialog-bg">
			<dialog :open="showDialog" class="myDialog" :style="{'width': width}">
				<div class="myDialog-title-bg flex flex-row justify-between px-15 py-15">
					<span>{{ title }}</span>
					<span class="iconfont cursor-pointer" @click="cancelClick">&#xe613;</span>
				</div>
				<div class="px-15 py-15">
					<slot name="content"></slot>
				</div>
				<div v-if="showButton" class="myDialog-btn-bg">
					<div v-if="showConfirm" class="myDialog-btn" @click="confirmClick">{{ confirmBtn }}</div>
					<div v-if="showCancel" class="myDialog-btn" @click="cancelClick">{{ cancelBtn }}</div>
				</div>
			</dialog>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'myDialog',
		
		props: {
			showDialog: {
				type: Boolean,
				default: false
			},
			
			width: {
				type: String,
				default: '400px'
			},
			
			title: {
				type: String,
				default: '标题'
			},
			
			showButton: {
				type: Boolean,
				default: true
			},
			showConfirm: {
				type: Boolean,
				default: true
			},
			showCancel: {
				type: Boolean,
				default: true
			},
			
			confirmBtn: {
				type: String,
				default: '确定'
			},
			cancelBtn: {
				type: String,
				default: '关闭'
			}
		},
		
		methods: {
			confirmClick() {
				this.$emit('confirmClick')
			},
			cancelClick() {
				this.$emit('cancelClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	// myDialog弹出框样式
	.myDialog-enter-active {
		animation: openDialog 0.5s ease;
	}
	@keyframes openDialog {
	  from {
	    transform: scale(0.8);
	  }
	
	  50% {
	    transform: scale(1.1);
	    opacity: 1;
	  }
	
	  to {
	    transform: scale(1);
	    opacity: 1;
	  }
	}
	// 离开动画
	.myDialog-leave-active {
		animation: leaveDialog 0.5s reverse;
	}

	@keyframes leaveDialog {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
	
	.myDialog-bg {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(2px);
		overflow: hidden;
	}
	.myDialog {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 666;
		color: #333;
		border: transparent;
		border-radius: 12px;
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
		  0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
		  0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
		  0 100px 80px rgba(0, 0, 0, 0.07);
		animation: openDialog 0.5s ease forwards;
		overflow: hidden;
	}
	.myDialog-title-bg {
		color: #fff;
		line-height: 30px;
		background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
	}
	.myDialog-btn-bg {
		color: #fff;
		background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}
	.myDialog-btn {
		color: #70c6da;
		line-height: 20px;
		padding: 5px 20px;
		background: #fff;
		border-radius: 100px;
		cursor: pointer;
	}
	.myDialog-btn + .myDialog-btn {
		margin-left: 15px;
	}
</style>
