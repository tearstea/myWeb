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
                              classify: "剧情",
                              name: "《教父》",
                              different: "电影",
                              oldname: "The Godfather",
                              nation: " 美国",
                              date: "1972年",
                              saying: "不要憎恨你的敌人，那会影响你的判断力",
                              desc:
                                    "平缓的节奏蕴藏着巨大的权威和张力，音乐舒缓淡淡忧伤，利益博弈人性冲突。无论是演技还是镜头、音乐的运用，都给人以一种美的享受。而看这部电影是极其需要沉下心来细细品味，也无论何时翻出来重温都能有新的感受"
                        },
                        {
                              classify: "剧情",
                              name: "​《美国往事》",
                              different: "电影",
                              oldname: "Once Upon a Time in America",
                              nation: "美国",
                              date: "1984",
                              saying: "排箫一响，道尽人生凄凉",
                              desc:
                                    "以小人物的角度呈现了一个美国时代，电影聚焦纽约少年“面条”的一生，近乎4小时的时长，丝毫未有给人乏味，因为那被浓的是人的一生，五味杂陈里人性的复杂。人生之初一群人上路，落幕之时一个人独处。"
                        },

                        {
                              classify: "爱情",
                              name: "《天堂电影院》",
                              different: "电影",
                              oldname: "Nuovo Cinema Paradiso",
                              nation: " 意大利",
                              date: "1988",
                              saying: "人生...辛苦多了",
                              desc: "生活和电影不一样，生活比电影难多了。"
                        },
                        {
                              classify: "冒险",
                              name: "《现代启示录》",
                              different: "电影",
                              oldname: "Apocalypse Now",
                              nation: "美国",
                              date: "1979",
                              saying:
                                    "我愿有一对锯齿状的爪，好划破沉默的海底。",
                              desc:
                                    "这是最有艺术性的一部战争片，也是最热血激情的一部艺术片。摄影构图用光几近癫狂，教科书般，美不胜收。最后一场戏大片阴影中深藏着的面孔，预示着一个时代的终结。"
                        },

                        {
                              classify: "战争",
                              name: "《大逃亡》",
                              different: "电影",
                              oldname: "The Great Escape",
                              nation: "美国",
                              date: "1963",
                              saying:
                                    "没有人会来救你的，这就是人生，我只是不想坐以待毙。",
                              desc:
                                    "讲述了二战期间的德军战俘营里250名战俘“越狱”的故事"
                        },
                        {
                              classify: "剧情",
                              name: "《监狱风云》",
                              different: "电影",
                              oldname: "Prison on Fire",
                              nation: "中国",
                              date: "1987",
                              saying: "我大声说话不代表我没礼貌！",
                              desc: "划破黑暗的一缕微光"
                        },

                        {
                              classify: "剧情",
                              name: "《铁窗喋血》",
                              different: "电影",
                              oldname: "Cool Hand Luke",
                              nation: "美国",
                              date: "1967",
                              saying: "...",
                              desc:
                                    "运用了极其丰富的隐喻，利用蒙太奇的摄影手段，开创了以后社会派暴力电影的表现手法。"
                        },
                        {
                              classify: "爱情",
                              name: "《罗马假日》",
                              different: "电影",
                              oldname: "Roman Holiday",
                              nation: "美国",
                              date: "1953",
                              saying:
                                    "我死后还会听见你的声音，我在墓中的灵魂依然欢欣。",
                              desc:
                                    "虽然过去了半个多世界，它依然被很多人奉为经典。"
                        },
                        {
                              classify: "剧情",
                              name: "《最后一颗子弹》",
                              different: "电影",
                              oldname: "最后一颗子弹",
                              nation: "美国",
                              date: "1973",
                              saying: "...",
                              desc:
                                    "巴顿将军说过：“一个军人最好的结局就是在最后一场战争中被最后一颗子弹打死。”"
                        },
                        {
                              classify: "悬疑",
                              name: "《控方证人》",
                              different: "电影",
                              oldname: "Witness for the Prosecution",
                              nation: "美国",
                              date: "1957",
                              saying:
                                    "你不是想被爱，你是想获得原谅，我不原谅你。",
                              desc:
                                    "最后五分钟才明白，原来一开始你认为的剧情，都错了！"
                        },
                        {
                              classify: "剧情",
                              name: "《悲情城市》",
                              different: "电影",
                              oldname: "A City of Sadness",
                              nation: "中国台湾",
                              date: "1989",
                              saying:
                                    "我永远记得你，尽管飞扬的去吧！我随后就来，大家都一样。",
                              desc:
                                    "是以“自然法则”出入，是以知识分子展现为现象，描述“自然法则底下人们的活动”"
                        },
                        {
                              classify: "爱情",
                              name: "《聚散两依依》",
                              different: "电影",
                              oldname: "聚散两依依",
                              nation: "中国台湾",
                              date: "1981",
                              saying:
                                    "这些年，我过的很平淡，很平静，很平凡。三个平字加起来的幸福",
                              desc:
                                    "聚也依依，散也依依.每个人的人生不也是这样吗？"
                        },
                        {
                              classify: "爱情",
                              name: "《雁儿在林梢》",
                              different: "电影",
                              oldname: "雁儿在林梢",
                              nation: "中国台湾",
                              date: "1978",
                              saying: "...",
                              desc: "情节跌宕起伏，画面唯美"
                        },
                        {
                              classify: "战争",
                              name: "《红高粱》",
                              different: "电影",
                              oldname: "红高粱",
                              nation: "中国",
                              date: "1987",
                              saying:
                                    "后来，我把高粱铺平了，她就躺下了，躺下我就痛快了。",
                              desc: "如烈酒般的里程碑"
                        },
                        {
                              classify: "悲剧",
                              name: "《活着》",
                              different: "电影",
                              oldname: "活着",
                              nation: "中国",
                              date: "1994",
                              saying:
                                    "鸡养大了就变成了鹅，鹅养大了就变成了羊.羊再养大了，就变成了牛啦,牛以后呢,牛以后就是共产主义啦，就天天吃饺子，天天吃肉啦",
                              desc:
                                    "不看此电影，不知人生有多悲惨，不看此书，不知人生还有比这更悲惨的。"
                        },
                        {
                              classify: "动作",
                              name: "《英雄本色》",
                              different: "电影",
                              oldname: "A Better Tomorrow",
                              nation: "中国",
                              date: "1986",
                              saying: "做兄弟的，有今生，没来世。",
                              desc: "兄弟真情义"
                        },
                        {
                              classify: "科幻",
                              name: "《2001太空漫游》",
                              different: "电影",
                              oldname: "2001: A Space Odyssey",
                              nation: "美国",
                              date: "1968",
                              saying:
                                    "人猿们再也不会由于饥饿而变得冥顽不灵，他们有了闲空，也有了进行最初步思考的时间",
                              desc:
                                    "史上NO.1的科幻片。现今可能不觉得，如果是放到1968年呢？！"
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

