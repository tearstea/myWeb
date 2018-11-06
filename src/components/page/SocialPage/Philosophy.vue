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
                              classify: "哲学范畴",
                              name: "哲学中国网",
                              fullName: "哲学中国网",
                              url: "http://www.philosophy.org.cn/",
                              desc: "介绍了各方面的哲学研究"
                        },
                        {
                              classify: "哲学范畴",
                              name: "爱思想",
                              fullName: "爱思想",
                              url: "http://www.aisixiang.com/",
                              desc: "不仅介绍了哲学方面的知识，还有其他学科知识"
                        },
                        {
                              classify: "哲学范畴",
                              name: "Philosophy",
                              fullName: "Philosophy",
                              url: "https://philosophy.stackexchange.com/",
                              desc: "国外的哲学网站，可以研究下国外的哲学历史"
                        },
                        {
                              classify: "哲学范畴",
                              name: "wiphy",
                              fullName: "wiphy",
                              url: "http://www.wi-phi.com/",
                              desc: "喜欢哲学的可以来这个网站逛逛"
                        },
                        {
                              classify: "哲学家的blog",
                              name: "Leiter Reports: A Philosophy Blog",
                              fullName: "Leiter Reports: A Philosophy Blog",
                              url: "http://leiterreports.typepad.com/",
                              desc: "哲学家们的博客，可以了解了解，深入浅出"
                        },
                        {
                              classify: "哲学范畴",
                              name: "思方網",
                              fullName: "思方網",
                              url: "https://philosophy.hku.hk/think/chi/",
                              desc:
                                    "香港大学哲学系劉彥方和别人合作的，推广批判性思维的网站。"
                        },
                        {
                              classify: "思辨",
                              name: "苏格拉底的辩论诊所",
                              fullName: "苏格拉底的辩论诊所",
                              url:
                                    "http://www.mindspring.com/~mfpatton/sketch.htm",
                              desc: "能否驳倒苏格拉底？验证你的哲学功底了"
                        },
                        //      {
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
