<template>
	<div class="panel">
		<section-header-vue icon="icon-xiangmu" title="项目管理" subtitle="增删查改项目，并获取授权"></section-header-vue>
		<div class="table-panel">
			<div class="above-table">
				<div class="buttons">
					<button2-vue label="添加项目" icon="icon-add" color="#009688" @clickevent="onAdd"></button2-vue>
					<button2-vue label="删除项目" icon="icon-delete1" color="#FF9800" @clickevent="onDelete"></button2-vue>
				</div>
				<search-input-vue @searchevent="onSearch"></search-input-vue>
			</div>
			<table-vue :columns="getColumns" :data="dataArr" :config="getConfig" @editevent="onEditTable"></table-vue>
			<div class="page">
				<page-vue
					:total="dataNum"
					:page-size="pageSize"
					:current="currentPage"
					show-total
					@on-change="changePage"
				/>
			</div>
		</div>
		<router-view class="modal" name="modal" @addsuccess="fetchTableData(1)"></router-view>
	</div>
</template>
<script>
import button2Vue from "../../component/button-vue/button2-vue.vue";
import searchInputVue from "../../component/input-vue/search-input-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import sectionHeaderVue from "../../component/section-header-vue/section-header-vue.vue";
import pageVue from "../../iview-src/components/page";
export default {
	data: function() {
		return {
			dataArr: [],
			dataNum: 0,
			keyWord: "",
			currentPage: 1,
			pageSize: 15
		};
	},
	components: {
		"button2-vue": button2Vue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue,
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
					field: "projectNumber",
					title: "项目编号",
					width: 1
				},
				{
					field: "createTime",
					title: "创建时间",
					width: 1
				}
			];
			return array;
		},
		getConfig: function() {
			let a = {
				// height: 600,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: "xmgl"
			};
			return a;
		}
	},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "addproj" });
		},
		onDelete: function() {
			let _this = this;
			let arr = this.$store.getters["table/getSelected"];
			let str = arr.join("%2C");
			this.$store.dispatch("table/removeAll");
			this.axios({
				method: "delete",
				url: `/apis/p/project/${str}`
			}).then(function({ data }) {
				if (data.msg == "删除成功") {
					_this.$Message.success(data.msg);
				} else {
					_this.$Message.error(data.msg);
                }
                _this.fetchTableData(_this.currentPage);
			});
		},
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
					name: "modifyproj",
					params: { model: model }
				});
			}
			if (e.type == 2) {
				this.$router.push({ name: "appkey", params: { model: model } });
			}
		},
		changePage: function(e) {
			this.fetchTableData(e);
		},
		onSearch: function(e) {
			this.keyWord = e;
			this.fetchTableData(1);
		},
		fetchTableData: function(pageNum) {
			this.currentPage = pageNum;
			let _this = this;
			let params = {
				pn: pageNum
			};
			if (this.keyWord != "") {
				Object.assign(params, { keys: this.keyWord });
			}
			this.axios({
				method: "get",
				url: "/apis/p/projects",
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
			currentSection: "xmgl"
		});
		this.fetchTableData(1);
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>