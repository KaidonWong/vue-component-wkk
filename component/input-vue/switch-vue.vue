<template>
	<div class="container" :class="statusSwitch?'on':''" @click="onClick">
		<div class="onLabel">{{onLabel}}</div>
		<div class="offLabel">{{offLabel}}</div>
		<div class="knot"></div>
	</div>
</template>
<script>
export default {
    model: {
        prop: "status",
        event: "inputevent"
    },
	props: {
		status: Boolean,
		onLabel: String,
		offLabel: String
    },
    data: function(){
        return {
            statusSwitch: this.status
        }
    },
	methods: {
		onClick: function() {
            this.statusSwitch = !this.statusSwitch;
			this.$emit("inputevent",this.statusSwitch);
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	position: relative;
	height: 1.4em;
	width: 3em;
	border-radius: 0.7em;
	background-color: #dddddd;
	transition: background-color 0.2s ease-in-out;
	.onLabel {
        position: absolute;
        top: 0.1em;
        left: 0.5em;
        font-size: 0.9em;
		color: #ffffff;
		opacity: 0;
	}
	.offLabel {
        position: absolute;
        top: 0.1em;
        right: 0.5em;
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
			left: 1.7em;
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
