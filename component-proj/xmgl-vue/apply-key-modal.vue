<template>
	<modal-base-vue title="申请授权">
		<template v-slot:content>
			<div class="line">
				<span>项目：</span>
				<span>{{model.projectName}}（{{model.projectNumber}}）</span>
			</div>
			<div class="line">
				<span>设备信息文件：</span>
				<upload-vue @filechange="onFile"></upload-vue>
				<div class="tip">{{tip['projectAuthorize.file']}}</div>
			</div>
			<div class="line">
				<span>时间范围：</span>
				<date-picker-vue
					v-model="dateTimeRange"
					type="daterange"
					split-panels
					placeholder
					style="width: 13em"
				></date-picker-vue>
				<div class="tip">{{tip['startTime']}}</div>
				<div class="tip">{{tip['endTime']}}</div>
			</div>
			<div class="line">
				<span>申请人姓名：</span>
				<input-vue v-model="params.applicant" style="width:13em"></input-vue>
				<div class="tip">{{tip['applicant']}}</div>
			</div>
			<div class="line">
				<span>申请人电话：</span>
				<input-vue v-model="params.applicantPhone" style="width:13em"></input-vue>
				<div class="tip">{{tip['applicantPhone']}}</div>
			</div>
			<div class="line">
				<span>详细地址：</span>
				<input-vue v-model="params.addressDetail" style="width:13em"></input-vue>
				<div class="tip">{{tip['addressDetail']}}</div>
			</div>
		</template>
		<template v-slot:footer>
			<button-vue label="下载密钥" color="#007d71" @clickevent="onAdd"></button-vue>
		</template>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import inputVue from "../../iview-src/components/input";
import datePickerVue from "../../iview-src/components/date-picker";
import uploadVue from "../../component/upload-vue/upload-vue.vue";
import buttonVue from "../../component/button-vue/button-vue.vue";
export default {
	data: function() {
		return {
			params: {},
			dateTimeRange: [],
			tip: {},
			file: null
		};
	},
	props: {
		model: Object
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"date-picker-vue": datePickerVue,
		"input-vue": inputVue,
		"button-vue": buttonVue,
		"upload-vue": uploadVue
	},
	computed: {},
	methods: {
		onFile: function(e) {
			this.file = e;
		},
		onAdd: function() {
			let _this = this;
			Object.assign(this.params, {
				projectId: this.model.id
			});
			if (this.dateTimeRange[0] != "") {
				Object.assign(this.params, {
					startTime: this.dateTimeRange[0].Format(
						"yyyy-MM-dd hh:mm:ss"
					),
					endTime: this.dateTimeRange[1].Format("yyyy-MM-dd hh:mm:ss")
				});
			}
			let formData = new FormData();
			formData.append("file", this.file);
			this.axios({
				method: "post",
				url: "/apis/a/authorize/projectAuthorize",
				params: this.params,
				data: formData
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.$Message.success("获取授权成功！");
                    window.history.go(-1);
                    window.open(`${data.data.path}`, "_blank");
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
	created: function() {},
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
		width: 7em;
		text-align: right;
	}
	width: 80%;
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

