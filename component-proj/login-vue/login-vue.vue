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
				<input-vue v-model="name" size="large" placeholder="用户名" icon="ios-contact"></input-vue>
			</div>
			<div class="line">
				<input-vue v-model="password" size="large" placeholder="密码" icon="md-key" type="password"></input-vue>
			</div>
            <div class="line">
                <button-vue label="提交" color="#009688" @clickevent="onSubmit" style="width: 100%;"></button-vue>
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
            name: "",
            password: ""
        }
    },
    methods: {
        onSubmit: function() {
            this.$router.push({ path: `/sjtj` });
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
					width: 3em;
					margin: 0.4em;
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
            margin: 1em auto;
        }
	}
}
</style>
