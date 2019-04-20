<template>
	<table>
		<tr>
			<th v-for="(item,index) of columnOrder" :key="index">{{item}}</th>
		</tr>
		<tr v-for="(line,index) of dataInOrder" :key="index">
			<td v-for="(item,index) of line" :key="index">{{item}}</td>
		</tr>
	</table>
</template>
<script>
export default {
	props: {
		columns: Array,
		data: Array
	},
	computed: {
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
	}
};
</script>
<style lang="scss" src='./table-vue.scss' scoped>
</style>