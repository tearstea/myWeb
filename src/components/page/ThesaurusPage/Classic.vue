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
            <el-form-item label="作者：">
              <span class="spanA">
                {{ props.row.writer }}
              </span>
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
          <a :href="props.row.url" class="classB" rel="nofollow noopener noreferrer" target="_blank">
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
                              classify: "经典名篇",
                              name: "《过秦论》",
                              fullName: "过秦论",
                              writer: "贾谊",
                              url:
                                    "http://copyfree.cn/2018/02/05/%E8%BF%87%E7%A7%A6%E8%AE%BA-%E4%B8%8A-%E4%B8%AD-%E4%B8%8B-2018/",
                              desc: "鲁迅称《过秦论》为“西汉鸿文”！"
                        },
                        {
                              classify: "经典名篇",
                              name: "《赤壁赋》",
                              fullName: "赤壁赋",
                              writer: "苏轼",
                              url:
                                    "http://copyfree.cn/2018/02/02/%E8%B5%A4%E5%A3%81%E8%B5%8B-2018/",
                              desc: "宋代张表臣曾言：《赤壁赋》卓绝近于雄风。"
                        },
                        {
                              classify: "经典名篇",
                              name: "《春江花月夜》",
                              writer: "张若虚",
                              fullName: "春江花月夜",
                              url:
                                    "http://copyfree.cn/2018/01/05/%E6%98%A5%E6%B1%9F%E8%8A%B1%E6%9C%88%E5%A4%9C-2018/",
                              desc:
                                    "闻一多：在这种诗面前，一切的赞叹是饶舌，几乎是亵渎。这是诗中的诗，顶峰上的顶峰。"
                        },
                        {
                              classify: "经典名篇",
                              name: "《将进酒》",
                              writer: "李白",
                              fullName: "将进酒",
                              url:
                                    "http://copyfree.cn/2018/06/06/%E5%B0%86%E8%BF%9B%E9%85%92-2018/",
                              desc: "施蛰存：太白此歌，最为豪放，才气千古无双。"
                        },
                        {
                              classify: "经典名篇",
                              name: "《谏太宗十思疏》",
                              writer: "魏征",
                              fullName: "谏太宗十思疏",
                              url:
                                    "http://copyfree.cn/2018/01/01/%E8%B0%8F%E5%A4%AA%E5%AE%97%E5%8D%81%E6%80%9D%E7%96%8F-2018/",
                              desc:
                                    "“居安思危，戒奢以俭”、“载舟覆舟，所宜深慎”，指出“凡百元首，承天景命，善始者实繁，克终者盖寡”。"
                        },
                        {
                              classify: "经典名篇",
                              name: "《岳阳楼记》",
                              fullName: "范仲淹",
                              writer: "岳阳楼记",
                              url:
                                    "http://copyfree.cn/2018/10/08/%E5%B2%B3%E9%98%B3%E6%A5%BC%E8%AE%B0-2018/",
                              desc: "知识分子的终极理想。"
                        },
                        {
                              classify: "经典名篇",
                              name: "《滕王阁序》",
                              fullName: "滕王阁序",
                              writer: "王勃",
                              url:
                                    "http://copyfree.cn/2018/05/05/%E6%BB%95%E7%8E%8B%E9%98%81%E5%BA%8F-2018/",
                              desc: "满满的书生气！"
                        },
                        {
                              classify: "经典名篇",
                              name: "《报任安书》",
                              fullName: "报任安书",
                              writer: "司马迁",
                              url:
                                    "http://copyfree.cn/2018/06/05/%E6%8A%A5%E4%BB%BB%E5%AE%89%E4%B9%A6-2018/",
                              desc:
                                    "“人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。”"
                        },
                        {
                              classify: "经典名篇",
                              name: "《正气歌》",
                              fullName: "正气歌",
                              writer: "文天祥",
                              url:
                                    "http://copyfree.cn/2018/08/08/%E6%AD%A3%E6%B0%94%E6%AD%8C-2018/",
                              desc: "唯有正气，方能“留得丹青照汗青”"
                        },
                        {
                              classify: "诗歌",
                              name: "《你不懂我，我不怪你》",
                              fullName: "你不懂我，我不怪你",
                              writer: "待确定",
                              url:
                                    "http://copyfree.cn/2018/10/30/%E4%BD%A0%E4%B8%8D%E6%87%82%E6%88%91-%E6%88%91%E4%B8%8D%E6%80%AA%E4%BD%A0-2018/",
                              desc:
                                    "据说是莫言写的，也有是余秋雨写的，但不论是谁写的，也许，每个人都是孤独的个体。"
                        },
                        {
                              classify: "诗歌",
                              name: "《那一世》",
                              fullName: "那一世",
                              writer: "仓央嘉措",
                              url:
                                    "http://copyfree.cn/2018/10/31/%E9%82%A3%E4%B8%80%E5%A4%A9-2018/",
                              desc: "每次读，都有一种蓦然心动的感觉！"
                        },
                        {
                              classify: "诗歌",
                              name: "《路人》",
                              fullName: "路人",
                              writer: "西贝",
                              url:
                                    "http://copyfree.cn/2018/11/01/%E8%B7%AF%E4%BA%BA-2018/",
                              desc: "也许，文人的情感大底如此，该去写点儿诗"
                        },
                        {
                              classify: "诗歌",
                              name: "《错误》",
                              fullName: "错误",
                              writer: "郑愁予",
                              url:
                                    "http://copyfree.cn/2018/11/02/%E9%94%99%E8%AF%AF-2018/",
                              desc:
                                    "如果你不喜欢，那“我达达的马蹄是美丽的错误”。"
                        },
                        {
                              classify: "诗歌",
                              name: "《再别康桥》",
                              fullName: "再别康桥",
                              writer: "徐志摩",
                              url:
                                    "http://copyfree.cn/2018/11/03/%E5%86%8D%E5%88%AB%E5%BA%B7%E6%A1%A5-2018/",
                              desc: "无法用语言表达的美。"
                        },
                        {
                              classify: "诗歌",
                              name: "《从前慢》",
                              fullName: "从前慢",
                              writer: "木心",
                              url:
                                    "http://copyfree.cn/2018/11/04/%E4%BB%8E%E5%89%8D%E6%85%A2-2018/",
                              desc: "从前慢，从前慢，再也回不到从前。"
                        },
                        {
                              classify: "诗歌",
                              name: "《致橡树》",
                              fullName: "致橡树",
                              writer: "舒婷",
                              url:
                                    "http://copyfree.cn/2018/11/05/%E8%87%B4%E6%A9%A1%E6%A0%91-2018/",
                              desc: "也许，爱情就应该这样"
                        }
                        //    {
                        //   classify: '',
                        //   name: '',
                        //   fullName: '',
                        //   writer: '',
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
