<template>
  <div>
    <mbx></mbx>
    食品列表
    <template>
      <!-- <el-table :data="tableData" style="width: 100%" class="a" >
        <el-table-column prop="name" label="店铺名称"></el-table-column>
        <el-table-column prop="address" label="店铺地址"></el-table-column>
        <el-table-column  prop="category" label="店铺介绍"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="bj(scope.$index)">编辑</el-button>
                <el-button size="mini">添加食品</el-button>
                <el-button size="mini" type="danger" @click="del(scope.$index)">删除</el-button>
            </template>
        </el-table-column>
      </el-table> -->
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"> </el-table-column>
        <el-table-column label="食品介绍" prop="description"> </el-table-column>
        <el-table-column label="评分" prop="rating"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="bj(scope.$index)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.$index)"
              >删除</el-button
            >
          </template>
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
    <el-dialog title="修改食品信息" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="食品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>

        <el-form-item label="食品分类" prop="category">
          <el-cascader
            :options="options"
            :show-all-levels="false"
            v-model="ruleForm.category"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="店铺图片" prop="image_path">
          <template slot-scope="scope">
            <img :src="scope.image_path" alt="" />
          </template>
        </el-form-item>
        <!-- 编辑里面的表格 -->
        <template>
          <el-table :data="tableDataa" style="width: 100%">
            <el-table-column prop="date" label="规格"> </el-table-column>
            <el-table-column prop="date" label="包装费"> </el-table-column>
            <el-table-column prop="date" label="价格"> </el-table-column>
            <el-table-column label="操作"> </el-table-column>
          </el-table>
        </template>
        <!-- 编辑里面的表格 -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
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
        "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined"
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
    del(i) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(i, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    bj(i) {
      this.index = i;
      this.dialogVisible = true;
      this.ruleForm = {
        ...this.tableData[this.index],
      };
    },
    ok() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$set(this.tableData, this.index, { ...this.ruleForm });
          this.dialogVisible = false;
          this.$message({
            message: "恭喜你，编辑成功",
            type: "success",
          });
        }
      });
    },
  },
  components: {
    mbx,
  },
};
</script>

<style lang="scss" scoped>
</style>