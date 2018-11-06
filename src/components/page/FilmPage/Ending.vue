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
                              classify: "惊悚",
                              name: "《旧日噩梦》",
                              oldname: "Frayed",
                              nation: "美国 ",
                              date: "2007年",
                              saying: "...",
                              desc: "杀戮的欲望一旦打开，就再也停不下来了。。"
                        },
                        {
                              different: "电影",
                              classify: "剧情",
                              name: "《致命切割》",
                              oldname: "Slice",
                              nation: "美国",
                              date: "2009年",
                              saying: "...",
                              desc:
                                    "神秘红衣人专门猎杀男人，并进行残酷肢解。警方毫无头绪……"
                        },

                        {
                              different: "电影",
                              classify: "惊悚",
                              name: "《高度怀疑》",
                              oldname: "Beyond a Reasonable Doubt",
                              nation: "美国 ",
                              date: "2009年",
                              saying: "",
                              desc:
                                    "根据1956年同名电影翻拍。新闻记者卧底调查检察官，却自己陷入危机……"
                        },
                        {
                              classify: "传记",
                              name: "《当幸福来敲门》",
                              different: "电影",
                              oldname: "The Pursuit of Happyness",
                              nation: "美国 ",
                              date: "2006",
                              saying: "如果你有梦想，就要捍卫它。",
                              desc: "如果你也有孩子，你会佩服他！"
                        },
                        {
                              classify: "奇幻",
                              name: "《返老还童》",
                              different: "电影",
                              oldname: "The Curious Case of Benjamin Button",
                              nation: "美国",
                              date: "2008",
                              saying: "总有一些事情是我需要铭记一生的。",
                              desc:
                                    "你可以像疯狗那样对周围的一切愤愤不平，你可以诅咒命运，但是等到最后一刻到来之时，你还得平静的放手而去。"
                        },
                        {
                              classify: "科幻",
                              name: "《阿凡达》",
                              different: "电影",
                              oldname: "Avatar",
                              nation: "美国",
                              date: "2009",
                              saying:
                                    "人这一辈子，有时就得靠一次疯狂的举动才能扭转乾坤!",
                              desc: "挑战膀胱与感官极限的IMAX神话"
                        },
                        {
                              classify: "动作",
                              name: "《曼谷杀手》",
                              different: "电影",
                              oldname: "Bangkok Dangerous",
                              nation: "美国",
                              date: "2006",
                              saying: "...",
                              desc:
                                    "处异国他乡，面对陌生的面孔、语言和风土人情，乔遭遇了无法预期的生命转折"
                        },
                        {
                              classify: "悬疑",
                              name: "《窃听风暴》",
                              different: "电影",
                              oldname: "Das Leben der Andere",
                              nation: "德国",
                              date: "2004",
                              saying:
                                    "如果有罪，不是越来越镇定、沉默，而是痛哭流涕。",
                              desc:
                                    "一个黑暗时代的神话，一曲人性向善的凡人之歌。"
                        },
                        {
                              classify: "剧情",
                              name: "《浪潮》",
                              different: "电影",
                              oldname: "Die Welle",
                              nation: "德国",
                              date: "2008",
                              saying:
                                    "终有一天，终有一天你会觉得鱼尾纹没有什么好开玩笑的。",
                              desc:
                                    "是对纳粹主义行为一次深刻的剖析解读，独裁统治的起源透过一所学校师生间类似游戏的展开，在名为“浪潮”的组织间电影将人们是如何自然地从独立自由的个体到成为了一个尊崇集体"
                        },
                        {
                              classify: "剧情儿童",
                              name: "《地球上的星星》",
                              different: "电影",
                              oldname: "Taare Zameen Par",
                              nation: "印度",
                              date: "2007",
                              saying: "每个孩子都是坠落在凡间的星辰。",
                              desc: "每位学生都是一颗闪耀的星辰"
                        },
                        {
                              classify: "剧情",
                              name: "《坠入》",
                              different: "电影",
                              oldname: "The Fall",
                              nation: "印度",
                              date: "2006",
                              saying:
                                    "我就像金色鸟笼中的小鸟，你一旦解放了我，就俘虏了我的心。",
                              desc:
                                    "我流着泪和你经历一次冒险。沿路所见的是我见过最美丽的风景。死亡与救赎的呈现从未如此惊艳"
                        },
                        {
                              classify: "探索",
                              name: "《北美国家公园全纪录》",
                              different: "纪录片",
                              oldname:
                                    "The National Parks: America‘s Best Idea",
                              nation: "美国",
                              date: "2009",
                              saying: "...",
                              desc:
                                    "影片讲述了一个有关国家公园创意的故事，不仅记录了19世纪中期国家公园的诞生史，还追溯了最近150年来的发展史。"
                        },
                        {
                              classify: "喜剧",
                              name: "《疯狂的石头》",
                              different: "电影",
                              oldname: "疯狂的石头",
                              nation: "中国",
                              date: "2006",
                              saying: "公共厕所ｍａｎ？想来就来？想走就走？",
                              desc: "最具批判意识的黑色幽默"
                        },
                        {
                              classify: "剧情",
                              name: "《无人区》",
                              different: "电影",
                              oldname: "无人区",
                              nation: " 中国",
                              date: "2009",
                              saying:
                                    "钱没了可以挣回来，今天过了就再也没有了。",
                              desc: "黑色电影映照下的人性堕落"
                        },
                        {
                              classify: "悬疑惊悚",
                              name: "《恐怖游轮》",
                              different: "电影",
                              oldname: "恐怖游轮",
                              nation: "美国",
                              date: "2009",
                              saying:
                                    "知道我做了噩梦之后会怎么做吗? 我会闭上眼睛，想些美好的事情，例如和你在一起。",
                              desc:
                                    "烧脑至尊：违背死神的意愿，死神的极端惩罚就是让你轮回在生与死之间！"
                        },
                        {
                              classify: "科幻",
                              name: "《这个男人来自地球》",
                              different: "电影",
                              oldname: "这个男人来自地球",
                              nation: "美国 ",
                              date: "2007",
                              saying:
                                    "对于历史，错误总是在重复，但是对于历史中的每个人，多数错误都是第一次",
                              desc:
                                    "当你20岁的时候，发现自己有一个60岁的儿子你该咋办？"
                        },
                        {
                              classify: "悬疑",
                              name: "《穆赫兰道》",
                              different: "电影",
                              oldname: "穆赫兰道",
                              nation: "美国",
                              date: "2000",
                              saying:
                                    "也许当恨过了，才知道爱曾有多深。你作不了我的诗，正如我做不了你的梦。",
                              desc: "人生如戏，戏如梦。"
                        },
                        {
                              classify: "剧情",
                              name: "《水果硬糖》",
                              different: "电影",
                              oldname: "Hard Candy",
                              nation: "美国 ",
                              date: "2005",
                              saying: "你热爱大自然，所以你就是个好人了吗？",
                              desc:
                                    "14岁的你也许还在父母的庇护中成长，她却完成了一起盛大的复仇计划！"
                        },
                        {
                              classify: "动作",
                              name: "《飓风营救》",
                              different: "电影",
                              oldname: "Taken",
                              nation: "法国",
                              date: "2007",
                              saying:
                                    "这就是你坐办公桌的后果，你开始忘记事情。就像你忘了上了子弹的枪在手里的重量",
                              desc: "铁血柔情特工父!"
                        },
                        {
                              classify: "剧情",
                              name: "《守法公民》",
                              different: "电影",
                              oldname: "Law Abiding Citizen",
                              nation: "美国",
                              date: "2009",
                              saying:
                                    "我年轻的时候，很想改变这个系统，我想抗争，不惜代价，做到最好，但是这里让一步，那里让一步，最后陷入到这个游戏中。然后我意识到我想改变的这个系统，却改变了我。",
                              desc: "一环扣一环，让人颇为期待"
                        },
                        {
                              classify: "剧情",
                              name: "《老无所依》",
                              different: "电影",
                              oldname: "No Country for Old Men",
                              nation: "美国",
                              date: "2007",
                              saying:
                                    "当你试图拿回失去的东西时，也许你会失去更多。",
                              desc: "任何人看完本片都不会失望！"
                        },
                        {
                              classify: "剧情",
                              name: "《芭萨提的颜色》",
                              different: "电影",
                              oldname: "Rang De Basanti",
                              nation: "印度",
                              date: "2006",
                              saying:
                                    "我一直以为世界上有两种人，一种是面对死亡哭喊的人，一种是面对死亡安静的人，直到我遇到了第三种……",
                              desc: "一代人的觉醒"
                        },
                        {
                              classify: "爱情",
                              name: "《怦然心动》",
                              different: "电影",
                              oldname: "Flipped",
                              nation: "美国",
                              date: "2010",
                              saying:
                                    "有一天你会遇到到一个彩虹般绚丽的人，从此以后，其他人不过就是匆匆浮云。",
                              desc:
                                    "纯洁与懵懂的童年味道，相信看的人，都会想起曾经的种种，曾经的那个人。"
                        },
                        {
                            classify: '爱情',
                            name: '朗读者',
                            different: '《电影》',
                            oldname: 'The Reader',
                            nation: '德国',
                            date: '2007',
                            saying: '唯一能使人生完整的，是爱。',
                            desc: '讲述了20世纪五十年代少年迈克和中年女子汉娜展开的一段刻骨铭心的爱情故事。',
                          },
                        // {
                        //     classify: '',
                        //     name: '',
                        //     different: '电影',
                        //     oldname: '',
                        //     nation: '',
                        //     date: '',
                        //     saying: '',
                        //     desc: '',
                        //   },
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

