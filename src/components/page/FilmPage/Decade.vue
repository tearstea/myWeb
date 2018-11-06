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
                              classify: "惊悚 ",
                              name: "《鼩鼱的巢穴》",
                              oldname: "Musarañas",
                              nation: "西班牙",
                              date: "2014年",
                              saying: "....",
                              desc: "看到最后才明白怎么一回事，脑洞很大"
                        },
                        {
                              classify: "剧情",
                              name: "《杀死这个爱尔兰人》",
                              different: "电影",
                              oldname: "Kill The Irishman",
                              nation: "美国",
                              date: "2011",
                              saying: "...",
                              desc:
                                    "很给劲的黑帮片，真实事件改编，生存下的暴力，暴力后的救赎"
                        },
                        {
                              classify: "悬疑",
                              name: "《禁闭岛》",
                              different: "电影",
                              oldname: "shutter Island",
                              nation: "美国",
                              date: "2010",
                              saying: "像禽兽般混沌的活着，或者清醒的死去",
                              desc:
                                    "真正的答案却被藏了起来。如果有一天，你发现你自己是疯子的时候，你就正常了！"
                        },
                        {
                              classify: "战争",
                              name: "《危机13小时》",
                              different: "电影",
                              oldname:
                                    "13 Hours: The Secret Soldiers of Benghazi",
                              nation: "美国",
                              date: "2015",
                              saying: "你本不该出现在那里，可是你已经在了。",
                              desc: "影片中的战争是残酷的，而非浪漫的。"
                        },
                        {
                              classify: "冒险",
                              name: "《勇者行动》",
                              different: "电影",
                              oldname: "Act of Valor",
                              nation: "美国",
                              date: "2012",
                              saying: "唱响你生命中的赞歌，像英雄一样离开。",
                              desc:
                                    "战争离我们其实并不遥远，没有人希望活在战争年代，不忘战争才能拥抱和平。"
                        },
                        {
                              classify: "悬疑",
                              name: "《金蝉脱壳》",
                              different: "电影",
                              oldname: "Escape Plan",
                              nation: "美国",
                              date: "2012",
                              saying:
                                    "夺去一个男人的生命没什么，撕碎他的心，那才是一切！",
                              desc: "精巧的设计，却被设计，最终金蝉脱壳"
                        },
                        {
                              classify: "冒险",
                              name: "《速度与激情7》",
                              different: "电影",
                              oldname: "Fast & Furious 7",
                              nation: "美国",
                              date: "2015",
                              saying: "亲吻姑娘的时候，我才会闭眼。",
                              desc: "模糊了界限的类型电影"
                        },
                        {
                              classify: "科幻",
                              name: "《侏罗纪世界》",
                              different: "电影",
                              oldname: "Jurassic World",
                              nation: "美国",
                              date: "2015",
                              saying: "战争是动物的天性",
                              desc: "血腥暴力的恐龙世界"
                        },
                        {
                              classify: "动作",
                              name: "《机械师》",
                              different: "电影",
                              oldname: "The Mechanic",
                              nation: "美国",
                              date: "2011",
                              saying: "如果你根本没有睡着，又如何从噩梦中醒来",
                              desc:
                                    "稳定的心态，精妙的手法，杀人于无形，这是一个顶尖杀手的必备。"
                        },
                        {
                              classify: "警匪",
                              name: "《新世界》",
                              different: "电影",
                              oldname: "신세계 ",
                              nation: "韩国",
                              date: "2013",
                              saying: "要做就做得狠一点，这样才能活下去",
                              desc:
                                    "真实的人性， 这个世界并不是非黑即白，警方很多时候更像坏人，更不守规矩，而黑帮很多时候更讲诚信和义气，更遵守道上的准则，而卧底最后的选择，也更人性化，压迫过多，欺人太甚，也有可能被逼上梁山。"
                        },
                        {
                              classify: "爱情",
                              name: "《我爱你》",
                              different: "电影",
                              oldname: "그대를 사랑합니다",
                              nation: "韩国",
                              date: "2010",
                              saying:
                                    "你花了一辈子才学会温柔待人，而我何其幸运，在生命的末尾遇上了你。",
                              desc:
                                    "没有浮夸的背景、漂亮的演员；没有卖点，也没有任何新奇的手法，却有平淡如水的真诚感情。"
                        },
                        {
                              classify: "爱情",
                              name: "《回家的路》",
                              different: "电影",
                              oldname: "...",
                              nation: "韩国",
                              date: "2013",
                              saying: "可以看电影结尾台词，感人肺腑",
                              desc: "因为在国外犯了罪，曲折离奇的回家艰险之旅"
                        },
                        {
                              classify: "剧情",
                              name: "《国际市场》",
                              different: "电影",
                              oldname: "국제시장 ",
                              nation: "韩国",
                              date: "2014",
                              saying:
                                    "幸好我们的子女们没有经历这种艰难的岁月风波，而是我们来经受。",
                              desc: "长兄如父，平民的史诗"
                        },
                        {
                              classify: "喜剧",
                              name: "《三傻大闹宝莱坞》",
                              different: "电影",
                              oldname: "3 idiots",
                              nation: "印度",
                              date: "2011",
                              saying:
                                    "从出生我们就被灌输，生存就是赛跑,全速前进，否则你就会被践踏,甚至包括出生，你也得和另外3亿精子赛跑。 ",
                              desc: "励志喜剧，折射非常人生"
                        },
                        {
                              classify: "剧情",
                              name: "《炙热 》",
                              different: "电影",
                              oldname: "Parched",
                              nation: "印度",
                              date: "2015",
                              saying:
                                    "如果你愿意，我就永远爱你，如果你不愿意，我就永远相思。",
                              desc: "三个女人，三种生活"
                        },
                        {
                              classify: "音乐剧",
                              name: "《小萝莉的猴神大叔》",
                              different: "电影",
                              oldname: "Bajrangi Bhaijaan",
                              nation: "印度",
                              date: "2015",
                              saying:
                                    "你知道我为什么爱上你吗？因为你有一颗纯洁的心。不同种姓不同阶级，都不重要啊。别在那种傻事上浪费时间了。",
                              desc: "超乎想象的萝莉能量"
                        },
                        {
                              classify: "战争",
                              name: "巴霍巴利王",
                              different: "电影",
                              oldname: "Baahubali: The Beginning",
                              nation: "印度",
                              date: "2015",
                              saying:
                                    "生气的时候就连糖都会带有苦味，等你气消了再说。",
                              desc: "史诗级巨作"
                        },
                        {
                              classify: "探索",
                              name: "《侣行》",
                              different: "纪录片",
                              oldname: "ON THE ROAD",
                              nation: "中国",
                              date: "2013",
                              saying: "...",
                              desc:
                                    "融合中国新一代年轻人的梦想、爱情、友情、勇气和行动力。"
                        },
                        {
                              classify: "爱情",
                              name: "《爱你，罗茜》",
                              different: "电影",
                              oldname: "Love, Rosie",
                              nation: "德国",
                              date: "2014",
                              saying:
                                    "所有的阴差阳错都阻止不了我们是天生一对。",
                              desc:
                                    "因为”拥有就是失去的开始“，虽然相爱，但从未在一起"
                        },
                        {
                              classify: "喜剧",
                              name: "《盗剑72小时》",
                              different: "电影",
                              oldname: "盗剑72小时",
                              nation: "中国",
                              date: "2013",
                              saying: "",
                              desc: "多线索盗墓喜剧电影"
                        },
                        {
                              classify: "科幻",
                              name: "《彗星来的那一夜》",
                              different: "电影",
                              oldname: "彗星来的那一夜",
                              nation: "美国",
                              date: "2013",
                              saying: "猫要么活着要么死了————薛定谔之猫",
                              desc:
                                    "当你回家发现躺在你床上的丈夫正和另一个你亲热的时候，请不要打扰！"
                        },
                        {
                              classify: "科幻",
                              name: "《盗梦空间》",
                              different: "电影",
                              oldname: "Inception",
                              nation: "美国",
                              date: "2010",
                              saying: "既然是做梦，就干脆做大点",
                              desc:
                                    "梦中的你才是最真实的，你现在认为清醒的时候，其实是在做梦！"
                        },
                        {
                              classify: "剧情",
                              name: "《消失的爱人》",
                              different: "电影",
                              oldname: "Gone Girl",
                              nation: "美国",
                              date: "2014",
                              saying:
                                    "我在一味地付出，他则在不断地攫取，他夺走了我的独立、我的骄傲和我的自尊，把我彻底榨干了。",
                              desc: "别惹女人，否则她会让你生不如死"
                        },
                        {
                              classify: "惊悚",
                              name: "《黑暗面》",
                              different: "电影",
                              oldname: "La Cara Oculta",
                              nation: "西班牙",
                              date: "2011",
                              saying: "...",
                              desc:
                                    "女友作死考验爱人忠诚，却将自己陷入万劫不复之地，人性险恶"
                        },
                        {
                              classify: "爱情",
                              name: "《危情3日》",
                              different: "电影",
                              oldname: "The Next Three Days",
                              nation: "美国",
                              date: "2010",
                              saying:
                                    "I am hopeless without my wife. so.......I will get you back",
                              desc: "大爱是行动，而不是誓言"
                        },
                        {
                              classify: "家庭",
                              name: "万箭穿心",
                              different: "电影",
                              oldname: "万箭穿心",
                              nation: "中国",
                              date: "2012",
                              saying: "谈感情，伤钱。",
                              desc: "直逼人性"
                        },
                        {
                              classify: "动作",
                              name: "《孤胆特工》",
                              different: "电影",
                              oldname: "아저씨",
                              nation: "韩国",
                              date: "2010",
                              saying:
                                    "只为明天而活的人会死在只为今天而活的人手里，我只为今天而活",
                              desc: "一次高超的临摹"
                        },
                        {
                              classify: "爱情",
                              name: "《初恋这件小事》",
                              different: "电影",
                              oldname: "初恋这件小事",
                              nation: "泰国",
                              date: "2010",
                              saying: "突然觉得自己很差 大概是因为喜欢上你了",
                              desc: "谁的青春不曾因初恋而美好"
                        },
                        {
                              classify: "喜剧",
                              name: "《荒蛮故事》",
                              different: "电影",
                              oldname: "Relatos salvajes",
                              nation: "阿根廷",
                              date: "2014",
                              saying: "老鼠药过期 是更毒还是不毒",
                              desc:
                                    "辛辣讥嘲以社会乱像的种种，更揭示着人性阴暗的丑陋"
                        },
                        {
                              classify: "喜剧",
                              name: "《让子弹飞》",
                              different: "电影",
                              oldname: "让子弹飞",
                              nation: "中国",
                              date: "2010",
                              saying: "我就是想站着，还把钱挣了。",
                              desc: "干了这碗老汤！"
                        },
                        {
                              classify: "喜剧",
                              name: "《杀生》",
                              different: "电影",
                              oldname: "杀生",
                              nation: "中国",
                              date: "2012",
                              saying: "心死了，才是真亡。",
                              desc: "人性的完美展示"
                        },
                        {
                              classify: "剧情",
                              name: "《天注定》",
                              different: "电影",
                              oldname: "天注定",
                              nation: "中国",
                              date: "2013",
                              saying:
                                    "人人生而有罪，活在大染缸中，人人猥琐旁观，人人凌弱欺善，人人相互残害，人人颟顸顽愚。",
                              desc: "无奈，无奈！"
                        },
                        {
                              classify: "剧情",
                              name: "《烈日灼心》",
                              different: "电影",
                              oldname: "烈日灼心",
                              nation: "中国",
                              date: "2013",
                              saying: "有的事情想想可以，但做不行。",
                              desc: "什么是罪，什么又是爱？值得人深思！"
                        },
                        {
                              classify: "剧情",
                              name: "《白日焰火》",
                              different: "电影",
                              oldname: "白日焰火",
                              nation: "中国",
                              date: "2014",
                              saying:
                                    "如今沧海桑田，鸟枪换炮了，可是多美多烂的记忆都不会改变 。",
                              desc: "并非所有的生命都是卑微的。"
                        },
                        {
                              classify: "剧情",
                              name: "《全民目击》",
                              different: "电影",
                              oldname: "全民目击",
                              nation: "中国",
                              date: "2013",
                              saying: "人生在世，总有一件东西比命重要",
                              desc: "精巧的布局，深刻的反思，值得一看"
                        },
                        {
                              classify: "剧情",
                              name: "《触不可及》",
                              different: "电影",
                              oldname: "ntouchables",
                              nation: "法国",
                              date: "2011",
                              saying:
                                    "我真正的残疾并不是坐在轮椅中，而是失去她。",
                              desc:
                                    "完全可以用9个字总结观影感受：你会笑，你会哭，你给赞"
                        },
                        {
                              classify: "爱情",
                              name: "《触不可及》",
                              different: "电影",
                              oldname: "触不可及",
                              nation: "中国",
                              date: "2014",
                              saying: "等一个人，太煎熬了。",
                              desc: "此情可待成追忆"
                        },
                        {
                              classify: "童真",
                              name: "《海蒂和爷爷》",
                              different: "电影",
                              oldname: "Heidi",
                              nation: "德国",
                              date: "2015",
                              saying:
                                    "如果生活中有什么使你感到快乐，那就就去做吧！不要管别人说什么。",
                              desc: "最纯真的纯真"
                        }
                        // {
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

