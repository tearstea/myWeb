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
                              classify: "政务",
                              name: "国家税务总局",
                              fullName: "国家税务总局",
                              url: "http://www.chinatax.gov.cn/",
                              desc: "..."
                        },
                        {
                              classify: "政务",
                              name: "国家税务总局12366纳税服务平台",
                              fullName: "国家税务总局12366纳税服务平台",
                              url: "http://12366.chinatax.gov.cn/",
                              desc: "..."
                        },
                        {
                              classify: "政务",
                              name: "全国企业一般纳税人查询",
                              fullName: "全国企业一般纳税人查询",
                              url: "http://www.yibannashuiren.com/",
                              desc: "..."
                        },
                        {
                              classify: "政务",
                              name: "中国裁判文书网",
                              fullName: "中国裁判文书网",
                              url: "http://wenshu.court.gov.cn/",
                              desc: "..."
                        },
                        {
                              classify: "证券资讯",
                              name: "巨潮资讯网",
                              fullName: "巨潮资讯网",
                              url: "http://www.cninfo.com.cn/cninfo-new/index",
                              desc: "..."
                        },
                        {
                              classify: "股权转让",
                              name: "全国中小企业股份转让系统（新三板）公告区",
                              fullName:
                                    "全国中小企业股份转让系统（新三板）公告区",
                              url:
                                    "http://www.neeq.com.cn/disclosure/announcement.html",
                              desc: "..."
                        },
                        {
                              classify: "企业信息",
                              name: "国家企业信用信息公示系统",
                              fullName: "国家企业信用信息公示系统",
                              url: "http://www.gsxt.gov.cn/",
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
