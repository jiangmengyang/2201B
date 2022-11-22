<template>
     <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in $route.meta.bread" :key="item.name" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>