<template>
	<div class="panel">
		<section-header-vue icon="icon-devicelogs" title="授权历史" subtitle="查询申请人请求授权的历史记录"></section-header-vue>
		<div class="condition-panel clearfix">
			<div class="line">
				<input-vue placeholder="关键字(用户名,操作模块)" v-model="keyWord"></input-vue>
			</div>
			<div class="line">
				<date-picker-vue v-model="dateTimeRange" type="daterange" split-panels placeholder="时间范围"></date-picker-vue>
			</div>
			<div class="line" style="margin-top:1px">
				<button2-vue label="查询" icon="icon-search" color="#007d71" @clickevent="fetchTableData(1)"></button2-vue>
			</div>
		</div>
		<div class="table-panel">
			<table-vue :columns="getColumns" :data="dataArr" :config="getConfig" @editevent="onEditTable"></table-vue>
			<div class="page">
				<page-vue
					:page-size="pageSize"
					:total="dataNum"
					:current="currentPage"
					show-total
					@on-change="changePage"
				/>
			</div>
		</div>
		<router-view class="modal" name="modal"></router-view>
	</div>
</template>
<script>
import button2Vue from "../../component/button-vue/button2-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import sectionHeaderVue from "../../component/section-header-vue/section-header-vue.vue";

import datePickerVue from "../../iview-src/components/date-picker";
import pageVue from "../../iview-src/components/page";
import inputVue from "../../iview-src/components/input";

export default {
	data: function() {
		return {
			keyWord: "",
			dateTimeRange: [],
			dataArr: [],
			dataNum: 0,
			pageSize: 15,
			currentPage: 1
		};
	},
	components: {
		"button2-vue": button2Vue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue,
		"date-picker-vue": datePickerVue,
		"input-vue": inputVue,
		"page-vue": pageVue
	},
	computed: {
		getColumns: function() {
			let array = [
				{
					field: "projectName",
					title: "项目名称",
					width: 1
				},
				{
					field: "userName",
					title: "授权人",
					width: 1
				},
				{
					field: "applicant",
					title: "申请人",
					width: 1
				},
				{
					field: "createTime",
					title: "时间",
					width: 1
				}
			];

			return array;
		},
		getConfig: function() {
			let a = {
				//height: 600,
				checkbox: false,
				//0: 没有操作栏
				editColumnType: "czrz"
			};
			return a;
		}
	},
	methods: {
		getLineById: function(id) {
			for (let i = 0, len = this.dataArr.length; i < len; i++) {
				if (this.dataArr[i].id == id) {
					return this.dataArr[i];
				}
			}
			return null;
		},
		onEditTable: function(e) {
			let model = this.getLineById(e.id);
			if (e.type == 1) {
				this.$router.push({
					name: "checkls",
					params: { model: model }
				});
			}
		},
		changePage: function(e) {
			this.fetchTableData(e);
		},
		fetchTableData: function(pageNum) {
            this.currentPage = pageNum;
			let _this = this;
			let params = {
				pn: pageNum
			};
			if (this.keyWord != "") {
				Object.assign(params, { key: this.keyWord });
			}
			if (this.dateTimeRange[0] != "") {
				Object.assign(params, {
					startTime: this.dateTimeRange[0].Format(
						"yyyy-MM-dd hh:mm:ss"
					),
					endTime: this.dateTimeRange[1].Format("yyyy-MM-dd hh:mm:ss")
				});
			}
			this.axios({
				method: "post",
				url: "/apis/a/getAuthorizeLogs",
				params: params
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.dataArr = data.data.list;
					_this.dataNum = data.data.total;
				}
			});
		}
	},
	mounted: function() {
		this.$store.dispatch("globalstate/setCurrentSection", {
			currentSection: "sqls"
		});
		this.fetchTableData(1);
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>