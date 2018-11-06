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
                              classify: "德语学习",
                              name: "German is easy!",
                              fullName: "German is easy!",
                              url: "https://yourdailygerman.com/",
                              desc: "学习德语的一个窗口或台阶"
                        },
                        {
                              classify: "英语学习",
                              name: "百词斩",
                              fullName: "百词斩",
                              url: "https://www.baicizhan.com/",
                              desc:
                                    "下载个百词斩手机app，更好更适合，随时随地都可以学习"
                        },
                        {
                              classify: "英语学习",
                              name: "英语流利说",
                              fullName: "英语流利说",
                              url: "https://www.liulishuo.com/",
                              desc:
                                    "可以练习口语，还会根据你的发音，进行打分。还是要下个手机app更方便。"
                        },
                        {
                              classify: "英语写作辅助工具",
                              name: " Linggle 10^12",
                              fullName: "Linggle 10^12",
                              url: "http://linggle.com/",
                              desc:
                                    "英语写作辅助利器，通过用法查询合适的单词和搭配，解决提笔忘词的现象"
                        },
                        {
                              classify: "英语",
                              name: "英语点津",
                              fullName: "英语点津",
                              url: "http://language.chinadaily.com.cn/",
                              desc:
                                    "英汉双译平台，不仅可以了解汉语，还可以学习英语"
                        },
                        {
                              classify: "演讲",
                              name: "TED",
                              fullName: "TED",
                              url: "https://www.ted.com/",
                              desc:
                                    "TED 是一个高质量的演讲节目，演讲的嘉宾都是各大领域杰出的人物。观看 TED 可以极大的丰富你的见识，还是一个锻炼你英语能力非常不错的机会。"
                        },
                        {
                              classify: "英语文学网站",
                              name: "英语文学",
                              fullName: "英语文学",
                              url: "https://www.litencyc.com/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "粤语视频",
                              name: "粤语学习",
                              fullName: "粤语学习",
                              url:
                                    "http://m.v.dxsbb.com/renwen/659/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了粤语基本的技巧。"
                        },
                        {
                              classify: "汉语测试",
                              name: "ZHC",
                              fullName: "ZHC",
                              url: "http://www.zhc.cn/",
                              desc: "国家职业汉语能力测试中心网站"
                        },
                        {
                              classify: "小语种",
                              name: "小语种口语网",
                              fullName: "小语种口语网",
                              url: "http://www.tukkk.com/",
                              desc:
                                    "包含了欧洲、亚洲、非洲等国家地区的小语种，可在线学习。"
                        },
                        {
                              classify: "韩语",
                              name: "韩语学习网",
                              fullName: "韩语学习网",
                              url: "http://kr.tingroom.com/rumen/",
                              desc: "韩语学习网站，资料还是比较齐全的。"
                        },
                        {
                              classify: "日语",
                              name: "日语学习网",
                              fullName: "日语学习网",
                              url: "http://jp.tingroom.com/",
                              desc: "日语学习网站"
                        },
                        {
                              classify: "越南语",
                              name: "越南学习网",
                              fullName: "越南学习网",
                              url: "http://vie.tingroom.com/",
                              desc: "越南语学习网站"
                        },
                        {
                              classify: "阿拉伯语",
                              name: "阿拉伯语学习网",
                              fullName: "阿拉伯语学习网",
                              url: "http://arab.tingroom.com/",
                              desc: "阿拉伯语学习网站"
                        }
                        // {
                        //       classify: "",
                        //       name: "",
                        //       fullName: "",
                        //       url: "",
                        //       desc: ""
                        // }
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
