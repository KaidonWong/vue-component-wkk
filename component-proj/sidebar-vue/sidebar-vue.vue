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
			:class="currentSectionClasses[index]"
			@click="onClickMenu(item.to)"
		>
			<span class="iconfont" :class="item.icon"></span>
			<span class="label">{{item.label}}</span>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {};
	},
	props: {
		user: Object,
		menus: Array,
		contract: Boolean
	},
	computed: {
        currentSectionClasses: function() {
            return this.$store.getters["globalstate/getCurrentSection"];
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