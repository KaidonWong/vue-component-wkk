<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				添加项目
				<span class="iconfont icon-close" @click="onAdd"></span>
			</div>
			<div class="content">
				<div class="line">
					<span>名称：</span>
					<input-vue v-model="projectName" style="width:13em"></input-vue>
				</div>
				<div class="line">
					<span>编号：</span>
					<input-vue v-model="projectNo" style="width:13em"></input-vue>
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
import inputVue from "../../iview-src/components/input";
import { selectVue, optionVue, optionGroupVue } from "../../iview-src/components/select";
export default {
	components: {
		"button-vue": buttonVue,
        "select-vue": selectVue,
        "option-vue": optionVue,
		"input-vue": inputVue
    },
    data: function() {
        return {
            projectName: "",
            projectNo: "",
        }
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
            margin-bottom: 2em;
			font-size: 0.9em;
			.line {
				> span:nth-of-type(1) {
					display: inline-block;
                    width: 5em;
                    text-align: right;
				}
				width: 90%;
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