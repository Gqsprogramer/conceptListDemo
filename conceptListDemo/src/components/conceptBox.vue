<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">概念列表</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="tabBox" :style="{ background: '#fff', padding: '24px', minHeight: '500px' }">
        <!-- 存储两个组件，左侧一个大的概念列表 -->
         <!-- 右侧是关于模型相关属性的详细介绍，支持修改与重新提交 -->
        <div class="mainBox">
          <div class="leftConceptListBox">
          <conceptListBox/>
          </div>
          <div class="rightConceptdetailBox">
          
          </div>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
import conceptListBox from './conceptListBox.vue';
const selectedKeys = ref(['1']);
</script>
<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

.leftConceptListBox {
  margin: 0 10px;
  width: 250px;
  border: #141414 solid 1px;
}

.rightConceptdetailBox {
  margin: 0 10px;
  width: 100%;
  border: #141414 solid 1px;
}

.mainBox {
  display: flex;
}
</style>