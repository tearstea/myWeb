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
                              classify: "搜索",
                              name: "茶杯狐",
                              fullName: "茶杯狐",
                              url: "https://www.cupfox.com/",
                              desc:
                                    "茶杯狐一款关于视频搜索的网站，你可以使用它搜索电影，电视剧，动画以及综艺节目等内容。"
                        },
                        {
                              classify: "搜索",
                              name: "Bing",
                              fullName: "Bing",
                              url: "https://cn.bing.com/",
                              desc:
                                    "号称世界第二大搜索引擎，微软的良心之作，界面非常简洁，国内国际版可以任意切换。也可下载手机app，用起来非常清爽快捷。"
                        },
                        {
                              classify: "搜索",
                              name: "某柠檬",
                              fullName: "某柠檬",
                              url: "http://www.moulem.com/",
                              desc:
                                    "一款设计简洁的导航网站，收藏了大部分常用的网站，可以设置为主页使用"
                        },
                        {
                              classify: "网盘搜索",
                              name: "磁力猫",
                              fullName: " 磁力猫",
                              url: "https://www.cilimao.me/",
                              desc: "干净实用的磁力与网盘资源搜索"
                        },
                        {
                              classify: "视频解析",
                              name: "全民解析",
                              fullName: "全民解析",
                              url: "http://www.qmaile.com/",
                              desc: "免费全网VIP视频解析，广告有点多"
                        },
                        {
                              classify: "音乐搜索",
                              name: "音乐直链搜索",
                              fullName: " 音乐直链搜索",
                              url: "http://music.liuzhijin.cn/",
                              desc:
                                    "特制多站合一音乐搜索解决方案，一站可以搜到多站音乐"
                        },
                        {
                              classify: "下载书籍",
                              name: "苦瓜搜盘",
                              fullName: " 苦瓜搜盘",
                              url: "https://kgbook.com",
                              desc: "一款能下载各种会员书籍的实用网站"
                        },
                        {
                              classify: "动漫网站",
                              name: "啊噗猫追番",
                              fullName: " 啊噗猫追番",
                              url: "http://anime.upupoo.com",
                              desc: "收录了大量动漫、新番，剧场版观看"
                        },
                        {
                              classify: "视频解析",
                              name: "V视频助手",
                              fullName: "V视频助手 ",
                              url: "http://v.ranks.xin/",
                              desc:
                                    "支持下载腾讯视频、秒拍视频、微博视频、快手、微信、百度视频、梨视频等"
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
                              classify: "视频解析",
                              name: "硕鼠",
                              fullName: "硕鼠",
                              url: "http://www.flvcd.com/",
                              desc:
                                    "如果你想要下载某个网站的视频，那么直接把链接放在这个软件里面，点击开始就可以进行下载了，目前硕鼠已经支持84个网站的视频下载，目前大部分主流的视频网站能支持到。"
                        },
                        {
                              classify: "视频下载",
                              name: "视频下载王",
                              fullName: "视频下载王",
                              url:
                                    "https://www.apowersoft.cn/video-download-capture",
                              desc:
                                    "不仅支持国外的YouTube，Vimeo，还支持国内的优酷，哔哩哔哩，腾讯视频等国内各大视频网站，它还支持抓取加密视频。你只需要复制视频URL，就可以一键下载了。它还有【一键探测】功能，当你开启之后，当你在播放的时候，它就会自动下载。"
                        },
                        {
                              classify: "电影网站",
                              name: "80s手机电影",
                              fullName: "80s手机电影",
                              url: "https://www.80s.tw/",
                              desc: "资源多，可下载"
                        },
                        {
                              classify: "网盘搜索",
                              name: "盘搜搜",
                              fullName: "盘搜搜",
                              url: "http://www.pansoso.com/",
                              desc: "不仅可以搜索百多网盘，也可以搜索新浪微盘"
                        },
                        {
                              classify: "网盘搜索",
                              name: "盘多多",
                              fullName: "盘多多",
                              url: "http://www.panduoduo.net/",
                              desc: "资源比较齐全"
                        },
                        {
                              classify: "视频下载",
                              name: "视频鱼",
                              fullName: "视频鱼",
                              url: "http://shipinyu.com/",
                              desc:
                                    "支持多个视频文件同时下载，下载完后可以选择马上播放，它还有查看管理下载历史记录和视频搜索的功能。"
                        },
                        {
                              classify: "视频搜索",
                              name: "疯狂影视搜索",
                              fullName: "疯狂影视搜索",
                              url: "http://ifkdy.com/",
                              desc: "可以搜索到大量的高清视频"
                        },
                        {
                              classify: "汉语字典",
                              name: "在线新华字典",
                              fullName: "在线新华字典",
                              url: "http://xh.5156edu.com/",
                              desc: "最大最全的在线汉语字典"
                        },
                        {
                              classify: "单词查询",
                              name: "在线英语字典",
                              fullName: "在线英语字典",
                              url: "http://word.12999.com/pinyin.html",
                              desc:
                                    "可以按照首字母查询英文单词，还可以按照自己的意愿查询，譬如“go，oo，free”等就可以查询到包含查询的单词"
                        },
                        {
                              classify: "网盘搜索",
                              name: "wodepan",
                              fullName: "wodepan",
                              url: "http://www.wodepan.com/",
                              desc: "有将近4千万条资讯可以进行搜索"
                        },
                        {
                              classify: "网盘搜索",
                              name: "小白盘",
                              fullName: "小白盘",
                              url: "http://www.xiaobaipan.com/",
                              desc: "功能超强的网盘资源搜索网站"
                        },
                        {
                              classify: "化妆品成分查询",
                              name: "CoSDNA",
                              fullName: "CoSDNA",
                              url: "http://cosdna.com",
                              desc:
                                    "该网站能快速检索市面绝大多数化妆品的成分及其安全度。"
                        },
                        {
                              classify: "电影 资讯",
                              name: "IMDb",
                              fullName: "IMDb",
                              url: "https://www.imdb.com/",
                              desc:
                                    "IMDB 是互联网电影数据库网站。它包含了所有的电影，电视的内容。"
                        },
                        {
                              classify: "模特资讯",
                              name: "Models",
                              fullName: "Models",
                              url: "https://models.com",
                              desc:
                                    "Models 是全世界模特数据库网站。可以看到你想看到的模特的信息。"
                        },
                        {
                              classify: "英文人名在线翻译",
                              name: "比目鱼",
                              fullName: "比目鱼",
                              url: "https://www.bimuyu.com/name-translator/",
                              desc: "提供比较公认的、标准的译法，可做参考"
                        },
                        {
                              classify: "综合搜索",
                              name: "wikiHow",
                              fullName: "wikiHow",
                              url: "https://zh.wikihow.com",
                              desc: "wikihow是一个非常有趣的综合技能搜索网站，"
                        },
                        {
                              classify: "漫画",
                              name: "kindle漫画",
                              fullName: "kindle漫画",
                              url: "http://www.kindlecomic.net/",
                              desc:
                                    "漫画可以直接下载，对于喜欢漫画的童鞋是个不错的地方。"
                        },
                        {
                              classify: "字体",
                              name: "字体传奇",
                              fullName: "字体传奇",
                              url: "http://www.ziticq.com",
                              desc:
                                    "不仅展示了字体设计，还有现场直播授课传授如何改字。"
                        },
                        {
                              classify: "英文取名",
                              name: "BehindName",
                              fullName: "BehindName",
                              url: "https://www.behindthename.com/",
                              desc:
                                    "想给自己起个英文名字吗？那来这个网站吧。不仅详细介绍了名字的来源、含义，还可以看到众多网友的评论。"
                        },
                        {
                              classify: "字幕",
                              name: "字幕库",
                              fullName: "字幕库",
                              url: "https://www.zimuku.cn/",
                              desc: "字幕下载网站。"
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
