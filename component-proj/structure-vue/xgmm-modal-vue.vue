<template>
	<modal-base-vue title="修改密码" mWidth="22em" special="true" @xgmmevent="onClose">
		<template v-slot:content>
			<div class="line">
				<span>原密码：</span>
				<input-vue v-model="oldPassword" style="width: 12em"></input-vue>
				<div class="tip">{{tip['oldPassword']}}</div>
			</div>
			<div class="line">
				<span>新密码：</span>
				<input-vue v-model="newPassword" style="width: 12em"></input-vue>
				<div class="tip">{{tip['newPassword']}}</div>
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
import selectVue from "../../component/input-vue/select-vue.vue";
import buttonVue from "../../component/button-vue/button-vue.vue";

export default {
	data: function() {
		return {
			tip: {},
			oldPassword: "",
			newPassword: ""
		};
	},
	props: {},
	components: {
		"modal-base-vue": modalBaseVue,
		"select-vue": selectVue,
        "input-vue": inputVue,
        "button-vue": buttonVue
	},
	computed: {},
	methods: {
		onAdd: function() {
			let _this = this;
			this.axios({
				method: "post",
				url: "/apis/u/user/updatePassword",
				params: {
					newPassword: this.newPassword,
					oldPassword: this.oldPassword
				}
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.$Message.success("修改密码成功！");
					//关闭modal
					_this.$emit("xgmmevent", false);
					_this.$router.push({ path: `/login` });
				}
				if (data.code == 501 || data.code == 401) {
					_this.tip = data.data;
				}
			});
		},
		onClose: function() {
			//关闭modal
			this.$emit("xgmmevent", false);
		}
	},
	created: function() {}
};
</script>
<style lang="scss" scoped>
.line {
	> span:nth-of-type(1) {
		display: inline-block;
		width: 5em;
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