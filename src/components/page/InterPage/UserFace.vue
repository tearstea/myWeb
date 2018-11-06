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
                              name: "学UI网",
                              fullName: " 学UI网",
                              url: "http://www.xueui.cn/",
                              desc:
                                    "收纳了各种各种的ui设计，对于初学者，是一个很好的平台，还有很多关于ui设计方面的理念"
                        },
                        {
                              classify: "教程",
                              name: "虎课网",
                              fullName: "虎课网",
                              url: "https://huke88.com/",
                              desc: "原创在线学习网站，ps教程，AI教程"
                        },
                        {
                              classify: "教程",
                              name: "UI设计者",
                              fullName: " UI设计者",
                              url: "http://www.shui-mai.com/",
                              desc:
                                    "免费自学ui设计，各种各样的配色方案，网站内容简洁而丰富"
                        },
                        {
                              classify: "PS",
                              name: "PS联盟",
                              fullName: "PS联盟",
                              url: "https://www.68ps.com/",
                              desc: "详尽的ps技术指导，丰富的素材与课程"
                        },
                        {
                              classify: "PS",
                              name: "PS家园",
                              fullName: "PS家园网",
                              url: "http://www.psjia.com/photoshop/",
                              desc:
                                    "丰富的图片制作，集PS教程、PS笔刷、滤镜下载、PS素材下载、PS交流于一体。为您提供一站式的ps学习体验。"
                        },
                        {
                              classify: "教程",
                              name: "视达网",
                              fullName: " 视达网",
                              url: "http://shida66.com/",
                              desc: "设计师培训视频教程"
                        },
                        {
                              classify: "教程",
                              name: "勤学网",
                              fullName: "勤学网",
                              url: "http://www.qinxue.com/",
                              desc: "职业技能高效率在线自学平面设计网站"
                        },
                        {
                              classify: "素材",
                              name: "千图网",
                              fullName: "千图网 ",
                              url: "http://www.58pic.com/",
                              desc:
                                    "千图网是中国素材最多的网站之一，拥有800多万张素材。 提供：矢量图、psd源文件、图片素材、网页素材、3D模型素材、手机APP素材、ppt、画册、图标热门主流素材下载服务，千图网以其独特的定位和全新运营模式，处于素材网站领先地位"
                        },
                        {
                              classify: "设计工具",
                              name: "PxCook",
                              fullName: "PxCook ",
                              url: "http://www.fancynode.com.cn/pxcook",
                              desc:
                                    "PxCook是一款设计工具，优点在于将标注、切图这两项设计完稿后集成在一个软件内完成，支持Windows和Mac双平台。"
                        },
                        {
                              classify: "切图工具",
                              name: "Cutterman",
                              fullName: "Cutterman",
                              url: "http://www.cutterman.cn/zh/",
                              desc:
                                    "Cutterman：是一款运行在photoshop中的插件，能够自动将你需要的图层进行输出，以替代传统的手工 “导出web所用格式” 以及使用切片工具进行挨个切图的繁琐流程。它支持各种各样的图片尺寸、格式、形态输出，方便你在pc、ios、Android等端上使用。它不需要你记住一堆的语法、规则，纯点击操作，方便、快捷，易于上手。"
                        },
                        {
                              classify: "设计工具",
                              name: "AI",
                              fullName: "Adobe Illustrator",
                              url: "https://www.adobe.com/cn/",
                              desc:
                                    "是一种应用于出版、多媒体和在线图像的工业标准矢量插画的软件。作为一款非常好的矢量图形处理工具，该软件主要应用于印刷出版、海报书籍排版、专业插画、多媒体图像处理和互联网页面的制作等，也可以为线稿提供较高的精度和控制，适合生产任何小型设计到大型的复杂项目。"
                        },
                        {
                              classify: "设计工具",
                              name: "PS",
                              fullName: "Adobe photoshop.",
                              url:
                                    "https://www.adobe.com/cn/products/cs6/photoshop.html",
                              desc:
                                    "Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编辑工作。ps有很多功能，在图像、图形、文字、视频、出版等各方面都有涉及。"
                        },
                        {
                              classify: "设计平台",
                              name: "UI中国",
                              fullName: "UI中国",
                              url: "http://www.ui.cn/",
                              desc:
                                    "UI中国专业界面设计平台,前身为iconfans.com。是专业的界面设计师交流、学习/展示平台.同时也是UI设计师人才流动的集散地,会员均为一线UI设计师,覆盖主流互联网公司."
                        },
                        {
                              classify: "图库",
                              name: "Pixabay",
                              fullName: "Pixabay",
                              url: "https://pixabay.com/",
                              desc:
                                    "社区分享了1.5 百万张免费图片和视频。图库容量很大，是外国的分享网站"
                        },
                        {
                              classify: "图库",
                              name: "Life Of Pix",
                              fullName: "Life Of Pix",
                              url: "https://stock.adobe.com/",
                              desc: "一个外国的图片网站，分享了大量精美素材"
                        },
                        {
                              classify: "图库",
                              name: "pexels",
                              fullName: "pexels",
                              url: "https://www.pexels.com/",
                              desc: "分享了大量无水印图片，可以直接使用"
                        },
                        {
                              classify: "图库",
                              name: "Unsplash",
                              fullName: "Unsplash",
                              url: "https://unsplash.com/",
                              desc:
                                    "需要用英文搜索，有大量的图片，可以用来进行二次创作"
                        },
                        {
                              classify: "图库",
                              name: "Magdeleine",
                              fullName: "Magdeleine",
                              url: "https://magdeleine.co/",
                              desc:
                                    "可以通过一种颜色来搜索色调相似的图片，可以保持一篇文章图片风格一致。"
                        },
                        {
                              classify: "图库",
                              name: "Cupcake",
                              fullName: " Cupcake",
                              url: "http://cupcake.nilssonlee.se/",
                              desc: "一家偏爱冷色调的图片网站，免费图库"
                        },
                        {
                              classify: "设计工具",
                              name: "ARKIT作图",
                              fullName: "ARKIT作图",
                              url: "https://arkie.cn/",
                              desc:
                                    "ARKIE作图(阿几作图)是一款智能设计工具,只需输入文字,即可一键生成海报。"
                        },
                        {
                              classify: "字体集合",
                              name: "字由",
                              fullName: "字由",
                              url: "http://www.hellofont.cn/",
                              desc:
                                    "涵盖1914款字体、50个字体合集、1364幅案例、459篇字体文章，提供客户端下载"
                        },
                        {
                              classify: "在线工具",
                              name: "ProcessOn",
                              fullName: " ProcessOn",
                              url: "https://www.processon.com/",
                              desc:
                                    "ProcessOn，免费在线作图，实时协作，支持流程图、思维导图、原型图、UML、网络拓扑图等"
                        },
                        {
                              classify: "学习平台",
                              name: "博学谷视频库",
                              fullName: " 博学谷视频库",
                              url: "https://www.boxuegu.com/",
                              desc: "提供平面设计，网页设计等相关内容"
                        },
                        {
                              classify: "图片压缩",
                              name: "JPEGmini",
                              fullName: "JPEGmini",
                              url: "https://www.jpegmini.com/",
                              desc:
                                    "将照片体积缩小50%-80%，使照片更小，而不失真！"
                        },
                        {
                              classify: "转换格式",
                              name: "格式工厂",
                              fullName: "format factory",
                              url: "http://www.pcfreetime.com/",
                              desc:
                                    "可以将不同的格式全部转换成统一的格式，例如可以将不同的图片，jpg、png、gif等不同格式图片统一转换成统一png图片。"
                        },
                        {
                              classify: "图库",
                              name: "给图网",
                              fullName: "给图网",
                              url: "https://www.geitu.net/",
                              desc: "有数百万免费可商用设计素材源文件下载"
                        },

                        {
                              classify: "图库",
                              name: "BURST",
                              fullName: "BURST",
                              url: "https://burst.shopify.com/",
                              desc: "国外图片网站，分享了大量图片"
                        },
                        {
                              classify: "图库",
                              name: "Vector4Free",
                              fullName: " Vector4Free",
                              url: "http://vector4free.com/",
                              desc: "分享了大量免费图片"
                        },
                        {
                              classify: "插画",
                              name: "notefolio",
                              fullName: "notefolio",
                              url: "http://notefolio.net/",
                              desc: "分享了韩国插画师作品推荐"
                        },
                        {
                              classify: "icons",
                              name: "FLATICON",
                              fullName: "FLATICON",
                              url: "https://www.flaticon.com/",
                              desc: "有大量免费的icons图标。"
                        },
                        {
                              classify: "icons",
                              name: "Icons8",
                              fullName: "Icons8",
                              url: "https://icons8.com/",
                              desc: "号称有着“84,800 Free Flat Icons”。"
                        },
                        {
                              classify: "icons",
                              name: "ICONFINDER",
                              fullName: "ICONFINDER",
                              url: "https://www.iconfinder.com/",
                              desc: "可以“Search through 2,860,660 SVG icons”"
                        },
                        {
                              classify: "icons",
                              name: "iconfont",
                              fullName: "iconfont",
                              url: "http://www.iconfont.cn/",
                              desc: "有着大量的icon图标。"
                        },
                        {
                              classify: "配色",
                              name: "Colordot",
                              fullName: "Colordot",
                              url: "https://color.hailpixel.com/",
                              desc:
                                    "将鼠标光标移动到颜色上方就会立刻显示色码。你可以选取喜欢的颜色后直接复制代码使用到设计中"
                        },
                        {
                              classify: "配色",
                              name: "LOL COLORS",
                              fullName: "LOL COLORS",
                              url:
                                    "https://www.webdesignrankings.com/resources/lolcolors/",
                              desc:
                                    "配色低调而且简单实用，把颜色做成了水滴状，鼠标移入就可看到颜色代码，非常方便。"
                        },
                        {
                              classify: "配色",
                              name: "Colordrop",
                              fullName: "Colordrop",
                              url: "https://colordrop.io/",
                              desc:
                                    "网页设计相当简单，提供各种色彩组合，没有太多额外或复杂难懂的功能"
                        },
                        {
                              classify: "配色",
                              name: "Trianglify.io",
                              fullName: "Trianglify.io",
                              url: "https://trianglify.io/",
                              desc:
                                    "多边形风格的设计应用越来越多,Trianglify 是一个能够生成五颜六色的三角形图案的 JavaScript 库，类似low poly低多边形一样,可以用来作为 SVG 图像和 CSS 背景。"
                        },
                        {
                              classify: "配色",
                              name: "klart",
                              fullName: "klart",
                              url: "https://klart.io/colors/",
                              desc:
                                    "如果看到喜欢的配色，点击颜色后即可复制色码。"
                        },
                        {
                              classify: "配色",
                              name: "Color Claim",
                              fullName: "Color Claim",
                              url: "http://www.vanschneider.com/colors",
                              desc:
                                    "是一个设计大师自建的配色网站，每个都可以直接拿来取用。打开网站都是看起来很普通的图片，其实都是从大神个人多年来的设计中提取出的配色，凝结着配色智慧的结晶。"
                        },
                        {
                              classify: "配色",
                              name: "中国传统色彩",
                              fullName: "中国传统色彩",
                              url: "http://color.uisdc.com/",
                              desc:
                                    "罗列了中国的传统色彩，喜欢中国风的，可以多看看"
                        },
                        {
                              classify: "字体",
                              name: "悟思",
                              fullName: "悟思",
                              url: "http://voossi.lofter.com",
                              desc:
                                    "字体预览、字体分类、版权提醒、公有版权收集等功能于一体，但需要注册登录才能使用"
                        },
                        {
                              classify: "英文字体",
                              name: " FONTSQUIRREL",
                              fullName: "FONTSQUIRREL",
                              url: "https://www.fontsquirrel.com/",
                              desc: "可以直接下载的免费英文字体库"
                        },
                        {
                              classify: "英文字体",
                              name: "myFonts",
                              fullName: "myFonts",
                              url: "https://www.myfonts.com/",
                              desc:
                                    "提供英文字体排行，免费字体，想要漂亮的英文字体，直接参考差不多就可以搞定了"
                        },
                        {
                              classify: "设计师聚集地",
                              name: "Dribbble",
                              fullName: "Dribbble",
                              url: "https://dribbble.com/",
                              desc:
                                    "UI设计师的主要聚集地，上面会有很多小而美、小而精的东西"
                        },
                        {
                              classify: "CAD",
                              name: "迅捷CAD",
                              fullName: "迅捷CAD",
                              url: "http://www.xunjiecad.com/dailypic.html",
                              desc:
                                    "CAD建筑图纸，免费CAD施工图，CAD图库大全，CAD室内设计图块图库，房屋设计图，CAD机械设计图，各类CAD练习图等海量CAD图纸素材下载网站"
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

