<template>
	<textarea
		:class="baseDivClass"
		:value="defaultVal"
		:placeholder="placeholder"
        :rows="rowsNumber"
		@input="onInput($event)"
		@focus="onFocus"
		@blur="onBlur"
	></textarea>
</template>
<script>
export default {
	props: {
		placeholder: String,
        default: String,
        rows: [Number,String],
	},
	data: function() {
		return {
			defaultVal: this.default,
            baseDivClass: {},
            rowsNumber: this.rows,
		};
	},
	computed: {},
	methods: {
		onInput: function(e) {
			let inputVal = e.target.value;
			this.defaultVal = inputVal;
			this.$emit("inputevent", inputVal);
		},
		onFocus: function(e) {
			this.baseDivClass = {
				focus: true
			};
		},
		onBlur: function(e) {
			this.baseDivClass = {
				focus: false
			};
		}
	}
};
</script>
<style lang="scss" scoped>
textarea {
    outline: none;
	border: 1px solid #cccccc;
	border-radius: 3px;
	transition: box-shadow 0.1s;
	&.focus {
		border: 1px solid transparent;
		box-shadow: 0 0 2px #2d8cf0;
	}
}
</style>