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
                              classify: "数据采集工具",
                              name: "火车采集器",
                              fullName: " 火车采集器",
                              url: "http://www.locoy.com/",
                              desc:
                                    "火车采集器可以实现数据的抓取、清洗、分析，挖掘及最终的可用数据呈现，堪称一条龙服务。"
                        },
                        {
                              classify: "数据采集工具",
                              name: "八爪鱼",
                              fullName: "八爪鱼",
                              url: "http://www.bazhuayu.com/",
                              desc:
                                    "一个号称什么网站都能采的工具。电商类、生活服务类、社交媒体类、论坛类，甚至瀑布流类的网站都可以采集。"
                        },
                        {
                              classify: "数据采集工具",
                              name: "集搜客",
                              fullName: "集搜客",
                              url: "https://www.gooseeker.com/",
                              desc:
                                    "完全可视化操作，无需编程基础，熟悉电脑操作就可以轻松掌握。整个采集过程也是所见即所得，遍历的链接信息、抓取结果信息、错误信息等都会及时地反映在软件界面中。"
                        },
                        {
                              classify: "抓取数据应用程序框架",
                              name: "Scrapy",
                              fullName: "Scrapy",
                              url: "https://doc.scrapy.org/en/latest/",
                              desc:
                                    "Scrapy是一种用于抓取网站和提取结构化数据的应用程序框架，可用于广泛的有用应用程序，如数据挖掘，信息处理或历史存档。"
                        },
                           {
                          classify: '中文教程',
                          name: '《Machine Learning Yearning》',
                          fullName: 'Machine Learning Yearning',
                          url: 'https://github.com/AcceptedDoge/machine-learning-yearning-cn/',
                          desc: '引用吴恩达老师，“AI，机器学习和深度学习正在逐渐改变越来越多的行业。我写这本书《Machine Learning Yearning》的目的就是教会大家如何构建自己的机器学习项目。 这本书的目的不是教你机器学习算法理论，而是教你如何使用这些算法。一些技术AI课程会给你锤子工具，而这本书就是让你学会如何使用这些锤子工具。如果你致力于成为AI技术领导者并渴望为你的团队找到正确的方向。”',
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
                  if (rowIndex % 2) {
                        return "warning-row";
                  } else if (rowIndex % 3) {
                        return "success-row";
                  }
                  return "";
            }
      }
};
</script>

