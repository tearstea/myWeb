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
                              classify: "商标",
                              name: "中国商标局",
                              fullName: "国家工商行政管理总局商标局",
                              url: "http://sbj.saic.gov.cn/",
                              desc: "商标申请、查询、资讯平台"
                        },
                        {
                              classify: "税务",
                              name: "国家税务总局",
                              fullName: "国家税务总局",
                              url: "http://www.chinatax.gov.cn/",
                              desc: "每个纳税人都应该去的平台"
                        },
                        {
                              classify: "域名",
                              name: "腾讯云",
                              fullName: "腾讯云",
                              url: "https://cloud.tencent.com/",
                              desc: "提供域名注册、云服务"
                        },
                        {
                              classify: "公众号管理",
                              name: "微信公众平台",
                              fullName: "微信公众平台",
                              url: "https://mp.weixin.qq.com/",
                              desc: "公众号管理平台，进行后台操作"
                        },
                        {
                              classify: "电商教学",
                              name: "淘宝大学",
                              fullName: "淘宝大学",
                              url: "https://daxue.bbs.taobao.com/",
                              desc: "传授如何做电商的知识平台"
                        },
                        {
                              classify: "SEO",
                              name: "Open Graph协议",
                              fullName: "The Open Graph protocol",
                              url: "http://ogp.me/",
                              desc:
                                    "OGP协议，这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、renren采用。对于做企业网站的还是要知道，对于网站被收录，还是非常有用的。"
                        },
                        {
                              classify: "网站信息",
                              name: "Alexa",
                              fullName: "Alexa",
                              url: "https://www.alexa.com/topsites",
                              desc:
                                    "Alexa 是亚马逊旗下的的一个网站信息网站，它提供提供各种网站的相关信息与网页访问量，同时提供相似网页网站查询和世界最流行的网站。"
                        },
                        {
                              classify: "查询类似网站",
                              name: "SimilarWeb",
                              fullName: "SimilarWeb",
                              url: "https://www.similarweb.com/",
                              desc:
                                    "SimilarWeb是一个查询类似网站的网站，统计网站流量和市场情报，功能很强大。"
                        },
                        {
                              classify: "企业信息查询",
                              name: "天眼查",
                              fullName: "天眼查",
                              url: "https://www.tianyancha.com/",
                              desc:
                                    "天眼查专注服务于个人与企业信息查询,是人人都在用的商业安全工具,为您提供公司查询,工商信息查询,企业查询,工商查询,企业信用信息查询等相关信息,帮您快速了解企业信息,企业工商信息,企业信用信息等企业经营和人员投资状况,查询更多企业信息就到天眼查官网！"
                        },
                        {
                              classify: "SEO推广",
                              name: "外链工具",
                              fullName: "外链工具",
                              url: "https://web.geekji.cn/seo/",
                              desc:
                                    "外链工具，是一款在线全自动化发外链的推广工具。使用此工具可免费为网站在线批量增加外链，大大提高外链发布工作效率，是广大草根站长们必备的站长工具。"
                        },
                        {
                              classify: "邮箱验证",
                              name: "Free Email Verifier",
                              fullName: "Free Email Verifier",
                              url: "http://www.email-unlimited.com/",
                              desc: "需要下载安装软件，容许大批量的验证邮箱。"
                        },
                        {
                              classify: "邮箱验证",
                              name: "NEVERBOUNCE",
                              fullName: "NEVERBOUNCE",
                              url: "https://neverbounce.com/",
                              desc:
                                    "在线使用，注册后每个月可免费验证1000个邮箱，可以直接复制粘贴邮箱，也可以上传excel进行验证。"
                        },
                        {
                              classify: "营销",
                              name: "ANSWER THE PUBLIC",
                              fullName: "ANSWER THE PUBLIC",
                              url: "https://answerthepublic.com/",
                              desc:
                                    "输入产品或关键词，会自动生成一张图，上面集合各种各样的问题，都是以提问词开头的。图里所有的内容都可以通过右上角的Download CSV以excel表格方式下载。"
                        }

                        //   {
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
