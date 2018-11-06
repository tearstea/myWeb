<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="APP全名：">
              <el-button size="mini" type="primary" round disabled>
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
                              classify: "小游戏",
                              name: "星途",
                              fullName: "星途WeGoing",
                              desc: "自己的小宇宙，走得越远，发现越多。"
                        },
                        {
                              classify: "文字识别",
                              name: " 迅捷文字识别",
                              fullName: " 迅捷文字识别",
                              desc:
                                    "供图片文字识别，智能图片转换成文字，一键输出，支持拍照，翻译等功能"
                        },
                        {
                              classify: "免费WiFi",
                              name: " WiFi一键连",
                              fullName: " WiFi一键连",
                              desc:
                                    "走到哪里连到哪里，流量不够，无线网来凑。最主要是轻量级"
                        },
                        {
                              classify: "快递查询",
                              name: "快递100",
                              fullName: "快递100",
                              desc: "非常方便实用的快递查询小程序。"
                        },
                        {
                              classify: "维权",
                              name: "全国12315互联网平台",
                              fullName: "全国12315互联网平台",
                              desc: "身边的消费维权平台。"
                        },
                        {
                              classify: "诊疗",
                              name: "企鹅快速问诊",
                              fullName: "企鹅快速问诊",
                              desc: "医疗在线咨询平台，有任何症状都可在线咨询。"
                        },
                        {
                              classify: "辟谣",
                              name: "微信辟谣助手",
                              fullName: "微信辟谣助手",
                              desc:
                                    "腾讯亲自操刀，自已研发的谣言粉碎机，众多知名专家机构坐阵，绝对靠谱的辟谣平台。"
                        },
                        {
                              classify: "日历",
                              name: "朝夕日历Pro",
                              fullName: "朝夕日历Pro",
                              desc: "一个日程管理应用"
                        },
                        {
                              classify: "股票",
                              name: "自选股",
                              fullName: "自选股",
                              desc:
                                    "腾讯自家应用，也是微信官方选定的小程序 demo 产品"
                        },
                        {
                              classify: "助眠",
                              name: "小睡眠",
                              fullName: "小睡眠",
                              desc: "一款助眠工具"
                        },
                        {
                              classify: "识花",
                              name: "识花君",
                              fullName: "识花君",
                              desc:
                                    "当你遇到叫不出名字的花草时，拍下图片，让这款程序识别就行了"
                        },
                        {
                              classify: "表情",
                              name: "表情家园",
                              fullName: "表情家园",
                              desc: "表情家园拥有你想要的表情，还能自己DIY。"
                        },
                        {
                              classify: "天气",
                              name: "墨迹天气",
                              fullName: "墨迹天气",
                              desc: "身边的天气助手"
                        },
                        {
                              classify: "查询热度",
                              name: "微信指数",
                              fullName: "微信指数",
                              desc: "微信指数是一个查询微信中热度的小程序。"
                        },
                        {
                              classify: "PPT生成工具",
                              name: "微软小蜜",
                              fullName: "微软小蜜",
                              desc:
                                    "在手机随意选择几张图片，只需要三秒它就能生成一个PPT。还可以自动将图片中的文字识别成文本，文本还能实时编辑"
                        },
                        {
                              classify: "界面制作",
                              name: "制作器",
                              fullName: "制作器",
                              desc:
                                    "可以制作各种界面的小程序,如聊天界面、朋友圈内容、红包图片等"
                        },
                        {
                              classify: "赞赏",
                              name: "给赞",
                              fullName: "给赞",
                              desc:
                                    "在腾讯关闭iOS 赞赏按钮，这个小程序可以满足两个平台一块打赏。你可以设置六个赞赏金额，还有各种样式设置，赞赏通知。"
                        },
                        {
                              classify: "设计",
                              name: "ARKie设计小助手",
                              fullName: "ARKie设计小助手",
                              desc:
                                    "这是一款智能设计工具，我们只要输入文字，就可以快速一键生成海报，也可以根据自己想要的色调进行筛选。"
                        },
                        {
                              classify: "二维码生成工具",
                              name: "草料二维码",
                              fullName: "草料二维码",
                              desc:
                                    "草料二维码是一款专门为二维码设计的小程序，它有快速提供二维码生成器和管理二维码的功能，并支持上传图片、文件、音视频等类型。"
                        },
                        {
                              classify: "追剧",
                              name: "小里追剧助手",
                              fullName: "小里追剧助手",
                              desc:
                                    "小里追剧助手是一款看剧的小程序，可以在这里看到最新电影，美剧，韩剧，网络剧等等，对于追剧族来说，这是一个很不错的选择。"
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

