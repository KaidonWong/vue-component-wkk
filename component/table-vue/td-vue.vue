<template>
	<div :style="styleObject">{{content}}</div>
</template>
<script>
export default {
	props: {
		width: Number,
		content: [String, Number]
	},
	computed: {
		styleObject: function() {
			return {
				width: this.width + "px",
				float: "left"
			};
		}
	}
};
</script>
<style lang="scss" scoped>
    @import 'table-common.scss';
    div {
        line-height: 1.5;
        padding: 8px;
        &+div {
            border-left: $border;
        }
    }
</style>

