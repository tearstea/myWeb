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
                              classify: "后台管理模板",
                              name: "vue-admin",
                              fullName:
                                    "vue.js 和 element UI 搭建的一个后台管理界面",
                              url: "https://github.com/taylorchen709/vue-admin",
                              desc:
                                    "vue.js 和 element 搭建的一个后台管理界面，可以满足一般的后台界面，直接在github上下载源码套用就可"
                        },
                        {
                              classify: "Blog搭建",
                              name: "个人博客搭建",
                              fullName: "个人博客搭建",
                              url:
                                    "https://gittab.cn/2018/09/18/%E5%A6%82%E4%BD%95%E7%94%A8%E4%B8%80%E5%9D%97%E9%92%B1%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99-%E5%8D%9A%E5%AE%A2-2018/",
                              desc:
                                    "快速搭建个人博客，只要有一个域名即可，不需服务器，模板可以直接下载，在此基础上可以更改"
                        },
                        {
                              classify: "人与鸟，鸟与鸟的真情实感",
                              name: "被誉为21世纪最伟大的爱情",
                              fullName: "被誉为21世纪最伟大的爱情",
                              url: "http://www.gzhshoulu.wang/article/5064095",
                              desc: "有的时候，人还不如一只鸟。"
                        },
                        {
                              classify: "搜索",
                              name: "Bing",
                              fullName: "Bing",
                              url: "https://cn.bing.com/",
                              desc:
                                    "号称世界第二大搜索引擎，微软的良心之作，界面非常简洁，国内国际版可以任意切换,用起来非常清爽快捷。也可以下载手机app。"
                        },
                        {
                              classify: "文章",
                              name: "每日一文",
                              fullName: "每日一文",
                              url: "https://meiriyiwen.com/",
                              desc:
                                    "每天分享一篇文章，因为我用电脑多，所以一天看一篇文章足矣！为什么会喜欢，主要是界面让人看起来很舒服，没有杂七杂八的东西，最适合阅读了。"
                        },
                        {
                              classify: "Google插件",
                              name: "chrome 网上应用店",
                              fullName: "chrome 网上应用店",
                              url:
                                    "https://chrome.google.com/webstore/category/extensions",
                              desc:
                                    "专用于Google浏览器，在谷歌浏览器中输入上面的网址，进入商店直接搜索想要的插件，直接添加安装即可。以下做简单推荐：“Adblock Plus 、Ad terminator”去广告，安装之后，看视频看什么都没广告了，非常清爽；“Vue.js devtools”用于vue项目调试；“OneTab”一键保存和还原网页；“Search All”集合谷歌，必应，亚马逊，维基百科等搜索引擎于一个网页，速度自由切换；“Tampermonkey”免费的浏览器扩展和最为流行的用户脚本管理器，具体怎么用，可自行谷歌百度；“Keepa” 可追踪亚马逊历史价格；相信很多人都用不了谷歌，那么“谷歌访问助手”可以解决这个问题，有了他，被屏蔽的谷歌也可以用了，在百度可以找到安装方法及此插件。"
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
