<template>
	<li class="level1">
		<a :href="url">
			<span class="iconfont" :class="icon"></span>
			{{name}}
			<span v-if="hasSubmenu" class="iconfont icon-down"></span>
		</a>
		<ul class='submenu' v-if="hasSubmenu">
			<li class="level2" v-for="(item,index) of submenu" :key="index">
				<a :href="item.url">{{item.name}}</a>
			</li>
		</ul>
	</li>
</template>
<script>
export default {
	props: {
		name: String,
		url: String,
		icon: String,
		submenu: Array
	},
	computed: {
		hasSubmenu: function() {
			if (this.submenu == null) {
				return false;
			}
			return true;
		}
    },
};
</script>
<style lang="scss" scoped>
a {
	position: relative;
	display: block;
	text-decoration: none;
	color: #515a6e;
	line-height: 2;
	&:hover {
		color: #2d8cf0;
	}
	span {
		display: inline-block;
		width: 25px;
		font-size: 1.4em;
		vertical-align: middle;
	}
	.icon-down {
		position: absolute;
		right: 10px;
		transition: transform 0.3s;
	}
	&.active {
		.icon-down {
			transform: rotate(180deg);
		}
	}
}
ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}
.level1 {
	> a {
		padding: 7px;
	}
}
.level2 {
	> a {
		padding: 7px 7px 7px 30px;
	}
}
</style>

