<template>
	<modal-base-vue title="添加项目" @addevent="onAdd">
		<div class="line">
			<span>名称：</span>
			<input-vue v-model="name" style="width: 12em"></input-vue>
            <div class="tip">{{tip['projectName']}}</div>
		</div>
		<div class="line">
			<span>编号：</span>
			<input-vue v-model="no" style="width: 12em"></input-vue>
            <div class="tip">{{tip['projectNumber']}}</div>
		</div>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import inputVue from "../../iview-src/components/input";
import {
	selectVue,
	optionVue,
	optionGroupVue
} from "../../iview-src/components/select";
export default {
	data: function() {
		return {
			name: "",
            no: "",
            tip: {}
		};
	},
	components: {
		"modal-base-vue": modalBaseVue,
		"select-vue": selectVue,
		"option-vue": optionVue,
		"input-vue": inputVue
	},
	computed: {},
	methods: {
		onAdd: function() {
			let _this = this;
			this.axios({
				method: "post",
				url: "/apis/p/project",
				data: { projectName: _this.name, projectNumber: _this.no }
			}).then(function({ data }) {
				if (data.code == 0) {
                    _this.$Message.success('项目添加成功！');
                    window.history.go(-1);
                    _this.$emit("addsuccess");
                }
                if (data.code == 501 || data.code == 401) {
                    _this.tip = data.data;
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.line {
	> span:nth-of-type(1) {
		display: inline-block;
		width: 5em;
		text-align: right;
	}
	width: 90%;
	margin: 0 auto;
	color: #333;
	padding: 0.5em 0;
    .tip {
        padding-left: 7em;
        color: #800000;
        font-size: 0.6em;
    }
}
</style>