<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="婴幼儿篇" name="1">
      <Children />
    </el-tab-pane>
    <el-tab-pane label="小学篇" name="3">
      <Primary />
    </el-tab-pane>
    <el-tab-pane label="中学篇" name="5">
      <Middle />
    </el-tab-pane>
    <el-tab-pane label="高中篇" name="7">
      <Senior />
    </el-tab-pane>
    <el-tab-pane label="大学篇" name="9">
      <University />
    </el-tab-pane>
    <el-tab-pane label="教学篇" name="11">
      <Teacher />
    </el-tab-pane>
    <el-tab-pane label="语言学习" name="13">
      <Language />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Children from "@/components/page/LearningPage/Children.vue";
import Primary from "@/components/page/LearningPage/Primary.vue";
import Middle from "@/components/page/LearningPage/Middle.vue";
import Senior from "@/components/page/LearningPage/Senior.vue";
import University from "@/components/page/LearningPage/University.vue";
import Teacher from "@/components/page/LearningPage/Teacher.vue";
import Language from "@/components/page/LearningPage/Language.vue";

export default {
      components: {
            Children,
            Primary,
            Middle,
            Senior,
            University,
            Teacher,
            Language
      },
      data() {
            return {
                  activeName: "9"
            };
      },
      methods: {
            handleClick(tab, event) {
                  console.log(tab, event);
            }
      }
};
</script>