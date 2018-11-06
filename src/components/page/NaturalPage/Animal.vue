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
                              classify: "搜索",
                              name: "动物世界",
                              fullName: "动物世界",
                              url: "http://www.iltaw.com/",
                              desc:
                                    "输入你想知道的动物名，就能得到关于其介绍与全面性介绍，动物爱好者的福音。"
                        },
                        {
                              classify: "平台",
                              name: "中国小动物保护协会",
                              fullName: "中国小动物保护协会",
                              url: "http://www.csapa.org/index.jhtml",
                              desc: "公益性的小动物保护组织平台"
                        },
                        {
                              classify: "鸟类",
                              name: "鸟类我",
                              fullName: "鸟类网",
                              url: "http://niaolei.org.cn/",
                              desc: "搜集了大量关于鸟类的资料"
                        },
                        {
                              classify: "信息",
                              name: "中国实验动物信息网",
                              fullName: "中国实验动物信息网",
                              url: "https://www.lascn.net/",
                              desc: "......"
                        },
                        {
                              classify: "公益组织",
                              name: "AnimalsAsia",
                              fullName: "AnimalsAsia",
                              url: "https://www.animalsasia.org/",
                              desc: "亚洲动物基金"
                        },
                        {
                              classify: "博客网站",
                              name: "宠物天空",
                              fullName: "宠物天空",
                              url: "http://petssky.com/",
                              desc: "宠物爱好者的博客网站"
                        },
                        {
                              classify: "动物声音",
                              name: "The Parselmouth",
                              fullName: "The Parselmouth",
                              url: "http://www.theparselmouth.com/",
                              desc:
                                    "动物叫声博物馆，搜索你想知道的动物，就可以听到的它的声音，并且可以把声音下载下来。"
                        },
                        {
                              classify: "24小时熊猫直播",
                              name: "SAN DIEGO ZOO",
                              fullName: "SAN DIEGO ZOO",
                              url: "https://zoo.sandiegozoo.org/",
                              desc:
                                    "美国圣地亚哥动物园24小时熊猫直播，还可以看到其他动物现在直播。"
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
