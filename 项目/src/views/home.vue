<template>
  <div>
    <div class="title">数据统计</div>
    <!-- 当日数据 -->
    <div class="li">
      <ul>
        <li>当日数据:</li>
        <li class="text">
          <p class="sz">5</p>
          新增用户
        </li>
        <li class="text">
          <p class="sz">3</p>
          新增订单
        </li>
        <li class="text">
          <p class="sz">25</p>
          新增管理员
        </li>
      </ul>
    </div>
    <!-- 当日数据 -->
    <!-- 总数据 -->
    <div class="li">
      <ul>
        <li class="tex">总数据:</li>
        <li class="text">
          <p class="sz">69859</p>
          注册用户
        </li>
        <li class="text">
          <p class="sz">32685</p>
          订单
        </li>
        <li class="text">
          <p class="sz">124682</p>
          管理员
        </li>
      </ul>
    </div>
    <!-- 总数据 -->

    <!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
    <!-- <e-charts class="chart" :option="JSON.stringify(option)"></e-charts> -->
    <div class="echartsCent">
      <div>
        <son></son>
      </div>
    </div>
  </div>
</template>

<script>
import son from "../components/son.vue";
export default {
  data() {
    return {
      //   option: {
      //     xAxis: {
      //       type: "category",
      //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      //     },
      //     yAxis: {
      //       type: "value",
      //     },
      //     series: [
      //       {
      //         data: [150, 230, 224, 218, 135, 147, 260],
      //         type: "line",
      //       },
      //     ],
      //   },
      // list:[{
      //     name:'当日数据',
      //     name1:'新增用户',
      //     name2:'新增订单',
      //     name3:'新增管理员',
      // }]
    };
  },
  components: {
    son,
  },
  //   methods: {
  //     abc() {
  //       var chartDom = document.getElementById("main");
  //       var myChart = this.$echarts.init(chartDom);
  //       var option;

  //       option = {
  //         xAxis: {
  //           type: "category",
  //           data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //         },
  //         yAxis: {
  //           type: "value",
  //         },
  //         series: [
  //           {
  //             data: [150, 230, 224, 218, 135, 147, 260],
  //             type: "line",
  //           },
  //         ],
  //       };

  //        myChart.setOption(option);
  //     },
  //   },
  //   mounted() {
  //     this.abc()
  //   },
};
</script>


<style lang="scss" scoped>
.title {
  height: 50px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  display: flex;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: center;
    width: 200px;
    background-color: #ff9800;
    height: 40px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    line-height: 40px;
    border-radius: 10px;
    margin-right: 15px;
  }
  .text {
    background-color: #e5e9f2;
    color: #67686b;
    p {
      font-style: 30px;
    }
  }
  .tex {
    background-color: #20a0ff;
  }
}
.echartsCent {
  width: 100%;
  display: flex;
  justify-content: center;
}
.echartsCent > div {
  width: 1000px;
  height: 1000px;
}
.sz {
  font-size: 30px;
  color: #000;
}
</style>