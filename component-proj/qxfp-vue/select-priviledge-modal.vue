<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				权限选择
				<span class="iconfont icon-close" @click="onAdd"></span>
			</div>
			<div class="content">
				<transfer-vue class="transfer-box" :availableOptions="availableOptions" :ownedOptions="ownedOptions"></transfer-vue>
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
import transferVue from "../../component/transfer-vue/transfer-vue.vue";

export default {
	data: function() {
		return {
			/******transfer 穿梭框********* */
			availableOptions: [
				{ id: 1, label: "JJM平台" },
				{ id: 2, label: "BHF平台" },
				{ id: 3, label: "监控站项目" },
				{ id: 4, label: "西藏BF项目" },
				{ id: 5, label: "JJM平台" },
				{ id: 6, label: "BHF平台" },
				{ id: 7, label: "监控站项目" },
				{ id: 8, label: "西藏BF项目" },
				{ id: 9, label: "JJM平台" },
				{ id: 10, label: "BHF平台" },
				{ id: 11, label: "监控站项目" },
				{ id: 12, label: "西藏BF项目" }
			],
			ownedOptions: [
				{ id: 13, label: "JJM平台" },
				{ id: 14, label: "BHF平台" }
			]
			/*************** */
		};
	},
	components: {
		"button-vue": buttonVue,
		"select-vue": selectVue,
		"input-vue": inputVue,
		"transfer-vue": transferVue
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
		width: 40%;
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
            .transfer-box {
                margin: 1em auto;
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