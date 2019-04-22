<template>
	<div class="table" :style="tableStyle">
		<div class="thead">
			<div class="tline clearfix">
				<td-vue
					v-for="(column,index) of columns"
					:key="index"
					:content="column.title"
					:width="column.width"
				></td-vue>
			</div>
		</div>
		<div class="tbody" :style='tbodyStyle'>
			<div class="tline clearfix" v-for="(line,index) of dataInOrder" :key="index">
				<td-vue v-for="(item,index) of line" :key="index" :content="item" :width="columnWidth[index]"></td-vue>
			</div>
		</div>
	</div>
</template>
<script>
import tdVue from "./td-vue.vue";
export default {
	components: {
		"td-vue": tdVue
	},
	props: {
		columns: Array,
        data: Array,
        config: Object,
	},
	computed: {
		tableStyle: function() {
			let widthnum = 0;
			for (let item of this.columns) {
				let { width: a } = item;
				widthnum += a;
            }
            //border
            widthnum += 2;
            //fixed height need a scroll bar, so extra width;
            if(typeof(this.config.height) != "undefined") {
                widthnum += 20;
            }
			return {
				width: widthnum + "px"
			};
        },
        tbodyStyle: function() {
            if(typeof(this.config.height) != "undefined") {
                return {
                    'overflow-y': 'scroll',
                    'height': this.config.height + 'px',
                }
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
		},
		thStyle: function(w) {
			return {
				width: w + "%"
			};
		}
	}
};
</script>
<style lang="scss" src='./table.scss' scoped>
</style>