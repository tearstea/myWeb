<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="茶之茗" name="1">
      <Tearstea />
    </el-tab-pane>
    <el-tab-pane label="酒之文" name="3">
      <Bitters />
    </el-tab-pane>
    <el-tab-pane label="食之味" name="5">
      <Gourmet />
    </el-tab-pane>
    <el-tab-pane label="行之旅" name="7">
      <Travel />
    </el-tab-pane>
    <el-tab-pane label="游之戏" name="9">
      <Games />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Tearstea from "@/components/page/LifePage/Tearstea.vue";
import Bitters from "@/components/page/LifePage/Bitters.vue";
import Gourmet from "@/components/page/LifePage/Gourmet.vue";
import Travel from "@/components/page/LifePage/Travel.vue";
import Games from "@/components/page/LifePage/Games.vue";
export default {
      components: {
            Tearstea,
            Bitters,
            Gourmet,
            Travel,
            Games

      },
      data() {
            return {
                  activeName: "5"
            };
      },
      methods: {
            handleClick(tab, event) {
                  console.log(tab, event);
            }
      }
};
</script>
