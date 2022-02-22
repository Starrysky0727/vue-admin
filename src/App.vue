<template>
  <el-container>
    <el-header>2022年2月19日</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <!-- :router 开启 vue-router 模式 非常重要 -->
            <el-menu
              active-text-color="#1b65b9"
              background-color="#28333E"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
              :router="true"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Element-Plus</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/category">分类管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="/good">商品管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="/guest">会员管理</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Echarts</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="padding: 0">
        <Header></Header>
        <div class="main">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// element-plus的图标
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import Header from "./components/Header.vue";
import { pathMap } from "./utils";
export default {
  name: "App",
  components: {
    Location,
    Document,
    IconMenu,
    Setting,
    Header,
  },
  setup() {
    const router = useRouter();
  },
};
</script>

<style>
body {
  margin: 0;
}
.el-header {
  color: #fff;
  background-color: #1b65b9;
  height: 40px !important;
  line-height: 40px;
}
/* 左侧菜单栏的高度 */
.el-menu-vertical-demo {
  height: calc(100vh - 40px);
}
.el-main {
  padding: 0;
}
.main {
  padding: 10px 15px;
}
</style>
