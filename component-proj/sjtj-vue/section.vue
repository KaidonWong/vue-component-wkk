<template>
	<div class="panel">
		<section-header-vue icon="icon-et-sales-statistics" title="数据统计" subtitle="统计并展示软件授权情况"></section-header-vue>
		<div class="container">
			<div class="cards">
				<div class="card clearfix">
					<span class="iconfont icon-logs"></span>
					<div class="para">
						<div class="title">项目总数</div>
						<div class="sub-title">26</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu18"></span>
					<div class="para">
						<div class="title">授权总数</div>
						<div class="sub-title">1650</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-user1"></span>
					<div class="para">
						<div class="title">用户数量</div>
						<div class="sub-title">96</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-userset"></span>
					<div class="para">
						<div class="title">角色数量</div>
						<div class="sub-title">21</div>
					</div>
				</div>
			</div>
			<div class="charts">
				<div class="chart" id="chartA">
					<div class="title">授权历史统计(按时间)</div>
					<div class="content"></div>
				</div>
				<div class="chart" id="chartB">
					<div class="title">项目比例统计(按项目)</div>
					<div class="content"></div>
				</div>
				<div class="chart" id="chartC">
					<div class="title">授权数量统计(按项目)</div>
					<div class="content"></div>
				</div>
			</div>
		</div>
		<router-view class="modal" name="modal"></router-view>
	</div>
</template>
<script>
import button2Vue from "../../component/button-vue/button2-vue.vue";
import searchInputVue from "../../component/input-vue/search-input-vue.vue";
import tableVue from "../../component/table-vue/table-vue.vue";
import sectionHeaderVue from "../../component/section-header-vue/section-header-vue.vue";

export default {
	components: {
		"button2-vue": button2Vue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue
	},
	computed: {
		getColumns: function() {
			let array = [
				{
					field: "name",
					title: "名称",
					width: 1
				},
				{
					field: "remark",
					title: "备注",
					width: 1
				},
				{
					field: "createTime",
					title: "创建时间",
					width: 1
				}
			];
			return array;
		},
		getData: function() {
			let array = [
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				},
				{
					id: 1,
					name: "新疆片区权限角色",
					remark: "主要负责在新疆地区的项目，比如和田JJM平台",
					createTime: "2020-01-01 23:00:00"
				}
			];
			return array;
		},
		getConfig: function() {
			let a = {
				height: 600,
				checkbox: true,
				//0: 没有操作栏
				editColumnType: 2
			};
			return a;
		}
	},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "addrole" });
		},
		onEditTable: function(e) {
			if (e.type == 2) {
				this.$router.push({ name: "selpri" });
			}
		}
	},
	mounted: function() {
		let chartA = this.$echarts.init(
			document.querySelector("#chartA .content")
		);
		let chartB = this.$echarts.init(
			document.querySelector("#chartB .content")
		);
		let chartC = this.$echarts.init(
			document.querySelector("#chartC .content")
		);
		let optionA = {
			tooltip: {
				trigger: "axis"
			},
			legend: {
				data: [
					"全部项目",
					"新疆BHF项目",
					"西藏JJM平台",
					"江苏监控站",
					"和田维护平台"
				]
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				containLabel: true
			},
			xAxis: {
				type: "category",
				boundaryGap: false,
				data: [
					"一月",
					"二月",
					"三月",
					"四月",
					"五月",
					"六月",
					"七月",
					"八月",
					"九月",
					"十月",
					"十一月",
					"十二月"
				]
			},
			yAxis: {
				name: "个数",
				type: "value"
			},
			series: [
				{
					name: "全部项目",
					type: "line",
					data: [
						120,
						132,
						101,
						134,
						90,
						230,
						210,
						120,
						132,
						101,
						134,
						90,
						230,
						210
					]
				},
				{
					name: "新疆BHF项目",
					type: "line",
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: "西藏JJM平台",
					type: "line",
					data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
					name: "江苏监控站",
					type: "line",
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: "和田维护平台",
					type: "line",
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		};

		chartA.setOption(optionA);

		let optionB = {
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: "vertical",
				x: "left",
				data: [
					"新疆BHF项目",
					"西藏JJM平台",
					"江苏监控站",
					"和田维护平台"
				]
			},
			series: [
				{
					name: "授权数量",
					type: "pie",
					// radius: ["40%", "60%"],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: "center"
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: "20",
								fontWeight: "bold"
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [
						{ value: 335, name: "新疆BHF项目" },
						{ value: 310, name: "西藏JJM平台" },
						{ value: 234, name: "江苏监控站" },
						{ value: 135, name: "和田维护平台" }
					]
				}
			]
		};
		chartB.setOption(optionB);

		let optionC = {
			tooltip: {
				trigger: "item"
			},
			xAxis: {
				type: "category",
				data: [
					"新疆BHF项目",
					"西藏JJM平台",
					"江苏监控站",
					"和田维护平台",
					"大连平台",
					"丹东平台",
					"其它平台"
				]
			},
			yAxis: {
				type: "value"
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: "bar",
					itemStyle: {
						normal: { color: "#009688" }
					}
				}
			]
		};
		chartC.setOption(optionC);
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>