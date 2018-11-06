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
                              classify: "测试网站网址",
                              name: "软件测试网站",
                              fullName: "软件测试网站",
                              url:
                                    "http://www.cnblogs.com/scios/p/6138056.html",
                              desc:
                                    "收录了二三十个软件测试方面的网址，也有简单的介绍。可以找找自己适合的网站"
                        },
                        {
                              classify: "思维导图",
                              name: "Axure",
                              fullName: "Axure",
                              url: "https://www.axure.com.cn/",
                              desc:
                                    "交互原型设计软件，让负责定义需求和规格、设计功能和界面的专家能够快速创建应用软件或Web网站的线框图、流程图、原型和规格说明文档，并可自动生成用于演示的网页文件和word文档，以提供演示与开发。"
                        },
                        {
                              classify: "github项目推荐",
                              name: "前端github项目",
                              fullName: "前端github项目",
                              url:
                                    "https://www.jianshu.com/p/413dfff084d8?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends",
                              desc:
                                    "推荐了2018年3月前端star的github项目，也许某一个就对我们it工作者有用呢。"
                        },
                        {
                              classify: "配色",
                              name: "Khroma",
                              fullName: "Khroma",
                              url: "http://khroma.co/train/",
                              desc:
                                    "Khroma是一个在线颜色工具。它利用人工智能，通过分析你选择的颜色，来生成实用性非常高的调色板的配色工具，甚至可以实现更高精度的组合。"
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
                              classify: "技术标准指南",
                              name: "w3c中文",
                              fullName: "万维网联盟中文网 ",
                              url: "http://www.chinaw3c.org/",
                              desc:
                                    "万维网联盟（W3C）是一个国际社区，它制定开放标准以确保网络的长期发展。"
                        },
                        {
                              classify: "SEO优化",
                              name: "Open Graph协议",
                              fullName: "The Open Graph protocol",
                              url: "http://ogp.me/",
                              desc:
                                    "OGP协议，这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、renren采用。对于做企业网站的还是要知道，对于网站被收录，还是非常有用的。"
                        },
                        {
                              classify: "思维导图",
                              name: "迅捷思维导图",
                              fullName: "迅捷思维导图",
                              url: "http://app.siweidaotu.com/",
                              desc:
                                    "迅捷思维导图是一款简单实用的思维导图在线绘制软件，可绘制各种结构的思维导图,支持xmind,mmap等多种格式,拥有海量思维导图模板。"
                        },
                        {
                              classify: "产品经理",
                              name: "人人都是产品经理",
                              fullName: "人人都是产品经理",
                              url: "http://www.woshipm.com/",
                              desc: "产品经理、产品爱好者交流学习平台。"
                        },
                        {
                              classify: "思维导图",
                              name: "XMind",
                              fullName: "XMind",
                              url: "https://www.xmind.net/",
                              desc: "Mind旨在产生创意，激发创造力，使您的思想从无序到有序，为您带来工作和生活的效率。"
                        },
                        // {
                        //       classify: "",
                        //       name: "",
                        //       fullName: "",
                        //       url: "",
                        //       desc: ""
                        // }
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

