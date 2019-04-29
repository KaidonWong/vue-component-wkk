<template>
	<!-- <table-vue :columns="getColumns" :data="getData" :config='getConfig'></table-vue> -->
	<!-- <collapse-vue :content="getCollapse"></collapse-vue> -->
    <!-- <horizon-menu-vue :content="getCollapse"></horizon-menu-vue> -->
    <!-- <input-vue placeholder="请输入内容" iconbefore='icon-bluetoothon' iconafter='icon-search' @inputevent='onInput'></input-vue> -->
    <textarea-vue placeholder="请输入内容" rows='5' @inputevent='onInput'></textarea-vue>
</template>

<script>
import tableVue from "../table-vue/table-vue.vue";
import collapseVue from "../collapse-vue/collapse-vue.vue";
import horizonMenuVue from "../horizon-menu-vue/horizon-menu-vue.vue";
import inputVue from "../input-vue/input-vue.vue";
import textareaVue from "../input-vue/textarea-vue.vue";

export default {
	components: {
		"table-vue": tableVue,
		"collapse-vue": collapseVue,
        "horizon-menu-vue": horizonMenuVue,
        "input-vue": inputVue,
        'textarea-vue': textareaVue,
    },
    data: function() {
        return {
            inputValue: "",
        }
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
				},
				{
					name: "文案管理",
					url: "aaaa.com"
				},
				{
					name: "预案管理",
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
				icon: "icon-camera"
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
    },
    methods: {
        onInput: function(e) {
            this.inputValue = e;
        }
    }
};
</script>