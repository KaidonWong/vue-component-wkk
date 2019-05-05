<template>
	<div class="baseDiv" :class="baseDivClass" @click="onClickBase">
		<span class="iconfont" :class="iconbefore"></span>
		<input type="text" @input="onInput($event)" @focus="onFocus" @blur="onBlur">
		<span class="iconfont icon-down"></span>
	</div>
</template>
<script>
export default {
	props: {
		iconbefore: String
	},
	data: function() {
		return {
			baseDivClass: {}
		};
	},
	methods: {
		onClickBase: function(e) {
			let target = e.currentTarget;
			let input = target.querySelector("input");
			input.focus();
		},
		onInput: function() {},
		onFocus: function() {
			this.baseDivClass = {
				focus: true
			};
		},
		onBlur: function() {
			this.baseDivClass = {
				focus: false
			};
		},
	}
};
</script>
<style lang="scss" scoped>
.baseDiv {
	display: inline-block;
	padding: 2px;
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

	input {
		outline: none;
		border: none;
	}
}
</style>
