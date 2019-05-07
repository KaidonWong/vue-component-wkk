<template>
	<div class="basediv" :class="baseDivClass">
		<span v-if="hasIconBefore" class="iconfont" :class="iconbefore"></span>
		<input
			type="text"
			:value="defaultVal"
			:placeholder="placeholder"
			@input="onInput($event)"
			@focus="onFocus"
			@blur="onBlur"
		>
		<span :style="closeDivStyle" class="iconfont icon-Closewithcircle" @click="onClose"></span>
		<span v-if="hasIconAfter" class="iconfont" :class="iconafter"></span>
	</div>
</template>
<script>
export default {
	props: {
		placeholder: String,
		default: String,
		iconbefore: String,
		iconafter: String
	},
	data: function() {
		return {
			defaultVal: this.default,
			baseDivClass: {},
			closeDivStyle: {
				visibility: "hidden"
			}
		};
	},
	computed: {
		hasIconBefore: function() {
			if (typeof this.iconbefore == "undefined") {
				return false;
			}
			return true;
		},
		hasIconAfter: function() {
			if (typeof this.iconafter == "undefined") {
				return false;
			}
			return true;
		}
	},
	methods: {
		onInput: function(e) {
			let inputVal = e.target.value;
			this.defaultVal = inputVal;
			this.$emit("inputevent", inputVal);
		},
		onClose: function(e) {
			this.defaultVal = "";
			this.$emit("inputevent", "");
			e.stopPropagation();
		},
		onFocus: function(e) {
			this.baseDivClass = {
				focus: true
			};
			this.closeDivStyle = {
				visibility: "visible"
			};
		},
		onBlur: function(e) {
			this.baseDivClass = {
				focus: false
			};
			setTimeout(() => {
				this.closeDivStyle = {
					visibility: "hidden"
				};
			}, 100);
		}
	}
};
</script>
<style lang="scss" scoped>
.basediv {
    display: inline-block;
	padding: 3px;
	border: 1px solid #cccccc;
    border-radius: 3px;
    transition: box-shadow 0.1s;
	&.focus {
		border: 1px solid transparent;
		box-shadow: 0 0 4px #2d8cf0;
	}
	span {
		color: #666666;
		vertical-align: middle;
    }
    .icon-Closewithcircle {
        color: #aaaaaa;
    }
	input {
		outline: none;
		border: none;
	}
}
</style>