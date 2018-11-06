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
                              classify: "教程",
                              name: "慕课网",
                              fullName: "慕课网",
                              url: "https://www.imooc.com/",
                              desc:
                                    "MOOC 是以连通主义理论和网络化学习的开放教育学为基础的。这些课程跟传统的大学课程一样循序渐进地让学生从初学者成长为高级人才。课程的范围不仅覆盖了广泛的科技学科，比如数学、统计、计算机科学、自然科学和工程学，也包括了社会科学和人文学科。慕课课程并不提供学分，也不算在本科或研究生学位里。绝大多数课程都是免费的。Coursera 的部分课程提供收费服务“Signature Track”，可以自由选择是否购买。"
                        },
                        {
                              classify: "教程",
                              name: "极客学院",
                              fullName: "极客学院",
                              url: "https://www.jikexueyuan.com/",
                              desc:
                                    "极客学院 [1]  是中国android开发在线学习平台，汇集了几十名国内顶尖的有多年项目和实战经验的Android开发授课大师，精心制作了上千个高质量视频教程，涵盖了Android开发学习的基础入门、中级进阶，高级提升、项目实战开发等专业的android开发课程。"
                        },
                        {
                              classify: "php",
                              name: "PHP",
                              fullName: "PHP",
                              url: "http://php.net/",
                              desc: "PHP官网"
                        },
                        {
                              classify: "php",
                              name: "PHP中文",
                              fullName: "PHP中文",
                              url: "http://www.php.cn/",
                              desc: "PHP中文网"
                        },
                        {
                              classify: "java",
                              name: "java",
                              fullName: "java",
                              url: "https://www.java.com/zh_CN/",
                              desc: "..."
                        },

                        {
                              classify: "java",
                              name: "Spring",
                              fullName: "Spring",
                              url: "https://spring.io/",
                              desc: "..."
                        },
                        {
                              classify: "php",
                              name: "thinkphp",
                              fullName: "thinkphp",
                              url: "http://www.thinkphp.cn/",
                              desc: "..."
                        },
                        {
                              classify: "SSL工具",
                              name: "在线工具",
                              fullName: "在线工具",
                              url: "http://www.ssleye.com/",
                              desc: "..."
                        },
                           {
                          classify: '视觉库',
                          name: 'OpenCV',
                          fullName: 'OpenCV',
                          url: 'https://opencv.org/',
                          desc: 'OpenCV（开源计算机视觉库）是在BSD许可下发布的，因此它可以免费用于学术和商业用途。它具有C ++，Python和Java接口，并支持Windows，Linux，Mac OS，iOS和Android。OpenCV专为提高计算效率而设计，专注于实时应用。该库以优化的C / C ++编写，可以利用多核处理。通过OpenCL启用，它可以利用底层异构计算平台的硬件加速。',
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
                  if (rowIndex % 2) {
                        return "warning-row";
                  } else if (rowIndex % 3) {
                        return "success-row";
                  }
                  return "";
            }
      }
};
</script>
