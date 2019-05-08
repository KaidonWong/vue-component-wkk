<template>
	<div class="basediv clearfix">
		<div class="input-border" :style="borderStyle">
			<input
				type="text"
				:value="value"
				placeholder="输入关键词"
				@focus="onFocus"
				@blur="onBlur"
				@input="onInput"
			>
		</div>
		<div class="search-icon" @click="onSubmit">
			<span class="iconfont icon-search"></span>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			borderStyle: {
				"border-color": "#cccccc"
			},
			value: ""
		};
	},
	methods: {
		onFocus: function() {
			this.borderStyle = {
				"border-color": "#009688"
			};
		},
		onBlur: function() {
			this.borderStyle = {
				"border-color": "#cccccc"
			};
        },
        onInput: function(e) {
            this.value = e.target.value;
        },
		onSubmit: function() {
            this.$emit('searchevent',this.value);
        }
	}
};
</script>
<style lang="scss" scoped>
.basediv {
	height: 2em;
	input {
		font-size: 1em;
        line-height: 1.8;
        background-color: transparent;
		outline: none;
		border: none;
		color: #666666;
	}
	.input-border {
		float: left;
		height: 100%;
		padding: 0 1em;
		border: 1px solid;
		border-radius: 1em 0 0 1em;
		transition: border-color 0.2s ease-in-out;
	}
	.search-icon {
		float: left;
		height: 100%;
		padding: 0.3em 1em;
		background-color: #009688;
		border-radius: 0 1em 1em 0;
		span {
			font-size: 1.5em;
			line-height: 1;
			color: #ffffff;
		}
	}
}
</style>
