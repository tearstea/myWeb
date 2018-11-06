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
                              classify: "传奇",
                              name: "《大宅门》",
                              different: "电视剧",
                              oldname: "大宅门",
                              nation: "中国",
                              date: "2000",
                              saying:
                                    "出了事，先得往坏处想；等事情真的到了不可收拾的地步，就得往好处想",
                              desc:
                                    "讲述了中国百年老字号“百草厅”药铺的兴衰史以及医药世家白府三代人的恩恩怨怨 "
                        },
                        {
                              classify: "战争",
                              name: "《亮剑》",
                              different: "电视剧",
                              oldname: "亮剑（Drawing Sword）",
                              nation: "中国",
                              date: "2005",
                              saying:
                                    "一个军人，可以在肉搏战中被敌人砍掉脑袋，但他绝不可以被侮辱；军人可以去死，但绝不能失去尊严",
                              desc: "抗日神剧里中的，我只佩服这一部。"
                        },
                                                {
                              classify: "剧情",
                              name: "《越狱》",
                              different: "电视剧",
                              oldname: "Prison Break",
                              nation: "美国",
                              date: "2005",
                              saying:
                                    "我们都是身份的奴隶，囚禁在自己创造的监狱里",
                              desc:
                                    "关于拯救的故事！很多人是从这部美剧开始了解美国的"
                        },
                                                {
                              classify: "历史",
                              name: "《新三国》",
                              different: "电视剧",
                              oldname: "三国",
                              nation: "中国",
                              date: "2010",
                              saying:
                                    "英雄者，胸怀大志，腹有良策，有包藏宇宙之机，吞吐天地之志者也。",
                              desc:
                                    "对名著尊重的态度，在重播前认真修改，这对于影视界来说仍具有一种示范性的意义。它的可贵在于，剧组已跳出了急功近利的狭小视野，把提高品质视为自己的生命，并着眼于更长远的利益，甚至把目光投向全球。"
                        },
                           {
                              classify: "爱情",
                              name: "《复仇》",
                              different: "电视剧",
                              oldname: "Revenge",
                              nation: "美国",
                              date: "2011",
                              saying:
                                    "当你所爱的一切被人剥夺，你所剩下的唯有复仇。",
                              desc:
                                    "将上流社会的奢华、隐秘背后的肮脏和权益、无法稀释的仇恨和悲伤、高智商人群争奇斗艳等元素集中在养眼的画面和慎密的故事架构中"
                        },
                        {
                              classify: "剧情",
                              name: "《尼基塔》",
                              different: "电视剧",
                              oldname: "Nikita",
                              nation: "美国",
                              date: "2010",
                              saying: "当爱人随风逝去，才明白相思入骨。",
                              desc: "看了还想继续看的经典美剧"
                        },
                             {
                              classify: "武侠",
                              name: "《射雕英雄传》",
                              different: "电视剧",
                              oldname: "射雕英雄传（翁美玲版）",
                              nation: "中国",
                              date: "1983",
                              saying:
                                    "穆念慈道：“他是王爷也好，是乞儿也好，我心中总是有了他。他是好人也罢，坏人也罢，我总是他的人了。”  我跟他多呆一天，便多欢喜一天。",
                              desc: "时代造就经典，后来拍马难追。"
                        },
                        {
                              classify: "爱情",
                              name: "《上海滩》",
                              different: "电视剧",
                              oldname: "上海滩",
                              nation: "中国",
                              date: "1980",
                              saying: "爱你恨你，问君知否？",
                              desc: "香港电视史上的经典佳作。"
                        },
                            {
                              classify: "神话",
                              name: "《西游记》",
                              different: "电视剧",
                              oldname: "西游记",
                              nation: "中国",
                              date: "1986",
                              saying:
                                    "鸳鸯双栖蝶双飞，满园春色惹人醉。悄悄问圣僧，女儿美不美，女儿，美不美……说什么门前富贵，守什么戒律清规。只愿天长地久，与我意中人儿紧相随。",
                              desc: "永远的经典，磨灭不了的记忆"
                        },
                        {
                              classify: "谍战",
                              name: "《潜伏》",
                              different: "电视剧",
                              oldname: "潜伏",
                              nation: "中国",
                              date: "2009",
                              saying:
                                    "你知道我们战死沙场的时候，坟墓上是鲜花还是狗屎。",
                              desc:
                                    "一个关于信仰的故事，融合了幽默、言情、悬疑、智斗等诸多元素，着力表现特殊年代中地下工作者的奋斗与牺牲"
                        },
                                                {
                              classify: "爱情商战",
                              name: "《乔家大院》",
                              different: "电视剧",
                              oldname: "乔家大院",
                              nation: "中国",
                              date: "2006",
                              saying:
                                    "若身在泥潭，心也在泥潭，则满眼望去均是泥潭；若身在泥潭，而心系鲲鹏，则能见九万里天地。",
                              desc:
                                    "家族兴衰史，个人抱负，为了实现货通天下、汇通天下的抱负，奋斗一生"
                        },
                                                {
                              classify: "剧情",
                              name: "《绝命毒师》",
                              different: "电视剧",
                              oldname: "Breaking Bad",
                              nation: "美国",
                              date: "2008",
                              saying: "永远不要和瘾君子打交道",
                              desc: "一部题材泛黑的剧集"
                        },
                                                {
                              classify: "传奇",
                              name: "《新白娘子传奇》",
                              different: "电视剧",
                              oldname: "新白娘子传奇",
                              nation: "中国",
                              date: "1992",
                              saying:
                                    "是谁在耳边说，爱我永不变。 只为这一句，断肠也无怨。",
                              desc: "唯美的传奇爱情故事"
                        },
                                                {
                              classify: "武侠",
                              name: "《神雕侠侣》",
                              different: "电视剧",
                              oldname: "神雕侠侣（古天乐版）",
                              nation: "中国",
                              date: "1995",
                              saying:
                                    "“你姓杨，那我便姓柳吧。”——小龙女。我走过山的时候山不说话，我路过海的时候海不说话；我坐着的毛驴一步一步滴滴答答，我带着的倚天喑哑 。大家说我因为爱着杨过大侠，找不到所以在峨嵋安家，其实我只是喜欢峨嵋的雾，像十六岁那年绽放的烟花。 ————郭襄",
                              desc: "唯美浪漫的武侠爱情故事，打破了世俗观念"
                        },
                           {
                              classify: "犯罪",
                              name: "《白夜追凶Ⅱ》",
                              different: "电视剧",
                              oldname: "白夜追凶Ⅱ",
                              nation: "中国",
                              date: "2017",
                              saying:
                                    "在追寻真相的道路上，白天和黑夜，从来都同等长久。",
                              desc: "一环扣一环，环环相扣，故事情节引人入胜"
                        },
                        {
                              classify: "年代",
                              name: "《白鹿原》",
                              different: "电视剧",
                              oldname: "白鹿原",
                              nation: "中国",
                              date: "2017",
                              saying:
                                    "世上有许多事，尽管看得清清楚楚，却不能说出口来。有的事看见了认准了，必须说出来;有的事至死也不能说。能把握住什么事必须说，什么事不能说的人，才是真正的男人。",
                              desc:
                                    "该剧是一部20世纪初渭河平原50年变迁的雄奇史诗，这是一轴中国农村斑斓多彩、触目惊心的长幅画卷。特殊的时代背景，浓厚的关中风情，土地革命、抗日战争、解放战争，古老的土地，上演了一幕幕惊心动魄的画面。"
                        },
                        {
                              classify: "当代农村",
                              name: "《平凡的世界》",
                              different: "电视剧",
                              oldname: "平凡的世界",
                              nation: "中国",
                              date: "2014",
                              saying:
                                    "其实我们每个人的生活都是一个世界，即使最平凡的人也要为他生活的那个世界而奋斗。",
                              desc:
                                    "不仅深刻地记录了七十年代末八十年代初那段跌宕起伏的历史，而且在一代代人的精神成长史中，留下了深深的烙印。"
                        },
                        {
                              classify: "商业",
                              name: "《鸡毛飞上天》",
                              different: "电视剧",
                              oldname: "鸡毛飞上天",
                              nation: "中国",
                              date: "2017",
                              saying:
                                    "积少成多，一分利撑死人，一毛利饿死人，你别小看这小小一分利，但它却让你赚遍天下啊！",
                              desc: "折射了义乌改革发展30多年曲折而又辉煌的历程"
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

