<template>
	<modal-base-vue title="历史记录" mWidth="75%">
		<template v-slot:content>
			<div class="line">
				<table-vue :columns="getColumns" :data="dataArr" :config="getConfig"></table-vue>
				<div class="page clearfix">
					<page-vue
						:page-size="pageSize"
						:total="dataNum"
						:current="currentPage"
						show-total
						@on-change="changePage"
					/>
				</div>
			</div>
		</template>
		<template v-slot:footer>
			<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onClose"></button-vue>
		</template>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import inputVue from "../../iview-src/components/input";
import buttonVue from "../../component/button-vue/button-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import pageVue from "../../iview-src/components/page";

export default {
	data: function() {
		return {
			dataArr: [],
			dataNum: 0,
			pageSize: 15,
			currentPage: 1
		};
	},
	props: {
		model: Object
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"input-vue": inputVue,
		"button-vue": buttonVue,
		"table-vue": tableVue,
		"page-vue": pageVue
	},
	computed: {
		getColumns: function() {
			let array = [
				{
					field: "projectName",
					title: "项目名称",
					width: 1
				},
				{
					field: "userName",
					title: "授权人",
					width: 1
				},
				{
					field: "applicant",
					title: "申请人",
					width: 1
				},
				{
					field: "createTime",
					title: "时间",
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
				editColumnType: 0
			};
			return a;
		}
	},
	methods: {
		onClose: function() {
			window.history.go(-1);
		},
		changePage: function(e) {
			this.fetchTableData(e);
		},
		fetchTableData: function(pageNum) {
			this.currentPage = pageNum;
			let _this = this;
			let params = {
				pn: pageNum
			};

			Object.assign(params, { key: this.model.projectName });

			this.axios({
				method: "post",
				url: "/apis/a/getAuthorizeLogs",
				params: params
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.dataArr = data.data.list;
					_this.dataNum = data.data.total;
				}
			});
		}
	},
	mounted() {
		this.fetchTableData(1);
	},
	beforeRouteEnter(to, from, next) {
		if (to.params.model == null) {
			next("/xmgl");
		} else {
			next();
		}
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当守卫执行前，组件实例还没被创建
	}
};
</script>
<style lang="scss" scoped>
.line {
	> span:nth-of-type(1) {
		display: inline-block;
		width: 5em;
		text-align: right;
	}
	width: 90%;
	margin: 0 auto;
	color: #333;
	padding: 0.5em 0;
	.tip {
		padding-left: 7em;
		color: #800000;
		font-size: 0.6em;
	}
	.page {
		margin-top: 1em;
		> ul {
			float: right;
		}
	}
}
</style>