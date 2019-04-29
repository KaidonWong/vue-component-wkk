<template>
	<div class="clearfix">
		<li-vue
			v-for="(item,index) of content"
			:key="index"
			:name="item.name"
			:url="item.url"
            :icon="item.icon"
			:submenu="item.submenu"
		></li-vue>
	</div>
</template>
<script>
import liVue from "./li-vue.vue";
export default {
	components: {
		"li-vue": liVue
	},
	props: {
		content: Array
	}
};
</script>
<style lang="scss" src='./horizonMenu.scss' scoped>
</style>