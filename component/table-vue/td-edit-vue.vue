<template>
	<div class="container">
		<template v-if="isType1">
			<div>修改</div>
			<div>菜单权限</div>
			<div>项目权限</div>
		</template>
		<template v-if="isType2">
			<div>菜单权限</div>
			<div>项目权限</div>
		</template>
		<template v-if="isType3">
			<div>修改</div>
			<div>删除</div>
		</template>
	</div>
</template>
<script>
export default {
	props: {
		type: Number
	},
	data: function() {
		return {};
	},
	computed: {
		isType1: function() {
			return this.type == 1;
		},
		isType2: function() {
			return this.type == 2;
		},
		isType3: function() {
			return this.type == 3;
		}
	},

	methods: {}
};
</script>
<style lang="scss" scoped>
@import "table-common.scss";
.container {
	float: left;
    width: 17em;

	padding: 0.5em;
    text-align: center;
        line-height: 1;
	border-left: $border;
	> div {
        display: inline;
        
		padding: 0 0.2em;
		color: #640000;
	}
}
</style>