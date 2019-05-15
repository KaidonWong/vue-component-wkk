<template>
	<div class="panel">
		<section-header-vue icon="icon-devicelogs" title="授权历史" subtitle="查询申请人请求授权的历史记录"></section-header-vue>
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
				<page-vue :total="4" show-total/>
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
					title: "项目名称",
					width: 1
				},
				{
					field: "time",
					title: "授权时间",
					width: 1
				},
				{
					field: "user",
					title: "授权用户",
					width: 1
				}
			];

			return array;
		},
		getData: function() {
			let array = [
				{
					id: 1,
					name: "新疆BHF项目",
					user: "张心思",
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
				editColumnType: 4
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
			currentSection: "sqls"
		});
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>