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
                              classify: "历史",
                              name: "历史春秋网",
                              fullName: "历史春秋网",
                              url: "http://www.lishichunqiu.com/",
                              desc:
                                    "不仅有正史，也有野史，包含了从古至今的中国历朝历代的历史知识"
                        },
                        {
                              classify: "历史",
                              name: "论历史",
                              fullName: "论历史",
                              url: "https://www.zglscom.com/",
                              desc: "介绍了中国历朝历代的历史学知识"
                        },
                        {
                              classify: "历史",
                              name: "趣历史",
                              fullName: "趣历史",
                              url: "http://www.qulishi.com/",
                              desc:
                                    "也许换一种语言风格，历史可能不再枯燥，毕竟历史由文人书写，而且很多时候都写的一本正经。"
                        },
                        {
                              classify: "各国历史导航",
                              name: "Best of History Websites",
                              fullName: "Best of History Websites",
                              url: "http://besthistorysites.net/",
                              desc: "分门别类，各国历史都有介绍"
                        },
                        {
                              classify: "历史数据库",
                              name: "WhatWasThere",
                              fullName: "WhatWasThere",
                              url: "http://www.whatwasthere.com/",
                              desc:
                                    "旅游族还是可以多看看，WhatWasThere是一个可视化的历史数据库，依靠互联网用户提交古老的照片，并建立一个基于图片地图的世界地理历史。"
                        },
                        {
                              classify: "志愿服务在线网站",
                              name: "激流网",
                              fullName: "激流网",
                              url: "http://jiliuwang.net/",
                              desc:
                                    "青年志愿者服务在线网站，可以了解到关于历史人物的事迹，也可以了解到思想、政经、社会、历史、文字等一些方面的内容"
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
