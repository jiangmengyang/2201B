<template>
  <div class="about">
    <!-- <h1>v2{{name}}</h1>
    <h1>v2{{age}}</h1>
    <button @click="getage1">vue2获取年龄</button>
    <h2>姓名：{{text}}</h2>
    <h2>年龄：{{age1}}</h2>
    <h2>工作：{{person.type}}</h2>
    <h2>薪资：{{person.salary}}w</h2>
    <h2>爱好：{{person.hobbies}}w</h2>
    <h2>深层对象：{{person.a.b.c}}w</h2>
    <button @click="getage">点击增加年龄</button>
    <button @click="person.salary++">点击薪资翻倍</button>
    <button @click="change">深层方法修改</button> -->

    <!-- <h1>v2{{name}}</h1>
    <h1>v2{{age}}</h1>
    <button @click="getage1">vue2获取年龄</button>
    <h2>姓名：{{text}}</h2>
    <h2>年龄：{{age1}}</h2>
    <h2>工作：{{person.type}}</h2>
    <h2>薪资：{{person.salary}}w</h2>
    <h2>爱好：{{person.hobbies}}w</h2>
    <h2>深层对象：{{person.a.b.c}}w</h2>
    <button @click="getage">点击增加年龄</button>
    <button @click="person.salary++">点击薪资翻倍</button>
    <button @click="change">深层方法修改</button> -->

    <h1>v2{{ name }}</h1>
    <h1>v2{{ age }}</h1>
    <button @click="getage1">vue2获取年龄</button>
    <h2>姓名:{{ text }}</h2>
    <h2>年龄:{{ age1 }}</h2>
    <h2>工作:{{ person.type }}</h2>
    <h2>薪资:{{ person.salary }}w</h2>
    <h2>爱好:{{ person.hobbies }}w</h2>
    <h2>深层对象:{{ person.a.b.c }}w</h2>
    <button @click="getage">点击增加年龄</button>
    <button @click="person.salary++">点击薪资翻倍</button>
    <button @click="change">深层方法修改</button>
  </div>
</template>


<script>
import { h } from "vue";
import { ref, reactive } from "vue";
export default {
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    // getage1(){
    //   alert('vue2岁数')
    //   console.log(this.text);
    // }

    //  getage1(){
    //   alert('vue2岁数')
    //   console.log(this.text);
    // }

    getage1() {
      alert("vue2岁数");
      console.log(this.text);
    },
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },

  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },

  // setup(props) {
  //   //实现不了双向数据绑定
  //   console.log('setup');
  //   let text ='我叫张三'
  //   const age1 =ref(20)

  //   const name =ref('小刀拉屁股，真是开了眼')

  //   const person=reactive({
  //     // job:'全栈开发',
  //     salary:100,
  //     type:'frontend developer',
  //     hobbies:['抽烟','喝酒','烫头'],
  //     a:{
  //       b:{
  //         c:666
  //       }
  //     }
  //   })
  //   function change(){
  //     person.salary='99999',
  //     person.type='qqqqq',
  //     person.hobbies=[0],
  //     person.a.b.c=100
  //   }

  //   function getage(){
  //     console.log('我是setup的方法');
  //     age1.value++
  //     console.log(age1);
  //     console.log(name);
  //     console.log(person);
  //   }

  //   return {
  //     text,
  //     age1,
  //     getage,
  //     name,
  //     person,
  //     change,
  //   }
  // }

  // setup(props) {
  //   console.log('setup');
  //   let text ='我叫张三'
  //   const age1 =ref(20)
  //   const name =ref('小刀拉屁股，真是开了眼')
  //   const person=reactive({
  //     salary:100,
  //     type:'frontend developer',
  //     hobbies:['抽烟','喝酒','烫头'],
  //     a:{
  //       b:{
  //         c:666
  //       }
  //     }
  //   })
  //   function change(){
  //     person.salary='99999',
  //     person.type='qqqqq',
  //     person.hobbies=[0],
  //     person.a.b.c=100
  //   }

  //   function getage(){
  //     console.log('我是setup的方法');
  //     age1.value++
  //     console.log(age1);
  //     console.log(name);
  //     console.log(person);
  //   }

  //   return {
  //     text,
  //     age1,
  //     getage,
  //     name,
  //     person,
  //     change,
  //   }
  // }

  setup(props) {
    console.log("setup");
    let text = "我叫张三";
    const age1 = ref(20);
    const name = ref("小刀拉屁股，真是开了眼");
    const person = reactive({
      salary: 100,
      type: "frontend developer",
      hobbies: ["抽烟", "喝酒", "烫头"],
      a: {
        b: {
          c: 666,
        },
      },
    });
    function change() {
      (person.salary = "99999"),
        (person.type = "qqqqq"),
        (person.hobbies = [0]),
        (person.a.b.c = 100);
    }

    function getage() {
      console.log("我是setup的方法");
      age1.value++;
      console.log(age1);
      console.log(name);
      console.log(person);
    }

    return {
      text,
      age1,
      getage,
      name,
      person,
      change,
    };
  },
};
</script>