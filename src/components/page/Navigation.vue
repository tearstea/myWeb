<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="网站向导" name="1">
      <NavNet />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import NavNet from "@/components/page/NavigationPage/NavNet.vue";
export default {
      components: {
            NavNet
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
