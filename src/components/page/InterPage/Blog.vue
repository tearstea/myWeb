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
                              classify: "博客",
                              name: "廖雪峰",
                              fullName: "廖雪峰官方网站",
                              url: "https://www.liaoxuefeng.com/",
                              desc:
                                    "对JAVA ,js，Python进行了比较全面的研究，不断更新了读书笔记，可了解到最新知识"
                        },
                        {
                              classify: "博客",
                              name: "阮一峰",
                              fullName: "阮一峰个人网站",
                              url: "http://www.ruanyifeng.com/blog/",
                              desc:
                                    "作者的知识面比较宽广，对各种事物都有深刻探寻的好奇心，和善于考据的思维方式，以及对于美好事物及感情的向往。难能可贵的是，每周不间断带来世界范围我们所不知道的新闻"
                        },
                        {
                              classify: "博客",
                              name: "邱柏荧",
                              fullName: "柏荧的博客",
                              url: "http://qiubaiying.top/",
                              desc:
                                    "认识他，还是因为他给了我博客模板，所以要心存感恩之心，不过他的博客确实也写得很好"
                        },
                        {
                              classify: "博客",
                              name: "张鑫旭",
                              fullName: "张鑫旭个人博客",
                              url: "https://www.zhangxinxu.com/",
                              desc:
                                    "介绍了个人生活，还有关于前端技术方面的知识，还有一些生活与创作"
                        },
                        {
                              classify: "博客",
                              name: "马东东",
                              fullName: "马东东个人博客",
                              url: "http://www.madongdong.me/",
                              desc: "比较全面的关于it方面的技术性博客"
                        },
                        {
                              classify: "博客",
                              name: "iOS-大杂烩",
                              fullName: "iOS-大杂烩",
                              url: "https://www.jianshu.com/c/563ba4d42d38",
                              desc: "收录了大量关于ios技术方面的技术博客"
                        },
                        {
                              classify: "博客",
                              name: "七牛云",
                              fullName: "七牛云",
                              url: "http://blog.qiniu.com/",
                              desc: "七牛技术团队博客"
                        },
                        {
                              classify: "博客",
                              name: "iOS-音频/图文/动画",
                              fullName: "iOS-音视频/图文/动画",
                              url: "https://www.jianshu.com/c/4dd5a67bbe1d",
                              desc: "收录了大量关于ios音视频图文动画的技术博客"
                        },
                        {
                              classify: "博客",
                              name: "iOS-线程/底层/Runtime",
                              fullName: "iOS-线程/底层/Runtime",
                              url: "https://www.jianshu.com/c/6a28d1d173b5",
                              desc: "收录了关于ios技术方面的博客"
                        },
                        {
                              classify: "博客",
                              name: "老罗的Android之旅",
                              fullName: "老罗的Android之旅",
                              url: "https://blog.csdn.net",
                              desc: "主要关于Android技术的博客"
                        },
                        {
                              classify: "博客",
                              name: "小源",
                              fullName: "小源",
                              url: "https://blog.csdn.net",
                              desc: "主要关于Python和Android技术的博客"
                        },
                        {
                              classify: "开源项目",
                              name: "Facebook",
                              fullName: "Facebook",
                              url: "https://github.com/facebook",
                              desc: "facebook在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "Alibaba",
                              fullName: "Alibaba",
                              url: "https://github.com/alibaba",
                              desc: "Alibaba在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "Twitter",
                              fullName: "Twitter",
                              url: "https://github.com/twitter",
                              desc: "Twitter在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "豆瓣",
                              fullName: "豆瓣",
                              url: "https://github.com/douban",
                              desc: "豆瓣在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "百度",
                              fullName: "百度",
                              url: "https://github.com/baidu",
                              desc: "百度在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "腾讯",
                              fullName: "腾讯",
                              url: "https://github.com/tencent",
                              desc: "腾讯在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "饿了么",
                              fullName: "饿了么",
                              url: "https://github.com/eleme",
                              desc: "饿了么在github上的开源项目"
                        },
                        {
                              classify: "开源项目",
                              name: "Google",
                              fullName: "Google",
                              url: "https://github.com/google",
                              desc: "Google在github上的开源项目"
                        },
                             {
                          classify: '新华字典数据库',
                          name: 'chinese-xinhua',
                          fullName: 'chinese-xinhua',
                          url: 'https://github.com/pwxcoo/chinese-xinhua',
                          desc: ' 中华新华字典数据库，包括歇后语，成语，词语，汉字。提供新华字典API。',
                        },
                        //      {
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
