<template>
	<li class="level1" :class="submenuShowClass">
		<a :href="url" @click="onClick">
			<span class="iconfont" :class="icon"></span>
			{{name}}
			<span v-if="hasSubmenu" class="iconfont icon-down"></span>
		</a>
		<ul class="submenu" v-if="hasSubmenu" :style="submenuHeightStyle">
			<li class="level2" v-for="(item,index) of submenu" :key="index">
				<a :href="item.url">{{item.name}}</a>
			</li>
		</ul>
	</li>
</template>
<script>
export default {
	props: {
		name: String,
		url: String,
		icon: String,
		submenu: Array
	},
	computed: {
		expandState: function() {
			let a = this.$store.getters['collapse/getCollapseState'](this.name);
			return a;
		},
		hasSubmenu: function() {
			if (this.submenu == null) {
				return false;
			}
			return true;
		},
		submenuShowClass: function() {
			return {
				expand: this.expandState
			};
		},
		submenuHeightStyle: function() {
			if (this.expandState == false) {
				return {
					height: "0px"
				};
			} else {
				let height = 46 * this.submenu.length;
				return {
					height: `${height}px`
				};
			}
		}
	},
	methods: {
		onClick: function() {
			if (typeof this.submenu == "undefined") {
				return false;
			}
			if (this.expandState == false) {
				this.$store.dispatch("collapse/soloCollapseToggle", {
					name: this.name
				});
			} else {
				this.$store.dispatch("collapse/removeCollapseToggle", {
					name: this.name
				});
			}
		}
	}
};
</script>
<style lang="scss" src='./li.scss' scoped>
</style>

