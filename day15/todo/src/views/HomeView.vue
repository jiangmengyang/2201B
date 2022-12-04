<template>
  <div class="home">
    <div class="todo">
      <el-button class="btn" type="primary" @click="dialogVisible = true"
        >添加todolist</el-button
      >
      <!-- 日历 -->
      <el-calendar>
        <template slot="dateCell" slot-scope="{ date, data }">
          <!--自定义内容-->
          <div class="list">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split("-").slice(2).join("-") }}
            </p>
            <ul>
              <li v-for="(item, index) in $store.state.list" :key="index">
                <div
                  @click="over(index)"
                  v-if="item.time == data.day && item.resource == '已完成'"
                  class="btn1"
                >
                  {{ item.Name }}
                </div>
                <div
                  @click="done(index)"
                  v-if="item.time == data.day && item.resource == '未完成'"
                  class="btn2"
                >
                  {{ item.Name }}
                </div>
              </li>
            </ul>
          </div>
        </template>
      </el-calendar>

      <!-- 日历 -->
      <!-- 弹框-->
      <el-dialog title="添加todolist" :visible.sync="dialogVisible" width="40%">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="Name">
            <el-input v-model="ruleForm.Name"></el-input>
          </el-form-item>
          <!-- 代办名称 -->
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <!-- 代办事项时间 -->
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <!-- 代办事项状态 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="add('ruleForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 弹框 -->

      <!-- 已完成 -->
      <el-dialog
        title="修改todolist"
        :visible.sync="dialogVisible1"
        width="40%"
      >
        <el-form
          :model="ruleForm1"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="Name">
            <el-input v-model="ruleForm1.Name"></el-input>
          </el-form-item>
          <!-- 代办名称 -->
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm1.time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <!-- 代办事项时间 -->
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm1.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 代办事项状态 -->
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="edit">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 已完成 -->

      <!-- 未完成 -->
      <el-dialog
        title="修改todolist"
        :visible.sync="dialogVisible2"
        width="40%"
      >
        <el-form
          :model="ruleForm2"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="Name">
            <el-input v-model="ruleForm2.Name"></el-input>
          </el-form-item>
          <!-- 代办名称 -->
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm2.time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <!-- 代办事项时间 -->
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm2.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 代办事项状态 -->
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="edit2">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 未完成 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        Name: "",
        time: "",
        resource: "",
      },
      // 正则验证
      rules: {
        Name: [{ required: true, message: "请输入代办名称", trigger: "blur" }],
        time: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择状态", trigger: "change" },
        ],
      },
      todoList: [],
      dialogVisible1: false,
      ruleForm1: {
        Name: "",
        time: "",
        resource: "",
      },
      dialogVisible2: false,
      ruleForm2: {
        Name: "",
        time: "",
        resource: "",
      },
    };
  },
  methods: {
    // 添加事件
    add(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let date = new Date(this.ruleForm.time);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          month = month < 10 ? "0" + month : month;
          let dates = date.getDate();
          dates = dates < 10 ? "0" + dates : dates;
          let time = year + "-" + month + "-" + dates;
          let obj = {
            Name: this.ruleForm.Name,
            resource: this.ruleForm.resource,
            time: time,
          };
          this.$store.commit("add", obj);
          this.dialogVisible = false;
        } else {
          return false;
        }
      });
    },
    // 已完成的编辑事件
    over(index) {
      this.dialogVisible1 = true;
      this.ruleForm1 = this.$store.state.list[index];
      this.ruleForm1.index = index;
    },
    // 已完成修改
    edit() {
      this.$store.commit("edit", this.ruleForm1);
      this.dialogVisible1 = false;
    },
    // 未完成的编辑事件
    done(index) {
      this.dialogVisible2 = true;
      this.ruleForm2 = this.$store.state.list[index];
      this.ruleForm2.index = index;
    },
    // 未完成修改
    edit2() {
      this.$store.commit("edit2", this.ruleForm2);
      this.dialogVisible2 = false;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  justify-content: center;
  background-color: #303030;
}
.todo {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.btn {
  margin-bottom: 10px;
}
.is-selected {
  color: #1989fa;
}
.list {
  display: flex;
  justify-content: space-between;
}

ul {
  margin: 0;
  padding: 0;
  margin-top: 3px;
}

p {
  display: inline-block;
}
.is-selected {
  color: #1989fa;
}
.btn1 {
  width: 80px;
  height: 20px;
  border: 0;
  outline: none;
  margin: 5px;
  color: #fff;
  background-color: #72a632;
}
.btn2 {
  width: 80px;
  height: 20px;
  border: 0;
  outline: none;
  margin: 5px;
  color: #fff;
  background-color: #931d2e;
}
</style>
