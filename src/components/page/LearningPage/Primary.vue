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
                              classify: "英语",
                              name: "Education",
                              fullName: "Education",
                              url: "https://www.education.com",
                              desc:
                                    "提供各种练习册、在线游戏、课内活动、教案、科学实验……按照年级、学科、课程内容分的很详细。"
                        },
                        {
                              classify: "英语",
                              name: "K5Learing",
                              fullName: "K5Learing",
                              url: "https://www.k5learning.com/",
                              desc:
                                    "对于学龄前的孩子，可以在这里找到字母、自然拼读等的合适材料；适合高年级的孩子们的基础单词、小故事、书写等项目的练习册也十分丰富。"
                        },
                        {
                              classify: "英语",
                              name: "homeschoolshare",
                              fullName: "homeschoolshare",
                              url: "https://www.homeschoolshare.com/",
                              desc:
                                    "家长可以下载很多配合阅读的练习册，有几百本，从2岁开始，一直用到中学都可以，还有很多孩子们最喜欢的经典绘本，"
                        },
                        {
                              classify: "纪录片",
                              name: "地平线系列：一根绳子有多长？",
                              fullName: "地平线系列：一根绳子有多长？",
                              url: "http://www.sohu.com/a/205293624_355124",
                              desc:
                                    "适合年龄：6~12岁。涵盖了多重领域的科普知识。父母可以多了解下，对自己的孩子普及下知识"
                        },
                        {
                              classify: "纪录片",
                              name: "《数学的故事》",
                              fullName: "数学的故事",
                              url: "http://www.iqiyi.com/w_19rstc4b5l.html",
                              desc:
                                    "适合年龄：6~18岁。数学的未来会走向哪里 ？父母可以多了解下，对自己的孩子普及下知识"
                        },
                        {
                              classify: "学科",
                              name: "小学学科网",
                              fullName: "小学学科网",
                              url: "http://www.xuekeedu.com/",
                              desc: "包括了各年级各学科的课程"
                        },
                        {
                              classify: "绘画",
                              name: "我爱画画",
                              fullName: "我爱画画",
                              url: "http://www.woaihuahua.com/",
                              desc: "可能对于初级学习者很有用"
                        },
                              {
                              classify: "楷书视频",
                              name: "硬笔书法楷书",
                              fullName: "硬笔书法楷书",
                              url:
                                    "http://m.v.dxsbb.com/renwen/931/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了楷书基本的技巧。"
                        },
                             {
                              classify: "素描视频",
                              name: "素描入门",
                              fullName: "素描入门",
                              url:
                                    "http://m.v.dxsbb.com/renwen/1114/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了素描基本的技巧。"
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
