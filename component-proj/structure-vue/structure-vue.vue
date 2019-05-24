<template>
	<div class="base-structure clearfix">
		<topbar-vue @contractevent="onContract" @xgmmevent="toggleXgmm"></topbar-vue>
		<sidebar-vue :contract="contract"></sidebar-vue>
		<router-view class="section" :class="{contract:contract}" name="section"></router-view>
		<transition name="fade">
			<router-view class="login-page" name="login"></router-view>
		</transition>
        <xgmm-modal-vue v-if="xgmmShow" @xgmmevent="toggleXgmm"></xgmm-modal-vue>
	</div>
</template>
<script>
import topbarVue from "../topbar-vue/topbar2-vue.vue";
import sidebarVue from "../sidebar-vue/sidebar-vue.vue";
import xgmmModalVue from "./xgmm-modal-vue.vue";
export default {
	components: {
		"topbar-vue": topbarVue,
        "sidebar-vue": sidebarVue,
        "xgmm-modal-vue": xgmmModalVue
	},
	data: function() {
		return {
            xgmmShow: false,
			contract: false,
		};
	},
	methods: {
		onContract: function() {
			this.contract = !this.contract;
        },
        toggleXgmm: function(e) {
            this.xgmmShow = e;
        },
        onUpdateUser: function(e) {
            console.log(e);
        }
	}
};
</script>
<style lang="less">
//iview 组件的样式没有解耦
@import "../../iview-src/styles/index.less";
</style>
<style lang="scss" scoped>
.base-structure {
	width: 100%;
	height: 100%;
}
.section {
	float: left;
	width: calc(100% - 14em);
	height: 100%;
	&.contract {
		width: calc(100% - 3.8em);
	}
}
</style>

