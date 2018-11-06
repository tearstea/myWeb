<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="80年代及之前" name="1">
      <Eighties />
    </el-tab-pane>
    <el-tab-pane label="90年代" name="2">
      <Nineties />
    </el-tab-pane>
    <el-tab-pane label="2000--2005" name="3">
      <Beginning />
    </el-tab-pane>
    <el-tab-pane label="2006--2010" name="4">
      <Ending />
    </el-tab-pane>
    <el-tab-pane label="2011--2015" name="5">
      <Decade />
    </el-tab-pane>
    <el-tab-pane label="2016--至今" name="6">
      <UptoNow />
    </el-tab-pane>
    <el-tab-pane label="动 漫" name="7">
      <Anime />
    </el-tab-pane>
    <el-tab-pane label="电视剧" name="8">
      <Teleplay />
    </el-tab-pane>
    <el-tab-pane label="站长分享" name="9">
      <Share />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Eighties from "@/components/page/FilmPage/Eighties.vue";
import Nineties from "@/components/page/FilmPage/Nineties.vue";
import Beginning from "@/components/page/FilmPage/Beginning.vue";
import Ending from "@/components/page/FilmPage/Ending.vue";
import Decade from "@/components/page/FilmPage/Decade.vue";
import UptoNow from "@/components/page/FilmPage/UptoNow.vue";
import Anime from "@/components/page/FilmPage/Anime.vue";
import Teleplay from "@/components/page/FilmPage/Teleplay.vue";
import Share from "@/components/page/FilmPage/Share.vue";
export default {
      components: {
            Eighties,
            Nineties,
            Beginning,
            Ending,
            Decade,
            UptoNow,
            Anime,
            Teleplay,
            Share
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