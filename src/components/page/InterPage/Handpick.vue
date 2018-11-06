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
                              classify: "框架",
                              name: "vue.js",
                              fullName: "vue.js",
                              url: "https://cli.vuejs.org/",
                              desc:
                                    "Vue CLI 3版本，是我现在正在用的，用起来非常方便，pc端和移动端可以同时浏览，非常方便，框架学起来也很简单"
                        },
                        {
                              classify: "可视化文档",
                              name: "D3",
                              fullName: "Data-Driven Documents",
                              url: "https://d3js.org/",
                              desc:
                                    "“一张图片价值于一千个字”，D3.js是一个 JavaScript 的函数库，使用它主要是用来做数据可视化的。"
                        },
                        {
                              classify: "jQ插件库",
                              name: "JQuery插件",
                              fullName: "JQuery插件",
                              url: "http://www.jq22.com/",
                              desc:
                                    "收集jQuery插件和提供各种jQuery特效的详细使用方法,在线预览,jQuery插件下载及教程，用起来非常方便"
                        },

                        {
                              classify: "UI框架集合",
                              name: "UI 大全",
                              fullName: "UI 大全",
                              url: "https://wdd.js.org/all-best-ui-frame.html",
                              desc:
                                    "描述了当前各种各样的UI框架，并作了简单介绍，web前端小白，可以自行了解个大概再做选择。"
                        },
                        {
                              classify: "塔防游戏",
                              name: "Goole地图塔防",
                              fullName: "Goole地图塔防",
                              url: "http://www.mapstd.com/",
                              desc:
                                    "随手输入个地名，就可以进行塔防游戏，工作之余，时间少，可以休闲放松下"
                        },
                        {
                              classify: "js和css库推荐",
                              name: "JavaScript和CSS库推荐",
                              fullName: "JavaScript和CSS库推荐",
                              url:
                                    "https://www.jianshu.com/p/0614dfc5c83a?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends",
                              desc:
                                    "推荐了15个JavaScript和CSS库，可以了解下，然后再做筛选"
                        },
                        {
                              classify: "github项目推荐",
                              name: "前端github项目",
                              fullName: "前端github项目",
                              url:
                                    "https://www.jianshu.com/p/413dfff084d8?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends",
                              desc:
                                    "推荐了2018年3月前端star的github项目，也许某一个就对我们it工作者有用呢。"
                        },
                        {
                              classify: "icons",
                              name: "iconfont",
                              fullName: "iconfont",
                              url: "http://www.iconfont.cn/",
                              desc: "有着大量的icon图标"
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

