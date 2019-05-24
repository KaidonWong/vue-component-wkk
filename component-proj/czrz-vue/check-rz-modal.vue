<template>
	<modal-base-vue title="查看操作" mWidth="22em">
		<template v-slot:content>
			<div class="line">
				<span>用户名称：</span>
				<span>{{model.userName}}</span>
			</div>
			<div class="line">
				<span>IP：</span>
				<span>{{model.userIp}}</span>
			</div>
			<div class="line">
				<span>业务类型：</span>
				<span>{{model.logBusiness}}</span>
			</div>
			<div class="line">
				<span>操作：</span>
				<span>{{model.logAction}}</span>
			</div>
			<div class="line">
				<span>备注：</span>
				<span>{{model.logRemark}}</span>
			</div>
			<div class="line">
				<span>创建时间：</span>
				<span>{{model.createTime}}</span>
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
		onClose: function() {
			window.history.go(-1);
		}
	},
	mounted: function() {},
	beforeRouteEnter(to, from, next) {
		if (to.params.model == null) {
			next("/czrz");
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
		width: 5em;
		text-align: right;
		color: #333333;
	}
	> span:nth-of-type(2) {
		width: calc(100% - 6em);
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