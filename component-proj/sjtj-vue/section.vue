<template>
	<div class="panel">
		<section-header-vue icon="icon-et-sales-statistics" title="数据统计" subtitle="统计并展示软件授权情况"></section-header-vue>
		<div class="container">
			<div class="cards">
				<div class="card clearfix">
					<span class="iconfont icon-logs"></span>
					<div class="para">
						<div class="title">项目总数</div>
						<div class="sub-title">{{total.countProject}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu18"></span>
					<div class="para">
						<div class="title">授权总数</div>
						<div class="sub-title">{{total.countAuthorize}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-user1"></span>
					<div class="para">
						<div class="title">用户数量</div>
						<div class="sub-title">{{total.countUser}}</div>
					</div>
				</div>
				<div class="card clearfix">
					<span class="iconfont icon-userset"></span>
					<div class="para">
						<div class="title">角色数量</div>
						<div class="sub-title">{{total.countRole}}</div>
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
				url: "/apis/s/getNumber"
			}).then(function({ data }) {
				if (data.code == 0) {
					_this.total = data.data;
				}
			});
		},
		fetchChartData: function() {
			return new Promise((resolve, reject) => {
				this.axios({
					method: "get",
					url: "/apis/s/selectCountByProjectId"
				}).then(function({ data }) {
					if (data.code == 0) {
						resolve(data.data);
					}
				});
			});
		},
		fetchChartA: function() {
			let optionA = {
				tooltip: {
					trigger: "axis"
				},
				legend: {
					// 待填充的项目名
					// data: [
					// 	"全部项目",
					// 	"新疆BHF项目",
					// 	"西藏JJM平台",
					// 	"江苏监控站",
					// 	"和田维护平台"
					// ]
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
					boundaryGap: false
					// 待填充的月份
					//data: ["一", "二", "三", "四", "五", "六"]
				},
				yAxis: {
					name: "个数",
					type: "value"
				},
				series: [
					// 待填充的具体数据
					// {
					// 	name: "全部项目",
					// 	type: "line",
					// 	data: [1, 1, 1, 1, 1, 1]
					// },
				]
			};
			this.axios({
				method: "get",
				url: "/apis/s/getAuthorizeTrend"
			}).then(({ data }) => {
				if (data.code == 0) {
					let projectNames = [];
					let projects = [];
					let { months, statistic } = data.data;
					for (let i = 0, len = statistic.length; i < len; i++) {
						projectNames.push(statistic[i].projectName);
						projects.push({
							name: statistic[i].projectName,
							data: statistic[i].authorizeNum,
							type: "line"
						});
					}
					optionA.legend.data = projectNames;
					optionA.xAxis.data = months;
					optionA.series = projects;
					this.chartA.setOption(optionA);
				}
			});
		},
		fetchChartB: function(promise) {
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
						}
						// 待填充的具体值
						// data: [
						// 	{ value: 335, name: "新疆BHF项目" },
						// 	{ value: 310, name: "西藏JJM平台" },
						// 	{ value: 234, name: "江苏监控站" },
						// 	{ value: 135, name: "和田维护平台" },
						// 	{ value: 135, name: "和田维护平台2" }
						// ]
					}
				]
			};
			promise.then(value => {
				let chartBData = [];
				let keys = Object.keys(value);
				for (let i = 0, len = keys.length; i < len; i++) {
					chartBData.push({
						name: keys[i],
						value: value[keys[i]]
					});
				}
				optionB.series[0].data = chartBData;
				this.chartB.setOption(optionB);
			});
		},
		fetchChartC: function(promise) {
			let optionC = {
				tooltip: {
					trigger: "item"
				},
				xAxis: {
					type: "category"
					// data: [
					// 	"新疆BHF项目",
					// 	"西藏JJM平台",
					// 	"江苏监控站",
					// 	"和田维护平台",
					// 	"大连平台",
					// 	"丹东平台",
					// 	"其它平台"
					// ]
				},
				yAxis: {
					type: "value"
				},
				series: [
					{
						// data: [120, 200, 150, 80, 70, 110, 130],
						type: "bar",
						itemStyle: {
							normal: { color: "#009688" }
						}
					}
				]
			};
			promise.then(value => {
				let xAxis = [];
				let yAxis = [];
				let keys = Object.keys(value);
				for (let i = 0, len = keys.length; i < len; i++) {
					xAxis.push(keys[i]);
					yAxis.push(value[keys[i]]);
				}
				optionC.xAxis.data = xAxis;
				optionC.series[0].data = yAxis;
				this.chartC.setOption(optionC);
			});
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
        
		let promise = this.fetchChartData();
		this.fetchChartB(promise);
		this.fetchChartC(promise);
	}
};
</script>
<style lang="scss" src="./section.scss" scoped>
</style>