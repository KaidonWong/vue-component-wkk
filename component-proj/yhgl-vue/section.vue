<template>
	<div class="panel">
		<div class="title">用户管理</div>

		<div class="table clearfix">
			<div class="table-wrap">
				<div class="above-table">
					<div class="buttons">
						<button-vue label="添加用户" icon="icon-add" color="#d40e10" @clickevent="onAdd"></button-vue>
						<button-vue label="删除用户" icon="icon-delete1" color="#d40e10" @clickevent="onAdd"></button-vue>
					</div>
					<search-input-vue></search-input-vue>
				</div>
				<table-vue :columns="getColumns" :data="getData" :config="getConfig"></table-vue>
			</div>
		</div>
        <router-view class="modal" name='modal'></router-view>
	</div>
</template>
<script>
import buttonVue from "../../component/button-vue/button-vue.vue";
import searchInputVue from "../../component/input-vue/search-input-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
export default {
	components: {
		"button-vue": buttonVue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue
	},
	computed: {
		getColumns: function() {
			let array = new Array();
			let a = {
				field: "id",
				title: "ID",
				width: 7
			};
			let b = {
				field: "name",
				title: "姓名",
				width: 12
			};
			let c = {
				field: "age",
				title: "年龄",
				width: 10
			};
			array.push(a);
			array.push(b);
			array.push(c);
			return array;
		},
		getData: function() {
			let array = new Array();
			let a = {
				id: 1,
				name: "哇咔咔",
				age: 25
			};
			let b = {
				id: 2,
				name: "wangkaikai",
				age: 25
			};
			let c = {
				id: 3,
				name: "wangkaikai",
				age: 25
			};
			let d = {
				id: 1,
				name: "哇咔咔",
				age: 25
			};
			let e = {
				id: 2,
				name: "wangkaikai",
				age: 25
			};
			let f = {
				id: 3,
				name: "wangkaikai",
				age: 25
			};
			let g = {
				id: 1,
				name: "哇咔咔",
				age: 25
			};
			let h = {
				id: 2,
				name: "wangkaikaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				age: 25
			};
			let i = {
				id: 3,
				name: "wangkaikai",
				age: 25
			};
			array.push(a);
			array.push(b);
			array.push(c);
			array.push(d);
			array.push(e);
			array.push(f);
			array.push(g);
			array.push(h);
			array.push(i);
			return array;
		},
		getConfig: function() {
			let a = {
				// height: 300,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: 1
			};
			return a;
		}
	},
	methods: {
		onAdd: function() {}
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>