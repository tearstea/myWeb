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
                              classify: "生态环境",
                              name: "中华人民共和国生态环境部",
                              fullName: "中华人民共和国生态环境部",
                              url: "http://www.mee.gov.cn/",
                              desc: "权威网站"
                        },
                        {
                              classify: "环保",
                              name: "环保网",
                              fullName: "环保网",
                              url: "http://hbw.chinaenvironment.com/",
                              desc: "..."
                        },
                        {
                              classify: "环评",
                              name: "中国环境影响评价网",
                              fullName: "中国环境影响评价网",
                              url: "http://www.china-eia.com/",
                              desc: "..."
                        },
                        {
                              classify: "水环境",
                              name: "中国水网",
                              fullName: "中国水网",
                              url: "http://www.h2o-china.com/",
                              desc: "..."
                        },
                        {
                              classify: "环境新闻",
                              name: "中国环境报",
                              fullName: "中国环境报",
                              url: "http://www.cenews.com.cn/",
                              desc: "..."
                        },
                        {
                              classify: "环保",
                              name: "中国环保科技网",
                              fullName: "中国环保科技网",
                              url: "http://www.25hb.com/",
                              desc: "..."
                        },
                        {
                              classify: "固废",
                              name: "中国固废网",
                              fullName: "中国固废网",
                              url: "http://www.solidwaste.com.cn/",
                              desc: "..."
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
