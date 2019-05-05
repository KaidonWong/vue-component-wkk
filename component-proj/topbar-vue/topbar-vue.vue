<template>
	<div class="topbar clearfix">
		<div class="logo">
			<div class="pic-container" ref="topbarpic">
				<img src="../../asset/topbar/logo.png" alt>
			</div>
		</div>
		<div class="logoright" :style="HeightStyle">
			<div class="avatar" :style="WidthStyle">
				<div class="pic-container">
					<img src="../../asset/topbar/avatar.jpg" alt>
				</div>
			</div>
			<div class='name'>{{user.name}}</div>
			<button-vue label="申请授权" @clickevent="onButton"></button-vue>
		</div>
	</div>
</template>
<script>
import buttonRedVue from "../../component/button-vue/button-red-vue.vue";
export default {
	props: {
		user: Object
	},
	data: function() {
		return {
			HeightStyle: {},
			WidthStyle: {}
		};
	},
	components: {
		"button-vue": buttonRedVue
	},
	methods: {
		onButton: function() {
			console.log("a");
		}
	},
	mounted: function() {
		let dom = this.$refs.topbarpic;
		let h = dom.offsetHeight;
		let w = h / 2;
		this.HeightStyle = {
			height: `${h}px`
		};
		this.WidthStyle = {
			width: `${w}px`
		};
	}
};
</script>
<style lang="scss" scoped>
.topbar {
	box-shadow: 0 0 0.3em #666666;
	padding: 0.5em 1em;
	.logo {
		float: left;
		width: 30%;
		max-width: 140px;
		> .pic-container {
			position: relative;
			padding-bottom: 35%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
	}
	.logoright {
		float: right;
		width: 70%;
		max-width: 400px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.avatar {
			> .pic-container {
				position: relative;
				padding-bottom: 100%;
				img {
					border-radius: 50%;
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
        }
        .name {
            margin-right: 2em;
            color: #666666;

        }
	}
}
</style>