<template>
	<div class="panel">
		<section-header-vue icon="icon-systemlogs" title="操作日志" subtitle="查询平台使用者的历史操作记录"></section-header-vue>
		<div class="condition-panel clearfix">
			<div class="line">
				<select-vue placeholder="选择用户" v-model="userSelected" style="width:13em">
					<option-vue
						v-for="item in getSelectOptions"
						:value="item.value"
						:key="item.value"
					>{{ item.label }}</option-vue>
				</select-vue>
			</div>
			<div class="line">
				<select-vue placeholder="业务类型" v-model="userSelected" style="width:13em">
					<option-vue
						v-for="item in getSelectOptions"
						:value="item.value"
						:key="item.value"
					>{{ item.label }}</option-vue>
				</select-vue>
			</div>
			<div class="line">
				<date-picker-vue
					v-model="dateTimeRange"
					type="daterange"
					split-panels
					placeholder="时间范围"
					style="width: 13em"
				></date-picker-vue>
			</div>
			<div class="line" style="margin-top:1px">
				<button2-vue label="查询" icon="icon-search" color="#007d71" @clickevent="onAdd"></button2-vue>
			</div>
		</div>
		<div class="table-panel">
			<table-vue :columns="getColumns" :data="getData" :config="getConfig" @editevent="onEditTable"></table-vue>
			<div class="page">
				<page-vue :total="4" show-sizer/>
			</div>
		</div>
		<router-view class="modal" name="modal"></router-view>
	</div>
</template>
<script>
import button2Vue from "../../component/button-vue/button2-vue.vue";
import searchInputVue from "../../component/input-vue/search-input-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import sectionHeaderVue from "../../component/section-header-vue/section-header-vue.vue";

import datePickerVue from "../../iview-src/components/date-picker";
import { selectVue, optionVue } from "../../iview-src/components/select";
import pageVue from "../../iview-src/components/page";

export default {
	data: function() {
		return {
			userSelected: "",
			dateTimeRange: [],
			getSelectOptions: [
				{
					label: "臧洪四",
					value: "apple"
				},
				{
					label: "何启生",
					value: "watermelon"
				},
				{
					label: "方思晓",
					value: "mango"
				}
			]
		};
	},
	components: {
		"button2-vue": button2Vue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue,
		"select-vue": selectVue,
		"option-vue": optionVue,
		"date-picker-vue": datePickerVue,
		"page-vue": pageVue
	},
	computed: {
		getColumns: function() {
			let array = [
				{
					field: "name",
					title: "用户名称",
					width: 1
				},
				{
					field: "ip",
					title: "IP",
					width: 1
				},
				{
					field: "type",
					title: "业务类型",
					width: 1
				},
				{
					field: "remark",
					title: "备注",
					width: 1
				},
				{
					field: "time",
					title: "时间",
					width: 1
				}
			];

			return array;
		},
		getData: function() {
			let array = [
				{
					id: 1,
					name: "和其正",
					type: "用户管理",
					ip: "192.168.1.1",
					remark: "删除用户张三",
					time: "2020-01-01 23:00:00"
				}
			];
			return array;
		},
		getConfig: function() {
			let a = {
				//height: 600,
				checkbox: false,
				//0: 没有操作栏
				editColumnType: 0
			};
			return a;
		}
	},
	methods: {
		onInput: function() {},
		onAdd: function() {
			this.$router.push({ name: "addrole" });
		},
		onEditTable: function(e) {
			if (e.type == 2) {
				this.$router.push({ name: "selpri" });
			}
		}
	},
	mounted: function() {
		this.$store.dispatch("globalstate/setCurrentSection", {
			currentSection: "czrz"
		});
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>