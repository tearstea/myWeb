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
                              classify: "美食",
                              name: "美食杰",
                              fullName: "美食杰",
                              url: "http://meishij.net/",
                              desc: "分享菜谱，传授如何烹饪美食"
                        },
                        {
                              classify: "美食",
                              name: "美食天下",
                              fullName: "美食天下",
                              url: "https://www.meishichina.com/",
                              desc: "原创菜谱与美食生活社区"
                        },
                        {
                              classify: "美食",
                              name: "好豆网",
                              fullName: "好豆网",
                              url: "http://www.haodou.com/",
                              desc: "传授了每种菜的做法，食材，以及步骤，很详细"
                        },
                                 {
                              classify: "视频",
                              name: "饭菜网",
                              fullName: "饭菜网",
                              url: "https://www.fancai.com/shipin/",
                              desc: "有各种各样的烹饪视频，可以照着做菜。"
                        },
                           {
                          classify: '视频',
                          name: '舌尖上的中国',
                          fullName: '舌尖上的中国',
                          url: 'http://tv.cctv.com/2018/02/15/VIDE4x73eueOfNOCFlISpwnq180215.shtml',
                          desc: '讲述了人与美食、人与自然背后的温情故事。',
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
