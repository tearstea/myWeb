<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="公众号：">
              <el-popover placement="right-start" title="扫一扫，可关注" trigger="hover">
                <img :src="props.row.imgUrl" alt="沟渠网">
                <el-button type="primary" plain size="mini" round slot="reference">
                  {{ props.row.name }}
                </el-button>
              </el-popover>
            </el-form-item>
            <el-form-item label="公众号简介：">
              <span>
                {{ props.row.desc }}
              </span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index">
      </el-table-column>
      <el-table-column label="分类" prop="classify" sortable>
      </el-table-column>
      <el-table-column label="公众号" prop="name" sortable>
      </el-table-column>
      <el-table-column label="二维码">
        <template slot-scope="props">
          <el-popover placement="left-start" :title="props.row.name" trigger="hover">
            <img :src="props.row.imgUrl" alt="沟渠网">
            <el-button type="success" size="mini" round slot="reference">
              <a class="classB">GO</a>
            </el-button>
          </el-popover>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
      data() {
            return {
                  tableData5: [
                        {
                              classify: "历史",
                              name: "历史解密档案",
                              imgUrl: require("@/assets/images/hottencent/1_lishijiemi.png"),
                              desc:
                                    "讲解了大量我们所不知道的历史知识，甚至有的能够颠覆我们的历史观"
                        },
                        {
                              classify: "推理",
                              name: "逻辑推理",
                              imgUrl: require("@/assets/images/hottencent/2_luojituili.png"),
                              desc: "比较烧脑，对锻炼脑力很有益处"
                        },
                        {
                              classify: "历史",
                              name: "历史时间",
                              imgUrl: require("@/assets/images/hottencent/3_lishishijian.png"),
                              desc:
                                    "喜欢历史的可以关注，可以学到书本上学不到的历史知识"
                        },
                        {
                              classify: "幽默",
                              name: "少女兔",
                              imgUrl: require("@/assets/images/hottencent/4_shaonvtu.png"),
                              desc: "幽默治愈系列的漫画小文字，给人一股清流"
                        },
                        {
                              classify: "外贸",
                              name: "索菲外贸笔记",
                              imgUrl: require("@/assets/images/hottencent/5_suofeiwaimao.png"),
                              desc:
                                    "虽然对个人而言，实干不能兴邦，但可以实干兴家，满满的干货，满满的正能量"
                        },
                        {
                              classify: "房地产",
                              name: "房地产",
                              imgUrl: require("@/assets/images/hottencent/6_fangdichan.png"),
                              desc: "对当今房地产的现状作了实时解读"
                        },
                        {
                              classify: "诗歌",
                              name: "为你读诗",
                              imgUrl: require("@/assets/images/hottencent/7_weinidushi.png"),
                              desc: "优美的文字，优美的语言，惬意生活的一杯茶"
                        },
                        {
                              classify: "P2P",
                              name: "P2P观察",
                              imgUrl: require("@/assets/images/hottencent/8_ptop.png"),
                              desc:
                                    "不定时报道了P2P圈子的事，可让我们常怀一颗谨慎之心"
                        },
                        {
                              classify: "辟谣",
                              name: "头条辟谣",
                              imgUrl: require("@/assets/images/hottencent/9_toutiao.png"),
                              desc:
                                    "“头条辟谣”基于今日头条谣言智能识别数据库，并综合考虑谣言的传播力、迷惑性、危害性和周期性，会定期推出「各类谣言榜单」。"
                        },
                        {
                              classify: "俄语",
                              name: "CGTN俄语频道",
                              imgUrl: require("@/assets/images/hottencent/10_eyupindao.png"),
                              desc:
                                    "可以实时了解到俄罗斯的新闻，同时对想学习俄语的同学可以有所帮助"
                        },
                        {
                              classify: "俄语",
                              name: "看电影学俄语",
                              imgUrl: require("@/assets/images/hottencent/11_kandianying.png"),
                              desc:
                                    "不仅可以看到俄罗斯好看的电影，还可以学习俄语，算得上一举两得，但不要看着看着，不想学了，初衷还是不能忘的"
                        },
                        {
                              classify: "日语",
                              name: "日语阅读A计划 ",
                              imgUrl: require("@/assets/images/hottencent/12_riyuxuexi.png"),
                              desc: "想学日语的可以看过来，试试"
                        },
                        {
                              classify: "军事",
                              name: "这才是美军",
                              imgUrl: require("@/assets/images/hottencent/13_zhecaishimeijun.png"),
                              desc:
                                    "可以了解到美国的军事情况，对于喜欢军事的同学，是个不错的窗口。"
                        },
                        {
                              classify: "历史",
                              name: "口述历史",
                              imgUrl: require("@/assets/images/hottencent/14_koushulishi.png"),
                              desc:
                                    "从别人嘴里出来的历史，也许才是最接近历史的历史，毕竟他们是历史的见证者"
                        },
                        {
                              classify: "历史",
                              name: "煮酒观天下",
                              imgUrl: require("@/assets/images/hottencent/15_zhujiuguan.png"),
                              desc: "一壶浊酒也许就可能让我们喜相逢"
                        },
                        {
                              classify: "IT",
                              name: "Python",
                              imgUrl: require("@/assets/images/hottencent/16_python.png"),
                              desc:
                                    "如果想关注人工智能，想学习Python的可以往这扫"
                        },
                        {
                              classify: "中医",
                              name: "天医堂",
                              imgUrl: require("@/assets/images/hottencent/17_tianyitang.png"),
                              desc:
                                    "如果对中医有研究，这里面不断的推新了各种各样的病例并进行诊治，这是个不错的公众号"
                        },
                        {
                              classify: "医学",
                              name: "医学界",
                              imgUrl: require("@/assets/images/hottencent/18_yixuejie.png"),
                              desc: "不断的更新了医学界的新闻报道"
                        },
                        {
                              classify: "R语言",
                              name: "R语言中文社区 ",
                              imgUrl: require("@/assets/images/hottencent/19_ryuyan.png"),
                              desc:
                                    "国内最大的R语言学习平台，对于想学习这个语言的可以关注。"
                        },
                        {
                              classify: "投资",
                              name: "投资圈",
                              imgUrl: require("@/assets/images/hottencent/20_touziquan.png"),
                              desc:
                                    "提供高品质行业资讯、把脉新常态下投资风向、精选优秀投资理财渠道、整合资源人脉助力投资对接。"
                        },
                        {
                              classify: "美文",
                              name: "水木文摘",
                              imgUrl: require("@/assets/images/hottencent/21_shuimuwenzhai.png"),
                              desc:
                                    "清华学子，陪你读书。每晚9点，水木君陪你读一本好书。"
                        },
                        {
                              classify: "网络日志",
                              name: "阮一峰的网络日志",
                              imgUrl: require("@/assets/images/hottencent/22_ruanyifeng.png"),
                              desc:
                                    "每周五更新一次，带来了当周世界上发生的一些科技圈的一些大事，很有意思，也很有启发"
                        },
                        {
                              classify: "学术平台",
                              name: "壹学者",
                              imgUrl: require("@/assets/images/hottencent/23_yixuezhe.png"),
                              desc:
                                    "是中国人民大学和中国科学院学术评价专家及技术团队联合研发的平台，已有75万学者加入，2017年荣获第四届“中国出版政府奖”。"
                        },
                        {
                              classify: "美学",
                              name: "印客美学",
                              imgUrl: require("@/assets/images/hottencent/24_yinkemeixue.png"),
                              desc: "艺术是曲高和寡的，需要一双发现美的眼睛"
                        },
                        {
                              classify: "学术",
                              name: "中外学术情报",
                              imgUrl: require("@/assets/images/hottencent/25_zhongwaixueshu.png"),
                              desc: "中外学术情报，学术资源第一站"
                        },
                        {
                              classify: "植物科学",
                              name: "植物科学最前沿",
                              imgUrl: require("@/assets/images/hottencent/26_zhiwukexue.png"),
                              desc:
                                    "致力于分享和交流植物科学研究方法、学术成果，努力构建中国植物科学研究共同体和最专业的植物科学学术传播平台。"
                        },
                        {
                              classify: "化学",
                              name: "化学加",
                              imgUrl: require("@/assets/images/hottencent/27_huaxuejia.png"),
                              desc: "增加点化学方面的知识还是必要的"
                        },
                        {
                              classify: "ios资讯",
                              name: "ios",
                              imgUrl: require("@/assets/images/hottencent/28_ios.png"),
                              desc: "最新行业资讯，ios技术支持。"
                        },
                        {
                              classify: "数据分析",
                              name: " 麦可思研究",
                              imgUrl: require("@/assets/images/hottencent/29_maikesi.png"),
                              desc:
                                    "以案例和数据分享国内外办学理念、管理方法和实践。"
                        },
                        {
                              classify: "电影解说",
                              name: "越哥说电影",
                              imgUrl: require("@/assets/images/hottencent/30_yuegeshuo.png"),
                              desc:
                                    "越哥说电影，专注好电影。这解说，确实很好，值得一看。"
                        }
                        // {
                        //       classify: '',
                        //       name: '',
                        //       imgUrl: require("@/assets/images/hottencent/4_shaonvtu.png"),
                        //       desc: '',
                        // },
                  ]
            };
      },
      methods: {
            tableRowClassName({ row, rowIndex }) {
                  if (rowIndex === 0) {
                        return "success-row";
                  } else if (rowIndex % 2) {
                        return "warning-row";
                  } else if (rowIndex % 3) {
                        return "success-row";
                  }
                  return "";
            }
      }
};
</script>

