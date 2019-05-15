<template>
	<div class="table">
		<div class="thead">
			<div class="tline clearfix">
				<td-checkbox-vue v-if="config.checkbox" lineid="all" @toggle="onToggleAll"></td-checkbox-vue>
				<td-vue
					v-for="(column,index) of columns"
					:key="index"
					:content="column.title"
					:width="calcWidth(column.width)"
				></td-vue>
				<div v-if="hasEditColumn" class="td-edit-column">操作</div>
			</div>
		</div>
		<div class="tbody" :style="tbodyStyle">
			<div class="tline clearfix" v-for="(line,index) of dataInOrder" :key="index">
				<td-checkbox-vue v-if="config.checkbox" :lineid="data[index].id" :key="data[index].id+'_c'" :toggleall="toggleAll"></td-checkbox-vue>
				<td-vue
					v-for="(item,index) of line"
					:key="index"
					:content="item"
					:width="calcWidth(columnWidth[index])"
				></td-vue>
				<td-edit-vue v-if="hasEditColumn" :lineid="data[index].id" :type="config.editColumnType" @editevent="onEdit"></td-edit-vue>
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
			toggleAll: false,
			totalWidth: 0
		};
	},
	components: {
		"td-vue": tdVue,
		"td-checkbox-vue": tdCheckboxVue,
		"td-edit-vue": tdEditVue
	},
	props: {
		columns: Array,
		data: Array,
		config: Object
	},
	methods: {
		onToggleAll: function() {
			this.toggleAll = !this.toggleAll;
		},
		calcWidth: function(a) {
			if (
				this.config.checkbox == false &&
				this.config.editColumnType == 0
			) {
				//没有checkbox，没有操作栏, 只有滚动条8px，边界 2px
				return `calc((100% - 10px)/${this.totalWidth}*${a})`;
			} else if (
				this.config.checkbox == true &&
				this.config.editColumnType == 0
			) {
				return `calc((100% - 2.4em -10px)/${this.totalWidth}*${a})`;
			} else if (
				this.config.checkbox == true &&
				this.config.editColumnType != 0
			) {
				return `calc((100% - 2.4em - 17em -10px)/${this.totalWidth}*${a})`;
			} else if (
				this.config.checkbox == false &&
				this.config.editColumnType != 0
			) {
				return `calc((100% - 17em - 10px)/${this.totalWidth}*${a})`;
			}
			return '10em';
        },
        onEdit: function(e) {
            this.$emit('editevent',e);
        }
	},
	computed: {
		hasEditColumn: function() {
			return this.config.editColumnType != 0;
		},
		tbodyStyle: function() {
			if (typeof this.config.height != "undefined") {
                //设置了固定高度
				return {
					"overflow-y": "scroll",
					height: this.config.height + "px"
				};
			}else {
                return {
                    'width': '100%'
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
		this.totalWidth = 0;
		for (let i = 0, len = this.columns.length; i < len; i++) {
			this.totalWidth += this.columns[i].width;
		}
	}
};
</script>
<style lang="scss" src='./table.scss' scoped>
</style>