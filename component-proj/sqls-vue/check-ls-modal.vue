<template>
	<modal-base-vue title="详细信息" mWidth="22em">
		<template v-slot:content>
			<div class="line">
				<span>项目名称：</span>
				<span>{{model.projectName}}</span>
			</div>
			<div class="line">
				<span>开始时间：</span>
				<span>{{model.startTime}}</span>
			</div>
			<div class="line">
				<span>结束时间：</span>
				<span>{{model.endTime}}</span>
			</div>
			<div class="line">
				<span>申请人姓名：</span>
				<span>{{model.applicant}}</span>
			</div>
			<div class="line">
				<span>申请人电话：</span>
				<span>{{model.applicantPhone}}</span>
			</div>
			<div class="line">
				<span>申请人地址：</span>
				<span>{{model.addressDetail}}</span>
			</div>
			<div class="line">
				<span>创建时间：</span>
				<span>{{model.createTime}}</span>
			</div>
		</template>
		<template v-slot:footer>
			<button-vue label="下载密钥" color="#007d71" @clickevent="onDownload"></button-vue>
			<button-vue label="关闭" icon="icon-withdraw" color="#007d71" @clickevent="onClose"></button-vue>
		</template>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import buttonVue from "../../component/button-vue/button-vue.vue";
export default {
	data: function() {
		return {};
	},
	props: {
		model: Object
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"button-vue": buttonVue
	},
	computed: {},
	methods: {
        onDownload: function() {
            window.open(`${this.model.path}`, "_blank");
            window.history.go(-1);
        },
		onClose: function() {
			window.history.go(-1);
		}
	},
	mounted: function() {},
	beforeRouteEnter(to, from, next) {
		if (to.params.model == null) {
			next("/sqls");
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
	span {
		display: inline-block;
		vertical-align: text-top;
		font-size: 1em;
		line-height: 1;
	}
	> span:nth-of-type(1) {
		width: 6em;
		text-align: right;
		color: #333333;
	}
	> span:nth-of-type(2) {
		width: calc(100% - 8em);
		color: #666666;
		word-wrap: break-word;
		white-space: normal;
	}
	width: 80%;
	margin: 0 auto;
	color: #333;
	padding: 0.5em 0;
}
</style>