<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="天文地理" name="1">
      <Astronomy />
    </el-tab-pane>
    <el-tab-pane label="生命科学" name="3">
      <Life />
    </el-tab-pane>
    <el-tab-pane label="环工环保" name="5">
      <Environment />
    </el-tab-pane>
    <el-tab-pane label="动物世界" name="7">
      <Animal />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Astronomy from "@/components/page/NaturalPage/Astronomy.vue";
import Life from "@/components/page/NaturalPage/Life.vue";
import Environment from "@/components/page/NaturalPage/Environment.vue";
import Animal from "@/components/page/NaturalPage/Animal.vue";

export default {
      components: {
            Astronomy,
            Life,
            Environment,
            Animal
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

