<template>
	<div class="basediv-transfer-box">
		<div class="header">
			<div class="line">
				<checkbox-vue :status="toggleAll" @boxevent="onAllBox"></checkbox-vue>
				<span>{{title}}</span>
			</div>
		</div>
		<div class="search">
			<input-vue iconafter="icon-search" @inputevent="onSearch"></input-vue>
		</div>
		<div class="content">
			<div class="line" v-for="(item,index) of filteredOptions" :key="index">
				<checkbox-vue :status="toggleAll" :item="item" @boxevent="onBox"></checkbox-vue>
				<span>{{item.label}}</span>
			</div>
		</div>
	</div>
</template>
<script>
import checkboxVue from "../../component/input-vue/checkbox-solo-vue.vue";
import inputVue from "../../component/input-vue/input-vue.vue";
export default {
	components: {
		"checkbox-vue": checkboxVue,
		"input-vue": inputVue
	},
	data: function() {
		return {
			selected: new Set(),
			toggleAll: false,
			filteredOptions: [...this.options]
		};
	},
	props: {
		title: String,
		options: Array
    },
	methods: {
		onSearch: function(search) {
			this.selected.clear();
			this.toggleAll = false;

			let resultArr = this.options.filter(function(item) {
				if (item.label.match(search) == null) {
					return false;
				}
				return true;
			});
            this.filteredOptions.splice(0, this.filteredOptions.length);
            //为了不让vue复用原来的dom，用来清除状态
            setTimeout(()=>{
                this.filteredOptions.splice(0, 0, ...resultArr);
            },10);
			this.$emit('changesel',this.selected);
		},
		onAllBox: function(on) {
			this.toggleAll = on;
		},
		onBox: function(on, item) {
			if (on == true) {
				this.selected.add(item);
			} else {
				this.selected.delete(item);
            }
            this.$emit('changesel',this.selected);
		}
	}
};
</script>
<style lang="scss" src="./transfer-box.scss" scoped>
</style>