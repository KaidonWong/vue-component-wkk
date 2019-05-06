<template>
	<div>
		<div class="topbar clearfix" @click="onClickTopbar">
			<div class="logo">
				<div class="pic-container" ref="topbarpic">
					<img src="../../asset/topbar/logo.png" alt>
				</div>
			</div>
			<div v-if="horizonMenuShow" class="menus clearfix" :style="HeightStyle">
				<div class="menu" v-for="(menu,index) of menus" :key="index" :to="menu.to">{{menu.label}}</div>
			</div>
			<div class="logoright" :style="HeightStyle">
				<div class="avatar" :style="WidthStyle">
					<div class="pic-container">
						<img src="../../asset/topbar/avatar.jpg" alt>
					</div>
				</div>
				<div class="name">{{user.name}}</div>
			</div>
		</div>
		<div style="position: relative;height: 14em;overflow: hidden;">
			<div
				v-if="!horizonMenuShow"
				class="vertical-menus"
				:class="verticalActiveClass"
				@click="onClickTopbar"
			>
				<div class="menu" v-for="(menu,index) of menus" :key="index" :to="menu.to">{{menu.label}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		user: Object,
		menus: Array
	},
	data: function() {
		return {
			ready: false,
			HeightStyle: {},
			WidthStyle: {},
			verticalActiveClass: {}
		};
	},
	computed: {
		windowWidth: function() {
			return this.$store.getters["globalstate/getWindowWidth"];
		},
		horizonMenuShow: function() {
			//true: desktop  false: phone
			this.adjustStyle();
			return this.$store.getters["globalstate/getMode"];
		}
	},
	components: {
		// "button-vue": buttonRedVue
	},
	methods: {
		adjustStyle: function() {
			if (this.ready == false) {
				return;
			}
			let dom = this.$refs.topbarpic;
			let h = dom.offsetHeight;
			let w = h / 1.3;
			this.HeightStyle = {
				height: `${h}px`
			};
			this.WidthStyle = {
				width: `${w}px`
			};
		},
		onClickTopbar: function(e) {
            let target = e.target;
            let to = target.attributes.getNamedItem('to');
            if(to != null) {
                this.$router.push({ path: `/${to.value}`})
            }
			if (this.verticalActiveClass.active == true) {
				this.verticalActiveClass = {
					active: false
				};
			} else {
				this.verticalActiveClass = {
					active: true
				};
			}
		}
	},
	mounted: function() {
		this.ready = true;
		this.adjustStyle();
	}
};
</script>
<style lang="scss" src='./topbar.scss' scoped>
</style>