<template>
	<div class="panel">
		<section-header-vue icon="icon-xiangmu" title="项目管理" subtitle="增删查改项目，并获取授权"></section-header-vue>
		<div class="table-panel">
			<div class="above-table">
				<div class="buttons">
					<button2-vue label="添加项目" icon="icon-add" color="#009688" @clickevent="onAdd"></button2-vue>
					<button2-vue label="删除项目" icon="icon-delete1" color="#FF9800"></button2-vue>
				</div>
				<search-input-vue></search-input-vue>
			</div>
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
import pageVue from "../../iview-src/components/page";
export default {
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
					field: "name",
					title: "名称",
					width: 1
				},
				{
					field: "no",
					title: "编号",
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
		getData: function() {
			let array = [
				{
					id: 1,
					name: "西藏BHF项目",
					no: "ky-1545",
                    createTime: "2020-01-01 23:00:00",
                    key1: "...3333333333333333555555555555555555555555555555555555555555555555555555555333333333333333333333333333333333333.......",
                    key2: "......",
				},
			];
			return array;
		},
		getConfig: function() {
			let a = {
				// height: 600,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: 3
			};
			return a;
		}
	},
	methods: {
		getLineData: function(id) {
			let arr = this.getData;
			for (let i = 0, len = arr.length; i < len; i++) {
				if (id == arr[i].id) {
					return arr[i];
				}
			}
			return {};
		},
		onAdd: function() {
			this.$router.push({ name: "addproj" });
		},
		onEditTable: function(e) {
            let lineData = this.getLineData(e.id);
			if (e.type == 1) {
				this.$router.push({
					name: "modifyproj",
					params: { model: lineData }
				});
			}
			if (e.type == 2) {
				this.$router.push({
					name: "appkey",
					params: { model: lineData }
				});
			}
		}
	},
	mounted: function() {
		this.$store.dispatch("globalstate/setCurrentSection", {
			currentSection: "xmgl"
		});
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>