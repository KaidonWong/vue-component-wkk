<template>
	<div class="basediv" :class="baseDivClass">
		<span v-if="hasIconBefore" class="iconfont" :class="iconbefore"></span>
		<input
			type="text"
			:value="m_value"
			:placeholder="placeholder"
			@input="onInput($event)"
			@focus="onFocus"
			@blur="onBlur"
		>
		<span :style="closeStyle" class="iconfont icon-Closewithcircle" @click="onClose"></span>
		<span v-if="hasIconAfter" class="iconfont" :class="iconafter"></span>
	</div>
</template>
<script>
export default {
	model: {
		prop: "m_value",
		event: "m_event"
	},
	props: {
		m_value: String,
		placeholder: String,
		iconbefore: String,
		iconafter: String
	},
	data: function() {
		return {
			baseDivClass: {},
			closeStyle: {
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
			this.$emit("m_event", inputVal);
			if (inputVal == "") {
				this.closeStyle = {
					visibility: "hidden"
				};
			} else {
				this.closeStyle = {
					visibility: "visible"
				};
			}
		},
		onClose: function(e) {
			this.$emit("m_event", "");
		},
		onFocus: function(e) {
			this.baseDivClass = {
				focus: true
			};
			if (this.m_value != "") {
				this.closeStyle = {
					visibility: "visible"
				};
			}
		},
		onBlur: function(e) {
			this.baseDivClass = {
				focus: false
			};
			setTimeout(() => {
				this.closeStyle = {
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
	padding: 5px;
	border: 1px solid #dcdee2;
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
		width: 9em;
		outline: none;
		border: none;
	}
}
</style>