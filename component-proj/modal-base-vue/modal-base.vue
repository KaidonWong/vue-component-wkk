<template>
	<div class="modal-background">
		<div class="modal">
			<div class="header">
				{{title}}
				<span class="iconfont icon-close" @click="onClose"></span>
			</div>
			<div class="content">
                <slot></slot>
			</div>
			<div class="buttons">
				<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onAdd"></button-vue>
				<button-vue label="取消" icon="icon-withdraw" color="#007d71" @clickevent="onClose"></button-vue>
			</div>
		</div>
	</div>
</template>
<script>
import buttonVue from "../../component/button-vue/button-vue.vue";
export default {
    props: {
        title: String
    },
	components: {
		"button-vue": buttonVue,
	},
	computed: {
	},
	methods: {
		onAdd: function() {
            this.$emit('addevent');
        },
		onClose: function() {
            window.history.go(-1);
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
	background-color: rgba($color: #000000, $alpha: 0.3);
	.modal {
		margin: 10em auto;
		width: 24em;
		border-radius: 1em;
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