<template>
	<transition name="messageDialog">
		<div v-if="showDialog" class="messageDialog-bg">
			<dialog :open="showDialog" class="messageDialog">
				<div class="messageDialog-content">
					<svg t="1574164208713" class="messageDialog-icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="5819" width="63" height="63">
						<path
							d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 877.714286c-40.228571 0-73.142857-32.914286-73.142857-73.142857s32.914286-73.142857 73.142857-73.142857 73.142857 32.914286 73.142857 73.142857S552.228571 877.714286 512 877.714286zM585.142857 512c0 40.228571-32.914286 73.142857-73.142857 73.142857s-73.142857-32.914286-73.142857-73.142857L438.857143 219.428571c0-40.228571 32.914286-73.142857 73.142857-73.142857s73.142857 32.914286 73.142857 73.142857L585.142857 512z"
							p-id="5820" fill="white"></path>
					</svg>
					<h2 class="messageDialog-title">{{ params.title || '提示' }}</h2>
					<div class="messageDialog-description" v-html="params.content || '提示内容'"></div>
					<div class="messageDialog-options">
						<button class="btn btn-round btn-fill btn-fill-left option confirm"
							:data-text="params.confirmText || '确定'" @click="confirm"></button>
						<button class="btn btn-round btn-fill btn-fill-right option cancel"
							:data-text="params.cancelText || '取消'" @click="cancel"></button>
					</div>
				</div>
			</dialog>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'messageDialog',

		data() {
			return {
				showDialog: false,

				params: {
					title: '',
					content: '',
					confirmText: '',
					cancelText: ''
				},

				promise: null,
				resolve: null,
				reject: null
			}
		},

		methods: {
			openDialog(type, params) {
				this.type = type
				this.params = params
				this.showDialog = true

				this.promise = new Promise((resolve, reject) => {
					this.resolve = resolve
					this.reject = reject
				})

				return this.promise
			},

			confirm() {
				this.showDialog = false
				this.resolve('confirm')
				this.remove()
			},

			cancel() {
				this.showDialog = false
				this.reject('cancel')
				this.remove()
			},

			remove() {
				setTimeout(() => {
					if (document.body.contains(this.$el)) {
						document.body.removeChild(this.$el)
					}
				}, 300)
			}
		}
	}
</script>

<style lang="scss" scoped>
	// messageDialog消息提示框样式
	// 离开动画
	.messageDialog-leave-active {
		animation: moveActive 0.5s reverse;
	}

	@keyframes moveActive {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
