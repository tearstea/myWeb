<template>

  <el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="办公资源" name="1">
      <Office />
    </el-tab-pane>
    <el-tab-pane label="应用&网站" name="3">
      <Functional />
    </el-tab-pane>
    <el-tab-pane label="资源搜索" name="4">
      <Searching />
    </el-tab-pane>
    <el-tab-pane label="自媒体" name="6">
      <SelfMedia />
    </el-tab-pane>
    <el-tab-pane label="学习小天地" name="11">
      <Learning />
    </el-tab-pane>
    <el-tab-pane label="知识世界" name="13">
      <Knowledge />
    </el-tab-pane>
    <el-tab-pane label="手机APP" name="5">
      <MobilApp />
    </el-tab-pane>
    <el-tab-pane label="热门公众号" name="7">
      <HotTencent />
    </el-tab-pane>
    <el-tab-pane label="实用小程序" name="9">
      <UsefullApplet />
    </el-tab-pane>
    <el-tab-pane label="新闻新事" name="10">
      <News />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Office from "@/components/page/GeneralPage/Office.vue";
import Functional from "@/components/page/GeneralPage/Functional.vue";
import Searching from "@/components/page/GeneralPage/Searching.vue";
import MobilApp from "@/components/page/GeneralPage/MobilApp.vue";
import HotTencent from "@/components/page/GeneralPage/HotTencent.vue";
import UsefullApplet from "@/components/page/GeneralPage/UsefullApplet.vue";
import Learning from "@/components/page/GeneralPage/Learning.vue";
import Knowledge from "@/components/page/GeneralPage/Knowledge.vue";
import News from "@/components/page/GeneralPage/News.vue";
import SelfMedia from "@/components/page/GeneralPage/SelfMedia.vue";

export default {
      components: {
            Office,
            Functional,
            Searching,
            MobilApp,
            HotTencent,
            UsefullApplet,
            Learning,
            Knowledge,
            News,
            SelfMedia
      },
      data() {
            return {
                  activeName: "3"
            };
      },
      methods: {
            handleClick(tab, event) {
                  console.log(tab, event);
            }
      }
};
</script>


