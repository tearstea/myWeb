<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="APP全名：">
              <el-button size="mini" round>
                {{ props.row.fullName }}
              </el-button>
            </el-form-item>
            <el-form-item label="app简介：">
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
          <el-button size="mini" round disabled>GO</el-button>
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
                              classify: "搜索软件app",
                              name: "Firfox Focus",
                              fullName: "Firfox Focus",
                              desc:
                                    "非常简洁，轻量级，自动屏蔽广告，每次都会擦出浏览记录，包括密码等，拒绝监视，屏蔽个人隐私内容"
                        },
                        {
                              classify: "搜索app",
                              name: "简单搜索",
                              fullName: "简单搜索",
                              desc:
                                    "百度的良心手机app，界面非常简单，让人看着非常舒适"
                        },
                        {
                              classify: "搜索app",
                              name: "Bing",
                              fullName: "Bing",
                              desc:
                                    "号称世界第二大搜索引擎，微软的良心之作，界面非常简洁，国内国际版可以任意切换,用起来非常清爽快捷。"
                        },
                        {
                              classify: "视频剪辑",
                              name: "VUE",
                              fullName: "VUE",
                              desc: "iOS和Android应用，手机视频拍摄和美化工具"
                        },
                        {
                              classify: "视频剪辑",
                              name: "小影",
                              fullName: "小影",
                              desc:
                                    "可录制10秒短视频，同时提供拍摄、编辑更长原创视频内容的服务，小影内置多种拍摄镜头、多段视频剪辑、创意画中画，有专业电影滤镜、字幕配音、自定义配乐等特性。"
                        },
                        {
                              classify: "视频剪辑",
                              name: "美摄",
                              fullName: "美摄",
                              desc:
                                    "美摄是一款中国原创内容的创作和聚合平台的APP，用于提升客户拍摄体验。依托新奥特集团技术，美摄APP在业内推出用户可自定义视频时长的全高清视频编辑模式，让用户能够拍摄、制作出具有专业原创内容作品。"
                        },
                        {
                              classify: "视频剪辑",
                              name: "爱剪辑",
                              fullName: "爱剪辑",
                              desc:
                                    "爱剪辑是一款剪辑软件，完全根据中国人的使用习惯、功能需求与审美特点进行全新设计，许多创新功能都颇具首创性。"
                        },
                        {
                              classify: "交通工具",
                              name: "车来了",
                              fullName: "车来了",
                              desc: "上班族，等公交族的必备app"
                        },
                        {
                              classify: "找工作",
                              name: "前程无忧",
                              fullName: "前程无忧",
                              desc: "可以直接在上面浏览招聘信息，发简历"
                        },
                        {
                              classify: "新闻",
                              name: "今日头条",
                              fullName: "今日头条",
                              desc:
                                    "可以获取到非常多的新闻，还可以获取别人推荐的知识内容"
                        },
                        {
                              classify: "网盘",
                              name: "百度网盘",
                              fullName: "百度网盘",
                              desc:
                                    "虽然非会员下载速度很慢，但有2T的存储空间，而且百度应该是一个可以生存很久的公司，还是比较适合我们去存储自己的文件照片的"
                        },
                        {
                              classify: "翻译",
                              name: "网易有道词典",
                              fullName: "网易有道词典",
                              desc: "个人觉得用起来还是非常不错的"
                        },
                        {
                              classify: "视频",
                              name: "腾讯视频",
                              fullName: "腾讯视频",
                              desc: "如果有腾讯大王卡的，看视频还是挺不错的"
                        },
                        {
                              classify: "外卖",
                              name: "口碑",
                              fullName: "口碑",
                              desc:
                                    "用它是因为每天都可以领10M流量，用着用着发现可以去买电影票点餐，还是挺不错的"
                        },
                        {
                              classify: "旅行",
                              name: "飞猪",
                              fullName: "飞猪",
                              desc:
                                    "以前可以每天都能领几十上百M流量，现在虽然不能领了，但是每次买票之后还是会送个几十兆流量，还是可以的。"
                        },
                        {
                              classify: "音乐",
                              name: "qq音乐",
                              fullName: "qq音乐",
                              desc: "如果用腾讯大王卡，听歌可以免流"
                        },
                        {
                              classify: "办公",
                              name: "WPS",
                              fullName: "WPS",
                              desc:
                                    "办公还是挺不错的，还可以云同步，挺适合办公族的"
                        },
                        {
                              classify: "邮箱",
                              name: "网易邮箱大师",
                              fullName: "网易邮箱大师",
                              desc:
                                    "不仅可以用163的邮箱，还可以添加qq邮箱等其他邮箱，一个app相当于几个app，还是比较方便的"
                        },
                        {
                              classify: "下载",
                              name: "迅雷",
                              fullName: "迅雷",
                              desc:
                                    "可以BT下载各种电影资源，对于想看免回会员的电影，还是挺不错的，但是每部电影动不动要几个G，还是挺让人无语的"
                        },
                        {
                              classify: "视频",
                              name: "优酷",
                              fullName: "优酷",
                              desc: "资源还是很全的，要用蚂蚁宝卡才支持免流"
                        },
                        {
                              classify: "音乐",
                              name: "虾米音乐",
                              fullName: "虾米音乐",
                              desc: "资源还是很多的，用蚂蚁宝卡可以免流的"
                        },
                        {
                              classify: "外卖",
                              name: "美团",
                              fullName: "美团",
                              desc: "可点外卖，还是很方便的"
                        },
                        {
                              classify: "骑行",
                              name: "摩拜",
                              fullName: "摩拜",
                              desc:
                                    "不需要交押金就可以骑行，使用起来感觉也非常好，值得推荐"
                        },
                        {
                              classify: "出行",
                              name: "滴滴",
                              fullName: "滴滴",
                              desc: "打车必备软件"
                        },
                        {
                              classify: "知识平台",
                              name: "知乎",
                              fullName: "知识",
                              desc: "之乎者也，这里是一个获取各方各面的知识平台"
                        },
                        {
                              classify: "生理期",
                              name: "美柚",
                              fullName: "美柚",
                              desc: "女生必备"
                        },
                        {
                              classify: "短视频",
                              name: "抖音",
                              fullName: "Tik Tok",
                              desc: "拍摄短视频的平台"
                        },
                        {
                              classify: "地图",
                              name: "百度地图",
                              fullName: "百度地图",
                              desc: "出门必备，尤其对于路痴族"
                        },
                        {
                              classify: "营业厅",
                              name: "联通营业厅",
                              fullName: "联通营业厅",
                              desc:
                                    "可以随时关注自己的流量话费使用情况，每月还可以领100M流量哟，在这里面可以购物，还可以观看其他app需要会员的影视剧，免费的，"
                        },
                        {
                              classify: "免费WiFi",
                              name: "万能钥匙",
                              fullName: "万能钥匙",
                              desc:
                                    "走到哪连到哪，对于流量不足族，确实很不错，但要防网络病毒哟"
                        },
                        {
                              classify: "读书",
                              name: "one一个",
                              fullName: "one一个",
                              desc:
                                    "每天一句话，一张图，一个问题，一篇文章，一个东西，每天都为你打开了好玩的一个世界，是用来打发零散空闲时间的一款神器。"
                        },
                        {
                              classify: "听书",
                              name: "喜马拉雅",
                              fullName: "喜马拉雅",
                              desc:
                                    "　听有声小说、相声、评书、新闻、音乐、脱口秀、笑话段子、英语、儿歌儿童故事，可以用喜马拉雅。"
                        },
                        {
                              classify: "拍照",
                              name: "魔漫相机",
                              fullName: "魔漫相机",
                              desc:
                                    "魔漫相机是全球第一款原创将真人拍成幽默漫画的相机。在魔漫世界里，无论你是什么性格，都能看到一个幽默的自己，让你尽情享受魔术般的浪漫。"
                        },
                        {
                              classify: "美颜",
                              name: "snapseed",
                              fullName: "snapseed",
                              desc:
                                    "snapseed堪称是手机里的Photoshop啊，滤镜超多，拥有光晕和粗粒胶片，无论是自拍还是风景照，处理过后都非常的有质感"
                        },
                        {
                              classify: "古诗词",
                              name: "古诗词典",
                              fullName: "古诗词典",
                              desc:
                                    "对于爱好古诗词的诗词粉是个不错的软件，随时都可以欣赏古诗词的优美意境"
                        },
                        {
                              classify: "漫画",
                              name: "快看漫画",
                              fullName: "快看漫画",
                              desc: "有新鲜、有趣的漫画大全在线观看,"
                        },
                        {
                              classify: "词典",
                              name: "微软必应词典",
                              fullName: "微软必应词典",
                              desc: "功能很强大，用起来也是非常的爽。"
                        },
                        {
                              classify: "化学实验",
                              name: "烧杯",
                              fullName: "烧杯",
                              desc:
                                    "喜欢化学，但又苦于没有实验材料的同学，可以用这款app，学习化学实验知识。"
                        },
                        {
                              classify: "物理实验",
                              name: "物理实验课",
                              fullName: "物理实验课",
                              desc: "可以模拟高精度电学、电磁学和天体力学实验，"
                        },
                        {
                              classify: "长图拼接",
                              name: "Tailor",
                              fullName: "Tailor",
                              desc:
                                    "可以将多张图片拼成长图，就不用一张一张的图发了，看起来也方便"
                        },
                        {
                              classify: "影视",
                              name: "超级看",
                              fullName: "超级看",
                              desc:
                                    "里面不仅包括的各大主流影视app，还包括了热播电视，还支持磁力下载。遗憾的是支持安卓手机下载。"
                        }
                        //    {
                        //   classify: '',
                        //   name: '',
                        //   fullName: '',
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

