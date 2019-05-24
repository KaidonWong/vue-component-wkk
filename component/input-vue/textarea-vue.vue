<template>
	<textarea
		:class="baseDivClass"
		:value="inputValue"
		:placeholder="placeholder"
        :rows="rows"
		@input="onInput($event)"
		@focus="onFocus"
		@blur="onBlur"
	></textarea>
</template>
<script>
export default {
    model: {
        prop: 'inputVal',
        event: 'inputevent'
    },
	props: {
		placeholder: String,
        inputVal: String,
        rows: [Number,String],
	},
	data: function() {
		return {
			inputValue: this.inputVal,
            baseDivClass: {},
		};
	},
	computed: {},
	methods: {
		onInput: function(e) {
			this.inputValue = e.target.value;
			this.$emit("inputevent", this.inputValue);
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
    width: 15em;
	border: 1px solid #cccccc;
	border-radius: 3px;
	transition: box-shadow 0.1s;
	&.focus {
		border: 1px solid transparent;
		box-shadow: 0 0 2px #2d8cf0;
	}
}
</style>