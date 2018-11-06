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
                              classify: "冒险",
                              name: "《火影》",
                              different: "动漫",
                              oldname: "Hokage",
                              nation: "日本",
                              date: "2002",
                              saying:
                                    "人在为了保护最重要的人的时候，会变得非常坚强。",
                              desc: "以为一直会更新，从未结束！"
                        },
                        {
                              classify: "奇幻",
                              name: "《千与千寻》",
                              different: "动漫",
                              oldname: "千と千尋",
                              nation: "日本",
                              date: "2001",
                              saying: "我不知道将去何方，但我已在路上。",
                              desc: "对心灵的深层抚慰"
                        },
                        {
                              classify: "剧情",
                              name: "《哈尔的移动城堡》",
                              different: "动漫",
                              oldname: "ハウルの動く城",
                              nation: "日本",
                              date: "2004",
                              saying:
                                    "世界这么大，人生这么长，总会有这么一个人，让你想要温柔地对待。",
                              desc: "那源于本心纯真是多么美好"
                        },
                        {
                              classify: "科幻",
                              name: "《银魂》",
                              different: "动漫",
                              oldname: "銀魂",
                              nation: "日本",
                              date: "2004",
                              saying:
                                    "有阳光的地方就会有阴影，所以有阴影的地方也一定会有阳光。绝望的颜色越是浓厚，在哪里也一定会存在耀眼的希望之光。",
                              desc: "据说“一入银魂深似海，从此贞操是路人”。"
                        },
                        {
                              classify: "剧情",
                              name: "《起风了》",
                              different: "动漫",
                              oldname: "風立ちぬ",
                              nation: "日本",
                              date: "2013",
                              saying: "再没有什么比幸福的回忆更妨碍幸福的了。",
                              desc: "梦境和虚构人物编织成的奇幻传记片"
                        },
                        {
                              classify: "冒险",
                              name: "《冰雪奇缘》",
                              different: "动漫",
                              oldname: "Frozen",
                              nation: "美国",
                              date: "2013",
                              saying: "有的人值得你去融化.",
                              desc: "真爱的力量！太美了！"
                        },
                        {
                              classify: "科幻",
                              name: "《七龙珠》",
                              different: "动漫",
                              oldname: "Dragon Ball",
                              nation: "日本",
                              date: "1986",
                              saying: "人的懒惰只会浪费自己的天分。",
                              desc: "承载了无数人童年的记忆"
                        },
                        {
                              classify: "环保",
                              name: "《风之谷》",
                              different: "动漫",
                              oldname: "風の谷のナウシカ",
                              nation: "日本",
                              date: "1984",
                              saying:
                                    "火在一天之内把森林烧成灰烬，水和风却需要一百年以上的时间来造林。",
                              desc: "以新的画风，温暖的故事来警醒世人"
                        },
                        {
                              classify: "奇幻",
                              name: "《天空之城》",
                              different: "动漫",
                              oldname: "天空の城",
                              nation: "日本",
                              date: "1986",
                              saying: "越是试着忘记，越是记得深刻。",
                              desc: "绝非仅仅是因为爱情，拥有着更深层的含义"
                        },
                        {
                              classify: "爱情",
                              name: "《秒速5厘米》",
                              different: "动漫",
                              oldname: "秒速5セン",
                              nation: "日本",
                              date: "2007",
                              saying: "我们仰望着同一片天空却看着不同的地方。",
                              desc: "当樱花花瓣落地，一切就再也追赶不上了"
                        },
                        {
                              classify: "武侠",
                              name: "《秦时明月》",
                              different: "动漫",
                              oldname: "秦时明月",
                              nation: "中国",
                              date: "2007",
                              saying: "只要活着，一切就都还有希望。",
                              desc: "历史也可以拍成动漫！"
                        },
                        {
                              classify: "治愈",
                              name: "《夏目友人帐》",
                              different: "动漫",
                              oldname: "夏目友人帳",
                              nation: "日本",
                              date: "2008年",
                              saying: "只要有想见的人，就不再是孤身一人了",
                              desc:
                                    "小清新的画风，人物美型切饱满，剧情很吸引人，将妖怪刻画得既温暖又可爱。"
                        },
                        {
                              classify: "体育",
                              name: "《灌篮高手》",
                              different: "动漫",
                              oldname: "SLAM DUNK",
                              nation: "日本",
                              date: "1990",
                              saying:
                                    "或许，青春本来就是不完满的吧。五万人的欢呼，不及晴子你的一句话。",
                              desc: "童年的梦！"
                        },
                        {
                              classify: "冒险",
                              name: "《海贼王》",
                              different: "动漫",
                              oldname: "ONE PIECE",
                              nation: "日本",
                              date: "1997",
                              saying: "穿越万千残酷的大海，如太阳一般灿烂的船",
                              desc: "看，不能停"
                        },
                        {
                              classify: "爱情",
                              name: "幽灵公主",
                              different: "动漫",
                              oldname: "もののけ姫",
                              nation: "日本",
                              date: "1997",
                              saying:
                                    "不管你曾经被伤害得有多深，总会有一个人的出现，让你原谅之前生活对你所有的刁难。",
                              desc:
                                    "，人与人、自然与人之间的关系被表现得淋漓尽致"
                        },
                        {
                              classify: "历史",
                              name: "《武庚纪》",
                              different: "动漫",
                              oldname: "武庚纪",
                              nation: "中国",
                              date: "2016",
                              saying: "我不是为了做奴隶而来到这世上的！",
                              desc: "历史原来是这样"
                        }
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

