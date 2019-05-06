<template>
	<div class="table" :style="tableStyle">
		<div class="thead">
			<div class="tline clearfix">
				<td-checkbox-vue v-if="config.checkbox" lineid="all" @toggle="onToggleAll"></td-checkbox-vue>
				<td-vue
					v-for="(column,index) of columns"
					:key="index"
					:content="column.title"
					:width="column.width"
				></td-vue>
				<div v-if="hasEditColumn" class="td-edit-column">操作</div>
			</div>
		</div>
		<div class="tbody" :style="tbodyStyle">
			<div class="tline clearfix" v-for="(line,index) of dataInOrder" :key="index">
				<td-checkbox-vue v-if="config.checkbox" :lineid="line[0]" :toggleall="toggleAll"></td-checkbox-vue>
				<td-vue v-for="(item,index) of line" :key="index" :content="item" :width="columnWidth[index]"></td-vue>
		        <td-edit-vue v-if="hasEditColumn" :type="config.editColumnType"></td-edit-vue>
        	</div>
		</div>
	</div>
</template>
<script>
import tdCheckboxVue from "./td-checkbox-vue.vue";
import tdEditVue from "./td-edit-vue.vue";
import tdVue from "./td-vue.vue";
export default {
	data: function() {
		return {
			toggleAll: false
		};
	},
	components: {
		"td-vue": tdVue,
        "td-checkbox-vue": tdCheckboxVue,
        "td-edit-vue": tdEditVue,
	},
	props: {
		columns: Array,
		data: Array,
		config: Object
	},
	methods: {
		onToggleAll: function() {
			this.toggleAll = !this.toggleAll;
		}
	},
	computed: {
		hasEditColumn: function() {
			return this.config.editColumnType != 0;
		},
		tableStyle: function() {
			let widthnum = 0;
			for (let item of this.columns) {
				let { width: a } = item;
				widthnum += a;
			}
			//border 含有两个px
			widthnum += 0.2;
			//fixed height need a scroll bar, so extra width;
			if (typeof this.config.height != "undefined") {
				widthnum += 1.6;
			}
			if (this.config.checkbox == true) {
				widthnum += 2;
			}
			if (this.hasEditColumn == true) {
				widthnum += 17;
			}
			return {
				width: widthnum + "em"
			};
		},
		tbodyStyle: function() {
			if (typeof this.config.height != "undefined") {
				return {
					"overflow-y": "auto",
					height: this.config.height + "px"
				};
			}
		},
		columnWidth: function() {
			let columnWidth = new Array();
			for (let item of this.columns) {
				columnWidth.push(item.width);
			}
			return columnWidth;
		},
		columnOrder: function() {
			let columnOrder = new Set();
			for (let item of this.columns) {
				columnOrder.add(item.field);
			}
			return columnOrder;
		},
		dataInOrder: function() {
			let dataInOrder = new Array();
			for (let lineData of this.data) {
				let line = new Array();
				for (let column of this.columnOrder) {
					line.push(lineData[column]);
				}
				dataInOrder.push(line);
			}
			return dataInOrder;
		}
	},
	mounted: function() {
		this.$store.dispatch("table/removeAll");
	}
};
</script>
<style lang="scss" src='./table.scss' scoped>
</style>