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
                              classify: "新闻网站",
                              name: "人民网",
                              fullName: "人民网",
                              url: "http://www.people.com.cn/",
                              desc: "网上的人民日报"
                        },
                        {
                              classify: "新闻网站",
                              name: "新华网",
                              fullName: "新华网",
                              url: "http://www.xinhuanet.com/",
                              desc: "让新闻离你更近"
                        },
                        {
                              classify: "新闻网站",
                              name: "青年网",
                              fullName: "青年网",
                              url: "http://www.youth.cn/",
                              desc: "有着青年气息的网站"
                        },
                        {
                              classify: "新闻网站",
                              name: "凤凰网",
                              fullName: "凤凰网",
                              url: "https://www.ifeng.com/",
                              desc: "..."
                        },
                        {
                              classify: "体育网站",
                              name: "新浪体育",
                              fullName: "新浪体育",
                              url: "http://sports.sina.com.cn/",
                              desc: "..."
                        },
                        {
                              classify: "科技网站",
                              name: "ITbear科技资讯",
                              fullName: "ITbear科技资讯",
                              url: "http://www.itbear.com.cn/",
                              desc: "中文it行业资讯网站"
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
