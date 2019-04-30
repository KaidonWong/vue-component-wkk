<template>
	<div class="container" :class="status?'on':''" @click="onClick">
		<div class="onLabel">{{onLabel}}</div>
		<div class="offLabel">{{offLabel}}</div>
		<div class="knot"></div>
	</div>
</template>
<script>
export default {
	props: {
		status: Boolean,
		onLabel: String,
		offLabel: String
	},
	methods: {
		onClick: function() {
			this.$emit("inputevent");
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	position: relative;
	height: 1.4em;
	width: 50px;
	border-radius: 0.7em;
	background-color: #dddddd;
	transition: background-color 0.2s ease-in-out;
	.onLabel {
        position: absolute;
        top: 0.1em;
        left: 0.3em;
        font-size: 0.9em;
		color: #ffffff;
		opacity: 0;
	}
	.offLabel {
        position: absolute;
        top: 0.1em;
        right: 0.3em;
        font-size: 0.9em;
		color: #ffffff;
	}
	.knot {
		position: absolute;
		top: 0.15em;
		left: 0.15em;
		height: 1.1em;
		width: 1.1em;
		border-radius: 0.6em;
		background-color: #ffffff;
		transition: left 0.2s ease-in-out;
	}
	&.on {
		background-color: #2d8cf0;
		.knot {
			left: 30px;
		}
		.onLabel {
			opacity: 1;
		}
		.offLabel {
            opacity: 0;
		}
	}
}
</style>
