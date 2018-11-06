<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="爱分享" name="1">
      <Mylove />
    </el-tab-pane>
    <el-tab-pane label="黑科技" name="3">
      <Hacker />
    </el-tab-pane>
    <el-tab-pane label="网站奇葩" name="5">
      <Website />
    </el-tab-pane>
    <!-- <el-tab-pane label="百度搜索" name="7">
      <Search />
    </el-tab-pane> -->
  </el-tabs>
</template>
<script>
import Mylove from "@/components/page/SharePage/Mylove.vue";
import Hacker from "@/components/page/SharePage/Hacker.vue";
import Website from "@/components/page/SharePage/Website.vue";
// import Search from "@/components/page/SharePage/Search.vue";
export default {
      components: {
            Mylove,
            Hacker,
            Website,
            // Search
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
