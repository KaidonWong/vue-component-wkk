<template>
	<ul class="collapse">
		<li-vue
			v-for="(item,index) of content"
			:key="index"
			:name="item.name"
			:url="item.url"
			:icon="item.icon"
			:submenu="item.submenu"
		></li-vue>
	</ul>
</template>
<script>
import liVue from "./li-vue.vue";
export default {
	components: {
		"li-vue": liVue
	},
	props: {
		content: Array
    },
    beforeMount: function(){

    }
};
</script>
<style lang="scss" src='./collapse.scss' scoped>
</style>