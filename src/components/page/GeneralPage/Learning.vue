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
                              classify: "学习平台",
                              name: "学堂在线",
                              fullName: "学堂在线",
                              url: "http://www.xuetangx.com/",
                              desc:
                                    "免费提供可兑换证书的精品公开课！聚集了清华、北大、麻省理工、斯坦福、加州伯克利等名校课程，课程覆盖18个专业领域"
                        },
                        {
                              classify: "学习平台",
                              name: "慕课网",
                              fullName: "MOOC网",
                              url: "https://www.imooc.com/",
                              desc:
                                    "慕课网(IMOOC)是IT技能学习平台。慕课网(IMOOC)提供了丰富的移动端开发、php开发、web前端、android开发以及html5等视频教程资源公开课。"
                        },
                        {
                              classify: "学习平台",
                              name: "中国大学MOOC",
                              fullName: "中国大学MOOC",
                              url: "https://www.icourse163.org/",
                              desc:
                                    "中国大学MOOC(慕课) 是国内优质的中文MOOC学习平台,由爱课程网携手网易云课堂打造。平台拥有包括985高校在内提供的千余门课程,其中首批获得认定的国家精品在线开放"
                        },
                        {
                              classify: "学习平台",
                              name: "网易公开课",
                              fullName: "网易公开课 ",
                              url: "https://open.163.com/",
                              desc:
                                    "可以在线免费观看来自哈佛大学等世界名校的公开课程，内容涵盖人文、社会、艺术、科学、金融等领域"
                        },
                        {
                              classify: "学习平台",
                              name: "网易云课堂",
                              fullName: " 网易云课堂",
                              url: "https://study.163.com/",
                              desc: "专注于职业培训的在线学习平台"
                        },
                        {
                              classify: "学习平台",
                              name: "百度传课",
                              fullName: "百度传课 ",
                              url: "https://chuanke.baidu.com/",
                              desc:
                                    "引入全国知名重点学校的一线教师，采取网络互动直播和点播的授课方式"
                        },
                        {
                              classify: "学习平台",
                              name: "腾讯课堂",
                              fullName: " 腾讯课堂",
                              url: "https://ke.qq.com/",
                              desc: "利用QQ进行音频视频直播教学"
                        },
                        {
                              classify: "学习平台",
                              name: "淘宝教育",
                              fullName: "淘宝教育 ",
                              url: "https://xue.taobao.com/",
                              desc:
                                    "提供电子商务精品培训，也包括考研、公务员、英语、小语种、雅思托福等培训"
                        },
                        {
                              classify: "学习平台",
                              name: "沪江网校",
                              fullName: " 沪江网校",
                              url: "https://class.hujiang.com/",
                              desc: "涵盖中小幼、语言、留学职场、兴趣等丰富内容"
                        },
                        {
                              classify: "学习平台",
                              name: "大学生自学网",
                              fullName: " 大学生自学网",
                              url: "http://v.dxsbb.com/",
                              desc:
                                    "专门针对于大学生的各项培训，还有很多免费的学习内容"
                        },
                        {
                              classify: "学习平台",
                              name: "优米网",
                              fullName: "优米网 ",
                              url: "http://www.youmi.cn/",
                              desc:
                                    "专门为大学生、创业人士、职场人士提供的在线教学视频"
                        },
                        {
                              classify: "学习平台",
                              name: "edX",
                              fullName: "edX",
                              url: "https://www.edx.org/",
                              desc:
                                    "由麻省理工学院和哈佛大学联合创办的大规模开放在线课堂平台，免费给大众提供大学教育水平的在线课堂，非营利运营。"
                        },
                        {
                              classify: "学习平台",
                              name: "Coursera",
                              fullName: " Coursera",
                              url: "https://www.coursera.org/",
                              desc:
                                    "很多课程提供中文字幕，在过内多个平台可以观看Coursera的课程。"
                        },
                        {
                              classify: "学习平台",
                              name: "超新星学术视频",
                              fullName: "超新星学术视频 ",
                              url: "http://www.xuexi365.com/",
                              desc:
                                    "超新星学术视频拥有大量的视频课程录像，主要跟高校合作，接入高校的图书馆网站，在线就可以免费学习"
                        },
                        {
                              classify: "学习平台",
                              name: "人人自学网",
                              fullName: "人人自学网",
                              url: "http://www.rrzxw.net/",
                              desc:
                                    "比较全面的自学教程网站，可在线观看免费视频教程，如3dmax，cad，Excel，flash等视频教程"
                        },
                        {
                              classify: "学习平台",
                              name: "美好学院",
                              fullName: "美好学院",
                              url: "https://meia.me/team/25",
                              desc: "提供互联网学习内容，是个不错的语言学习网站"
                        },
                        {
                              classify: "学习平台",
                              name: "插座学院",
                              fullName: "插座学院",
                              url: "http://www.chazuomba.com/",
                              desc: "提供新媒体运营相关知识"
                        },
                        {
                              classify: "学习平台",
                              name: "多贝",
                              fullName: "多贝",
                              url: "http://www.duobei.com/",
                              desc: "提供职场培训"
                        },
                        {
                              classify: "学习平台",
                              name: "茶树网",
                              fullName: "茶树网学院 ",
                              url: "http://www.teatreexy.com/",
                              desc:
                                    "主要提供平面设计、网页设计、特效剪辑、淘宝设计、工业设计、摄影设计、环境设计"
                        },
                        {
                              classify: "各国名人名言",
                              name: "Wikiquote",
                              fullName: "Wikiquote",
                              url: "https://en.wikiquote.org/wiki/Main_Page",
                              desc: "名人名言聚集地"
                        },
                        {
                              classify: "德语学习",
                              name: "German is easy!",
                              fullName: "German is easy!",
                              url: "https://yourdailygerman.com/",
                              desc: "学习德语的一个窗口或台阶"
                        }
                        //     {
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
