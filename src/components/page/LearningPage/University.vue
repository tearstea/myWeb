<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="网站全名：">
              <a :href="props.row.url" class="classA" rel="nofollow noopener noreferrer" target="_blank">
                <el-button size="mini" round>{{ props.row.fullName }}
                </el-button>
              </a>
            </el-form-item>
            <el-form-item label="网站地址：">
              <span class="spanA">
                {{ props.row.url }}
              </span>
            </el-form-item>
            <el-form-item label="网站简介：">
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
          <a :href="props.row.url" class="classB" rel="nofollow noopener noreferrer" target="_blank">
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
                              classify: "演讲",
                              name: "TED",
                              fullName: "TED",
                              url: "https://www.ted.com/",
                              desc:
                                    "TED 是一个高质量的演讲节目，演讲的嘉宾都是各大领域杰出的人物。观看 TED 可以极大的丰富你的见识，还是一个锻炼你英语能力非常不错的机会。"
                        },
                        {
                              classify: "问答",
                              name: "知乎",
                              fullName: "知乎",
                              url: "https://www.zhihu.com/",
                              desc:
                                    "在知乎上了解社会热点是一个很不错的途径，并且也可以看看别人对这些事件的看法，是否和你想的一样，还是有更好的见解。"
                        },
                        {
                              classify: "学术",
                              name: "中国知网",
                              fullName: "中国知网",
                              url: "http://epub.cnki.net/",
                              desc:
                                    "大学生必去网站，不论是写论文，还是丰富自己的学科知识"
                        },
                        {
                              classify: "影评",
                              name: "豆瓣影评",
                              fullName: "豆瓣影评",
                              url: "https://movie.douban.com/review/best/",
                              desc: " 看电影之前，怎么能少得了影评呢？"
                        },
                        {
                              classify: "找工作",
                              name: "前程无忧",
                              fullName: "前程无忧",
                              url: "https://www.51job.com/",
                              desc:
                                    "大学生面临着毕业，该怎么办呢？可以直接在此网站上面浏览招聘信息，发简历"
                        },
                        {
                              classify: "影视",
                              name: "哔哩哔哩",
                              fullName: "哔哩哔哩",
                              url: "https://www.bilibili.com/",
                              desc: "怎么说呢？但好像就是很受人欢迎。"
                        },
                        {
                              classify: "学习平台",
                              name: "我要自学网",
                              fullName: "我要自学网",
                              url: "http://www.51zxw.net/",
                              desc: "包含了很多常用的技术知识，对于未来很有帮助"
                        },
                        {
                              classify: "课程",
                              name: "爱课程",
                              fullName: "爱课程",
                              url: "http://www.icourses.cn/oc/",
                              desc: "可以参加开课，进行在线学习，进行周期性学习"
                        },
                        {
                              classify: "PS",
                              name: "PS联盟",
                              fullName: "PS联盟",
                              url: "https://www.68ps.com/",
                              desc: "大学生活中，怎么能少得了一项PS技术呢？！"
                        },
                        {
                              classify: "知识产权",
                              name: "世界知识产权组织",
                              fullName: "WIPO",
                              url: "http://www.wipo.int/",
                              desc:
                                    "作为文化人，还是了解点知识产权方面的知识，还是很有益处的"
                        },
                        {
                              classify: "统计",
                              name: "中国统计网",
                              fullName: "中国统计网",
                              url: "http://www.itongji.cn/",
                              desc: "可能更多的是针对于互联网方面的统计数据"
                        },
                        {
                              classify: "数字图书馆",
                              name: "高等教育数字图书馆",
                              fullName: "高等教育数字图书馆",
                              url: "http://www.calis.edu.cn/",
                              desc: "可以查找全国高校图书馆资料"
                        },
                        {
                              classify: "古籍",
                              name: "书格",
                              fullName: "书格",
                              url: "https://shuge.org/",
                              desc: "提供古籍阅读的数字图书馆"
                        },
                        {
                              classify: "公开课",
                              name: "耶鲁大学公开课",
                              fullName: "Open Yale Courses",
                              url: "https://oyc.yale.edu/",
                              desc:
                                    "提供耶鲁大学的课程，既有传统的网络公开课，也有MOOC。"
                        },
                        {
                              classify: "学习平台",
                              name: "edX",
                              fullName: "edX",
                              url: "https://www.edx.org/",
                              desc:
                                    "由麻省理工学院和哈佛大学联合创办的大规模开放在线课堂平台，免费给大众提供大学教育水平的在线课堂，非营利运营。"
                        },
                        {
                              classify: "漫画网站",
                              name: "xkcd",
                              fullName: "xkcd",
                              url: "https://xkcd.com/",
                              desc:
                                    "关于浪漫、讽刺、数学和语言的网络漫画。 用严谨的科学理论+有趣的漫画来回答那些荒诞离奇的问题，比如“假如地球和地上的所有东西都在瞬间停止转动，会发生什么？”“站在纽约的时代广场向前穿越10亿年会怎么样？”"
                        },
                        {
                              classify: "素描视频",
                              name: "素描入门",
                              fullName: "素描入门",
                              url:
                                    "http://m.v.dxsbb.com/renwen/1114/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了素描基本的技巧。"
                        },
                        {
                              classify: "钢琴视频",
                              name: "钢琴教学",
                              fullName: "钢琴教学",
                              url:
                                    "http://m.v.dxsbb.com/renwen/948/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了钢琴基本的技巧。"
                        },
                        {
                              classify: "古筝视频",
                              name: "古筝教学",
                              fullName: "古筝教学",
                              url:
                                    "http://m.v.dxsbb.com/renwen/952/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了古筝基本的技巧。"
                        },
                        {
                              classify: "楷书视频",
                              name: "硬笔书法楷书",
                              fullName: "硬笔书法楷书",
                              url:
                                    "http://m.v.dxsbb.com/renwen/931/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了楷书基本的技巧。"
                        },
                        {
                              classify: "吉他视频",
                              name: "吉他教学入门",
                              fullName: "吉他教学入门",
                              url:
                                    "http://m.v.dxsbb.com/renwen/853/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了吉他基本的技巧。"
                        },
                        {
                              classify: "普通话视频",
                              name: "普通话学习",
                              fullName: "普通话学习",
                              url:
                                    "http://m.v.dxsbb.com/renwen/570/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了普通话基本的技巧。"
                        },
                         {
                              classify: "国外奖学金申请网站",
                              name: "Scholly",
                              fullName: "Scholly",
                              url: "https://myscholly.com/",
                              desc:
                                    "Scholly这个网站每年能够帮助各种学生拿到g各种奖学金，只需要创建账号然后填写个人信息就可以帮你自动匹配适合你的奖学金。"
                        },
                        {
                              classify: "国外奖学金申请网站",
                              name: "College Board’s Scholarship Search",
                              fullName: "College Board’s Scholarship Search",
                              url:
                                    "https://bigfuture.collegeboard.org/scholarship-search",
                              desc:
                                    "College Board‘s Scholarship Search跟2200多个奖学金项目合作，也可以自动匹配，总有一款适合你。"
                        },
                        {
                              classify: "国外奖学金申请网站",
                              name: "Fastweb",
                              fullName: "Fastweb",
                              url: "http://www.fastweb.com/",
                              desc:
                                    "网站上密密麻麻都是奖学金信息，除了按照条件搜索，网站还自动按各种奖学金的截止日期进行了分类，很实用。"
                        },
                        {
                              classify: "国外奖学金申请网站",
                              name: "Scholarships",
                              fullName: "Scholarships",
                              url: "https://www.scholarships.com/",
                              desc:
                                    "除了美国各种大学研究所的奖学金，网站上还有加拿大、欧洲、日本、韩国等国家的奖学金项目。"
                        },
                        {
                              classify: "国外奖学金申请网站",
                              name: "Cappex",
                              fullName: "Cappex",
                              url: "https://www.cappex.com/",
                              desc:
                                    "网站最大的优势是更新很快，奖学金信息很多，而且还有各种大学申请相关的消息"
                        },
                        {
                              classify: "国外奖学金申请网站",
                              name: "Niche",
                              fullName: "Niche",
                              url:
                                    "https://www.niche.com/colleges/scholarships/",
                              desc:
                                    "网站上会有很多不需要essay、GPA或者推荐信就可以申请的奖学金。"
                        },
                        //    {
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
