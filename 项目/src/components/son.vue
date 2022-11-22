<template>
  <div>
    <div ref="chart" class="son"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {},
  data() {
    return {
      charts: null,
    };
  },
  methods: {
    //图标初始化
    initcharts() {
      this.charts = echarts.init(this.$refs.chart);
      this.setOptionFun();
    },
    setOptionFun() {
      const option = this.getOption();
      this.charts.setOption(option);
    },
    getOption() {
      const option = {
         title: {
    // text: 'Temperature Change in the Coming Week'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ["2022-11-14", "2022-11-16", "2022-11-18", "2022-11-20"]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} '
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [0, 60, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
        // xAxis: {
        //   type: "category",
        //   data: ["2022-11-14", "2022-11-16", "2022-11-18", "2022-11-20"],
        // },
        // yAxis: {
        //   type: "value",
        // },
        // series: [
        //   {
        //     data: [150, 230, 224, 218, 135, 147, 260],
        //     type: "line",
        //   },
        // ],
      };
      return option
    },
  },
  mounted() {
    this.initcharts()
  },
};
</script>

<style lang="scss" scoped>
.son{
    width:800px;
    height:500px; 
}
</style>