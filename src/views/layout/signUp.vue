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
				v-loading="isLoading"
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
	import { signUp } from '@/api/index.js';
	
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
				},
				isLoading: false
			}
		},
		
		methods: {
			close() {
				this.$emit('cancelClick', false)
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
				if (!this.$isMobile(this.postForm.mobile)) {
					return '手机号格式错误'
				}
				if (!this.$hasString(this.postForm.userName)) {
					return '请输入用户名'
				}
				if (!this.$hasString(this.postForm.password)) {
					return '请输入密码'
				}
				if (!this.$hasString(this.postForm.confirmPassword)) {
					return '请再次输入确认密码'
				}
				if (this.postForm.password != this.postForm.confirmPassword) {
					return '两次密码不一致'
				}
				if (!this.postForm.isRead) {
					return '请勾选协议'
				}
			},
			
			confirmForm() {
				const tip = this.checkData()
				if (tip) {
					this.$message.warning(tip)
					return
				}
				this.isLoading = true
				signUp(this.postForm).then(res => {
					console.log(res, '返回啦')
					this.isLoading = false
					if (res.status == 0) {
						this.$message.warning('当前注册的手机号已存在，请前往登录或重新填写')
						return
					}
					if (res.status == 1) {
						this.$message.success('注册成功')
						this.$emit('cancelClick', true)
					}
				}).catch(err => {
					this.$message.warning('注册失败')
					console.log(err, '错误啦')
					this.isLoading = false
				})
			}
		}
	}
</script>

<style>
</style>
