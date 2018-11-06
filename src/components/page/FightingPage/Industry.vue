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
                              classify: "资讯",
                              name: "贤集网",
                              fullName: "贤集网",
                              url: "https://www.xianjichina.com/",
                              desc: "企业服务平台，实时工业科技新闻资讯"
                        },
                        {
                              classify: "论坛",
                              name: "工控论坛",
                              fullName: "工控论坛",
                              url: "http://bbs.gongkong.com/",
                              desc: "工控，专业自动化论坛"
                        },
                        {
                              classify: "资讯",
                              name: "科技世界网",
                              fullName: "科技世界网",
                              url: "http://www.twwtn.com/",
                              desc: "世界科技产业的门户网站"
                        },
                        {
                              classify: "资讯",
                              name: "维科网",
                              fullName: "维科网",
                              url: "https://www.ofweek.com/",
                              desc: "中国高科技行业门户网站"
                        },
                        {
                              classify: "CAD",
                              name: "迅捷CAD",
                              fullName: "迅捷CAD",
                              url: "http://www.xunjiecad.com/dailypic.html",
                              desc:
                                    "CAD建筑图纸，免费CAD施工图，CAD图库大全，CAD室内设计图块图库，房屋设计图，CAD机械设计图，各类CAD练习图等海量CAD图纸素材下载网站"
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
