<template>
	<modal-base-vue title="权限选择" mWidth='37em'>
		<template v-slot:content>
			<transfer-vue
				class="transfer-box"
				:availableOptions="noOwnedProj"
				:ownedOptions="ownedProj"
				@resultevent="onResult"
			></transfer-vue>
		</template>
		<template v-slot:footer>
			<button-vue label="确定" icon="icon-save" color="#007d71" @clickevent="onAdd"></button-vue>
			<button-vue label="取消" icon="icon-withdraw" color="#007d71" @clickevent="onClose"></button-vue>
		</template>
	</modal-base-vue>
</template>
<script>
import modalBaseVue from "../modal-base-vue/modal-base.vue";
import transferVue from "../../component/transfer-vue/transfer-vue.vue";
import buttonVue from "../../component/button-vue/button-vue.vue";

export default {
	props: {
		model: Object,
		allProj: Array
	},
	data: function() {
		return {
			ownedProj: [],
			noOwnedProj: [],
			resultProj: []
			/*************** */
		};
	},
	components: {
		"modal-base-vue": modalBaseVue,
        "transfer-vue": transferVue,
        "button-vue": buttonVue,
	},
	computed: {},
	methods: {
		onAdd: function() {
            let projectIds=[];
            for(let i = 0,len=this.resultProj.length;i<len;i++) {
                projectIds.push(this.resultProj[i].id);
            }
            let _this = this;
			this.axios({
				method: "post",
				url: "/apis/r/roleAuthorize",
				params: { 'roleId': this.model.id, 'projectIds': projectIds.join(',')}
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.$Message.success("角色权限修改成功！");
					window.history.go(-1);
				}else {
                    _this.$Message.error("角色权限修改失败！");
                }
			});
        },
		onClose: function() {
			window.history.go(-1);
		},
		onResult: function(e) {
			this.resultProj = e;
		}
	},
	created: function() {
		//获取本角色已有的项目权限
		let _this = this;
		this.axios({
			method: "get",
			url: `/apis/r/roleAuthorize/${this.model.id}`
		}).then(function({ data }) {
			if (data.code == 0) {
				let ownedProjIds = [];
				for (let i = 0, len = data.data.length; i < len; i++) {
					_this.ownedProj.push({
						id: data.data[i].id,
						label: `${data.data[i].projectName}（${
							data.data[i].projectNumber
						}）`
					});
					ownedProjIds.push(data.data[i].id);
				}
				_this.noOwnedProj = _this.allProj.filter(item => {
					if (ownedProjIds.indexOf(item.id) == -1) {
						return true; //不含有该项目；
					} else {
						return false; //已含有该项目，筛选掉；
					}
				});
			}
		});
	},
	beforeRouteEnter(to, from, next) {
		if (to.params.model == null) {
			next("/qxfp");
		} else {
			next();
		}
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当守卫执行前，组件实例还没被创建
	}
};
</script>
<style lang="scss" scoped>
.transfer-box {
	margin: 1em auto;
}
</style>