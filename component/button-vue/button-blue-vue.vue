<template>
	<div class="button" @click="onClick" @mouseenter="onEnter">
		<span v-if="hasIcon" class="iconfont" :class='icon'></span>
		{{label}}
	</div>
</template>
<script>
export default {
	props: {
        label: String,
        icon: String,
        color: String,
    },
    computed: {
        hasIcon: function() {
            if(typeof this.icon == 'undefined') {
                return false;
            }
            return true;
        }
    },
	methods: {
		onClick: function() {
			this.$emit("clickevent");
		}
	}
};
</script>
<style lang="scss" scoped>
.button {
	display: inline-block;
	padding: 0.3em 1em;
	border: 1px solid #0081c2;
	border-radius: 3px;
    color: #0081c2;
    line-height: 1;
	&:hover {
		border-color: transparent;
		background-color: #0081c2;
		color: #ffffff;
		cursor: default;
	}
}
</style>
