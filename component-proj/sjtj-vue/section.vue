<template>
	<div class="panel">
		<section-header-vue icon="icon-et-sales-statistics" title="数据统计" subtitle="统计并展示软件授权情况"></section-header-vue>
		<div class="container">
			<div class="cards">
				<div class="card clearfix">
					<span class="iconfont icon-logs"></span>
					<div class="para">
						<div class="title">项目总数</div>
						<div class="sub-title">{{total.project}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu18"></span>
					<div class="para">
						<div class="title">授权总数</div>
						<div class="sub-title">{{total.authorize}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-user1"></span>
					<div class="para">
						<div class="title">用户数量</div>
						<div class="sub-title">{{total.user}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-userset"></span>
					<div class="para">
						<div class="title">角色数量</div>
						<div class="sub-title">{{total.role}}</div>
					</div>
				</div>
			</div>
			<div class="charts">
				<div class="chart" id="chartA">
					<div class="title">授权历史统计(按时间)</div>
					<div class="content"></div>
				</div>
				<div class="chart" id="chartB">
					<div class="title">授权比例统计(按项目)</div>
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
	data: function() {
		return {
			total: {},
			chartA: null,
			chartB: null,
			chartC: null
		};
	},
	components: {
		"button2-vue": button2Vue,
		"search-input-vue": searchInputVue,
		"table-vue": tableVue,
		"section-header-vue": sectionHeaderVue
	},
	computed: {},
	methods: {
		onAdd: function() {
			this.$router.push({ name: "addrole" });
		},
		onEditTable: function(e) {
			if (e.type == 2) {
				this.$router.push({ name: "selpri" });
			}
		},
		fetchTotalNum: function() {
			let _this = this;
			this.axios({
				method: "get",
				url: "/apis/a/getStatistics"
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.total = data.data;
				}
			});
		},
		fetchChartA: function() {
			let _this = this;
			this.axios({
				method: "get",
				url: "/apis/a/getStatistics"
			}).then(function({ data }) {
				if (data.code == 0) {
				}
			});
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
					name: "月份",
					type: "category",
					boundaryGap: false,
					data: ["一","二","三","四","五","六"]
				},
				yAxis: {
					name: "个数",
					type: "value"
				},
				series: [
					{
						name: "全部项目",
						type: "line",
						data: [1, 1, 1, 1, 1, 1]
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
			this.chartA.setOption(optionA);
		},
		fetchChartB: function() {
			let optionB = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: "vertical",
					x: "left"
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
							{ value: 135, name: "和田维护平台" },
							{ value: 135, name: "和田维护平台2" }
						]
					}
				]
			};
			chartB.setOption(optionB);
		},
		fetchChartC: function() {
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
	},
	created: function() {},
	mounted: function() {
		this.$store.dispatch("globalstate/setCurrentSection", {
			currentSection: "sjtj"
		});

		this.chartA = this.$echarts.init(
			document.querySelector("#chartA .content")
		);
		this.chartB = this.$echarts.init(
			document.querySelector("#chartB .content")
		);
		this.chartC = this.$echarts.init(
			document.querySelector("#chartC .content")
		);
		this.fetchTotalNum();
		this.fetchChartA();
		this.fetchChartB();
		this.fetchChartC();
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>