<template>
	<div class="button" @click='onClick'>{{label}}</div>
</template>
<script>
export default {
	props: {
		label: String
    },
    methods: {
        onClick: function() {
            this.$emit('clickevent');
        }
    }
};
</script>
<style lang="scss" scoped>
.button {
	display: inline-block;
	padding: 0.2em 1em;
	border: 1px solid #d40e10;
	border-radius: 3px;
	color: #d40e10;
	&:hover {
		border-color: transparent;
        background-color: #d40e10;
        color: #ffffff;
        cursor: default;
	}
}
</style>
