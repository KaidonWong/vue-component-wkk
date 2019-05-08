<template>
	<div class="button" @click="onClick" :style="buttonStyle">
		<span v-if="hasIcon" class="iconfont" :class="icon"></span>
		{{label}}
	</div>
</template>
<script>
export default {
	data: function() {
		return {
            buttonStyle: {
                "background-color": this.color
            }
        };
	},
	props: {
		label: String,
		icon: String,
		color: String
	},
	computed: {
		hasIcon: function() {
			if (typeof this.icon == "undefined") {
				return false;
			}
			return true;
		}
	},
	methods: {
		onClick: function() {
			this.$emit("clickevent");
		}
	},
	mounted: function() {
		if (typeof this.color == "undefined") {
			this.color = "#0081c2";
		}
	}
};
</script>
<style lang="scss" scoped>
.button {
	display: inline-block;
	padding: 0.5em 0.5em;
	border-radius: 3px;
	line-height: 1;
    color: #ffffff;
    opacity: 0.85;
	&:hover {
		cursor: default;
		transform: translate3d(0, -1px, 0);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        opacity: 1;
	}
}
</style>
