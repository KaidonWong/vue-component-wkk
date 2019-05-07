<template>
	<div style="width: 100%;height: 100%;background-color: #ffffff;padding: 3em;">
		<!-- <section-header-vue icon="icon-caidan" title="用户管理" subtitle="增删查改用户信息"></section-header-vue>
		<topbar-vue :user="user" :menus="menus"></topbar-vue>-->
		<table-vue :columns="getColumns" :data="getData" :config="getConfig"></table-vue>
		<!-- <input-vue
			placeholder="请输入内容"
			iconbefore="icon-bluetoothon"
			iconafter="icon-search"
			@inputevent="onInput"
		></input-vue>

		<search-input-vue></search-input-vue>-->

		<!-- <modal-vue></modal-vue> -->
	</div>
	<!-- <table-vue :columns="getColumns" :data="getData" :config='getConfig'></table-vue> -->
	<!-- <collapse-vue :content="getCollapse"></collapse-vue> -->
	<!-- <horizon-menu-vue :content="getCollapse"></horizon-menu-vue> -->
	<!-- <input-vue placeholder="请输入内容" iconbefore='icon-bluetoothon' iconafter='icon-search' @inputevent='onInput'></input-vue> -->
	<!-- <textarea-vue placeholder="请输入内容" rows='5' @inputevent='onInput'></textarea-vue> -->
	<!-- <radio-vue :content="getRadio" :selected="radioSelected" @inputevent="onRadio"></radio-vue> -->
	<!-- <checkbox-vue :content="getCheckbox" :selected="checkboxSelected" @inputevent="onCheckbox"></checkbox-vue> -->
	<!-- <switch-vue :status="switchStatus" onLabel="开" offLabel="关" @inputevent="onSwitch"></switch-vue> -->
	<!-- <select-vue iconbefore="icon-bluetoothon" :options="getSelectOptions" @inputevent="onInput"></select-vue> -->
	<!-- <button-vue label="申请授权" @clickevent='onSwitch' color="#0000aa"></button-vue> -->
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
import buttonVue from "../button-vue/button-vue.vue";
import searchInputVue from "../input-vue/search-input-vue.vue";
import modalSkeletonVue from "../modal-vue/modal-skeleton-vue.vue";
import topbarVue from "../topbar-vue/topbar-vue.vue";
import sectionHeaderVue from "../section-header-vue/section-header-vue.vue";

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
		"button-vue": buttonVue,
		"search-input-vue": searchInputVue,
		"modal-vue": modalSkeletonVue,
		"topbar-vue": topbarVue,
		"section-header-vue": sectionHeaderVue
	},
	data: function() {
		return {
			inputValue: "",
			radioSelected: "male",
			checkboxSelected: ["apple", "watermelon"],
			switchStatus: false,
			user: {
				name: "王开恺",
				id: "11111"
			},
			menus: [
				{
					label: "软件授权管理平台",
					to: "#"
				},
				{
					label: "申请授权",
					to: "#"
				},
				{
					label: "数据统计",
					to: "#"
				},
				{
					label: "项目管理",
					to: "#"
				},
				{
					label: "用户管理",
					to: "yhgl"
				},
				{
					label: "角色分配",
					to: "#"
				}
			]
		};
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
				height: 300,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: 1
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
	},
	mounted: function() {
		var _this = this;
		_this.$store.dispatch("globalstate/setWindowWidth", {
			width: document.documentElement.clientWidth
		});
		window.onresize = function() {
			// 定义窗口大小变更通知事件
			_this.$store.dispatch("globalstate/setWindowWidth", {
				width: document.documentElement.clientWidth
			});
		};
	}
};
</script>