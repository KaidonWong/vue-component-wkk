<template>
	<modal-base-vue title="修改项目" @addevent="onAdd">
		<template v-slot:content>
			<div class="line">
				<span>名称：</span>
				<input-vue v-model="name" style="width: 12em"></input-vue>
				<div class="tip">{{tip['projectName']}}</div>
			</div>
			<div class="line">
				<span>编号：</span>
				<input-vue v-model="no" style="width: 12em"></input-vue>
				<div class="tip">{{tip['projectNumber']}}</div>
			</div>
			<div class="line">
				<span>创建时间：</span>
				<span>{{model.createTime}}</span>
			</div>
			<div class="line">
				<span style="vertical-align: top;">公钥：</span>
				<input-vue :value="model.publicKey" type="textarea" :rows="5" readonly style="width: 14em"></input-vue>
			</div>
			<div class="line">
				<span style="vertical-align: top;">私钥：</span>
				<input-vue :value="model.privateKey" type="textarea" :rows="5" readonly style="width: 14em"></input-vue>
			</div>
		</template>
		<template v-slot:footer>
			<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onAdd"></button-vue>
			<button-vue label="取消" icon="icon-withdraw" color="#007d71" @clickevent="onClose"></button-vue>
		</template>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import inputVue from "../../iview-src/components/input";
import buttonVue from "../../component/button-vue/button-vue.vue";

export default {
	data: function() {
		return {
			name: "",
			no: "",
			tip: {}
		};
	},
	props: {
		model: Object
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"input-vue": inputVue,
		"button-vue": buttonVue
	},
	computed: {},
	methods: {
		onAdd: function() {
			let _this = this;
			this.axios({
				method: "put",
				url: "/apis/p/project",
				data: {
					id: _this.model.id,
					projectName: _this.name,
					projectNumber: _this.no
				}
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.$Message.success("角色修改成功！");
					window.history.go(-1);
					_this.$emit("addsuccess");
				}
				if (data.code == 501 || data.code == 401) {
					_this.tip = data.data;
				}
			});
		},
		onClose: function() {
			window.history.go(-1);
		}
	},
	mounted: function() {
		this.name = this.model.projectName;
		this.no = this.model.projectNumber;
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
}
</style>