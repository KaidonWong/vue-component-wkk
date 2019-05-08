<template>
	<div class="button" @click.stop="onClick" @mouseenter="onEnter" @mouseleave="onLeave" :style="buttonStyle">
		<span v-if="hasIcon" class="iconfont" :class="icon"></span>
		{{label}}
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			buttonStyle: {
				"border-color": this.color,
				color: this.color
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
		},
		onEnter: function() {
			this.buttonStyle = {
				"border-color": "transparent",
				"background-color": this.color,
				color: "#ffffff"
			};
		},
		onLeave: function() {
			this.buttonStyle = {
				"border-color": this.color,
				color: this.color,
				"background-color": "#ffffff"
			};
		}
    },
    mounted: function() {
        if(typeof this.color == "undefined") {
            this.color = "#0081c2";
        }
    }
};
</script>
<style lang="scss" scoped>
.button {
	display: inline-block;
	padding: 0.3em 0.5em;
	// border: 1px solid #0081c2;
	border: 1px solid;
	border-radius: 3px;
	color: #0081c2;
	line-height: 1;
	&:hover {
		cursor: default;
	}
}
</style>
