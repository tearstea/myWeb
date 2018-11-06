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
                          classify: '字典',
                          name: '快学网',
                          fullName: '快学网',
                          url: 'http://www.kxue.com/',
                          desc: '在线词典，包括了新华字典，汉语词典，成语大全，近义词，反义词。',
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
                              classify: "纪录片",
                              name: "《统计的乐趣》",
                              fullName: "统计的乐趣",
                              url: "https://www.bilibili.com/video/av1503473/",
                              desc: "跳出直觉，理性严谨地思考问题！"
                        },

                        {
                              classify: "英语学习",
                              name: "百词斩",
                              fullName: "百词斩",
                              url: "https://www.baicizhan.com/",
                              desc:
                                    "下载个百词斩手机app，更好更适合，随时随地都可以学习"
                        },
                        {
                              classify: "英语学习",
                              name: "英语流利说",
                              fullName: "英语流利说",
                              url: "https://www.liulishuo.com/",
                              desc:
                                    "可以练习口语，还会根据你的发音，进行打分。还是要下个手机app更方便。"
                        },
                        {
                              classify: "初高中",
                              name: "学科网",
                              fullName: "学科网",
                              url: "http://www.zxxk.com/",
                              desc:
                                    "涵括了初高中语数外，理化生，政史地等学科，还有文综理综，以及信息技术学科的课程内容。"
                        },
                        {
                              classify: "语文",
                              name: "语文学科网",
                              fullName: "语文学科网",
                              url: "http://yw.zxxk.com/",
                              desc: "专门打造初高中语文课程的网站"
                        },
                        {
                              classify: "数学",
                              name: "数学学科网",
                              fullName: "数学学科网",
                              url: "http://sx.zxxk.com/",
                              desc: "专门打造初高中数学课程的网站"
                        },
                        {
                              classify: "英语",
                              name: "英语学科网",
                              fullName: "英语学科网",
                              url: "http://yy.zxxk.com/",
                              desc: "专门打造初高中英语课程的网站"
                        },
                        {
                              classify: "物理",
                              name: "物理学科网",
                              fullName: "物理学科网",
                              url: "http://wl.zxxk.com",
                              desc: "专门打造初高中物理课程的网站"
                        },
                        {
                              classify: "化学",
                              name: "化学学科网",
                              fullName: "语文化学学科网",
                              url: "http://hx.zxxk.com/",
                              desc: "专门打造初高中化学课程的网站"
                        },
                        {
                              classify: "生物",
                              name: "生物学科网",
                              fullName: "生物学科网",
                              url: "http://sw.zxxk.com/",
                              desc: "专门打造初高中生物课程的网站"
                        },
                        {
                              classify: "政治",
                              name: "政治学科网",
                              fullName: "政治学科网",
                              url: "http://zz.zxxk.com/",
                              desc: "专门打造初高中政治课程的网站"
                        },
                        {
                              classify: "历史",
                              name: "历史学科网",
                              fullName: "历史学科网",
                              url: "http://ls.zxxk.com/",
                              desc: "专门打造初高中历史课程的网站"
                        },
                        {
                              classify: "地理",
                              name: "地理学科网",
                              fullName: "地理学科网",
                              url: "http://dl.zxxk.com/",
                              desc: "专门打造初高中地理课程的网站"
                        },
                        {
                              classify: "高三",
                              name: "高三网",
                              fullName: "高三网",
                              url: "http://www.gaosan.com/",
                              desc:
                                    "专门针对高三学生的网站，包括备考，各省市填志愿等内容"
                        },
                        {
                              classify: "高考",
                              name: "高考网",
                              fullName: "高考网",
                              url: "http://www.gaokao.com/",
                              desc:
                                    "有一定的针对性，包括高考，填志愿，院校介绍，专业选择，未来就业等信息"
                        },
                        {
                              classify: "高校",
                              name: "高考网址导航",
                              fullName: "高考网址导航",
                              url: "http://www.gaokao789.com/",
                              desc: "包括了各省市高校信息，有着海量的信息。"
                        },
                        {
                              classify: "古籍",
                              name: "书格",
                              fullName: "书格",
                              url: "https://shuge.org/",
                              desc: "提供古籍阅读的数字图书馆"
                        }
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
