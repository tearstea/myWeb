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
                              classify: "科幻伦理",
                              name: "《睁开你的双眼》",
                              oldname: "Abre Los Ojos",
                              nation: "西班牙",
                              date: "1997年",
                              sying: "不必焦躁，慢慢地去长大",
                              desc:
                                    "一部非常能激发人们反思人生观和世界观的科幻伦理电影。本片的科幻悬念构思精妙，把观众完全带入了一个虚幻的现实世界，让观众不由得对自己所生存和成长的城市感到同样的真假难分。影片情节跌荡起伏，扑朔迷离，而最终把剧情推向高潮的那一刻，使观众思想、精神和感情上感受到无以伦比的超脱之美。"
                        },
                        {
                              classify: "神秘幻想",
                              name: "《异世浮生》",
                              different: "电影",
                              oldname: "Jacobs Ladder",
                              nation: "美国 ",
                              date: "1990年",
                              saying: "待续.....",
                              desc:
                                    "两个时空的博弈，从越战回来的军人经常出现被追杀的幻觉，每到危急时刻，他会在另一个时空活过来，他好像生活在两个世界里……"
                        },
                        {
                              classify: "剧情",
                              name: "《这个杀手不太冷》",
                              different: "电影",
                              oldname: "Léon",
                              nation: " 美国",
                              date: "1994",
                              saying:
                                    " 我所认为最深沉的爱,莫过于分开以后,我将自己活成了你的样子。",
                              desc:
                                    "大叔爱上萝莉，只要一个绿植，一个暖男，一段爱情"
                        },
                        {
                              classify: "剧情",
                              name: "《肖申克的救赎》",
                              different: "电影",
                              oldname: "The Shawshank Redemption",
                              nation: "美国",
                              date: "1994",
                              saying:
                                    "我得经常同自己说，有些鸟儿是关不住的。他们的羽毛太鲜亮了。当它们飞走的时候，你心底里知道把他们关起来是一种罪恶，你会因此而振奋",
                              desc: "影史第一的电影，第一在什么地方？去看吧！"
                        },
                        {
                              classify: "剧情",
                              name: "《海上钢琴师》",
                              different: "电影",
                              oldname: "The Legend of 1900",
                              nation: " 意大利",
                              date: "1998",
                              saying: "我们笑着说再见，却深知再见瑶瑶无期",
                              desc:
                                    "每次看完一部优秀的电影，我心里就会衍生出些许骂人的冲动，“真他M是个天才！‘ 一个活在自己孤岛的人，生于那条大船，又随这条大船一同沉默在无尽的海洋之中"
                        },
                        {
                              classify: "惊悚",
                              name: "《低俗小说》",
                              different: "电影",
                              oldname: "Pulp Fiction",
                              nation: "美国",
                              date: "1994",
                              saying:
                                    "当两个人有默契的话，就能闭嘴享受片刻的沉默",
                              desc: "光景斑驳，故事迷离，"
                        },
                        {
                              classify: "文艺",
                              name: "《重庆森林》",
                              different: "电影",
                              oldname: "重庆森林",
                              nation: "中国",
                              date: "1994",
                              saying:
                                    "如果记忆也是一个罐头的话，我希望这罐罐头不会过期",
                              desc:
                                    "匆匆往来的男女，忽然到来的爱情，还有梦呓一样的独白，都让人觉得内心沉重，有一种身处人群的孤独"
                        },
                        {
                              classify: "爱情",
                              name: "《断背山》",
                              different: "电影",
                              oldname: "Brokeback Mountain",
                              nation: "美国",
                              date: "2005",
                              saying:
                                    "有时候我真的很想你，想到我心痛。我把你的衬衫放进我的衬衫里，以为这样就可以保护你了。",
                              desc: "人人的心中都有一座断背山"
                        },
                        {
                              classify: "战争",
                              name: "《拯救大兵瑞恩》",
                              different: "电影",
                              oldname: "Saving Private Ryan",
                              nation: "美国",
                              date: "1998",
                              saying: "神于我们同在，那么谁与敌军同在?",
                              desc:
                                    "电影以战争高度还原本态的残酷构筑了自已的奠基，而一个关于《拯救大兵瑞恩》的故事，则于这场人类最为昏暗的战争里，得见于人性的光芒和对战争自身的深省"
                        },
                        {
                              classify: "剧情",
                              name: "《阳光灿烂的日子》",
                              different: "电影",
                              oldname: "阳光灿烂的日子",
                              nation: "中国",
                              date: "1994",
                              saying:
                                    "有时候一种声音，或是一种味道，可以把人带回真实的过去？",
                              desc: "梦中，一片金黄。有多少青春可以胡来？"
                        },
                        {
                              classify: "惊悚",
                              name: "《两杆大烟枪》",
                              different: "电影",
                              oldname: "Lock, Stock and Two Smoking Barrels ",
                              nation: "英国",
                              date: "1998",
                              saying: "“应该”是万错之母。",
                              desc: "很酷，黑色与幽默齐飞"
                        },
                        {
                              classify: "剧情",
                              name: "《落水狗》",
                              different: "电影",
                              oldname: "Reservoir Dog",
                              nation: "美国",
                              date: "1992",
                              saying: "你做梦对我开过枪，醒来后最好向我道歉。",
                              desc: "躺着都可以成为经典的Tim Roth。。。"
                        },
                        {
                              classify: "家庭 儿童",
                              name: "《小鞋子》",
                              different: "电影",
                              oldname: "بچههای آسمان",
                              nation: "伊朗",
                              date: "1997",
                              saying:
                                    "不要冠军，只要第三名，第三名就好......我一定会拿到第三名的，放心，我有把握！",
                              desc:
                                    "再一次证明，电影的表现力是无国界的，把剧中那些街头的场景、家庭的普通日常、以及主人公阿里的校园生活放在中国任何一个乡村或者是城镇，都无比地融洽。"
                        },
                        {
                              classify: "科幻",
                              name: "《黑客帝国》",
                              different: "电影",
                              oldname: "The Matrix",
                              nation: "美国",
                              date: "1999",
                              saying: "若有完美,必有谎言",
                              desc:
                                    "这是一种释放，是一种能量的转换，影片会点燃你，让你在眼花缭乱中眩晕不已。"
                        },
                        {
                              classify: "爱情",
                              name: "《芳芳》",
                              different: "电影",
                              oldname: "Fanfan",
                              nation: "法国",
                              date: "1993",
                              saying:
                                    "你是我梦寐以求，芳姿肆溢，无疑是造物主不羁的宠儿，及即是完美无缺，岂可刻意雕琢",
                              desc: "灵与肉之间难以抉择的故事。"
                        },
                        {
                              classify: "战争",
                              name: "《勇敢的心》",
                              different: "电影",
                              oldname: "Braveheart",
                              nation: "美国",
                              date: "1995",
                              saying: "那里很美，但是你更美。",
                              desc:
                                    "所有的人都会死，但并不是每一个人都活的有意义。"
                        },
                        {
                              classify: "武侠",
                              name: "《天龙八部》",
                              different: "电影",
                              oldname: "天龙八部（黄日华版）",
                              nation: "中国",
                              date: "1997",
                              saying:
                                    "你样样都好，样样比她强，你只有一个缺点，你不是她...",
                              desc: "永远的武侠，真正诠释了“侠之大者”。"
                        },
                        {
                              classify: "爱情悲剧",
                              name: "《大话西游》",
                              different: "电影",
                              oldname: "大话西游",
                              nation: "中国",
                              date: "1995",
                              saying: "你看，那个人好像一条狗哎。",
                              desc:
                                    "是不可复制的经典，也是周星驰最具代表的作品。粗狂的西北旷野，斑驳废旧的古城堡，影片中一幅幅狂野不羁的画面，将一代代人带进了那个奇幻而瑰丽的西游世界。"
                        },
                        {
                              classify: "喜剧",
                              name: "《喜剧之王》",
                              different: "电影",
                              oldname: "喜剧之王",
                              nation: "中国",
                              date: "1999",
                              saying:
                                    "你可以说我是跑龙套的，但是你不可以说我是「臭跑龙套」的！",
                              desc:
                                    "以前看的时候，电影里真正隐含的意思我都不懂，但当我慢慢长大，经历的东西越来越多的时候，再回顾这些，我能领悟到星爷电影里人生的真谛"
                        },
                        {
                              classify: "剧情",
                              name: "《七宗罪》",
                              different: "电影",
                              oldname: "Seven deadly sins",
                              nation: "美国",
                              date: "1995",
                              saying: "容忍是因为见怪不怪。",
                              desc:
                                    "人性之罪需要拯救，七宗罪能否完整展现要看最后的你"
                        },
                        {
                              classify: "悬疑",
                              name: "《搏击俱乐部》",
                              different: "电影",
                              oldname: "Fight Club",
                              nation: "美国",
                              date: "1998",
                              saying:
                                    "人们总会伤害他所爱的人，其实人们也会爱上被他伤害的人。",
                              desc: "被名字耽误的超级经典影片"
                        },
                        {
                              classify: "战争",
                              name: "《美丽人生》",
                              different: "电影",
                              oldname: "La Vita è bella",
                              nation: "意大利",
                              date: "1997",
                              saying:
                                    "没有人的人生是完美的，但生命的每一刻都是美丽的。",
                              desc: "最感动人的谎言"
                        },
                        {
                              classify: "爱情",
                              name: "《剪刀手爱德华》",
                              different: "电影",
                              oldname: "Edward Scissorhands",
                              nation: "美国",
                              date: "1990",
                              saying:
                                    "如果我没有刀，我就不能保护你。如果我有刀，我就不能拥抱你。",
                              desc: "凄美故事与悲情结局"
                        },
                        {
                              classify: "爱情",
                              name: "《阿甘正传》",
                              different: "电影",
                              oldname: "Forrest Gump",
                              nation: "美国",
                              date: "1994",
                              saying:
                                    "生活就像一盒巧克力，你永远不知道下一块会是什么味道。 ",
                              desc:
                                    "妈妈说过，要往前走，就得先忘掉过去。我想，这就是跑的用意。故事虽然简单，但却很暖人心"
                        },
                        {
                              classify: "剧情",
                              name: "《纵横四海》",
                              different: "电影",
                              oldname: "纵横四海",
                              nation: "中国",
                              date: "1991",
                              saying:
                                    "我钟意一朵花，不一定要把它摘下来；我喜欢一片云，不一定要得到它；我喜欢风，也不一定要让它停下来",
                              desc: "一入江湖深似海"
                        },
                        {
                              classify: "爱情",
                              name: "《霸王别姬》",
                              different: "电影",
                              oldname: "霸王别姬",
                              nation: "中国",
                              date: "1993",
                              saying:
                                    "人，得自个儿成全自个儿。要想人前显贵，必得人后受罪！",
                              desc: "给人深深的无力感"
                        },
                        {
                              classify: "童真",
                              name: "《天堂回信》",
                              different: "电影",
                              oldname: "天堂回信",
                              nation: "中国",
                              date: "1994",
                              saying:
                                    "爷爷，您要是不舒服了，记得吃药，左上衣口袋，急救盒，舌下含服一片，一片！",
                              desc: "感动感动，真让人感动！"
                        },
                        {
                              classify: "冒险",
                              name: "《与狼共舞》",
                              different: "电影",
                              oldname: "Dances with Wolves",
                              nation: "美国",
                              date: "1990",
                              saying:
                                    "无论上帝怎样对待他的子民我都对他心存感激。",
                              desc: "史诗级巨著"
                        },
                          {
                          classify: '奇幻',
                          name: '《绿里奇迹》',
                          different: '电影',
                          oldname: 'The Green Mile',
                          nation: '美国',
                          date: '1999',
                          saying: '是不是我诚心诚意的祈祷，我就能回到生命中最美好的时光，我一直以为那就是天堂。那时侯，我最爱的女人陪在我身旁。',
                          desc: '也许，别人的痛苦，我们永远不知，但他却实实在在的痛苦煎熬着。生与死的选择，中间隔着一条绿色地板的走廊。在这条通往善与恶的道路上，有着人性的光辉和丑恶。',
                        },
                          {
                          classify: '爱情',
                          name: '《情书》',
                          different: '电影',
                          oldname: 'Love Letter',
                          nation: '日本',
                          date: '1995',
                          saying: '如果当初我勇敢，结局是不是不一样。如果当时你坚持，回忆会不会不一般。最终我还是没说，你还是忽略。',
                          desc: '“有一个可以想念的人，就是幸福”，希望每个人都有自己想念的人。',
                        },
                        //   {
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

