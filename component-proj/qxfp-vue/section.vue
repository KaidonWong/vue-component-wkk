<template>
	<div class="panel">
		<section-header-vue icon="icon-key" title="权限分配" subtitle="增删查改角色，并为角色分配指定的项目权限"></section-header-vue>
		<div class="table-panel">
			<div class="above-table">
				<div class="buttons">
					<button2-vue label="添加角色" icon="icon-add" color="#009688" @clickevent="onAdd"></button2-vue>
					<button2-vue label="删除角色" icon="icon-delete1" color="#FF9800" @clickevent="onAdd"></button2-vue>
				</div>
				<search-input-vue></search-input-vue>
			</div>
			<table-vue :columns="getColumns" :data="getData" :config="getConfig"></table-vue>
		</div>
		<router-view class="modal" name="modal"></router-view>
	</div>
</template>
<script>
import button2Vue from "../../component/button-vue/button2-vue.vue";
import searchInputVue from "../../component/input-vue/search-input-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import sectionHeaderVue from "../../component/section-header-vue/section-header-vue.vue";
export default {
	components: {
		"button2-vue": button2Vue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue
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
					field: "remark",
					title: "备注",
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
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				}
			];
			return array;
		},
		getConfig: function() {
			let a = {
				height: 600,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: 2
			};
			return a;
		}
	},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "addrole" });
		}
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>