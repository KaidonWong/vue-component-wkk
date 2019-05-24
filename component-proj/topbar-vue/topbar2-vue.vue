<template>
	<div class="base-topbar clearfix">
		<div class="left">
			<div class="logo">
				<div class="pic-container">
					<img src="../../asset/topbar/logocloud.png" alt>
				</div>
			</div>
		</div>
		<div class="caidan" @click="onContract">
			<span class="iconfont icon-caidan"></span>
		</div>
		<div class="title">天亿达软件授权管理平台</div>
		<div class="user">
			<span class="iconfont icon-user"></span>
			<div class="submenu">
				<div @click="goTo('xgmm')">
					<span class="iconfont icon-user-settings-line"></span>
					修改密码
				</div>
				<div @click="goTo('login')">
					<span class="iconfont icon-logout"></span>
					退出登录
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {};
	},
	methods: {
		goTo: function(e) {
			let _this = this;
			if (e == "login") {
				this.$router.push({ path: `/login` });
				this.axios({
					method: "post",
					url: "apis/login/m/logout"
				}).then(function({ data }) {
					//退出登录需要清空用户
					_this.$store.dispatch("globalstate/setCurrentUser", {
						currentUser: null
					});
				});
			} else if (e == "xgmm") {
				//打开修改密码的modal
				this.$emit("xgmmevent", true);
			}
		},
		onContract: function() {
			this.$emit("contractevent");
		}
	}
};
</script>
<style lang="scss" src="./topbar2.scss" scoped>
</style>
