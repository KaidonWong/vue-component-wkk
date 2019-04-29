<template>
	<div class="level1">
		<a :href="url">
			<span class="iconfont" :class="icon"></span>
			{{name}}
			<span v-if='hasSubmenu' class="iconfont icon-down"></span>
			<div class="line"></div>
		</a>
		<div v-if='hasSubmenu' class="level2">
			<div v-for="(item,index) of submenu" :key="index">
				<a :href="item.url">{{item.name}}</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		name: String,
		url: String,
		icon: String,
		submenu: Array
	},
	computed: {
		hasSubmenu: function() {
			if (typeof this.submenu == "undefined") {
                return false;
            }
            return true;
		}
	}
};
</script>
<style lang="scss" src='./li-vue.scss' scoped></style>