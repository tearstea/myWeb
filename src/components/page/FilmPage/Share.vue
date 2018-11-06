<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="剧名">
              <a :href="props.row.url" style="color: #00FA9A;" rel="nofollow noopener noreferrer" target="_blank">
                <el-button size="mini" round>{{ props.row.fullName }}</el-button>
              </a>
            </el-form-item>
            <el-form-item label="视频地址：">
              <span style="color: blue;">
                {{ props.row.url }}
              </span>
            </el-form-item>
            <el-form-item label="个人点评：">
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
          <a rel="nofollow noopener noreferrer" :href="props.row.url" style="color:#000;" target="_blank">
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
                              classify: "喜剧",
                              name: "《陈翔六点半》",
                              fullName: "陈翔六点半",
                              url:
                                    "http://www.iqiyi.com/a_19rrhb78th.html?vfm=2008_aldbd",
                              desc:
                                    "虽然很多鸡汤，但我一直在追随，看着他们从农村走到了城市。任何一件事，只要坚持去做，不断锻造自己，总有一天，会赢得人的观赏"
                        },
                        {
                              classify: "课堂",
                              name: "《李永乐老师趣味课堂》",
                              fullName: "李永乐趣味课堂",
                              url: "https://www.iqiyi.com/w_19ru1tg1gd.html",
                              desc:
                                    "科普短视频，趣味性十足，还可以增加知识，很有意思"
                        },
                        {
                              classify: "电影评说",
                              name: "《越哥说电影》",
                              fullName: "越哥说电影",
                              url: "https://www.bilibili.com/video/av22927042",
                              desc: "好看的电影，优秀的解说"
                        },
                        {
                              classify: "韩剧网站",
                              name: "韩剧TV网",
                              fullName: "韩剧TV网",
                              url: "https://www.hanjutv.com/",
                              desc: "比较全的韩剧网站"
                        },
                        {
                              classify: "日剧网站",
                              name: "日剧TV网",
                              fullName: "日剧TV网",
                              url: "https://www.rijutv.com/",
                              desc: "比较全的日剧网站"
                        },
                        {
                              classify: "美剧网站",
                              name: "美剧天堂",
                              fullName: "美剧天堂",
                              url: "http://www.meijutt.com/",
                              desc: "比较全的美剧网站"
                        },
                        {
                              classify: "英剧网站",
                              name: "英剧迷",
                              fullName: "英剧迷",
                              url: "http://www.yingju.org/",
                              desc: "比较全的英剧网站"
                        },
                        {
                              classify: "漫画",
                              name: "快看漫画",
                              fullName: "快看漫画",
                              url: "http://www.kuaikanmanhua.com/",
                              desc: "漫画迷的可选网站，而且都是免费的"
                        },
                        {
                              classify: "视频网站",
                              name: "WATCH FREE",
                              fullName: "WATCH FREE",
                              url: "https://watch-free.me/",
                              desc: "国外视频网站，有很多国外的免费视频"
                        },
                        {
                              classify: "视频网站",
                              name: "GO movies",
                              fullName: "GO movies",
                              url: "https://gomovies.cool/movie/filter",
                              desc:
                                    "国外视频网站，提供在线观看的电影网站，无需注册，免费观看电影，高清画"
                        },
                        {
                              classify: "视频网站",
                              name: "FREEFORM MOVIES",
                              fullName: "FREEFORM MOVIES",
                              url: "https://freeform.go.com/movies",
                              desc:
                                    "国外视频网站，资源十分丰富，种类多，界面友好，用户体验十分好"
                        },
                          {
                          classify: '视频',
                          name: '《一禅小和尚》',
                          fullName: '一禅小和尚',
                          url: 'https://v.qq.com/x/cover/ij4yjidgfnw346d/x0357395ibc.html',
                          desc: '小和尚一禅和师父的日常生活。观众能够从中领悟人生的道理，体会身处尘世的芸芸众生的喜怒哀乐、怨憎会、爱别离与求不得。在今日头条和腾讯视频都可以看到。',
                        },
                        //   {
                        //   classify: '',
                        //   name: '',
                        //   fullName: '',
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

