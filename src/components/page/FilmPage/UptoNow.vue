<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="原名：">
              <span>
                {{ props.row.oldname }}
              </span>
            </el-form-item>
            <el-form-item label="国家：">
              <span>
                {{ props.row.nation }}
              </span>
            </el-form-item>
            <el-form-item label="上映时间：">
              <span style="color: blue;">
                {{ props.row.date }}
              </span>
            </el-form-item>
            <el-form-item label="经典台词：">
              <span>
                {{ props.row.saying }}
              </span>
            </el-form-item>
            <el-form-item label="推荐词：">
              <span>
                {{ props.row.desc }}
              </span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index">
      </el-table-column>
      <el-table-column label="类型" prop="classify" sortable>
      </el-table-column>
      <el-table-column label="中文名" prop="name" sortable>
      </el-table-column>
      <el-table-column label="分类" prop="different" sortable>
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
                              different: "电影",
                              classify: "剧情 真实改编",
                              name: "《金矿》",
                              oldname: "Gold",
                              nation: "美国",
                              date: "2017年",
                              saying:
                                    "我在乎的是金子，而不是金钱，执着的追求梦想",
                              desc:
                                    "影片改编自1993年的Bre-X金矿公司诈骗案，讲述了一位疯狂躁进的商人与一名运气糟糕的地质学家携手来到印尼的丛林之中寻找金矿的故事。"
                        },
                        {
                              classify: "惊悚",
                              name: "《操控游戏》",
                              different: "电影",
                              oldname: "《记得我》",
                              nation: "韩国",
                              date: "2018",
                              saying: "幸好只是恶作剧！",
                              desc: "14年挥之不去的恐怖噩梦"
                        },
                        {
                              classify: "战争",
                              name: "《血战钢锯岭》",
                              different: "电影",
                              oldname: "acksaw Ridge",
                              nation: "美国",
                              date: "2016",
                              saying: "再救一个，再多救一个...",
                              desc: "信仰能改变什么？每一个生命都值得认真对待！"
                        },
                        {
                              classify: "科幻",
                              name: "《复仇者联盟3》",
                              different: "电影",
                              oldname: "复仇者联盟3：无限战争",
                              nation: "美国",
                              date: "2018",
                              saying:
                                    "失败是迷雾，穿过他，我们就可以瞥见光明。",
                              desc: "登峰造极的英雄聚合"
                        },
                        {
                              classify: "喜剧",
                              name: "《完美陌生人》",
                              different: "电影",
                              oldname: "Perfetti sconosciuti",
                              nation: "意大利",
                              date: "2018",
                              saying:
                                    "因为我知道一见面，他就会被你们古怪的眼神伤害。我不希望他受伤，我要保护他。因为如果你深爱一个人，你就会为他当下全世界的子弹。",
                              desc:
                                    "什么是婚姻感情中最不可触碰的底线？众人遭遇是难言的禁忌还是隐藏的真心，月食过后，谎言能否继续？"
                        },
                        {
                              classify: "传记",
                              name: "《摔跤吧！爸爸》",
                              different: "电影",
                              oldname: "Dangal",
                              nation: "印度",
                              date: "2016",
                              saying:
                                    "如果你获得了银牌，你总会被遗忘；如果赢了金牌 你会成为典范",
                              desc: "印度爸爸的“坏”榜样"
                        },
                        {
                              classify: "喜剧",
                              name: "《起跑线》",
                              different: "电影",
                              oldname: "Hindi Medium",
                              nation: "印度",
                              date: "2017",
                              saying: "贫穷就是这样，没有资格大喜大悲。",
                              desc: "可怜天下父母心，原来父母的心思是不分国度的"
                        },
                        {
                              classify: "悬疑",
                              name: "《看不见的客人》",
                              different: "电影",
                              oldname: "Contratiempo，The Invisible Guest",
                              nation: "西班牙",
                              date: "2017",
                              saying: "人没法拥有一切，总会有所牺牲。",
                              desc: "不到最后，你永远猜不到结局"
                        },
                        {
                              classify: "悬疑",
                              name: "《惊天魔盗团》",
                              different: "电影",
                              oldname: "Now You See Me",
                              nation: "美国",
                              date: "2013",
                              saying: "你离的越近看，你看到的东西越少",
                              desc: "一场宏大的魔术盛宴"
                        },
                        {
                              classify: "喜剧",
                              name: "《驴得水》",
                              different: "电影",
                              oldname: "驴得水",
                              nation: "中国",
                              date: "2016",
                              saying: "“讲个笑话，你可别哭”",
                              desc: "流氓不可怕，就怕流氓有文化"
                        },
                        {
                              classify: "悬疑",
                              name: "《哭声》",
                              different: "电影",
                              oldname: "哭声",
                              nation: "韩国",
                              date: "2016",
                              saying: "...",
                              desc: "看了，会让你一步步上钩"
                        },
                        //     {
                        //   classify: '',
                        //   name: '',
                        //   different: '电影',
                        //   oldname: '',
                        //   nation: '',
                        //   date: '',
                        //   saying: '',
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

