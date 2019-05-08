<template>
	<div class="box" @click="onClick" :class="boxClass">
		<span class="fill iconfont icon-check"></span>
	</div>
</template>
<script>
export default {
    props: {
        status: Boolean,
        item: Object
    },
	data: function() {
		return {
			boxClass: {
				on: false
			}
		};
    },
    watch: {
        status: function(val) {
            this.boxClass.on = val;
            this.$emit('boxevent',this.boxClass.on,this.item);
        }
    },
	methods: {
		onClick: function() {
            this.boxClass.on = !this.boxClass.on;
            this.$emit('boxevent',this.boxClass.on,this.item);
		}
	}
};
</script>
<style lang="scss" scoped>
.box {
	height: 0.8em;
	width: 0.8em;
	box-shadow: 0 0 1px #666666;
	background-color: #eeeeee;
	transition: background-color 0.2s ease-in-out;
	.fill {
		display: inline-block;
		position: relative;
		top: -0.1em;
		left: -0.1em;
		color: #ffffff;
		transform: scale(0);
		transition: transform 0.2s ease-in-out;
	}
	&.on {
		background-color: #007d71;
		.fill {
			transform: scale(0.7);
		}
	}
}
</style>
