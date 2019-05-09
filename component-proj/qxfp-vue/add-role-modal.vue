<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				添加角色
				<span class="iconfont icon-close" @click="onAdd"></span>
			</div>
			<div class="content">
				<div class="line">
					<span>名称：</span>
					<input-vue placeholder="请输入内容" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>备注：</span>
					<input-vue placeholder="请输入内容" @inputevent="onInput"></input-vue>
				</div>
			</div>
			<div class="buttons">
				<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onAdd"></button-vue>
				<button-vue label="取消" icon="icon-withdraw" color="#007d71" @clickevent="onAdd"></button-vue>
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
		margin: 10em auto;
		width: 25%;
		min-width: 20em;
		border-radius: 1em;
		background-color: #ffffff;
		.header {
			position: relative;
			color: #007d71;
            padding: 1em;
            font-weight: bold;
            letter-spacing: 0.1em;
			span {
				position: absolute;
				right: 1em;
				display: inline-block;
				font-size: 1.2em;
				line-height: 1;
				color: #333333;	
				vertical-align: middle;
			}
		}
		.content {
			font-size: 0.9em;
			.line {
				> span:nth-of-type(1) {
					display: inline-block;
                    width: 7em;
                    text-align: right;
				}
				width: 80%;
				margin: 0.5em auto;
				color: #333;
                padding: 0.2em 2em;
                .input {
                    width: 13em;
                }
			}
		}
		.buttons {
			padding: 0.5em 2em 1em 0;
			text-align: right;
			border-top: 1px solid #007d71;
		}
	}
}
</style>