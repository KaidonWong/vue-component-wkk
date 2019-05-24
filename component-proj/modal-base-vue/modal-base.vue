<template>
	<div class="modal-background">
		<div class="modal" :style="{width:mWidth}">
			<div class="header">
				{{title}}
				<span class="iconfont icon-close" @click="onClose"></span>
			</div>
			<div class="content">
				<slot name="content"></slot>
			</div>
			<div class="buttons">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
        title: String,
        mWidth: String,
        special: String
	},
	components: {},
	computed: {},
	methods: {
		onClose: function() {
            if(this.special == 'true') {
                //this.$emit('closeevent');
                this.$emit("xgmmevent");
            }else {
			    window.history.go(-1);
            }
		}
	}
};
</script>
<style lang="scss" scoped>
.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba($color: #000000, $alpha: 0.5);
	.modal {
		margin: 10em auto;
		width: 24em;
		border-radius: 0.5em;
		background-color: #ffffff;
		.header {
			position: relative;
			color: #007d71;
			padding: 1em;
			font-weight: bold;
			letter-spacing: 0.1em;
			span {
				position: absolute;
				right: 1em;
				display: inline-block;
				font-size: 1.2em;
				line-height: 1;
				color: #333333;
				vertical-align: middle;
			}
		}
		.content {
			margin: 1em 0;
			font-size: 0.9em;
		}
		.buttons {
			padding: 0.5em 2em 1em 0;
			text-align: right;
			border-top: 1px solid #007d71;
		}
	}
}
</style>