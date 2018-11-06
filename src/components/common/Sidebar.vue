<template>
  <el-row class="tac" v-cloak>
    <el-col :span="12" v-cloak>
      <el-menu v-cloak default-active="1" class="el-menu-vertical-demo" background-color="#909399" text-color="#fff" active-text-color="rgba(84, 255, 75, 0.85)">
        <router-link v-cloak v-for="item in items" :to="{path: '/' + item.path}" :key="item.path">
          <el-menu-item v-cloak :index="item.num">
            <i :class="item.icon"></i>
            <span v-cloak>{{item.content}}</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
      data() {
            return {
                  items: [
                        {
                              num: "1",
                              path: "general",
                              icon: "iconfont icon-shejiao",
                              content: "社交常用"
                        },
                        {
                              num: "3",
                              path: "internet",
                              icon: "iconfont icon-hulianwangIT",
                              content: "I T 行业"
                        },
                        {
                              num: "5",
                              path: "thesaurus",
                              icon: "iconfont icon-zhishi",
                              content: "知识宝库"
                        },
                        {
                              num: "7",
                              path: "learning",
                              icon: "iconfont icon-xuesheng1",
                              content: "学习在线"
                        },
                        {
                              num: "9",
                              path: "fighting",
                              icon: "iconfont icon-zhuanye",
                              content: "职场商战"
                        },
                        {
                              num: "11",
                              path: "naturalscience",
                              icon: "iconfont icon-kexuejishu-",
                              content: "自然科学"
                        },
                        {
                              num: "13",
                              path: "socialsciences",
                              icon: "iconfont icon-drxx06",
                              content: "社会科学"
                        },
                        {
                              num: "15",
                              path: "film",
                              icon: "iconfont icon-dianyingshipin",
                              content: "经典影视"
                        },
                        {
                              num: "16",
                              path: "life",
                              icon: "iconfont icon-tubiaozhizuomobanyihuifu-",
                              content: "百味生活"
                        },
                        {
                              num: "17",
                              path: "navigation",
                              icon: "iconfont icon-daohang-tianchong",
                              content: "向导网站"
                        },
                        {
                              num: "19",
                              path: "myshare",
                              icon: "iconfont icon-love",
                              content: "站长分享"
                        }
                  ]
            };
      }
};
</script>
<style scoped>
   [v-cloak]{
            display: none;
        }
.el-menu-item {
      height: 54px;
      line-height: 54px;
}

.el-col {
      width: 100%;
}

a {
      color: #fff;
}
span {
      font-size: 18px;
}
.iconfont {
      font-size: 22px;
}
</style>
