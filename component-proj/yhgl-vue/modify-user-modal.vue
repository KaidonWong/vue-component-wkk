<template>
	<modal-base-vue title="修改用户">
		<template v-slot:content>
			<div class="line">
				<span>名称：</span>
				<input-vue v-model="myModel.userName" style="width: 12em"></input-vue>
				<div class="tip">{{tip['userName']}}</div>
			</div>
			<div class="line">
				<span>联系电话：</span>
				<input-vue v-model="myModel.userPhone" style="width: 12em"></input-vue>
				<div class="tip">{{tip['userPhone']}}</div>
			</div>
			<div class="line">
				<span>岗位：</span>
				<input-vue v-model="myModel.userPost" style="width: 12em"></input-vue>
				<div class="tip">{{tip['userPost']}}</div>
			</div>
			<div class="line">
				<span>真实姓名：</span>
				<input-vue v-model="myModel.userRealName" style="width: 12em"></input-vue>
				<div class="tip">{{tip['userRealName']}}</div>
			</div>
			<!-- <div class="line">
			<span>密码：</span>
			<input-vue v-model="myModel.password" type="password" style="width: 12em"></input-vue>
			<div class="tip">{{tip['password']}}</div>
			</div>-->
			<div class="line">
				<span>角色：</span>
				<select-vue v-model="myModel.roleId" :options="myAllRole" style="width: 12em"></select-vue>
			</div>
			<div class="line">
				<span>创建时间：</span>
				<span>{{myModel.createTime}}</span>
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
			myModel: {}
		};
	},
	props: {
		model: Object,
		allRole: Array
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"select-vue": selectVue,
		"input-vue": inputVue,
		"button-vue": buttonVue
	},
	computed: {
		myAllRole: function() {
			let ret = new Array(this.allRole.length);
			for (let i = 0, len = this.allRole.length; i < len; i++) {
				ret[i] = {
					label: this.allRole[i].roleName,
					value: this.allRole[i].id
				};
			}
			return ret;
		}
	},
	methods: {
		onAdd: function() {
			let _this = this;
			this.axios({
				method: "put",
				url: "/apis/u/user",
				data: {
					uid: this.myModel.uid,
					roleId: this.myModel.roleId,
					userName: this.myModel.userName,
					userPhone: this.myModel.userPhone,
					userPost: this.myModel.userPost,
					userRealName: this.myModel.userRealName
				}
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.$Message.success("用户修改成功！");
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
	created: function() {
		Object.assign(this.myModel, this.model); //深复制
	},
	beforeRouteEnter(to, from, next) {
		if (to.params.allRole == null) {
			next("/yhgl");
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