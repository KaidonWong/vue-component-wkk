<template>
	<table-vue :columns="getColumns" :data="getData" :config='getConfig'></table-vue>
	<!-- <collapse-vue :content="getCollapse"></collapse-vue> -->
	<!-- <horizon-menu-vue :content="getCollapse"></horizon-menu-vue> -->
	<!-- <input-vue placeholder="请输入内容" iconbefore='icon-bluetoothon' iconafter='icon-search' @inputevent='onInput'></input-vue> -->
	<!-- <textarea-vue placeholder="请输入内容" rows='5' @inputevent='onInput'></textarea-vue> -->
	<!-- <radio-vue :content="getRadio" :selected="radioSelected" @inputevent="onRadio"></radio-vue> -->
	<!-- <checkbox-vue :content="getCheckbox" :selected="checkboxSelected" @inputevent="onCheckbox"></checkbox-vue> -->
	<!-- <switch-vue :status="switchStatus" onLabel="开" offLabel="关" @inputevent="onSwitch"></switch-vue> -->
	<!-- <select-vue iconbefore="icon-bluetoothon" :options="getSelectOptions" @inputevent="onInput"></select-vue> -->
	<!-- <button-blue-vue label="申请授权" @clickevent='onSwitch'></button-blue-vue> -->
</template>

<script>
import tableVue from "../table-vue/table-vue.vue";
import collapseVue from "../collapse-vue/collapse-vue.vue";
import horizonMenuVue from "../horizon-menu-vue/horizon-menu-vue.vue";
import inputVue from "../input-vue/input-vue.vue";
import textareaVue from "../input-vue/textarea-vue.vue";
import radioVue from "../input-vue/radio-vue.vue";
import checkboxVue from "../input-vue/checkbox-vue.vue";
import switchVue from "../input-vue/switch-vue.vue";
import selectVue from "../input-vue/select-vue.vue";
import buttonBlueVue from "../button-vue/button-blue-vue.vue";

export default {
	components: {
		"table-vue": tableVue,
		"collapse-vue": collapseVue,
		"horizon-menu-vue": horizonMenuVue,
		"input-vue": inputVue,
		"textarea-vue": textareaVue,
		"radio-vue": radioVue,
		"checkbox-vue": checkboxVue,
		"switch-vue": switchVue,
		"select-vue": selectVue,
		"button-blue-vue": buttonBlueVue
	},
	data: function() {
		return {
			inputValue: "",
			radioSelected: "male",
			checkboxSelected: ["apple", "watermelon"],
			switchStatus: false
		};
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
                height: 300,
                checkbox: true,
                //0: 没有操作栏
                editColumnType: 1,
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
		},
		getRadio: function() {
			return [
				{
					label: "男",
					value: "male"
				},
				{
					label: "女",
					value: "female"
				},
				{
					label: "其它",
					value: "other"
				}
			];
		},
		getCheckbox: function() {
			return [
				{
					label: "苹果",
					value: "apple"
				},
				{
					label: "西瓜",
					value: "watermelon"
				},
				{
					label: "芒果",
					value: "mango"
				}
			];
		},
		getSelectOptions: function() {
			return [
				{
					label: "苹果",
					value: "apple"
				},
				{
					label: "西瓜",
					value: "watermelon"
				},
				{
					label: "芒果",
					value: "mango"
				}
			];
		}
	},
	methods: {
		onInput: function(e) {
			this.inputValue = e;
		},
		onRadio: function(e) {
			this.radioSelected = e;
		},
		onCheckbox: function(e) {
			let len = this.checkboxSelected.length;
			this.checkboxSelected.splice(0, len, ...e);
		},
		onSwitch: function() {
			this.switchStatus = !this.switchStatus;
		}
	}
};
</script>