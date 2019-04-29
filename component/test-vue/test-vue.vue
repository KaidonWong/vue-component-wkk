<template>
	<!-- <table-vue :columns="getColumns" :data="getData" :config='getConfig'></table-vue> -->
	<collapse-vue :content="getCollapse"></collapse-vue>
</template>
<script>
import tableVue from "../table-vue/table-vue.vue";
import liVue from "../collapse-vue/li-vue.vue";
import collapseVue from "../collapse-vue/collapse-vue.vue";
export default {
	components: {
		"table-vue": tableVue,
		"li-vue": liVue,
		"collapse-vue": collapseVue
	},
	computed: {
		getColumns: function() {
			let array = new Array();
			let a = {
				field: "id",
				title: "ID",
				width: 200
			};
			let b = {
				field: "name",
				title: "姓名",
				width: 200
			};
			let c = {
				field: "age",
				title: "年龄",
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
				name: "wangkaikai",
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
				height: 300
			};
			return a;
		},
		getSubMenu: function() {
			return [
				{
					name: "文章管理",
					url: "aaaa.com"
				},
				{
					name: "评论管理",
					url: "bbbb.com"
				}
			];
		},
		getCollapse: function() {
			let array = new Array();
			let a = {
				name: "内容管理",
				url: "#",
				icon: "icon-video",
				submenu: this.getSubMenu
			};
			let b = {
				name: "统计分析",
				url: "#",
				icon: "icon-address"
			};
			let c = {
				name: "我的标签",
				url: "#",
				icon: "icon-bluetoothoff",
				submenu: this.getSubMenu
			};
			let d = {
				name: "我的标签1",
				url: "#",
				icon: "icon-camera",
			};
			let e = {
				name: "我的标签2",
				url: "#",
				icon: "icon-video",
				submenu: this.getSubMenu
			};
			let f = {
				name: "我的标签3",
				url: "#",
				icon: "icon-video",
				submenu: this.getSubMenu
			};
			array.push(a);
			array.push(b);
			array.push(c);
			array.push(d);
			array.push(e);
			array.push(f);
			return array;
		}
	}
};
</script>