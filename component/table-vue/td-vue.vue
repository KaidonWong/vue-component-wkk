<template>
	<div :style="styleObject">{{content}}</div>
</template>
<script>
export default {
	props: {
		width: String,
		content: [String, Number]
	},
	computed: {
		styleObject: function() {
			return {
				width: this.width,
				float: "left"
			};
		}
	}
};
</script>
<style lang="scss" scoped>
    @import 'table-common.scss';
    div {
        padding: 0.8em;
        line-height: 1;
        height: 2.5em;
        color: #333;
        overflow: hidden;
        &+div {
            border-left: $border;
        }
    }
</style>

