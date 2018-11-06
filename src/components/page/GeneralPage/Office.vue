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
                              classify: "办公软件",
                              name: "WPS",
                              fullName: "WPS OFFICE ",
                              url: "http://www.wps.cn/",
                              desc:
                                    "WPS Office是由金山软件股份有限公司自主研发的一款办公软件套装，可以实现办公软件最常用的文字、表格、演示等多种功能。具有内存占用低、运行速度快、体积小巧、强大插件平台支持、免费提供海量在线存储空间及文档模板。"
                        },
                        {
                              classify: "PDF编辑",
                              name: "PDF在线编辑",
                              fullName: "PDF在线编辑 ",
                              url: "https://lightpdf.com/zh/",
                              desc:
                                    "免费PDF导航网站，不仅PDF的各种转换，还有PDF的各种实用工具 (PDF与offices文件的相互转换，PDF合并，分割，解密，解密。水印添加等等)"
                        },
                        {
                              classify: "在线工具",
                              name: "NiceTool",
                              fullName: " NiceTool",
                              url: "http://www.nicetool.net/",
                              desc:
                                    "NiceTool.net 好工具网是一个高质量的工具集合网站， 收集和打造了很多包括生活常用、教育学习、图片视频、程序开发等分类下的众多简单易用的在线实用工具"
                        },
                        {
                              classify: "PPT模板下载",
                              name: "优品PPT",
                              fullName: " 优品PPT",
                              url: "http://www.ypppt.com/",
                              desc: "专注于分享高质量的免费PPT模板下载网站。"
                        },
                        {
                              classify: "在线工具",
                              name: "文图",
                              fullName: "文图 ",
                              url: "https://www.wentu.io/",
                              desc: "线编辑、即时生成报告的轻量级数据可视化工具"
                        },
                        {
                              classify: "办公小工具",
                              name: "万彩办公大师",
                              fullName: " 万彩办公大师",
                              url: "http://www.wofficebox.com/",
                              desc:
                                    "绿色无广告只有12M，PDF工具/万能格式转换/识别工具/图片处理，多达60+个小工具，办公必备的小工具百宝箱"
                        },
                        {
                              classify: "搜索桌面文件",
                              name: "Everything",
                              fullName: "Everything",
                              url: "http://www.voidtools.com/",
                              desc:
                                    "小安装文件，干净简洁的用户界面，快速文件索引，快速搜索，最少的资源使用,卸载的时候让你选择安装语言，还以为是又让你安装呢，不过直接点击确定就可以卸载了。"
                        },
                        {
                              classify: "大纲笔记",
                              name: "幕布",
                              fullName: "幕布 ",
                              url: "https://mubu.com/",
                              desc:
                                    "大纲笔记和思维导图可以一键转换，通过大纲来组织内容，对于活动策划、会议记录、待办清单都非常的合适，同时还可以将文件分享给别人。"
                        },
                        {
                              classify: "截图软件",
                              name: "Snipate",
                              fullName: "Snipate",
                              url: "https://zh.snipaste.com/",
                              desc:
                                    "简单的截图+贴图功能广受用户喜爱，可以将图片缩放、旋转、翻转、设为半透明等等，贴图功能更是方便，特别适用于写作者。"
                        },
                        {
                              classify: "功能笔记",
                              name: "印象笔记",
                              fullName: " 印象笔记",
                              url: "https://www.yinxiang.com/",
                              desc:
                                    "云端笔记，多终端信息同步，简约的界面，加上Markdown写作支持，让众多的用户爱不释手，非常适合工作党！"
                        },
                        {
                              classify: "功能笔记",
                              name: "有道云笔记",
                              fullName: "有道云笔记",
                              url: "http://note.youdao.com/",
                              desc:
                                    "3G免费超大空间，文字/图片/语音/手写/OCR/Markdown等多种形式，随时随地记录你的精彩。全面兼容office、PDF等办公常用文档，无需下载即可查看编辑。"
                        },
                        {
                              classify: "云端存储",
                              name: "百度网盘",
                              fullName: "百度网盘",
                              url: "https://pan.baidu.com/",
                              desc:
                                    "多端并用，数据随身携带，在线预览，文件即开即看"
                        },
                        {
                              classify: "翻译",
                              name: "有道翻译",
                              fullName: "有道翻译",
                              url: "http://cidian.youdao.com/",
                              desc: "在线翻译，支持多种语言翻译"
                        },
                        {
                              classify: "翻译",
                              name: "谷歌翻译",
                              fullName: "谷歌翻译",
                              url: "https://translate.google.cn/",
                              desc: "可在线翻译，专业人士都会用"
                        },
                        {
                              classify: "百科",
                              name: "维基百科",
                              fullName: "wikipedia ",
                              url: "https://zh.wikipedia.org/",
                              desc: "真正的百科全书，谁用谁知道！"
                        },
                        {
                              classify: "录屏工具",
                              name: "EV录屏",
                              fullName: " EV录屏",
                              url: "https://www.ieway.cn/evcapture.html",
                              desc: "腾讯分流下载，无水印、无限制，想录就录"
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
                              classify: "截图",
                              name: "FastStone Capture",
                              fullName: " FastStone Capture",
                              url: "https://faststone-capture.en.softonic.com/",
                              desc:
                                    "小巧的截图软件，支持窗口截图、滚动截图、自定义窗口截图，想怎么截就怎么截，截好之后，可以直接保存到本地，到打印机、到邮件、到PPT等等，简单说就是你截完图了，可供保存的选项很多，也挺方便的。"
                        },
                        {
                              classify: "文库下载软件",
                              name: "冰点文库下载器",
                              fullName: "冰点文库下载器",
                              url: "http://www.bingdian001.com/",
                              desc:
                                    "可以自由下载百度，豆丁，畅享网，mbalib，hp009，max.book118文库文档。"
                        },
                        {
                              classify: "文档格式转换工具",
                              name: "迅捷PDF转换器",
                              fullName: "迅捷PDF转换器",
                              url: "https://www.jiakaodashi.com/pdf/",
                              desc:
                                    "可将PDF和Word、Excel、PPT、图片等格式相互转换"
                        },
                        {
                              classify: "PPT文件压缩工具",
                              name: "PPT Minimizer",
                              fullName: "PPT Minimizer",
                              url: "http://www.pptminimizer.com/",
                              desc:
                                    "压缩图像和照片，优化PowerPoint，Word，Excel和PDF文件的大小能够高达50-90%，而无需打包压缩。"
                        },
                        {
                              classify: "PDF阅读器",
                              name: "Acrobat Pro DC",
                              fullName: "Acrobat Pro DC",
                              url: "https://www.jb51.net/softs/601589.html",
                              desc:
                                    "目前互联网上最专业最优秀的桌面pdf解决方案，它将全球最佳的PDF解决方案提升到新的高度，配有直观触控式界面，通过开发强大的新功能，使用户能在任何地方完成工作。"
                        },
                        {
                              classify: "图库",
                              name: "给图网",
                              fullName: "给图网",
                              url: "https://www.geitu.net/",
                              desc: "有数百万免费可商用设计素材源文件下载"
                        },
                        {
                              classify: "图片网站",
                              name: "ZOOMMY",
                              fullName: "ZOOMMY",
                              url: "https://zoommyapp.com/",
                              desc:
                                    "可找到最棒免费的照片，同时还提供创意产品或灵感，这是一个集合的网站。"
                        },
                        {
                              classify: "图片网站",
                              name: "visualhunt",
                              fullName: "visualhunt",
                              url: "https://visualhunt.com/",
                              desc:
                                    "高品质的免费图片网站，从许多在线资源中寻找的免费图像"
                        },
                        {
                              classify: "图片网站",
                              name: "wallhalla",
                              fullName: "wallhalla",
                              url: "https://wallhalla.com/",
                              desc:
                                    "有很多星球酷炫的图片，做创意类的PPT以及封面非常棒"
                        },
                        {
                              classify: "ppt插件",
                              name: "口袋动画",
                              fullName: "口袋动画",
                              url: "http://www.papocket.com/",
                              desc: "专注于PPT动画的黑科技插件"
                        },
                        {
                              classify: "思维导图",
                              name: "百度脑图",
                              fullName: "百度脑图",
                              url: "http://naotu.baidu.com/",
                              desc: "百度的一款在线轻量化思维导图工具，操作方便"
                        },
                        {
                              classify: "PPT动画特效插件",
                              name: "OneKeyTools",
                              fullName: "OneKeyTools",
                              url: "https://oktools.xyz/",
                              desc:
                                    "免费+开源+功能强大的MS PPT插件，拥有强大的图形处理功能。支持图片混合、一键特效、三维复制等功能。你见到的许多bling-bling的PPT特效，用这个插件就一键完成。"
                        },
                        {
                              classify: "pdf转换",
                              name: "Smallpdf",
                              fullName: "Smallpdf",
                              url: "https://smallpdf.com/cn",
                              desc:
                                    "该网站支持pdf和ppt, jpg, excel, word等多种格式的在线互相转换，还支持在线压缩、合并、拆分、加密、揭秘等多种功能"
                        },
                        {
                              classify: "在线录制屏幕",
                              name: "ShowMore",
                              fullName: "ShowMore",
                              url: "https://showmore.com/",
                              desc:
                                    "无需下载，很实用，可以在线录制屏幕的实用网站，可以直接翻译成中文网站。"
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
                              classify: "在线字体",
                              name: "QT86",
                              fullName: "QT86",
                              url: "https://www.qt86.com/",
                              desc:
                                    "艺术字体在线生成器，支持自定义，用起来非常方便。"
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

