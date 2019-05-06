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
				width: this.width + "em",
				float: "left"
			};
		}
	}
};
</script>
<style lang="scss" scoped>
    @import 'table-common.scss';
    div {
        padding: 0.5em;
        line-height: 1;
        color: #333;
        overflow: hidden;
        &+div {
            border-left: $border;
        }
    }
</style>

