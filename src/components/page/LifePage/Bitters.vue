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
          <a :href="props.row.url" class="classB" rel=" external nofollow" target="_blank">
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
                              classify: "酒资讯",
                              name: "酒业频道",
                              fullName: "酒业频道",
                              url: "https://jiu.ifeng.com/",
                              desc: "比较全的酒业资讯"
                        },
                        {
                              classify: "红酒视频",
                              name: "红酒世界",
                              fullName: "红酒世界",
                              url: "http://www.wine-world.com/live",
                              desc: "有关于世界各国各品牌的视频介绍，可以多了解，也不错，虽然有一些广告啥的"
                        },
                           {
                          classify: '品酒视频',
                          name: '小黑品酒',
                          fullName: '小黑品酒',
                          url: 'http://v.youku.com/v_show/id_XMTY0OTc5NzE4OA==.html?spm=a2hzp.8244740.0.0',
                          desc: '独自一人，品各种各样的酒，然后做了一系列的视频解说，还是能够增长酒文化的知识的',
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
