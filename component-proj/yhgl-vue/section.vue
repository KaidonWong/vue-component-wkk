<template>
	<div class="panel">
		<section-header-vue icon="icon-UserSettings1" title="用户管理" subtitle="增删查改用户信息"></section-header-vue>
		<div class="table-panel">
			<div class="above-table">
				<div class="buttons">
					<button2-vue label="添加用户" icon="icon-add" color="#009688" @clickevent="onAdd"></button2-vue>
				</div>
				<search-input-vue @searchevent="onSearch"></search-input-vue>
			</div>
			<table-vue
				:columns="getColumns"
				:data="convertData"
				:config="getConfig"
				@editevent="onEditTable"
			></table-vue>
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
			pageSize: 15,
			allRole: []
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
					field: "userName",
					title: "名称",
					width: 1
				},
				{
					field: "roleName",
					title: "角色",
					width: 1
				},
				{
					field: "userPhone",
					title: "联系电话",
					width: 1
				},
				{
					field: "statusString",
					title: "账号状态",
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
				//height: 600,
				checkbox: false,
				//0: 没有操作栏
				editColumnType: "yhgl"
			};
			return a;
		},
		convertData: function() {
			let ret = new Array(this.dataArr.length);
			for (let i = 0, len = this.dataArr.length; i < len; i++) {
				let item = this.dataArr[i];

				let { role, status } = item;
				let addObject = {
					roleName: role.roleName,
					id: item.uid,
					statusString: status ? "使用中" : "冻结中"
				};
				ret[i] = Object.assign(addObject, item);
			}
			return ret;
		}
	},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "adduser",params: { allRole: this.allRole } });
		},
		getLineById: function(id) {
			for (let i = 0, len = this.dataArr.length; i < len; i++) {
				if (this.dataArr[i].uid == id) {
					return this.dataArr[i];
				}
			}
			return null;
		},
		onEditTable: function(e) {
			let model = this.getLineById(e.id);
			if (e.type == 1) {
				this.$router.push({
					name: "modifyuser",
					params: { model: model, allRole: this.allRole }
				});
			}
			if (e.type == 3) {
				let _this = this;
				this.axios({
					method: "delete",
					url: `/apis/u/user/${model.uid}`,
				}).then(function({ data }) {
					if (data.code == 0) {
						_this.$Message.success("用户冻结成功！");
						_this.fetchTableData(_this.currentPage);
					} else {
						_this.$Message.success("用户冻结失败！");
					}
				});
			}
			if (e.type == 2) {
				let _this = this;
				this.axios({
					method: "post",
					url: "/apis/u/user/active",
					params: { uids: model.uid }
				}).then(function({ data }) {
					if (data.code == 0) {
						_this.$Message.success("用户激活成功！");
						_this.fetchTableData(_this.currentPage);
					} else {
						_this.$Message.success("用户激活失败！");
					}
				});
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
				Object.assign(params, { key: this.keyWord });
			}
			this.axios({
				method: "get",
				url: "/apis/u/user",
				params: params
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.dataArr = data.data.list;
					_this.dataNum = data.data.total;
				}
			});
		},
		fetchAllRole: function() {
			let _this = this;
			this.axios({
				method: "post",
				url: "/apis/r/getAllRoles"
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.allRole = data.data;
				}
			});
		}
	},
	mounted: function() {
		this.$store.dispatch("globalstate/setCurrentSection", {
			currentSection: "yhgl"
		});
		this.fetchTableData(1);
		this.fetchAllRole();
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>