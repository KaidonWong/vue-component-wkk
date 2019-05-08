<template>
	<div class="base-structure clearfix">
		<topbar-vue @contractevent="onContract"></topbar-vue>
		<sidebar-vue :user="user" :menus="menus" :contract="contract"></sidebar-vue>
		<router-view class="section" name="section"></router-view>
	</div>
</template>
<script>
import topbarVue from "../topbar-vue/topbar2-vue.vue";
import sidebarVue from "../sidebar-vue/sidebar-vue.vue";
export default {
	components: {
		"topbar-vue": topbarVue,
		"sidebar-vue": sidebarVue
	},
	data: function() {
		return {
			contract: false,
			user: {
				id: 15245123,
				name: "张红四",
				job: "华北片区总经理"
			},
			menus: [
				{
					label: "数据统计",
					to: "sjtj",
					icon: "icon-et-sales-statistics"
				},
				{
					label: "项目管理",
					to: "xmgl",
					icon: "icon-xiangmu"
				},
				{
					label: "用户管理",
					to: "yhgl",
					icon: "icon-UserSettings1"
				},
				{
					label: "权限分配",
					to: "qxfp",
					icon: "icon-key"
				},
				{
					label: "授权历史",
					to: "sqls",
					icon: "icon-devicelogs"
				},
				{
					label: "操作日志",
					to: "czrz",
					icon: "icon-systemlogs"
				}
			]
		};
	},
	methods: {
		onContract: function() {
			this.contract = !this.contract;
		}
	}
};
</script>
<style lang="scss" scoped>
.base-structure {
	width: 100%;
	height: 100%;
}
.section {
	float: left;
	width: calc(100% - 14em);
	height: 100%;
}
</style>
