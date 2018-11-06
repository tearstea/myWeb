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
                              classify: "测试网站网址",
                              name: "软件测试网站",
                              fullName: "软件测试网站",
                              url:
                                    "http://www.cnblogs.com/scios/p/6138056.html",
                              desc:
                                    "收录了二三十个软件测试方面的网址，也有简单的介绍。可以找找自己适合的网站"
                        },
                        {
                              classify: "测试",
                              name: "软件测试网",
                              fullName: "软件测试网",
                              url: "http://www.51testing.com/",
                              desc: "对于学习软件测试方面知识的it同学可以看看"
                        },
                        {
                              classify: "测试",
                              name: "SoftTest",
                              fullName: "SoftTest",
                              url: "http://softtest.com/",
                              desc: "有测试方面各类信息技术"
                        },
                        {
                              classify: "Blog",
                              name: "单元测试",
                              fullName: "单元测试",
                              url:
                                    "https://blog.csdn.net/easytdd/article/category/674937",
                              desc:
                                    "CSDN是中国的专业IT技术社区，里面有着各方面的it技术方面的知识blog"
                        }
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

