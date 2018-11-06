<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="古今中外" name="1">
      <History />
    </el-tab-pane>
    <el-tab-pane label="哲 学" name="3">
      <Philosophy />
    </el-tab-pane>
    <el-tab-pane label="音乐艺术" name="5">
      <Art />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import History from "@/components/page/SocialPage/History.vue";
import Philosophy from "@/components/page/SocialPage/Philosophy.vue";
import Art from "@/components/page/SocialPage/Art.vue";

export default {
      components: {
            History,
            Philosophy,
            Art
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

