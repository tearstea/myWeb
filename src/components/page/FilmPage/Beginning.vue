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
      name: "First",
      data() {
            return {
                  tableData5: [
                        {
                              classify: "惊悚",
                              name: "《八面埋伏》",
                              different: "电影",
                              oldname: "MindHunters",
                              nation: "美国 ",
                              date: "2004年",
                              saying: "...",
                              desc:
                                    "7名FBI年轻特工在教官带领下到一座小岛接受特别训练。训练一开始，他们发现自己陷入了一场精心布置的杀人迷局……"
                        },
                        {
                              classify: "剧情",
                              name: "《上帝之城》",
                              different: "电影",
                              oldname: " City of God",
                              nation: "巴西",
                              date: "2002",
                              saying: "他们没血没泪，就像这小子。",
                              desc:
                                    "“被上帝抛弃了的上帝之城”一个除了偷窃，强奸、走私、贩毒、杀人、抢劫无处不在的城市，因为这里无需偷窃，而犯罪的几乎都是未成年的孩子，这里是真正的地狱和人性泯灭的地方"
                        },
                        {
                              classify: "爱情战争",
                              name: "《可可西里的美丽传说》",
                              different: "电影",
                              oldname: "Malèna",
                              nation: "意大利",
                              date: "2000",
                              saying:
                                    "岁月匆匆，我后来爱上过很多女人。她们在我的臂膀中问我爱不爱她们，我都会说，爱。但是我最爱的女人，却从未问过我这个问题。",
                              desc:
                                    "她留着波浪状黑亮的秀发，穿着时髦的短裙和丝袜，踏着充满情欲诱惑的高跟鞋，来到了西西里岛上宁静的阳光小镇。她的一举一动都引人瞩目、勾人遐想，她的一颦一笑都叫男人心醉、女人羡妒。玛莲娜，像个女神一般，征服了这个海滨的天堂乐园。"
                        },
                        {
                              classify: "战争",
                              name: "《极地重生》",
                              different: "电影",
                              oldname: "As Far As My Feet Will Carry Me",
                              nation: "德国",
                              date: "2001",
                              saying: "你离家不远了，只差一万公里",
                              desc:
                                    "讲述了德国军人基文斯经过五年的非人生活后发誓要逃出这人间地狱的故事。"
                        },
                        {
                              classify: "喜剧",
                              name: "《逃狱三王》",
                              different: "电影",
                              oldname: "O Brother, Where Art Thou?",
                              nation: "美国",
                              date: "2000",
                              saying: "...",
                              desc:
                                    "密西西比州荒野的监狱里越狱的三个逃犯为了各自的自由理想而踏上了逃亡之路的故事 。"
                        },
                        {
                              classify: "犯罪",
                              name: "《老男孩》",
                              different: "电影",
                              oldname: "...",
                              nation: "韩国",
                              date: "2003",
                              saying: "寂寞常让人联想到蚂蚁",
                              desc:
                                    "电影充满了暴力美学，并不断增强观众想要看下去的欲望，把悬念留到了最后一刻"
                        },
                        {
                              classify: "剧情",
                              name: "《春夏秋冬又一春》",
                              different: "电影",
                              oldname: "봄 여름 가을 겨울 그리고 봄",
                              nation: "韩国",
                              date: "2003",
                              saying:
                                    "她走了，我也不敢多看，我怕看了这一眼又会想着下一眼",
                              desc: "四道轮回，人心的更迭 佛学的禅意"
                        },
                        {
                              classify: "悬疑",
                              name: "《杀人回忆》",
                              different: "电影",
                              oldname: "살인의 추억",
                              nation: "韩国",
                              date: "2003",
                              saying: "很普通",
                              desc: "凶手还活着，别回头"
                        },
                        {
                              classify: "剧情",
                              name: "《共同警备区》",
                              different: "电影",
                              oldname: "...",
                              nation: "韩国",
                              date: "2000",
                              saying:
                                    "实战时速度并非最重要，战斗技术？没有这回事。重要的是如何保持镇定和勇气。如何快速判断情况和行动，这才是最重要的。",
                              desc:
                                    "这部电影把朝鲜半岛的南北分裂的现实以人性的角度重新进行分析和解释。"
                        },
                        {
                              classify: "剧情",
                              name: "《盲井》",
                              different: "电影",
                              oldname: "盲井",
                              nation: "中国",
                              date: "2003",
                              saying: "中国啥都缺就是不缺人",
                              desc: "社会性隐喻更是值得沉思的"
                        },
                        {
                              classify: "喜剧",
                              name: "《跳出我天地》",
                              different: "电影",
                              oldname: "Billy Elliot",
                              nation: "英国",
                              date: "2000",
                              saying:
                                    "只要一跳舞，我就会忘记所有事情，变得好像不存在一样，像是消失了一样。我感到身体在变化，好像心中有一把火。我像小鸟一样飞翔，像电流一样流动。",
                              desc: "不动生色中调动起人们的视听神经"
                        },
                        {
                              classify: "爱情",
                              name: "《守望者》",
                              different: "电影",
                              oldname: "Watchmen",
                              nation: "法国",
                              date: "2005",
                              saying: "永不妥协，直到世界末日",
                              desc: "黑暗骑士后，漫画电影又一巅峰。"
                        },
                        {
                              classify: "剧情",
                              name: "《梦之安魂曲》",
                              different: "电影",
                              oldname: "Requiem for a Dream",
                              nation: "美国",
                              date: "2000",
                              saying: "一场没有春天的噩梦。",
                              desc: "不安魂的反毒力作"
                        },
                        {
                              classify: "探索",
                              name: "《地球脉动》",
                              different: "纪录片",
                              oldname: "Planet Earth",
                              nation: "英国",
                              date: "2006",
                              saying: "...",
                              desc: "一次对地球最不可思议的探索"
                        },
                        {
                              classify: "探索",
                              name: "《蓝色星球》",
                              different: "纪录片",
                              oldname: "...",
                              nation: "美国",
                              date: "2001",
                              saying: "...",
                              desc:
                                    "一部关于地球的太空电影，从美国航天飞机绕地球飞行的轨道上遥看地球上蜿蜒曲折的陆地，地球显得亘古而又变化剧烈。在太阳系乃至整个宇宙中，地球显得细致优雅而又脆弱。"
                        },
                        {
                              classify: "冒险",
                              name: "《亚瑟王》",
                              different: "电影",
                              oldname: "King Arthur",
                              nation: "美国",
                              date: "2004",
                              saying:
                                    "我不相信有天堂,因为我被困在这个地狱的时间太长了",
                              desc:
                                    "该片主要讲述亚瑟通过战争后成功地建立了大不列颠王国，创造了英国的历史，而格温娜维尔最终也成为了王后。"
                        },
                        {
                              classify: "悬疑",
                              name: "《大卫·戈尔的一生》",
                              different: "电影",
                              oldname: "The Life of David Gale ",
                              nation: "美国",
                              date: "2003",
                              saying:
                                    "苏格拉底长得丑陋，柏拉图肥胖，亚里士多德是一个神经质的人！",
                              desc: "为信仰，甘愿用自己的生命换取最后的胜利"
                        },
                        {
                              classify: "犯罪",
                              name: "《致命ID》",
                              different: "电影",
                              oldname: "Identity",
                              nation: "美国",
                              date: "2003",
                              saying: "最不可能的那个人永远是最可能的。",
                              desc: "原来最大的恶魔就住在你心里，凶手就是它"
                        },
                        {
                              classify: "惊悚",
                              name: "《记忆碎片》",
                              different: "电影",
                              oldname: "Memento",
                              nation: "美国",
                              date: "2004",
                              saying: "时间是一种解药，也是一种毒药。",
                              desc: "倒序式拍摄手法的巅峰之作"
                        },
                        {
                              classify: "剧情",
                              name: "《万能钥匙》",
                              different: "电影",
                              oldname: "The Skeleton Key",
                              nation: "美国",
                              date: "2004",
                              saying:
                                    "花太多时间去想所剩下的生命，反而忘了好好的生活。",
                              desc:
                                    "停在你身旁的蝴蝶是你前世的情人，坐在轮椅上喊你的哑人才是你救命的稻草"
                        },
                        {
                              classify: "科幻",
                              name: "《蝴蝶效应》",
                              different: "电影",
                              oldname: "The Butterfly Effect",
                              nation: "美国",
                              date: "2004",
                              saying:
                                    "即使细微如蝴蝶鼓舞，也能煽动千里之飓风。",
                              desc:
                                    "也许现在的你打一个喷嚏，将会引起太平洋的一次毁灭性的海啸，信不信？"
                        },
                        {
                              classify: "悬疑",
                              name: "《狗镇》",
                              different: "电影",
                              oldname: "Dogville",
                              nation: "瑞典",
                              date: "2003",
                              saying: "一个热爱阳光的人，为何要挂窗帘。",
                              desc:
                                    "考验人性的机会从来不少，但只要一次就能看清所有人的真面目"
                        },
                        {
                              classify: "爱情",
                              name: "《幸福终点站》",
                              different: "电影",
                              oldname: "The Terminal",
                              nation: "美国",
                              date: "2004",
                              saying:
                                    "我这一生都在等待着，只是不知道到底在等谁",
                              desc: "幸福始终不会拥有终点 相信美好总会发生"
                        },
                        {
                              classify: "剧情",
                              name: "《手机》",
                              different: "电影",
                              oldname: "手机",
                              nation: "中国",
                              date: "2003",
                              saying: "你变了，我变了，遇到金钱，遇到困难。",
                              desc: "每一个幽默的背后都暗藏着人性的欲望和虚伪"
                        },
                        {
                              classify: "恐怖",
                              name: "《极度恐慌》",
                              different: "电影",
                              oldname: "极度恐慌",
                              nation: "美国",
                              date: "2005",
                              saying: "...",
                              desc: "用第一人称射击类型的心理惊悚游戏，"
                        },
                        {
                              classify: "剧情",
                              name: "《深海长眠》",
                              different: "电影",
                              oldname: "Mar adentro",
                              nation: "西班牙",
                              date: "2004",
                              saying:
                                    "没有生命的自由不是自由， 没有自由的生命也不是生命",
                              desc: "我就要飞离，你是我的翅膀"
                        },
                        {
                              classify: "战争",
                              name: "《钢琴家》",
                              different: "电影",
                              oldname: "The Pianist",
                              nation: "波兰",
                              date: "2002",
                              saying: "I‘m cold.",
                              desc: "动人的旋律，悲催的故事"
                        },
                        {
                              classify: "喜剧",
                              name: "《鬼子来了》",
                              different: "电影",
                              oldname: "鬼子来了",
                              nation: "中国",
                              date: "2000",
                              saying:
                                    "日本人生气和客气都是一个模样！要不咋叫鬼子呢？",
                              desc:
                                    "原来在电影中抗日可以这么“有趣”，简直抗日神剧的最上乘之作。"
                        },
                        {
                              classify: "武侠",
                              name: "《卧虎藏龙》",
                              different: "电影",
                              oldname: "卧虎藏龙",
                              nation: "中国",
                              date: "2000",
                              saying:
                                    "谢谢你给了我一个江湖梦，可是我却看不到江湖边。",
                              desc: "李安的江湖"
                        },
                        {
                              classify: "剧情",
                              name: "《无间道I》",
                              different: "电影",
                              oldname: "无间道",
                              nation: "中国",
                              date: "2002",
                              saying: "出来混，迟早要还的。",
                              desc: "受身无间永远不死，寿长乃无间地狱中之大劫"
                        },
                        {
                              classify: "爱情",
                              name: "《恋恋笔记本》",
                              different: "电影",
                              oldname: "The Notebook",
                              nation: "美国",
                              date: "2004",
                              saying:
                                    "爱情没有那么多借口，如果最终没能在一起，只能说明爱的不够。",
                              desc:
                                    "这部浪漫至极的纯爱电影，不知道哭惨了多少人！"
                        },
                        {
                              classify: "爱情",
                              name: "《沉静如海》",
                              different: "电影",
                              oldname: "Le Silence de la Mer",
                              nation: "法国",
                              date: "2004",
                              saying:
                                    "我之所以喜欢大海，是因为喜欢它的宁静。 我说的不是海浪，而是别的东西，神秘的东西。 是隐藏在深处，谜一样的大海。 大海是宁静的，要学会倾听...",
                              desc:
                                    "深入骨髓的爱恋没有拥抱没有争吵却只是一句流着泪的“再见”。"
                        }
                        //  {
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

