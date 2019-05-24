<template>
	<div class="login-bg">
		<div class="login-modal">
			<div class="surround">
				<div class="front">
					<div class="logo">
						<div class="pic-container">
							<img src="../../asset/topbar/logocloud.png" alt>
						</div>
					</div>
					<span>天亿达软件授权管理平台</span>
				</div>
				<div class="side"></div>
			</div>
			<div style="height: 4em"></div>
			<div class="line">
				<input-vue v-model="userName" size="large" placeholder="用户名" icon="ios-contact"></input-vue>
				<div id="name-tip">用户名不能为空！</div>
			</div>
			<div class="line">
				<input-vue v-model="password" size="large" placeholder="密码" icon="md-key" type="password"></input-vue>
				<div id="pass-tip">密码不能为空！</div>
			</div>
			<div class="line">
				<button-vue label="提交" color="#009688" @clickevent="onSubmit" style="width: 100%;"></button-vue>
				<div id="wrong-tip">用户名与密码错误！</div>
			</div>
		</div>
	</div>
</template>
<script>
import inputVue from "../../iview-src/components/input";
import buttonVue from "../../component/button-vue/button2-vue.vue";
export default {
	components: {
		"input-vue": inputVue,
		"button-vue": buttonVue
	},
	data: function() {
		return {
			userName: "",
			password: ""
		};
	},
	methods: {
		onSubmit: function() {
            let _this = this;
			if (this.name == "") {
				document.querySelector("#name-tip").style.visibility =
					"visible";
				return;
			}
			if (this.password == "") {
				document.querySelector("#pass-tip").style.visibility =
					"visible";
				return;
			}
			this.axios({
				method: "post",
				url: "/apis/login/m/login",
				params: {
					userName: this.userName,
					password: this.password
				}
			})
				.then(function({data}) {
					if (data.code == 0) {
                        _this.$store.dispatch("globalstate/setCurrentUser", {
							currentUser: data.data
						});
						_this.$router.push({ path: `/sjtj` });
					} else {
						document.querySelector("#wrong-tip").style.visibility =
							"visible";
					}
				})
				.catch(function(error) {
					// console.log(error);
				});
		}
	}
};
</script>
<style lang="scss" scoped>
@import "../../common/pic-container.scss";
.login-bg {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: url(../../asset/login/web_login_bg.jpg) no-repeat;
	background-size: 100% 100%;
	.login-modal {
		margin: 10em auto;
		width: 20em;
		height: 22em;
		border-radius: 0.5em;
		background-color: #ffffff;
		.surround {
			position: relative;
			top: 2em;
			left: -1.2em;
			.front {
				width: 96%;
				font-size: 1.2em;
				color: #ffffff;
				background-color: #009688;
				line-height: 3;
				.logo {
					float: left;
					width: 2em;
					margin: 0.8em;
					@include pic-container(70%);
				}
			}
			.side {
				width: 1.2em;
				height: 0.8em;
				background: url(../../asset/login/aiwrap.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.line {
			width: 70%;
			margin: 0.5em auto;
		}
	}
	#name-tip,
	#pass-tip,
	#wrong-tip {
		visibility: hidden;
		color: #831616;
		font-size: 0.9em;
	}
}
</style>
