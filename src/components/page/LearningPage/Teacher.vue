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
                              classify: "教学网站",
                              name: "中教网",
                              fullName: "中教网",
                              url: "http://www.teachercn.com/",
                              desc:
                                    "中教网是中国最具影响力的教育门户网站之一，囊括了中小学大部分科目，并含有较全的教案、视频、讲课技巧等资料。在网站的左侧，还有关于写作文的专栏，包括写作技巧、写作材料等。"
                        },
                        {
                              classify: "教学网站",
                              name: "12999数学网",
                              fullName: "12999数学网",
                              url: "http://www.12999.com/",
                              desc: "数学老师的福音"
                        },
                        {
                              classify: "教学网站",
                              name: "12999物理网",
                              fullName: "12999物理网",
                              url: "http://wl.12999.com/",
                              desc: "物理老师的福音"
                        },
                        {
                              classify: "教学网站",
                              name: "12999英语网",
                              fullName: "12999英语网",
                              url: "http://en.12999.com/",
                              desc: "英语老师的福音"
                        },
                        {
                              classify: "教学网站",
                              name: "老百晓在线",
                              fullName: "老百晓在线",
                              url: "http://www.lbx777.com/",
                              desc:
                                    "老百晓在线是一个致力于帮助小学语文老师而设立的网站。"
                        },
                        {
                              classify: "教学网站",
                              name: "中学学科网",
                              fullName: "中学学科网",
                              url: "http://www.zxxk.com/",
                              desc: "中学学科网包含了初中及高中所有学科。"
                        },
                        {
                              classify: "教学网站",
                              name: "英语教师网",
                              fullName: "英语教师网",
                              url: "http://www.ewteacher.com/",
                              desc:
                                    "英语教师网是专门为英语教师提供服务的一个网站。网站中主要包括了英语课件、教案、真题。如果想看名师视频的话，还可以搜索“中学英语网”，里面的资料会更全一些，还有包括语法的讲解。"
                        },
                        {
                              classify: "教学网站",
                              name: "人民教育出版社",
                              fullName: "人民教育出版社",
                              url: "http://www.pep.com.cn/",
                              desc:
                                    "人民教育出版社里面的内容更加权威、高深，更加适合做教学研究的老师学习。网站中的学科门类十分全面，还有教案、讲课等相关资源。"
                        },
                        {
                              classify: "诗词网站",
                              name: "中国诗歌网",
                              fullName: "中国诗歌网",
                              url: "http://www.zgshige.com/",
                              desc:
                                    "中国诗歌网是专业的诗歌朗诵网站。在网站中，我们可以找到大部分诗歌的朗诵原文及音频，对于语文老师来说，是一个巨大的宝藏。"
                        },
                        {
                              classify: "绘图",
                              name: "几何画板",
                              fullName: "几何画板",
                              url: "http://www.jihehuaban.com.cn/",
                              desc:
                                    "几何画板是一个通用的数学、物理教学环境，专业的功能使用户可以自定义需要的教学课件。"
                        },
                        {
                              classify: "教学工具",
                              name: "Focusky",
                              fullName: "Focusky",
                              url: "http://www.focusky.com.cn/",
                              desc:
                                    "Focusky是一款免费、高效的动画PPT演示制作软件，操作简单，人人都会用，通过3D无限缩放/旋转/移动 的切换方式，使演示生动有趣，并且效果专业。"
                        },
                        {
                              classify: "录屏软件",
                              name: "Fraps",
                              fullName: "Fraps",
                              url: "http://www.fraps.com/",
                              desc:
                                    "录制的视频是无损压缩的avi格式，质量高，但文件体积也大录制的视频是无损压缩的avi格式，质量高，但文件体积也大"
                        },
                        {
                              classify: "录屏软件",
                              name: "万彩录屏大师：",
                              fullName: "万彩录屏大师：",
                              url: "http://www.wcapture.cn/",
                              desc: "既可录屏也有后期编辑功能，录制不限时长"
                        },
                        {
                              classify: "教师网",
                              name: "全国中小学教师继续教育网",
                              fullName: "全国中小学教师继续教育网",
                              url: "http://www.teacher.com.cn/",
                              desc: "专门为中小学老师提供了继续教育的平台资讯"
                        },
                        {
                              classify: "古籍",
                              name: "书格",
                              fullName: "书格",
                              url: "https://shuge.org/",
                              desc: "提供古籍阅读的数字图书馆"
                        },
                        {
                              classify: "曲线图",
                              name: "Sigmaplot",
                              fullName: "Sigmaplot",
                              url:
                                    "http://www.sigmaplot.co.uk/products/sigmaplot/sigmaplot-details.php",
                              desc: "可以制作非常专业的曲线图"
                        },
                        {
                              classify: "思维导图",
                              name: "幕布",
                              fullName: "幕布",
                              url: "https://mubu.com/",
                              desc:
                                    "一个方便易用、免费高效的在线作图工具，可以方便的制作思维导图、流程图、UML图、界面原型设计、组织结构图。上手方便，操作简单，也具有在线协作功能。"
                        },
                        {
                              classify: "字典",
                              name: "快学网",
                              fullName: "快学网",
                              url: "http://www.kxue.com/",
                              desc:
                                    "在线词典，包括了新华字典，汉语词典，成语大全，近义词，反义词。"
                        },
                        {
                              classify: "绘图",
                              name: "Edrawsoft",
                              fullName: "Edrawsoft",
                              url: "https://www.edrawsoft.com/",
                              desc:
                                    "可以做出商务图、数据库图、网络图等的跨平台绘图软件"
                        },
                        {
                              classify: "绘制3D图",
                              name: "TableCurve 3D",
                              fullName: "TableCurve 3D",
                              url:
                                    "https://systatsoftware.com/downloads/download-tablecurve-3d/",
                              desc: "专业的绘制3D图软件"
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
