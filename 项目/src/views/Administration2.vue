<template>
  <div class="box">
    <p class="title">管理员信息</p>
    <el-card class="box-card">
      <div class="text item">
        <ul>
          <li>姓名：</li>
          <li>注册时间：</li>
          <li>管理员权限：</li>
          <li>管理员：</li>
          <li>
            更换头像：<el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img src="../../public/2.png" class="avatar" />
              <!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
            </el-upload>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>


<style lang="scss" scoped>
.box-card {
  margin: 0 auto;
  width: 800px;
  background-color: #f9fafc;
  margin-top: 20px;
}
ul {
  li {
    padding-top: 15px;
    color: #716671;
  }
}
.title {
  text-align: center;
}
.avatar{
    width: 150px;
    height: 150px;
}
.avatar-uploader {
    margin-top: 20px;
}
</style>