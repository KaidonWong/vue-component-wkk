<template>
	<div class="base-sidebar" :class="{contract:contract}">
		<div class="user-panel">
			<div class="avatar">
				<div class="pic-container">
					<img src="../../asset/topbar/avatar.jpg" alt>
				</div>
			</div>
			<div class="remark">
				<div class="name">{{currentUser.userRealName}}</div>
				<div class="job">{{currentUser.userPost}}</div>
			</div>
		</div>
		<div
			class="menu"
			v-for="(item,index) of menus"
			:key="index"
			:class="currentSectionClasses[index]"
			@click="onClickMenu(item.to)"
		>
			<span class="iconfont" :class="item.icon"></span>
			<span class="label">{{item.label}}</span>
		</div>
		<div style="display: none">{{computed_currentUser.userRealName}}</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			currentUser: {}
		};
	},
	props: {
		contract: Boolean
	},
	computed: {
		currentSectionClasses: function() {
			return this.$store.getters["globalstate/getCurrentSection"];
		},
		computed_currentUser: function() {
			let tmp = this.$store.getters["globalstate/getCurrentUser"];
			if (tmp == null) {
				tmp = {
					userRealName: "default",
					userPost: "default"
				};
			}
			this.currentUser = tmp;
			return tmp;
		},
		menus: function() {
			let normalMenu = [
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
					label: "授权历史",
					to: "sqls",
					icon: "icon-devicelogs"
				}
			];
			let expandMenu = [
				{
					label: "操作日志",
					to: "czrz",
					icon: "icon-systemlogs"
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
				}
			];
			if (this.currentUser.roleId == 1) {
				return [...normalMenu, ...expandMenu];
			} else {
				return normalMenu;
			}
		}
	},
	methods: {
		onClickMenu: function(to) {
			this.$router.push({ path: `/${to}` });
		}
	}
};
</script>
<style lang="scss" src="./sidebar.scss" scoped>
</style>