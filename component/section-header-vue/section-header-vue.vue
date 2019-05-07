<template>
	<div class="basediv-section-header">
		<div>
			<span class="iconfont" :class="icon"></span>
			<span class="title">{{title}}</span>
		</div>
		<div>
			<span class="subtitle">{{subtitle}}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		subtitle: String,
		icon: String
	}
};
</script>
<style lang="scss" scoped>
@import "../../common/section-shadow.scss";
.basediv-section-header {
	width: 100%;
	padding: 0.8em 2em;
	background-color: #ffffff;
    @include section-shadow();
    
	.iconfont {
		margin-right: 0.2em;
		color: #333333;
		font-size: 1.8em;
	}
	.title {
		position: relative;
		top: -0.2em;
		font-size: 1.2em;
        font-weight: bold;
        letter-spacing: 0.1em;
		color: #333333;
	}
	.subtitle {
		margin-left: 0.3em;
		font-size: 0.8em;
		color: #444444;
	}
}
</style>