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
	border: 1px solid #0081c2;
	border-radius: 3px;
	color: #0081c2;
	&:hover {
		border-color: transparent;
        background-color: #0081c2;
        color: #ffffff;
        cursor: default;
	}
}
</style>
