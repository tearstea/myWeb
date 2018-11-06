<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="网站全名：">
              <a :href="props.row.url" class="classA" rel="nofollow noopener noreferrer" target="_blank">
                <el-button size="mini" round>{{ props.row.fullName }}
                </el-button>
              </a>
            </el-form-item>
            <el-form-item label="网站地址：">
              <span class="spanA">
                {{ props.row.url }}
              </span>
            </el-form-item>
            <el-form-item label="网站简介：">
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
      <el-table-column label="简称" prop="name" sortable>
      </el-table-column>
      <el-table-column label="链接">
        <template slot-scope="props">
          <a :href="props.row.url" rel="nofollow noopener noreferrer" class="classB" target="_blank">
            <el-button type="success" size="mini" round>GO</el-button>
          </a>
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
                              classify: "历史记录片",
                              name: "《帝陵》",
                              fullName: "帝陵",
                              url: "https://www.bilibili.com/video/av4619981/",
                              desc:
                                    "中国首部编年体史诗动画纪录片。讲述了帝王与其陵墓之间的故事。"
                        },
                        {
                              classify: "历史纪录片",
                              name: "《中国通史》",
                              fullName: "中国通史",
                              url: "https://www.bilibili.com/video/av6547465/",
                              desc:
                                    "中国迄今为止规模最大的历史专题片。描写了从远古到清朝灭亡的宏大历史场景。"
                        },
                        {
                              classify: "历史记录片",
                              name: "《神秘的西夏》",
                              fullName: "神秘的西夏",
                              url: "https://www.iqiyi.com/a_19rrhb8cbl.html",
                              desc: "对西夏文化最全面，最综合的一次展现。"
                        },
                        {
                              classify: "历史记录片",
                              name: "《世界历史》",
                              fullName: "世界历史",
                              url:
                                    "http://list.youku.com/show/id_z83ca3f0ac4bb11e1b2ac.html",
                              desc:
                                    "历时8年制作。以丰富的试听手段再现了自远古人类起源到万隆会议的浩瀚历史。"
                        },
                        {
                              classify: "历史记录片",
                              name: "《帝国的兴衰》",
                              fullName: "帝国的兴衰",
                              url: "https://www.bilibili.com/video/av5332988/",
                              desc: "秦汉帝国的兴衰历史。"
                        },
                        {
                              classify: "历史纪录片",
                              name: "《圆明园》",
                              fullName: "圆明园",
                              url:
                                    "http://v.baidu.com/movie/24095.htm?fr=ala7&ty=21",
                              desc:
                                    "再现了圆明园从初建到大规模扩建成旷世园林，再到英法联军对圆明园的破坏焚烧的历史。"
                        },
                        {
                              classify: "百家讲坛",
                              name: "《易中天品三国》",
                              fullName: "易中天品三国",
                              url: "https://www.bilibili.com/video/av8041964/",
                              desc:
                                    "独辟蹊径，“妙说”历史，巧妙地运用“俗不可耐”的语言、声情并茂的表演，有趣地还原了历史的本来面目。"
                        },
                        {
                              classify: "历史记录片",
                              name: "《新丝绸之路》",
                              fullName: "新丝绸之路",
                              url:
                                    "http://list.youku.com/show/id_zc60ccd101b0611e1a046.html",
                              desc: "展现了思路的过去、现在与未来"
                        },
                        {
                              classify: "军事历史",
                              name: "《铁在烧》",
                              fullName: "铁在烧",
                              url: "https://www.bilibili.com/video/av7601289/",
                              desc:
                                    "该片讲述了1951年志愿军第63军为保障主力部队完成撤离和重铸防线，奉命阻击以美国为首“联合国军”的历史片段，将一段浴血鏖战13天且并不为人所熟知的战斗历程，进行了全景式展现。"
                        },
                        {
                              classify: "历史记录片",
                              name: "《敦煌》",
                              fullName: "敦煌",
                              url:
                                    "http://tv.cntv.cn/video/VSET100200519023/61d0102698e9472daa36043267723095",
                              desc:
                                    "记录了敦煌地区历史文化的发展脉络，深入揭示了敦煌两千多年的文化内涵"
                        },
                        {
                              classify: "宗教文化",
                              name: "《佛国记》",
                              fullName: "佛国记-法显西行",
                              url:
                                    "https://v.qq.com/x/cover/5c8p7y2ydlp2y58.html?ptag=baidu.aladdin.doco",
                              desc:
                                    "讲述了比玄奘早数百年的中国第一位到海外取经求法的大师法显的故事。"
                        },
                        {
                              classify: "宗教文化",
                              name: "《玄奘之路》",
                              fullName: "玄奘之路",
                              url:
                                    "http://www.iqiyi.com/a_19rrgj93e1.html?vfm=2008_aldbd",
                              desc:
                                    "讲述了玄奘从坚持到超越的经典之旅，真实再现了玄奘西行的传奇故事。"
                        },
                        {
                              classify: "文化",
                              name: "《天地玄黄》",
                              fullName: "天地玄黄",
                              url: "https://www.iqiyi.com/w_19rqvgfi0l.html",
                              desc:
                                    "一部美到极致，富有禅意的经典之作。讲述了地球与人类进化，人类与环境的关系。"
                        },
                        {
                              classify: "国家历史",
                              name: "《列国图志》",
                              fullName: "列国图志",
                              url:
                                    "http://v.baidu.com/v?s=8&word=%A1%B6%C1%D0%B9%FA%CD%BC%D6%BE%A1%B7&fr=ala11",
                              desc: "介绍了各个国家的历史，文明，科技等"
                        },
                        {
                              classify: "哲学",
                              name: "《性，死亡和生活的意义》",
                              fullName: "性，死亡和生活的意义",
                              url:
                                    "http://open.163.com/movie/2016/6/I/9/MBO0V0FG3_MBO0V9CI9.html",
                              desc:
                                    "在这部纪录片系列中，进化生物学家理查德·道金斯发问道：如果我们抛下宗教，一切将会变得如何？他探询理性和科学能够向我们提供什么以填补宗教的空缺。科学是否能在死亡面前给我们带来最终的理解、能否让我们区分善恶、抑或揭示生活的意义？！"
                        },
                        {
                              classify: "历史记录片",
                              name: "《河西走廊》",
                              fullName: "河西走廊",
                              url: "https://www.bilibili.com/video/av2229874/",
                              desc:
                                    "河西走廊在漫长的历史时期，曾是中原沟通西域的唯一通道。这条通道上，民族众多，考古发现、历史遗迹更是星罗棋布，这里自古以来就是中华文明构成要素中重要的一部分"
                        },
                        {
                              classify: "荒野生存",
                              name: "《单挑荒野》",
                              fullName: "单挑荒野",
                              url: "https://www.bilibili.com/video/av14779119",
                              desc: "如果是我们，我们能在这样的环境存活多久呢？"
                        },
                        {
                              classify: "纪录片",
                              name: "《生命里》",
                              fullName: "生命里",
                              url:
                                    "https://www.bilibili.com/bangumi/play/ss25647?bsource=baidu_aladdin",
                              desc:
                                    "有人说“活着有千般万般的无奈，可我还是不想死啊”，还有人说“逐渐失去对身体的控制权，那怕抗争也无济于事的那种无力和愤恨，一点都不亚于死亡本身”。"
                        },
                        {
                              classify: "纪录片分享网站",
                              name: "每天一小时纪录片",
                              fullName: "每天一小时纪录片",
                              url: "http://www.onehourlife.com/",
                              desc:
                                    "“每天一小时纪录片”是一个专注分享高清纪录片的网站,提供BBC、NGC、探索频道、NHK、央视等好看的高清纪录片资讯。"
                        },
                        {
                              classify: "历史纪录片",
                              name: "《历史的拐点》",
                              fullName: "历史的拐点",
                              url: "https://www.iqiyi.com/v_19rrm5x5dk.html",
                              desc: "在“严谨性、艺术性上都让人欣慰”的一部历史记录"
                        }
                        //    {
                        //   classify: '',
                        //   name: '',
                        //   fullName: '',
                        //   url: '',
                        //   desc: '',
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
