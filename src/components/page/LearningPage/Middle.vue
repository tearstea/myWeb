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
                              classify: "课堂",
                              name: "《李永乐老师趣味课堂》",
                              fullName: "李永乐趣味课堂",
                              url: "https://www.iqiyi.com/w_19ru1tg1gd.html",
                              desc:
                                    "科普短视频，趣味性十足，还可以增加知识，很有意思"
                        },
                        {
                              classify: "纪录片",
                              name: "《概率知多少》",
                              fullName: "概率知多少 ",
                              url: "https://www.iqiyi.com/w_19rr77hsrp.html",
                              desc: "形象有趣，幽默中又可以学到知识"
                        },
                        {
                              classify: "纪录片",
                              name: "《危险的知识》",
                              fullName: "危险的知识",
                              url: "https://www.bilibili.com/video/av17081617/",
                              desc:
                                    "这不仅是一部关于数理科学的片子，更是一部关于信仰的片子，孩子除了可以看到四位天才对数学的探究过程，还能看到他们的疯狂与执着。"
                        },
                        {
                              classify: "初高中",
                              name: "学科网",
                              fullName: "学科网",
                              url: "http://www.zxxk.com/",
                              desc:
                                    "涵括了初高中语数外，理化生，政史地等学科，还有文综理综，以及信息技术学科的课程内容。"
                        },
                        {
                              classify: "语文",
                              name: "语文学科网",
                              fullName: "语文学科网",
                              url: "http://yw.zxxk.com/m/",
                              desc: "专门打造初高中语文课程的网站"
                        },
                        {
                              classify: "数学",
                              name: "数学学科网",
                              fullName: "数学学科网",
                              url: "http://sx.zxxk.com/m/",
                              desc: "专门打造初高中数学课程的网站"
                        },
                        {
                              classify: "英语",
                              name: "英语学科网",
                              fullName: "英语学科网",
                              url: "http://yy.zxxk.com/m/",
                              desc: "专门打造初高中英语课程的网站"
                        },
                        {
                              classify: "物理",
                              name: "物理学科网",
                              fullName: "物理学科网",
                              url: "http://wl.zxxk.com/m/",
                              desc: "专门打造初高中物理课程的网站"
                        },
                        {
                              classify: "化学",
                              name: "化学学科网",
                              fullName: "语文化学学科网",
                              url: "http://hx.zxxk.com/m/",
                              desc: "专门打造初高中化学课程的网站"
                        },
                        {
                              classify: "生物",
                              name: "生物学科网",
                              fullName: "生物学科网",
                              url: "http://sw.zxxk.com/m/",
                              desc: "专门打造初高中生物课程的网站"
                        },
                        {
                              classify: "政治",
                              name: "政治学科网",
                              fullName: "政治学科网",
                              url: "http://zz.zxxk.com/m/",
                              desc: "专门打造初高中政治课程的网站"
                        },
                        {
                              classify: "历史",
                              name: "历史学科网",
                              fullName: "历史学科网",
                              url: "http://ls.zxxk.com/m/",
                              desc: "专门打造初高中历史课程的网站"
                        },
                        {
                              classify: "地理",
                              name: "地理学科网",
                              fullName: "地理学科网",
                              url: "http://dl.zxxk.com/m/",
                              desc: "专门打造初高中地理课程的网站"
                        },
                        {
                              classify: "信息技术",
                              name: "信息技术学科网",
                              fullName: "信息技术学科网",
                              url: "http://xx.zxxk.com/",
                              desc: "专门打造初高中信息技术课程的网站"
                        },
                        {
                              classify: "答案",
                              name: "答案网",
                              fullName: "答案网",
                              url: "https://www.zqnf.com/",
                              desc:
                                    "对于不知答案的同学家长，可以在这里找到各学科各问题的答案。只需要输入问题就可以了"
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
