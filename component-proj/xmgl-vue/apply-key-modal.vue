<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				申请授权
				<span class="iconfont icon-close" @click="onAdd"></span>
			</div>
			<div class="content">
				<div class="line">
					<span>项目：</span>
					<span>{{model.name}}({{model.no}})</span>
				</div>
				<div class="line">
					<span>姓名：</span>
					<input-vue class="input" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>电话：</span>
					<input-vue class="input" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>详细地址：</span>
					<input-vue class="input" @inputevent="onInput"></input-vue>
				</div>
				<div class="line">
					<span>有效期限：</span>
					<date-picker-vue
						v-model="dateTimeRange"
						type="daterange"
						split-panels
						placeholder
						style="width: 13em"
					></date-picker-vue>
				</div>
			</div>
			<div class="buttons">
				<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onAdd"></button-vue>
				<button-vue label="取消" icon="icon-withdraw" color="#333333" @clickevent="onAdd"></button-vue>
			</div>
		</div>
	</div>
</template>
<script>
import buttonVue from "../../component/button-vue/button2-vue.vue";
import selectVue from "../../component/input-vue/select-vue.vue";
import inputVue from "../../component/input-vue/input-vue.vue";
import datePickerVue from "../../iview-src/components/date-picker";
export default {
	data: function() {
		return {
			dateTimeRange: []
		};
	},
	props: {
		model: Object
	},
	components: {
		"button-vue": buttonVue,
		"select-vue": selectVue,
		"input-vue": inputVue,
		"date-picker-vue": datePickerVue
	},
	computed: {
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
		min-width: 30em;
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