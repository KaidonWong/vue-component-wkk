<template>
	<modal-base-vue title="修改角色" @addevent="onAdd">
		<div class="line">
			<span>名称：</span>
			<input-vue v-model="roleName" style="width: 12em"></input-vue>
            <div class="tip">{{tip['roleName']}}</div>
		</div>
		<div class="line">
			<span>备注：</span>
			<input-vue v-model="remark" style="width: 12em"></input-vue>
            <div class="tip">{{tip['remark']}}</div>
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
			roleName: "",
            remark: "",
            tip: {}
		};
    },
    props: {
        model: Object
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
				method: "put",
				url: "/apis/r/role",
				data: { id:_this.model.id,roleName: _this.roleName, remark: _this.remark }
			}).then(function({ data }) {
				if (data.code == 0) {
                    _this.$Message.success('角色修改成功！');
                    window.history.go(-1);
                    _this.$emit("addsuccess");
                }
                if (data.code == 501 || data.code == 401) {
                    _this.tip = data.data;
				}
			});
		}
    },
    mounted: function() {
        this.roleName = this.model.roleName;
        this.remark = this.model.remark;
    },
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