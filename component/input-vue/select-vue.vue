<template>
	<div class="basediv" tabindex="0" :class="baseDivClass" @click="onClickBase($event)" @blur="onBlur">
		<span v-if="hasIconBefore" class="iconfont" :class="iconbefore"></span>
        <div class="simu-input">{{selected.label}}</div>
		<span class="iconfont icon-down"></span>
		<div class="options">
			<div
				class="option"
				v-for="(item,index) of options"
				:key="index"
				@click.stop="onClickOption(item)"
			>{{item.label}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		iconbefore: String,
		options: Array
	},
	data: function() {
		return {
			baseDivClass: {
				focus: false
			},
			selected: {}
		};
	},
	computed: {
		hasIconBefore: function() {
			if (typeof this.iconbefore == "undefined") {
				return false;
			}
			return true;
		}
	},
	methods: {
		onClickBase: function(e) {
			this.baseDivClass.focus = !this.baseDivClass.focus;
		},
		onClickOption: function(e) {
            this.selected = e;
            this.$emit("inputevent", this.selected);
		},
		onBlur: function(e) {
            this.baseDivClass.focus = false;
        }
	}
};
</script>
<style lang="scss" scoped>
.basediv {
	position: relative;
	display: inline-block;
	padding: 2px;
	border: 1px solid #cccccc;
	border-radius: 3px;
	transition: box-shadow 0.1s;
    outline: none;
    line-height: 1.2;
    .simu-input {
        display: inline-block;
        width: 100px;
        color: #444;
        font-size: 0.9em;
    }
	.icon-down {
        display: inline-block;
        transform-origin: 50% 45%;
		transition: transform 0.1s;
	}
	&.focus {
		border: 1px solid transparent;
		box-shadow: 0 0 4px #2d8cf0;
		.icon-down {
			transform: rotate(180deg);
		}
		.options {
			display: block;
		}
	}
	span {
		color: #666666;
		vertical-align: middle;
	}
	input {
		color: #444;
		outline: none;
		border: none;
	}
	.options {
		display: none;
		overflow-y: auto;
		position: absolute;
		top: 1.8em;
		width: 98%;
		max-height: 100px;
		box-shadow: 0 0 1px #aaaaaa;
		padding: 0.2em 0;
		.option {
			color: #444;
			font-size: 0.9em;
			padding: 0.2em;
			padding-left: 0.5em;
			&:hover {
				background-color: #eeeeee;
			}
		}
	}
}
</style>
