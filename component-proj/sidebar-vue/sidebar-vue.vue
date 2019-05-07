<template>
	<div class="base-sidebar" :class="{contract:contract}">
		<div class="user-panel">
			<div class="avatar">
				<div class="pic-container">
					<img src="../../asset/topbar/avatar.jpg" alt>
				</div>
			</div>
			<div class="remark">
				<div class="name">{{user.name}}</div>
				<div class="job">{{user.job}}</div>
			</div>
		</div>
		<div
			class="menu"
			v-for="(item,index) of menus"
			:key="index"
			:class="menuStateClasses[index]"
			@click="onClickMenu(index,item.to)"
		>
			<span class="iconfont" :class="item.icon"></span>
			<span class="label">{{item.label}}</span>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			menuStateClasses: []
		};
	},
	props: {
		user: Object,
		menus: Array,
		contract: Boolean
	},
	computed: {},
	mounted: function() {
		let arr = new Array();
		for (let i = 0, len = this.menus.length; i < len; i++) {
			if (i == 0) {
				arr.push({ active: true });
			} else {
				arr.push({ active: false });
			}
		}
		this.menuStateClasses = arr;
	},
	methods: {
		onClickMenu: function(index, to) {
			for (let i = 0, len = this.menuStateClasses.length; i < len; i++) {
				if (i == index) {
					this.menuStateClasses[i].active = true;
				} else {
					this.menuStateClasses[i].active = false;
				}
			}
			this.$router.push({ path: `/${to}` });
		}
	}
};
</script>
<style lang="scss" src="./sidebar.scss" scoped>
</style>