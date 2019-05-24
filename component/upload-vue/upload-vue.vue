<template>
	<div class="base-upload">
		<div class="upload-button" @click="onClick">
			<span class="iconfont icon-cloudtouploadyunshangchuan"></span>
			选择文件
		</div>
		<span>{{fileName}}</span>
		<input type="file" id="myfile" v-show="false">
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			inputDom: {},
			fileName: ""
		};
	},
	methods: {
		onClick: function() {
			this.inputDom.click();
		},
		onChange: function() {
            this.fileName = this.inputDom.files[0].name;
            this.$emit('filechange',this.inputDom.files[0]);
		}
	},
	mounted: function() {
		this.inputDom = document.querySelector("#myfile");
		this.inputDom.addEventListener("change", this.onChange);
	}
};
</script>
<style lang="scss" scoped>
.base-upload {
    display: inline-block;
	.upload-button {
		display: inline-block;
		padding: 0.4em 1em;
		border: 1px solid #666666;
		border-radius: 0.5em;
        line-height: 1;
        color: #333333;
	}
	> span {
		color: #888888;
	}
}
</style>
