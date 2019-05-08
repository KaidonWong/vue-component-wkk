<template>
	<div class="basediv-transfer">
		<div class="left">
			<transfer-box-vue :options="availableOps" title="可选项目" @changesel="onAvailable"></transfer-box-vue>
		</div>
		<div class='buttons'>
			<button-vue class="button-left" icon="icon-icon-test3" color="#007d71" @clickevent='onMove2Owned'></button-vue>
			<button-vue class="button-right" icon="icon-icon-test1" color="#007d71" @clickevent='onMove2Available'></button-vue>
		</div>
		<div class="right">
			<transfer-box-vue :options="ownedOps" title="选中项目" @changesel="onOwned"></transfer-box-vue>
		</div>
	</div>
</template>
<script>
import transferBoxVue from "./transfer-box-vue.vue";
import buttonVue from "../button-vue/button-vue.vue";
export default {
    data: function() {
        return {
            availableOps: [...this.availableOptions],
            ownedOps: [...this.ownedOptions],
            availableSelected: [],
            ownedSelected: [],
        }
    },
	components: {
		"button-vue": buttonVue,
		"transfer-box-vue": transferBoxVue
	},
	props: {
		availableOptions: Array,
		ownedOptions: Array
    },
    methods: {
        onAvailable: function(sel) {
            this.availableSelected = [...sel];
        },
        onOwned: function(sel) {
            this.ownedSelected = [...sel];
        },
        //可选项目移至选中项目
        onMove2Owned: function() {
            //delete
            let _availableSelected = this.availableSelected;
            this.availableOps = this.availableOps.filter(function(item) {
                if(_availableSelected.indexOf(item) == -1) {
                    //不包含，不删除
                    return true;
                }
                return false;
            });
            //add
            this.ownedOps.splice(0,0,...this.availableSelected);
        },
        //选中项目返回可选项目
        onMove2Available: function() {
            //delete
            let _ownedSelected = this.ownedSelected;
            this.ownedOps = this.ownedOps.filter(function(item) {
                if(_ownedSelected.indexOf(item) == -1) {
                    //不包含，不删除
                    return true;
                }
                return false;
            });
            //add
            this.availableOps.splice(0,0,...this.ownedSelected);
        }
    }
};
</script>
<style lang="scss" src="./transfer.scss" scoped>
</style>