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
    text: '用户分布',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 9858, name: '北京'},
        { value: 4561, name: '上海' },
        { value: 4936, name: '深圳' },
        { value: 2754, name: '杭州' },
        { value: 42678, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
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
    margin: 0 auto;
    width:700px;
    height:700px; 
}
</style>