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
                              classify: "天文台",
                              name: "中国科学院国家天文台",
                              fullName: "中国科学院国家天文台",
                              url: "http://www.bao.ac.cn/",
                              desc: "有着天文方面的各种各样的资讯"
                        },
                        {
                              classify: "天文资讯",
                              name: "IAU",
                              fullName: "国际天文联合会",
                              url: "https://www.iau.org/",
                              desc:
                                    "不仅有最新的天文信息，还可以找到过去发生的天文信息"
                        },
                        {
                              classify: "鱼类数据库",
                              name: "FishBase",
                              fullName: "FishBase",
                              url: "http://www.fishbase.org/",
                              desc:
                                    "为搜集鱼类数据而创立的全球物种数据库，是世界上最大也是访问最频繁的鱼类数据库。"
                        },
                        {
                              classify: "地理资讯",
                              name: "中国国家地理网",
                              fullName: "中国国家地理网",
                              url: "http://www.dili360.com/",
                              desc:
                                    "打造中国第一家以专业地理百科知识为基础,线上线下为一体的多元化的网站"
                        },
                        {
                              classify: "地理资讯",
                              name: "国家地理中文网",
                              fullName: "国家地理中文网",
                              url: "http://www.ngchina.com.cn/",
                              desc: "分享了各种各样的地理资讯"
                        },
                           {
                          classify: '学术',
                          name: '科塔学术',
                          fullName: '科塔学术',
                          url: 'https://www.sciping.com',
                          desc: '科学与学术资源导航平台，介绍了各种科研进展与学术资源',
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
