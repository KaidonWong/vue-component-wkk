<template>
	<table-vue :columns="getColumns" :data="getData"></table-vue>
</template>
<script>
import tableVue from "../table-vue/table-vue.vue";
export default {
	components: {
		"table-vue": tableVue
	},
	computed: {
		getColumns: function() {
			let array = new Array();
			let a = {
				field: "id",
				title: "ID",
				width: 100
			};
			let b = {
				field: "name",
				title: "NAME",
				width: 100
			};
			let c = {
				field: "age",
				title: "AGE",
				width: 100
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
				name: "wangkaikai",
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
            array.push(a);
            array.push(b);
            array.push(c);
			return array;
		},
	}
};
</script>
<style lang="scss" src='./test.scss' scoped>
</style>

