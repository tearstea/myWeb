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
          <a :href="props.row.url" class="classB" rel="nofollow noopener noreferrer"  target="_blank">
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
                              classify: "早教",
                              name: "妈妈网",
                              fullName: "妈妈网",
                              url: "https://www.mama.cn/",
                              desc: "怀孕、育儿、早教的网站"
                        },
                        {
                              classify: "早教",
                              name: "摇篮网",
                              fullName: "摇篮网",
                              url: "http://www.yaolan.com/",
                              desc: "育儿与母婴网站"
                        },
                        {
                              classify: "早教",
                              name: "宝宝树",
                              fullName: "宝宝树",
                              url: "http://www.babytree.com/",
                              desc: "大型育儿社区"
                        },
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
                              classify: "英语",
                              name: "Kizclub",
                              fullName: "Kizclub",
                              url: "http://www.kizclub.com/",
                              desc: "宝贝最爱的英语启蒙网站,适合3-6岁的小孩"
                        },
                        {
                              classify: "英语",
                              name: "KidPointz",
                              fullName: "KidPointz",
                              url: "http://www.kidpointz.com/",
                              desc:
                                    "家长可以和孩子一起制定的新学期学习计划、家务计划、阅读计划、锻炼计划等。"
                        },
                        {
                              classify: "重名查询",
                              name: "重名查询",
                              fullName: "重名查询",
                              url:
                                    "http://wap1.henanga.gov.cn/query/samenamepage?type=0",
                              desc:
                                    "此网站为河南公安的网站，可以查询到出生登记，身份证办理进度,车辆违法记录等，当然还可查询到重名的数量，但只限于河南省，如果是其他省的，可以直接去自己省的官网查询。"
                        },
                        {
                              classify: "绘画",
                              name: "我爱画画",
                              fullName: "我爱画画",
                              url: "http://www.woaihuahua.com/",
                              desc: "可能对于初级学习者很有用"
                        },
                           {
                          classify: '单词教学',
                          name: 'ALPHABETIMALS',
                          fullName: 'ALPHABETIMALS',
                          url: 'http://alphabetimals.com/',
                          desc: '声形并茂的动物英语单词教学',
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
