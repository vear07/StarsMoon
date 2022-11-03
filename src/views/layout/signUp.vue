<template>
	<my-dialog
		:showDialog="showDialog"
		title="注册"
		width="520px"
		@confirmClick="confirmForm"
		@cancelClick="close"
	>
		<template slot="content">
			<el-form
				ref="postForm"
				:model="postForm"
				label-position="right"
				label-width="120px"
			>
				<el-form-item>
					<div slot="label">
						<span class="c-fc-red">*</span>
						手机号：
					</div>
					<my-input
						v-model="postForm.mobile"
					></my-input>
				</el-form-item>
				<el-form-item>
					<div slot="label">
						<span class="c-fc-red">*</span>
						用户名：
					</div>
					<my-input
						v-model="postForm.userName"
					></my-input>
				</el-form-item>
				<el-form-item>
					<div slot="label">
						<span class="c-fc-red">*</span>
						密码：
					</div>
					<my-input
						v-model="postForm.password"
						type="password"
					></my-input>
				</el-form-item>
				<el-form-item>
					<div slot="label">
						<span class="c-fc-red">*</span>
						确认密码：
					</div>
					<my-input
						v-model="postForm.confirmPassword"
						type="password"
					></my-input>
				</el-form-item>
				<div class="flex justify-start align-center mt-20">
					<el-checkbox v-model="postForm.isRead"></el-checkbox>
					<div class="ml-10">
						我已阅读<span class="sm-fc-blue cursor-pointer" @click="readAgreement">《星月超级注册保密互不侵犯协议》</span>
					</div>
				</div>
			</el-form>
		</template>
	</my-dialog>
</template>

<script>
	import myDialog from '@/components/myDialog/index.vue'
	
	export default {
		name: 'signUp',
		
		components: {
			myDialog
		},
		
		props: {
			showDialog: {
				type: Boolean,
				default: false
			}
		},
		
		data() {
			return {
				postForm: {
					mobile: '',
					userName: '',
					password: '',
					confirmPassword: '',
					code: '',
					isRead: false
				}
			}
		},
		
		methods: {
			close() {
				this.$emit('cancelClick')
			},
			
			// 阅读协议
			readAgreement() {
				this.$messageDialog.openDialog('confirm', {
					title: '保密协议',
					content: `
						<p>我是第一句我是第一句我是第一句我是第一句我是第一句我是第一句我是第一句我是第一句</p>
						<p>我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句我是第二句</p>
						`,
					confirmText: '同意',
					cancelText: '不同意'
				}).then(() => {
					this.postForm.isRead = true
				}).catch(() => {
					this.postForm.isRead = false
				})
			},
			
			checkData() {
				if (!this.$hasString(this.postForm.mobile)) {
					return '请输入手机号'
				}
			},
			
			confirmForm() {
				const tip = this.checkData()
				if (tip) {
					this.$message.warning(tip)
					return
				}
			}
		}
	}
</script>

<style>
</style>
