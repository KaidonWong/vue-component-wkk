<template>
	<topbar-vue :user="user"></topbar-vue>
</template>
<script>
import topbarVue from "../../component-proj/topbar-vue/topbar-vue.vue";
export default {
    data: function() {
        return {
            user: {
				name: "王开恺",
				id: "11111"
			}
        }
    },
	components: {
		"topbar-vue": topbarVue
	},
};
</script>
<style lang="scss" scoped>
</style>
