<template>
  <div>
    <mbx></mbx>
    用户列表
    <template>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" class="a">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column prop="registe_time" label="注册日期"></el-table-column>
        <el-table-column prop="username" label="用户姓名"></el-table-column>
        <el-table-column prop="city" label="注册地址"></el-table-column>
      </el-table>
      <!-- 表格 -->
    </template>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 3, 5, 10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
    <!-- 分页 -->
  </div>
</template>

<script>
import mbx from "../components/mbx.vue";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      tableDatas: [],
      pagenum: 1,
      pagesize: 5,
    };
  },
  created() {
    axios
      .get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20")
      .then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.tableDatas = JSON.stringify(this.tableData);
        this.page();
      });
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
      this.page();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.page();
    },
    page() {
      let arr = JSON.parse(this.tableDatas);
      this.tableData = arr.slice(
        (this.pagenum - 1) * this.pagesize,
        this.pagenum * this.pagesize
      );
    },
  },
  components: {
    mbx,
  },
};
</script>
<style lang="scss" scoped>
.a {
  background-color: #ccc;
}
</style>