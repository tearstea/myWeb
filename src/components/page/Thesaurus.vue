<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="图书馆" name="1">
      <Library />
    </el-tab-pane>
    <el-tab-pane label="书吧网站" name="3">
      <BookBar />
    </el-tab-pane>
    <el-tab-pane label="文学历史" name="5">
      <Literature />
    </el-tab-pane>
    <el-tab-pane label="经典&诗篇" name="7">
      <Classic />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Library from "@/components/page/ThesaurusPage/Library.vue";
import BookBar from "@/components/page/ThesaurusPage/BookBar.vue";
import Literature from "@/components/page/ThesaurusPage/Literature.vue";
import Classic from "@/components/page/ThesaurusPage/Classic.vue";


export default {
      components: {
            Library,
            BookBar,
            Literature,
            Classic
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