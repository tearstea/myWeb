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
                              classify: "茶",
                              name: "中国茶网",
                              fullName: "中国茶网",
                              url: "http://www.zgchawang.com/",
                              desc:
                                    "比较全面的介绍了关于茶方面的知识，可谓是茶百科。"
                        },
                        {
                              classify: "茶",
                              name: "中国茶叶网",
                              fullName: "中国茶叶网",
                              url: "http://www.e-chinatea.cn/",
                              desc:
                                    "全方位介绍了各省市的茶资讯，茶市场行情资讯。"
                        },
                        {
                              classify: "茶",
                              name: "说茶网",
                              fullName: "说茶网",
                              url: "http://ishuocha.com/",
                              desc:
                                    "介绍了关于茶的各方面知识，缺点是广告植入有点多。"
                        },
                        {
                              classify: "茶社区",
                              name: "茶语网社区",
                              fullName: "茶语网社区",
                              url: "https://quanzi.chayu.com/",
                              desc: "应该是茶语网的分支，聚集了一群茶爱好者"
                        },
                        {
                              classify: "茶",
                              name: "雅茗居",
                              fullName: "雅茗居",
                              url: "http://www.368tea.com/bbs/",
                              desc: "关于茶方面的资讯"
                        },
                        {
                              classify: "视频",
                              name: "茶界中国",
                              fullName: "茶界中国",
                              url: "https://v.qq.com/x/cover/bzjqo0lb2lny2c2/p0024szof15_0.html",
                              desc: "视频看起来，有点舌尖上的中国的风味，全面介绍了茶的起源历史烹制，以及中外茶方面的文化。"
                        },
                        {
                              classify: "视频",
                              name: "中国茶文化",
                              fullName: "中国茶文化",
                              url: "http://new-play.tudou.com/v/XMTk2OTM0MjUyOA==.html?f=34054747",
                              desc: "全面性讲述了茶的历史文化等"
                        },
                        // {
                        //       classify: "",
                        //       name: "",
                        //       fullName: "",
                        //       url: "",
                        //       desc: ""
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
