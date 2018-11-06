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
                              classify: "生物",
                              name: "生物帮",
                              fullName: "生物帮",
                              url: "http://www.bio1000.com/",
                              desc: "生物科学的门户网站"
                        },
                        {
                              classify: "文献搜索",
                              name: "生命科学",
                              fullName: "生命科学",
                              url: "http://www.lifescience.net.cn/",
                              desc: "可以查找到关于生命科学方面的期刊论文"
                        },
                        {
                              classify: "资讯",
                              name: "科学网",
                              fullName: "科学网",
                              url: "http://www.sciencenet.cn/life/",
                              desc:
                                    "可以了解下当前关于生命科学的信息还是不错的，有博客有论文，很清晰，一目了然。"
                        },
                        {
                              classify: "技术",
                              name: "Cell Research",
                              fullName: "Cell Research",
                              url: "https://www.nature.com/cr/",
                              desc:
                                    "是nature旗下的cell板块，可以查询cell方面的科研资料"
                        },
                        {
                              classify: "文献搜索",
                              name: "sciencedirect",
                              fullName: "sciencedirect",
                              url: "https://www.sciencedirect.com/journal/cell",
                              desc: "可以直接搜不同学科方面的期刊论文信息"
                        },
                        {
                              classify: "文献搜索",
                              name: "MDPI",
                              fullName: "MDPI",
                              url: "https://www.mdpi.com/",
                              desc: "..."
                        },
                        {
                              classify: "资讯",
                              name: "绿谷生物网",
                              fullName: "绿谷生物网",
                              url: "http://www.ibioo.com/index.html",
                              desc: "带来了很多生命科学方面的知识报道"
                        }
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
