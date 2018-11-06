<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="外文名：">
              <span>
                {{ props.row.oldname }}
              </span>
            </el-form-item>
            <el-form-item label="国家：">
              <span>
                {{ props.row.nation }}
              </span>
            </el-form-item>
            <el-form-item label="经典名句：">
              <span class="spanA">
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
      <el-table-column label="作者" prop="author" sortable>
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
                              classify: "小说",
                              name: "《平凡的世界》",
                              author: "路遥",
                              oldname: "《平凡的世界》",
                              nation: "中国",
                              saying:
                                    "我认为，每个人都有一个觉醒期，但觉醒的早晚决定个人的命运。",
                              desc:
                                    "深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路"
                        },
                        {
                              classify: "历史文学",
                              name: "《干掉太阳旗》",
                              author: "比尔·奥雷利 、马丁·杜加尔德",
                              oldname: "Killing the Rising Sun",
                              nation: "美国",
                              saying:
                                    "在青山太太周围半公里范围内，成千上万的男女老少瞬间化为一块块木炭。在他们烧焦的尸体内，内脏器官已经蒸发。广岛市中心的这些人，刚才还活生生的，转眼就成了一堆堆黑色物体。站在广岛市中心广播电台前方的一位妇女试图逃离，却被烧焦成一个逃跑的姿势，怀里还紧紧抱着自己的孩子。",
                              desc: "..."
                        },
                        {
                              classify: "爱情悲剧",
                              name: "《茶花女》",
                              author: "小仲马",
                              oldname: "The Lady of the Camellias",
                              nation: "法国",
                              saying:
                                    "赢得一颗没有谈过恋爱的心，这就等于进入一个没有设防的城市",
                              desc:
                                    "因为爱，勇敢跨越门第礼教；因为误解，终生陷入悔恨遗憾，一个令人为之叹息的爱情故事，一首首撩拨心弦的动人乐曲，造就全世界最受欢迎的歌剧名作。"
                        },
                        {
                              classify: "象征主义",
                              name: "《老人与海》",
                              author: "欧内斯特·海明威",
                              oldname: "The Old Man and the Sea",
                              nation: "美国",
                              saying: "一个人可以被毁灭，但不能被打败。",
                              desc: "硬汉故事，男儿就应该有这样的血性"
                        },
                        {
                              classify: "历史文学",
                              name: "《明朝那些事儿》",
                              author: "当年明月",
                              oldname: "明朝那些事儿",
                              nation: "中国",
                              saying:
                                    "知道结局是悲剧，也无法改变，却依然要继续，这就是人生的最大悲哀",
                              desc: "加入了小说的笔法，语言幽默风趣。"
                        },
                        {
                              classify: "历史小说",
                              name: "《大明王朝 1566》",
                              author: "刘和平",
                              oldname: "大明王朝 1566",
                              nation: "中国",
                              saying: "圣人的书是用来读的，用来办事百无一用。",
                              desc: "揭示了中国传统政治中儒道互补的运作规律"
                        },
                        {
                              classify: "小说",
                              name: "《活着》",
                              author: "余华",
                              oldname: "活着",
                              nation: "中国",
                              saying:
                                    "最初我们来到这个世界，是因为不得不来；最终我们离开这个世界，是因为不得不走。",
                              desc: "人间最苦的苦难，也许再也没这样悲惨的故事了"
                        },
                        {
                              classify: "小说",
                              name: "《耶路撒冷》",
                              author: "徐则臣",
                              oldname: "耶路撒冷",
                              nation: "中国",
                              saying: "我们的世界的尽头是另一个世界的开始。",
                              desc:
                                    "假如人没了精神追求，那活着又有什么意义呢？其实，每个人都应该有一次心灵的朝拜"
                        },
                        {
                              classify: "小说",
                              name: "《穆斯林的葬礼》",
                              author: "霍达",
                              oldname: "穆斯林的葬礼",
                              nation: "中国",
                              saying: "只有谎言才拼命鼓吹，唯恐别人不信。",
                              desc:
                                    "“看了《穆斯林的葬礼》这本书，就如同走进一个完全新奇的世界。我觉得它是现代中国百花齐放的文坛上的一朵异卉奇花，挺然独立。 ————冰心”"
                        },
                        {
                              classify: "小说",
                              name: "《狼图腾》",
                              author: "姜戎",
                              oldname: "狼图腾",
                              nation: "中国",
                              saying: "狼需要自己捕食的尊严，它们不想被喂养，它们想冒着死的危险去捕猎，它们是战士，如果你把它的骄傲夺走，不让它捕杀，让它学会怕死，那它还算什么战士。",
                              desc: "当下，每个人都应该去拜读的一部史诗。环境的恶劣归根到底还是人的原因。每个人的心中都应该有一个心灵图腾，敬畏自然！"
                        },
                          {
                          classify:'小说',
                          name: '《围城》',
                          author: '钱钟书',
                          oldname: '围城',
                          nation: '中国',
                          saying: '围在城里的人想逃出去，城外的人想冲进来。人生的愿望大多如此。',
                          desc: '读了之后，才觉得这本书有多好！',
                        },
                        //   {
                        //   classify:'',
                        //   name: '',
                        //   author: '',
                        //   oldname: '',
                        //   nation: '',
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

