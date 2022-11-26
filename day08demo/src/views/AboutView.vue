<template>
  <div class="about">
    <!-- 模版字符串染 插值表达式 -->
    <h1>{{ msg }}</h1>
    <span v-bind:title="mssage"> 鼠标悬停几秒查看提示信息 </span>
    <br />
    <span :title="mssage">鼠标悬停几秒查看提示信息</span>
    <br />
    <p v-if="flag">以梦为马</p>
    <p v-else>不负韶华</p>
    <p v-if="flagvisible">乾坤未定，你我皆是黑马</p>
    <button v-on:click="handleChange">显示字段</button>
    <br />
    <span v-show="flag">天生我才必有用</span>
    <br />
    <div>
      <ul>
        <li v-for="(item,index) in week" :key="index">{{ item.name }}</li>
      </ul>
      <button @click="handleUpdatelist">修改下标数</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我要休息",
      mssage: "只页面加载于" + new Date().toLocaleString(),
      flag: true,
      flagVisible: true,
      week:[
        {
          id:1,
          name:"周一"
        },
        {
          id:2,
          name:"周二"
        },
        {
          id:3,
          name:"周三"
        },
        {
          id:4,
          name:"周四"
        },
        {
          id:5,
          name:"周五"
        },
      ]
    };
  },
  methods: {
    handleChange() {
      this.flag = !this.flag;
      this.flagVisible = !this.flagVisible;
    },
    handleUpdatelist() {
      this.week[0].name ="我要去西藏"
    }
  },
};
</script>
<style scoped>
</style>