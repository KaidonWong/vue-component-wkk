<template>
	<topbar-vue :user="user" :menus="menus"></topbar-vue>
</template>
<script>
import topbarVue from "../../component-proj/topbar-vue/topbar-vue.vue";
export default {
	data: function() {
		return {
			user: {
				name: "王开恺",
				id: "11111"
			},
			menus: [
				{
					label: "软件授权管理平台",
					to: "#"
				},
				{
					label: "申请授权",
					to: "#"
				},
				{
					label: "数据统计",
					to: "#"
				},
				{
					label: "项目管理",
					to: "#"
				},
				{
					label: "用户管理",
					to: "#"
				},
				{
					label: "角色分配",
					to: "#"
				}
			]
		};
	},
	components: {
		"topbar-vue": topbarVue
	},
	mounted: function() {
		var _this = this;
		_this.$store.dispatch("globalstate/setWindowWidth", {
			width: document.documentElement.clientWidth
		});
		window.onresize = function() {
			// 定义窗口大小变更通知事件
			_this.$store.dispatch("globalstate/setWindowWidth", {
				width: document.documentElement.clientWidth
			});
		};
	}
};
</script>
<style lang="scss" scoped>
</style>
