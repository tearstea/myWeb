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
                              classify: "内容创作平台",
                              name: "微信公众平台",
                              fullName: "微信公众平台",
                              url: "https://mp.weixin.qq.com/",
                              desc:
                                    "公众号管理平台，进行后台操作。微信公众平台，给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。"
                        },

                        {
                              classify: "内容创作平台",
                              name: "头条号",
                              fullName: "头条号",
                              url: "https://mp.toutiao.com/",
                              desc:
                                    "头条号是今日头条运营的针对于大众的内容创作平台，支持所有内容体裁创作包括文章、图集、短视频、短内容、问答、小视频等类型。"
                        },
                        {
                              classify: "内容创作平台",
                              name: "大鱼号",
                              fullName: "大鱼号",
                              url: "https://mp.dayu.com/",
                              desc:
                                    "大鱼号是阿里文娱体系为内容创作者提供的统一账号。大鱼号实现了阿里文娱体系一点接入，多点分发。内容创作者一点接入大鱼号，上传图文/视频可被分发到UC、优酷、土豆、淘系客户端，未来还会扩展到豌豆荚、神马搜索、PP助手等。"
                        },
                        {
                              classify: "内容创作平台",
                              name: "搜狗号",
                              fullName: "搜狗号",
                              url: "http://mp.sogou.com/",
                              desc:
                                    "搜狗号是依托于搜狗技术平台，为国内自媒体作者提供内容创作和用户运营的后台，包含发布文章/视频、内容管理、数据统计、账号收益等服务功能。通过提供完善的媒体服务体系，帮助内容创作者将作品传播给目标受众。"
                        },
                        {
                              classify: "内容创作平台",
                              name: "大风号",
                              fullName: "大风号",
                              url: "http://zmt.ifeng.com/",
                              desc:
                                    "大风号是凤凰新闻运营的对大众开放的自媒体平台，包括了个人媒体，机构媒体及其他组织。"
                        },
                        {
                              classify: "内容创作平台",
                              name: "百家号",
                              fullName: "百家号",
                              url: "https://baijiahao.baidu.com/",
                              desc:
                                    "百家号是百度旗下运营的内容创作平台。运用人工智能，简单创作，凝聚AI智慧，铸造更聪明的创作平台"
                        },
                        {
                              classify: "作图软件",
                              name: "创客贴",
                              fullName: "创客贴",
                              url: "https://www.chuangkit.com/",
                              desc:
                                    "创客贴,极简好用的平面设计作图软件,在线图片编辑器,免费使用.提供免费设计模板，有海报、名片、公众号图片、PPT、邀请函等65个场景模板,一键稿定设计印刷"
                        },
                        {
                              classify: "文案素材",
                              name: "简文网",
                              fullName: "简文网",
                              url: "http://www.picktxt.com/",
                              desc: "有各方面的文案，可进行参考，再次创作。"
                        },
                        {
                              classify: "信息资讯",
                              name: "梅花网",
                              fullName: "梅花网",
                              url: "https://www.meihua.info/",
                              desc:
                                    "内容涵盖很广，不只有媒体广告监测，还有竞争品牌广告分析，侧重于营销文案，对于营销文案自媒体人比较适合。"
                        },
                        {
                              classify: "文案",
                              name: "文案狗",
                              fullName: "文案狗",
                              url: "http://www.wenangou.com/",
                              desc: "对于喜欢玩弄文字的，可以了解一下。"
                        },
                        {
                              classify: "排版",
                              name: "秀米",
                              fullName: "秀米",
                              url: "http://xiumi.us/",
                              desc: "微信公众平台图文排版工具，在线H5制作工具"
                        },
                        {
                              classify: "排版",
                              name: "i排版",
                              fullName: "i排版",
                              url: "http://ipaiban.com/",
                              desc:
                                    "针对于排版，有模板可参照，也可直接在里面进行对比排版，简单便捷。"
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
                              classify: "配色",
                              name: "colourco",
                              fullName: "colourco",
                              url: "https://colourco.de/",
                              desc:
                                    "鼠标滚轮移动，就可以变换出各种各样的颜色及颜值"
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
                              classify: "图库",
                              name: "给图网",
                              fullName: "给图网",
                              url: "https://www.geitu.net/",
                              desc: "有数百万免费可商用设计素材源文件下载"
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
                              classify: "在线二维码生成器",
                              name: "草料二维码",
                              fullName: "草料二维码",
                              url: "https://cli.im/",
                              desc:
                                    "不论是输入一段文字，还是网址、文件、图片、音视频、名片等都可在线生成一个二维码，非常简单适用。"
                        },
                        {
                              classify: "缩短网址",
                              name: "百度短网址",
                              fullName: "百度短网址",
                              url: "https://dwz.cn/",
                              desc: "不仅可以缩短网址，还可以将缩短的网址还原"
                        },
                        {
                              classify: "视频在线压缩",
                              name: "VideoSmaller",
                              fullName: "VideoSmaller",
                              url: "http://www.videosmaller.com/",
                              desc:
                                    "不仅可以在线压缩视频，还可以在线压缩音频、图像，操作方便快捷。"
                        }
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
