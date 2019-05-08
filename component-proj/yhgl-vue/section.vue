<template>
	<div class="panel">
		<section-header-vue icon="icon-UserSettings1" title="用户管理" subtitle="增删查改用户信息"></section-header-vue>
		<div class="table-panel">
			<div class="above-table">
				<div class="buttons">
					<button2-vue label="添加用户" icon="icon-add" color="#009688" @clickevent="onAdd"></button2-vue>
					<button2-vue label="删除用户" icon="icon-delete1" color="#FF9800" @clickevent="onAdd"></button2-vue>
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
					field: "tel",
					title: "电话",
					width: 1
				},
				{
					field: "job",
					title: "岗位",
					width: 1
				},
				{
					field: "role",
					title: "角色",
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
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "王开恺",
					tel: "12215643154",
					job: "XXX片区负责人",
					role: "新疆片区权限角色",
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
				editColumnType: 3
			};
			return a;
		}
	},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "adduser" });
		}
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>