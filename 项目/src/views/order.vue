<template>
  <div>
    <mbx></mbx>
    订单列表
    <template>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户名">
                <span>{{ props.row.restaurant_name }}</span>
              </el-form-item>
              <el-form-item label="店铺名称">
                <span>{{ props.row.restaurant_name }}</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单ID" prop="unique_id"> </el-table-column>
        <el-table-column label="总价格" prop="total_amount"> </el-table-column>
        <el-table-column label="订单状态" prop="status_bar.title">
        </el-table-column>
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

    <!-- 对话框 -->

    <!-- 对话框 -->
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
      tableDataa: [],
      pagenum: 1,
      pagesize: 5,
      dialogVisible: false,
      ruleForm: {
        name: "",
        address: "",
        category: "",
        phone: "",
        category: "",
        image_path: "",
        // sptp:'',
      },
      index: null,
      options: [],
    };
  },
  created() {
    axios
      .get(
        "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined"
      )
      .then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.tableDatas = JSON.stringify(this.tableData);
        this.page();
        this.options = res.data;
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
</style>