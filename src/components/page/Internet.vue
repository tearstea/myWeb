<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="UI设计" name="10">
      <UserFace />
    </el-tab-pane>
    <el-tab-pane label="前端" name="1">
      <Web />
    </el-tab-pane>
    <el-tab-pane label="公共平台" name="2">
      <Platform />
    </el-tab-pane>
    <el-tab-pane label="后端" name="3">
      <BackEnd />
    </el-tab-pane>
    <el-tab-pane label="测试" name="11">
      <Test />
    </el-tab-pane>
    <el-tab-pane label="产品经理" name="12">
      <Manager />
    </el-tab-pane>
    <el-tab-pane label="公众号" name="4">
      <TencentId />
    </el-tab-pane>
    <el-tab-pane label="开源&博客" name="5">
      <Blog />
    </el-tab-pane>
    <el-tab-pane label="小程序" name="6">
      <applet />
    </el-tab-pane>
    <el-tab-pane label="人工智能" name="7">
      <AI />
    </el-tab-pane>
    <el-tab-pane label="站长挑选" name="9">
      <Handpick />
    </el-tab-pane>
    <el-tab-pane label="专业书籍" name="8">
      <ProfessionalBook />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Web from "@/components/page/InterPage/Web.vue";
import UserFace from "@/components/page/InterPage/UserFace.vue";
import Platform from "@/components/page/InterPage/Platform.vue";
import BackEnd from "@/components/page/InterPage/BackEnd.vue";
import TencentId from "@/components/page/InterPage/TencentId.vue";
import Blog from "@/components/page/InterPage/Blog.vue";
import Applet from "@/components/page/InterPage/Applet.vue";
import AI from "@/components/page/InterPage/AI.vue";
import ProfessionalBook from "@/components/page/InterPage/ProfessionalBook.vue";
import Handpick from "@/components/page/InterPage/Handpick.vue";
import Test from "@/components/page/InterPage/Test.vue";
import Manager from "@/components/page/InterPage/Manager.vue";

export default {
      components: {
            Web,
            UserFace,
            Platform,
            BackEnd,
            TencentId,
            Blog,
            Applet,
            AI,
            ProfessionalBook,
            Handpick,
            Test,
            Manager
      },
      data() {
            return {
                  activeName: "1"
            };
      },
      methods: {
            handleClick(tab, event) {
                  console.log(tab, event);
            }
      }
};
</script>
