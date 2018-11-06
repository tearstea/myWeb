<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="外文名：">
              <span>
                {{ props.row.oldname }}
              </span>
            </el-form-item>
            <el-form-item label="推荐词：">
              <span>
                {{ props.row.desc }}
              </span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index">
      </el-table-column>
      <el-table-column label="类型" prop="classify" sortable>
      </el-table-column>
      <el-table-column label="中文名" prop="name" sortable>
      </el-table-column>
      <el-table-column label="作者" prop="author" sortable>
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
                              classify: "算法",
                              name: "《机器学习》",
                              author: "周志华",
                              oldname: "Machine Learning",
                              desc:
                                    "未来的社会是智能的社会，布局好当下的学习，才能在未来游刃有余"
                        },
                        {
                              classify: "js",
                              name: "《Javascript 设计模式》",
                              author: "Rossharmes & DustinDiaz",
                              oldname: "Pro JavaScript Design Patterns",
                              desc:
                                    "本书 对JS的“模仿接口”，“封装”，“继承”，“链式调用”，“工厂模式”等各种具体的设计模式及其在JavaScript 语言中的应用进行了详细的介绍，运用设计模式使代码更模块化、更高效并且更易维护。"
                        },
                        {
                              classify: "js",
                              name: "《JavaScript DOM编程艺术》",
                              author: "Jeremy Keith",
                              oldname:
                                    "DOM Scripting: Web Design with JavaScript and the Document Object Model",
                              desc: "入门级js教程，js基础知识，简单易懂"
                        },
                        {
                              classify: "js",
                              name: "《JavaScript高级程序设计》",
                              author: "Nicholas C.Zakas",
                              oldname:
                                    "Professional JavaScript for Web Developers",
                              desc: "Javascript进阶教程"
                        },
                        {
                              classify: "CSS",
                              name: "《CSS禅意花园》",
                              author: "Dave Shea",
                              oldname: "the Zen of CSS design",
                              desc: "Web视觉艺术设计的王者之书!"
                        },
                          {
                          classify:'您好，程序yuan',
                          name: '望推荐',
                          author: 'H L',
                          oldname: '',
                          desc: '虽为同类，奈隔业如隔山，专业书籍太多，又不想误导人，还望您做最优推荐，可发我邮箱longtolink@163.com，谢谢！',
                        },
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

