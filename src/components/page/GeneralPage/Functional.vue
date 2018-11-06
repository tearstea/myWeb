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
          <a :href="props.row.url" rel="nofollow noopener noreferrer" class="classB" target="_blank">
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
                              url: "https://www.lifeofpix.com/",
                              desc: "一个外国的图片网站，分享了大量精美素材"
                        },
                        {
                              classify: "图库",
                              name: "Adobe Stock",
                              fullName: "Adobe Stock",
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
                              classify: "图片处理",
                              name: "Picartia",
                              fullName: " Picartia",
                              url: "http://www.picartia.com/",
                              desc: "将图片拼成马赛克效果图片的神器"
                        },
                        {
                              classify: "缩短网址",
                              name: "短网址",
                              fullName: "新浪短网址",
                              url: "http://sina.lt/",
                              desc: "可以选择子想要缩短网址的后缀"
                        },
                        {
                              classify: "下载视频",
                              name: "PickFrom",
                              fullName: "PickFrom  ",
                              url: "https://zh.pickfrom.net/",
                              desc:
                                    "PickFrom 提供在线无水印下载视频图片的免费服务，通过PickFrom您可以将您喜爱的视频保存到本地或手机上，包括但不限于抖音，腾讯，微博，快手，Instagram，Youtube，火山小视频，知乎，场库，iwara，西瓜视频等主流网站。"
                        },

                        {
                              classify: "软件下载",
                              name: "ZD423",
                              fullName: "ZD423",
                              url: "http://www.zdfans.com/",
                              desc:
                                    "一个手机和电脑软件下载网站，主要分享热门的PC软件资源与安卓软件应用，致力于免费提供优质的原创去广告绿色软件、常用的破解优化软件"
                        },
                        {
                              classify: "资源分享",
                              name: "5i福利工具",
                              fullName: " 5i福利工具",
                              url: "http://www.5ifxw.com/",
                              desc:
                                    "聚合了如VIP视频解析、全网音乐等众多实用有趣的功能。"
                        },
                        {
                              classify: "应用分享",
                              name: "xclient",
                              fullName: "xclient ",
                              url: "http://xclient.info",
                              desc: "专注与分享mac应用"
                        },
                        {
                              classify: "格式转换",
                              name: "ALL TO ALL",
                              fullName: "ALL TO ALL ",
                              url: "http://www.alltoall.net/",
                              desc:
                                    "视频，音频，文档，电子书，图片格式转换，支持上百种格式的文件，免费使用"
                        },
                        {
                              classify: "网站推荐",
                              name: "EGOUZ",
                              fullName: " EGOUZ",
                              url: "http://www.egouz.com/",
                              desc: "可以了解知道国外比较热门的网站推荐"
                        },
                        {
                              classify: "识图神器",
                              name: "百度识图",
                              fullName: "百度识图",
                              url: "http://image.baidu.com/",
                              desc:
                                    "可以图搜图或者通过图片的url地址搜索图片，这样就可以搜索到互联网上与这张图片相似的其他图片资源，同时也能找到这张图片相关的信息。识别人物、搜索服饰、寻找高清素材、浏览相似美图等。"
                        },
                        {
                              classify: "音乐",
                              name: "MLI音乐",
                              fullName: " MLI音乐",
                              url: "https://music.mli.im/vip.music?v=6.0",
                              desc:
                                    "可以免费听全网付费VIP音乐的网站，包括网易云音乐、QQ音乐、酷狗音乐等等。支持免费试听下载，支持歌词显示。"
                        },
                        {
                              classify: "播放器",
                              name: "PotPlayer",
                              fullName: " PotPlayer",
                              url: "http://www.potplayer.org/",
                              desc: "非常简洁好用的视频播放器"
                        },
                        {
                              classify: "软件破解",
                              name: "Pan Download",
                              fullName: "Pan Download ",
                              url: "http://pandownload.com/",
                              desc:
                                    "破解百度云下载速度限制，这个下载速度正常的话可以达到1-3M/s ，速度还是很快的，更新后的pandownload支持多个百度云账号登录，非常方便了，对于现在常用网盘的人来说，这个工具无疑是极大的提高了效率，节省了时间！"
                        },
                        {
                              classify: "广告屏蔽",
                              name: "AD Safe",
                              fullName: "AD Safe 净网大师 ",
                              url: "http://www.ad-safe.com/",
                              desc:
                                    "去掉烦人的广告，每次看个视频、电影，广告的时间实在是太久了，忍不了，这个软件能很好的屏蔽所有的广告，下次看视频的时候就没有烦人的广告了，"
                        },
                        {
                              classify: "Gif录制软件",
                              name: "ScreenToGif",
                              fullName: " ScreenToGif",
                              url: "https://www.screentogif.com/?l=zh_cn",
                              desc:
                                    "小巧的GIF软件录制和制作软件，平时演示的时候需要用gif的时候，可以用这个软件，非常的方便，录制好了，还可以直接进行编辑，很多excel教程的gif，就是这么做出来的。"
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
                              classify: "下载中心",
                              name: "极速下载中心",
                              fullName: " 极速下载中心",
                              url: "http://www.mydown.com/",
                              desc: "各种各样的软件下载"
                        },
                        {
                              classify: "动图录制软件",
                              name: "GifCam",
                              fullName: "GifCam",
                              url: "https://c7sky.com/gifcam.html",
                              desc:
                                    "直接录制动图，录制完成自动生成Gif，软件大小不到2M，还可以自定义录制窗口"
                        },
                        {
                              classify: "软件收集网站",
                              name: "I Tell You",
                              fullName: "I Tell You",
                              url: "http://msdn.itellyou.cn/",
                              desc:
                                    "比较良心的个人收录软件网站，收集了大量操作系统、应用程序、CRM软件等原版软件，可以直接在此网站下载，非常便捷"
                        },
                        {
                              classify: "IE不同版本",
                              name: "ie浏览器中文网站",
                              fullName: "ie浏览器中文网站",
                              url: "http://www.iefans.net/",
                              desc: "可以下载不同版本的IE浏览器"
                        },
                        {
                              classify: "检测",
                              name: "浏览器内核检测 ",
                              fullName: "浏览器内核检测 ",
                              url: "https://ie.icoa.cn/",
                              desc: "可在线监测自己电脑浏览器或者手机的内核信息"
                        },
                        {
                              classify: "音乐网站",
                              name: "麦田音乐网",
                              fullName: "麦田音乐网",
                              url: "https://www.mtyyw.com/",
                              desc:
                                    '田音乐网音乐推荐宗旨是"用文字和音乐温暖生活"，闲适的时候你可以在这个网站找到你喜欢的文字和音乐欣赏，相对文艺范的一个音乐网站。'
                        },
                        {
                              classify: "泰剧网站",
                              name: "泰剧TV网",
                              fullName: "泰剧TV网",
                              url: "https://www.taijutv.com/",
                              desc: "比较全的泰剧网站"
                        },
                        {
                              classify: "韩剧网站",
                              name: "韩剧TV网",
                              fullName: "韩剧TV网",
                              url: "https://www.hanjutv.com/",
                              desc: "比较全的韩剧网站"
                        },
                        {
                              classify: "日剧网站",
                              name: "日剧TV网",
                              fullName: "日剧TV网",
                              url: "https://www.rijutv.com/",
                              desc: "比较全的日剧网站"
                        },
                        {
                              classify: "美剧网站",
                              name: "美剧天堂",
                              fullName: "美剧天堂",
                              url: "http://www.meijutt.com/",
                              desc: "比较全的美剧网站"
                        },
                        {
                              classify: "英剧网站",
                              name: "英剧迷",
                              fullName: "英剧迷",
                              url: "http://www.yingju.org/",
                              desc: "比较全的英剧网站"
                        },
                        {
                              classify: "翻译",
                              name: "有道",
                              fullName: "有道",
                              url: "http://dict.youdao.com/",
                              desc: "人人都爱用的翻译软件"
                        },
                        {
                              classify: "邮箱导航",
                              name: "hao123邮箱导航",
                              fullName: "hao123邮箱导航",
                              url: "http://www.hao123.com/mail",
                              desc:
                                    "搜集了现有的各种各样额邮箱，只要点进去就可以注册了，对于想注册不同的邮箱，是个不错的选择"
                        },
                        {
                              classify: "去水印",
                              name: "Inpaint",
                              fullName: "Inpaint",
                              url: "https://www.theinpaint.com/",
                              desc:
                                    "可以进行照片修复，去水印等功能，对于喜欢的照片，却被打上了标签，可以有效去除标签且不留痕迹。当然了也可以去下载破解免费版的"
                        },
                        {
                              classify: "图库",
                              name: "给图网",
                              fullName: "给图网",
                              url: "https://www.geitu.net/",
                              desc: "有数百万免费可商用设计素材源文件下载"
                        },
                        {
                              classify: "无损音乐下载",
                              name: "超高无损音乐",
                              fullName: "超高无损音乐",
                              url: "https://www.sq688.com/",
                              desc: "提供免费下载"
                        },
                        {
                              classify: "科学知识普及",
                              name: "科学松鼠会",
                              fullName: "科学松鼠会",
                              url: "http://songshuhui.net/",
                              desc: "向大众传播科学的网站"
                        },
                        {
                              classify: "漫画",
                              name: "快看漫画",
                              fullName: "快看漫画",
                              url: "http://www.kuaikanmanhua.com/",
                              desc: "漫画迷的可选网站，而且都是免费的"
                        },
                        {
                              classify: "视频网站",
                              name: "WATCH FREE",
                              fullName: "WATCH FREE",
                              url: "https://watch-free.me/",
                              desc: "国外视频网站，有很多国外的免费视频"
                        },
                        {
                              classify: "视频网站",
                              name: "GO movies",
                              fullName: "GO movies",
                              url: "https://gomovies.cool/movie/filter",
                              desc:
                                    "国外视频网站，提供在线观看的电影网站，无需注册，免费观看电影，高清画"
                        },
                        {
                              classify: "视频网站",
                              name: "FREEFORM MOVIES",
                              fullName: "FREEFORM MOVIES",
                              url: "https://freeform.go.com/movies",
                              desc:
                                    "国外视频网站，资源十分丰富，种类多，界面友好，用户体验十分好"
                        },

                        {
                              classify: "装逼图片",
                              name: "装逼大全",
                              fullName: "装逼大全",
                              url: "https://www.zhuangbi.info/",
                              desc:
                                    "聊天必备，可以装装逼，还是不错。就像网站的介绍那样，人生三大错觉：草丛没人，我能反杀，她喜欢我！哈哈哈...."
                        },
                        {
                              classify: "综合网站",
                              name: "走廊网",
                              fullName: "走廊网",
                              url: "http://www.zoulang.com/",
                              desc:
                                    "包含了文化、生活、IT、影音、创意视觉和时尚。里面的文章会及时得到更新，可以随时都可以发现好的文章。"
                        },
                        {
                              classify: "app推荐",
                              name: "最美应用",
                              fullName: "最美应用",
                              url: "http://zuimeia.com",
                              desc:
                                    "最美应用每天提供有趣有意思、实用又创新的iPhone以及Android手机APP，各种类型都有，可以评论互动，还可以讲诉使用体验。"
                        },
                        {
                              classify: "漫画",
                              name: "暴走漫画",
                              fullName: "暴走漫画",
                              url: "http://baozoumanhua.com/",
                              desc:
                                    "原创恶搞漫画制作分享网站，提供暴漫在线制作工具，方便用户在线制作漫画，并分享给更多的用户欣赏。"
                        },
                        {
                              classify: "在线字体",
                              name: "QT86",
                              fullName: "QT86",
                              url: "https://www.qt86.com/",
                              desc:
                                    "艺术字体在线生成器，支持自定义，用起来非常方便。"
                        },
                        {
                              classify: "声音",
                              name: "Rainy Mood",
                              fullName: "Rainy Mood",
                              url: "https://www.rainymood.com/",
                              desc: "心烦意乱时，听听雨声也不错！"
                        },
                        {
                              classify: "3D视野",
                              name: "Finding Home",
                              fullName: "Finding Home",
                              url: "http://findingho.me/",
                              desc:
                                    "随着鼠标移动，视野跟着移动，3D视野，高低起伏，画面做的极简，颜色搭配让人舒服。"
                        },
                        {
                              classify: "给未来自己写信",
                              name: "时间胶囊",
                              fullName: "时间胶囊",
                              url: "http://p.timepill.net/",
                              desc:
                                    "假如，多年以前，给未来的自己写了一封信，现在收到了，是悲是喜，是忧是乐呢？"
                        },
                        {
                              classify: "模拟黑客",
                              name: "GEEKtyper",
                              fullName: "GEEKtyper",
                              url: "http://geektyper.com/",
                              desc:
                                    "如果想拍自媒体啥，这个可以很装逼的，完全化身黑客的节奏！选择属于自己的模式，就可以开始装逼了！是不是电影上的黑客都是这样做出来的呢？"
                        },
                        {
                              classify: "图库",
                              name: "AirPano",
                              fullName: "AirPano",
                              url: "http://www.airpano.com",
                              desc: "360°超清画面"
                        },
                        {
                              classify: "艺术",
                              name: "DeviantArt",
                              fullName: "DeviantArt",
                              url: "https://www.deviantart.com",
                              desc: "大量的原画分享，视觉盛宴。"
                        },
                        {
                              classify: "插画",
                              name: "notefolio",
                              fullName: "notefolio",
                              url: "http://notefolio.net/",
                              desc: "分享了韩国插画师作品推荐"
                        },
                        {
                              classify: "图片处理软件",
                              name: "光影魔术手",
                              fullName: "光影魔术手",
                              url: "http://www.neoimaging.cn/",
                              desc:
                                    "拥有强大的调图参数拥有自动曝光、数码补光、白平衡、亮度对比度、饱和度、色阶、曲线、色彩平衡等一系列非常丰富的调图参数。喜欢做自媒体淘宝的同学可以试试呢。"
                        },
                        {
                              classify: "在线二维码生成器",
                              name: "草料二维码",
                              fullName: "草料二维码",
                              url: "https://cli.im/",
                              desc:
                                    "不论是输入一段文字，还是网址、文件、图片、音视频、名片等都可在线生成一个二维码，非常简单适用。"
                        },
                        {
                              classify: "视频在线压缩",
                              name: "VideoSmaller",
                              fullName: "VideoSmaller",
                              url: "http://www.videosmaller.com/",
                              desc:
                                    "不仅可以在线压缩视频，还可以在线压缩音频、图像，操作方便快捷。"
                        },
                        {
                              classify: "视频格式转换",
                              name: "AVC",
                              fullName: "AVC",
                              url:
                                    "https://www.any-video-converter.com/products/for_video_free/",
                              desc: "任意格式的视频都都能转换，软件需要下载。"
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
