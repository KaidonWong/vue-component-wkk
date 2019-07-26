<template>
	<div class="container">
		<template v-if="isQxfp">
			<div @click.stop="onEdit(1)">修改</div>
			<div @click.stop="onEdit(2)">项目权限</div>
		</template>
		<template v-if="isXmgl">
			<div @click.stop="onEdit(1)">修改</div>
			<div @click.stop="onEdit(2)">获取权限</div>
            <div @click.stop="onEdit(3)">历史</div>
		</template>
		<template v-if="isYhgl">
			<div @click.stop="onEdit(1)">修改</div>
			<div v-show="!lineData.status" @click.stop="onEdit(2)">激活</div>
			<div v-show="lineData.status" @click.stop="onEdit(3)">冻结</div>
		</template>
		<template v-if="isCzrz">
			<div @click.stop="onEdit(1)">查看</div>
		</template>
	</div>
</template>
<script>
export default {
	props: {
		type: String,
		lineData: Object
	},
	data: function() {
		return {};
	},
	computed: {
		isXmgl: function() {
			return this.type == "xmgl";
		},
		isQxfp: function() {
			return this.type == "qxfp";
		},
		isYhgl: function() {
			return this.type == "yhgl";
        },
        isCzrz: function() {
			return this.type == "czrz";
		}
	},
	methods: {
		onEdit: function(e) {
			this.$emit("editevent", { id: this.lineData.id, type: e });
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