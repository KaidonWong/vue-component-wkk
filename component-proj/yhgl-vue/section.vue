<template>
	<div class="panel">
		<div class="title">用户管理</div>
		<div class="buttons">
			<button-blue-vue label="添加用户" icon='icon-add' @clickevent="onAdd"></button-blue-vue>
		</div>
	</div>
</template>
<script>
import buttonBlueVue from "../../component/button-vue/button-blue-vue.vue";
export default {
	components: {
		"button-blue-vue": buttonBlueVue
    },
    methods: {
        onAdd: function () {

        }
    }
};
</script>
<style lang="scss" scoped>
.panel {
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	padding: 1em 2em;
	background-color: #ffffff;
	.title {
		font-weight: bold;
	}
}
</style>