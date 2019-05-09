<template>
	<div class="container">
		<template v-if="isType1">
			<div @click.stop="onEdit(1)">修改</div>
			<div @click.stop="onEdit(2)">菜单权限</div>
			<div @click.stop="onEdit(3)">项目权限</div>
		</template>
		<template v-if="isType2">
			<div @click.stop="onEdit(1)">修改</div>
			<div @click.stop="onEdit(2)">项目权限</div>
		</template>
		<template v-if="isType3">
			<div @click.stop="onEdit(1)">修改</div>
			<div @click.stop="onEdit(2)">获取权限</div>
		</template>
	</div>
</template>
<script>
export default {
	props: {
        type: Number,
		lineid: [String, Number]
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
	methods: {
		onEdit: function(e) {
			this.$emit("editevent",{id:this.lineid,type:e});
		}
	}
};
</script>
<style lang="scss" scoped>
@import "table-common.scss";
.container {
	float: left;
	width: 17em;
	padding: 0.8em;
	text-align: center;
	line-height: 1;
	border-left: $border;
	> div {
		display: inline;
		padding: 0 0.2em;
		color: #640000;
		&:hover {
			color: #d40e10;
			cursor: pointer;
		}
	}
}
</style>