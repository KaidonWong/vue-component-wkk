// <template>
// 	<modal-base-vue title="申请授权" @addevent="onAdd">
// 		<div class="line">
// 			<span>项目：</span>
// 			<span>{{model.name}}（{{model.no}}）</span>
// 		</div>
// 		<div class="line">
// 			<span>姓名：</span>
// 			<input-vue v-model="name" style="width:13em"></input-vue>
//             <div class="tip">{{tip['projectName']}}</div>
// 		</div>
// 		<div class="line">
// 			<span>电话：</span>
// 			<input-vue v-model="name" style="width:13em"></input-vue>
//             <div class="tip">{{tip['projectName']}}</div>
// 		</div>
// 		<div class="line">
// 			<span>详细地址：</span>
// 			<input-vue v-model="name" style="width:13em"></input-vue>
//             <div class="tip">{{tip['projectName']}}</div>
// 		</div>
// 		<div class="line">
// 			<span>时间范围：</span>
// 			<date-picker-vue
// 				v-model="dateTimeRange"
// 				type="daterange"
// 				split-panels
// 				placeholder
// 				style="width: 13em"
// 			></date-picker-vue>
// 		</div>
// 	</modal-base-vue>
// </template>
// <script>
// import modalBaseVue from "../modal-base-vue/modal-base.vue";
// import inputVue from "../../iview-src/components/input";
// import {
// 	selectVue,
// 	optionVue,
// 	optionGroupVue
// } from "../../iview-src/components/select";
// export default {
// 	data: function() {
// 		return {
// 			name: "",
// 			no: "",
// 			tip: {}
// 		};
// 	},
// 	props: {
// 		model: Object
// 	},
// 	components: {
// 		"modal-base-vue": modalBaseVue,
// 		"select-vue": selectVue,
// 		"option-vue": optionVue,
// 		"input-vue": inputVue
// 	},
// 	computed: {},
// 	methods: {
// 		onAdd: function() {
// 			let _this = this;
// 			this.axios({
// 				method: "put",
// 				url: "/apis/p/project",
// 				data: {
// 					id: _this.model.id,
// 					projectName: _this.name,
// 					projectNumber: _this.no
// 				}
// 			}).then(function({ data }) {
// 				if (data.code == 0) {
// 					_this.$Message.success("角色修改成功！");
// 					window.history.go(-1);
// 					_this.$emit("addsuccess");
// 				}
// 				if (data.code == 501 || data.code == 401) {
// 					_this.tip = data.data;
// 				}
// 			});
// 		}
// 	},
// 	mounted: function() {
// 		this.name = this.model.projectName;
// 		this.no = this.model.projectNumber;
// 	}
// };
// </script>
// <style lang="scss" scoped>
// .line {
// 	> span:nth-of-type(1) {
// 		display: inline-block;
// 		width: 5em;
// 		text-align: right;
// 	}
// 	width: 90%;
// 	margin: 0 auto;
// 	color: #333;
// 	padding: 0.5em 0;
// 	.tip {
// 		padding-left: 7em;
// 		color: #800000;
// 		font-size: 0.6em;
// 	}
// }
// </style>
<template>
    <div></div>
</template>
