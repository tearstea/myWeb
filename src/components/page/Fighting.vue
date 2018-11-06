<template>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="会计类" name="1">
      <Accountant />
    </el-tab-pane>
    <el-tab-pane label="人力资源（HR）" name="3">
      <HumanResource />
    </el-tab-pane>
    <el-tab-pane label="MBA" name="5">
      <Master />
    </el-tab-pane>
    <el-tab-pane label="工业技术" name="7">
      <Industry />
    </el-tab-pane>
    <el-tab-pane label="电商&商业" name="9">
      <Ebusiness />
    </el-tab-pane>
    <el-tab-pane label="外贸" name="11">
      <Trade />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Accountant from "@/components/page/FightingPage/Accountant.vue";
import HumanResource from "@/components/page/FightingPage/HumanResource.vue";
import Master from "@/components/page/FightingPage/Master.vue";
import Industry from "@/components/page/FightingPage/Industry.vue";
import Ebusiness from "@/components/page/FightingPage/Ebusiness.vue";
import Trade from "@/components/page/FightingPage/Trade.vue";

export default {
      components: {
            Accountant,
            HumanResource,
            Master,
            Industry,
            Ebusiness,
            Trade
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