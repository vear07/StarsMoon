<template>
	<div>
		<div class="hot-recruit center">
			<h1><span>——</span> 热招职位 <span>——</span></h1>
			<div class="recruit-list" v-if="$hasArray(recruitList)">
				<div v-for="(recruit, index) in recruitList" class="recruit-item" :style="(index + 1) % 3 == 0 ? 'margin-right: 0;' : ''">
					<div class="recruit-title">
						<p>{{recruit.recruitName}}</p>
						<div class="recruit-salary">{{recruit.recruitMoney}}</div>
					</div>
					<div class="recruit-desc">
						<span>{{recruit.companyAddress}}</span> | <span>{{recruitEduMap[recruit.recruitEdu]}}</span> | <span>{{recruitExpMap[recruit.recruitExp]}}</span>
					</div>
					<div class="company">{{recruit.companyName}}<span>{{companyTypeMap[recruit.companyType]}}</span></div>
				</div>
			</div>
			<div class="recruit-list" style="text-align: center;" v-else>暂无职位。请耐心等待发布。</div>
		</div>
	</div>
</template>

<script>
	import { getHotRecruit } from '@/api/index.js';

	export default {
		name: 'home',
		data() {
			return {
				recruitList: [],
				// 公司类型列表
				companyTypeOptions: [
					{
						value: 1,
						name: '互联网'
					},
					{
						value: 2,
						name: '电子商务'
					},
					{
						value: 3,
						name: '计算机软件'
					},
					{
						value: 4,
						name: '教育'
					},
					{
						value: 5,
						name: '金融'
					},
					{
						value: 6,
						name: '网络通讯设备'
					},
					{
						value: 7,
						name: '媒体'
					},
					{
						value: 8,
						name: '游戏'
					},
					{
						value: 9,
						name: '餐饮'
					},
					{
						value: 10,
						name: '其他'
					}
				],
				// 公司类型名
				companyTypeMap: {
					1: '互联网',
					2: '电子商务',
					3: '计算机软件',
					4: '教育',
					5: '金融',
					6: '网络通讯设备',
					7: '媒体',
					8: '游戏',
					9: '餐饮',
					10: '其他'
				},
				// 学历列表
				recruitEduOptions: [
					{
						value: 1,
						name: '专科及以上'
					},
					{
						value: 2,
						name: '本科及以上'
					},
					{
						value: 3,
						name: '硕士及以上'
					},
					{
						value: 4,
						name: '博士及以上'
					},
					{
						value: 5,
						name: '其他'
					}
				],
				// 学历名
				recruitEduMap: {
					1: '专科及以上',
					2: '本科及以上',
					3: '硕士及以上',
					4: '博士及以上',
					5: '其他'
				},
				// 工作经验列表
				recruitExpOptions: [
					{
						value: 1,
						name: '在校/应届'
					},
					{
						value: 2,
						name: '一年及以内'
					},
					{
						value: 3,
						name: '三年及以内'
					},
					{
						value: 4,
						name: '五年及以上'
					}
				],
				// 工作经验名
				recruitExpMap: {
					1: '在校/应届',
					2: '一年及以内',
					3: '三年及以内',
					4: '五年及以上'
				},
				// 职位类型列表
				recruitTypeOptions: [
					{
						value: 1,
						name: '技术'
					},
					{
						value: 2,
						name: '产品'
					},
					{
						value: 3,
						name: '设计'
					},
					{
						value: 4,
						name: '运营'
					},
					{
						value: 5,
						name: '市场'
					},
					{
						value: 6,
						name: '人事/财务/行政'
					},
					{
						value: 7,
						name: '高级管理'
					}
				],
				// 职位类型名
				recruitTypeMap: {
					1: '技术',
					2: '产品',
					3: '设计',
					4: '运营',
					5: '市场',
					6: '人事/财务/行政',
					7: '高级管理'
				}
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				getHotRecruit().then(res => {
					console.log(res)
					this.recruitList = res
				})
			}
		}
	}
</script>

<style>
</style>
