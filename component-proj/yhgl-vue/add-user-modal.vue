<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				添加用户
				<span class="iconfont icon-close"></span>
			</div>
			<div class="content">
				<div class="line">
					<span>姓名：</span>
					<input-vue placeholder="请输入内容" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>备注：</span>
					<input-vue placeholder="请输入内容" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>角色：</span>
					<select-vue :options="getSelectOptions" @inputevent="onInput"></select-vue>
				</div>
			</div>
			<div class="buttons">
				<button-vue label="确定" icon="icon-save" color="#610204" @clickevent="onAdd"></button-vue>
				<button-vue label="取消" icon="icon-withdraw" color="#610204" @clickevent="onAdd"></button-vue>
			</div>
		</div>
	</div>
</template>
<script>
import buttonVue from "../../component/button-vue/button-vue.vue";
import selectVue from "../../component/input-vue/select-vue.vue";
import inputVue from "../../component/input-vue/input-vue.vue";
export default {
	components: {
		"button-vue": buttonVue,
		"select-vue": selectVue,
		"input-vue": inputVue
	},
	computed: {
		getSelectOptions: function() {
			return [
				{
					label: "苹果",
					value: "apple"
				},
				{
					label: "西瓜",
					value: "watermelon"
				},
				{
					label: "芒果",
					value: "mango"
				}
			];
		}
	},
	methods: {
		onInput: function() {},
		onAdd: function() {
            window.history.go(-1);
        }
	}
};
</script>
<style lang="scss" scoped>
.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba($color: #000000, $alpha: 0.3);
	.modal {
		margin: 5em auto;
		width: 25%;
		min-width: 20em;
		border-radius: 1em;
		background-color: #ffffff;
		.header {
			position: relative;
			color: #333;
			padding: 1em;
			span {
				position: absolute;
				right: 1em;
				display: inline-block;
				font-size: 1.2em;
				line-height: 1;
				color: #610507;
				font-weight: bold;
				vertical-align: middle;
			}
		}
		.content {
			height: 10em;
			.line {
                color: #333;
				padding: 0.2em 2em;
			}
		}
		.buttons {
			padding: 0.5em;
			text-align: right;
			border-top: 1px solid #610507;
		}
	}
}
</style>