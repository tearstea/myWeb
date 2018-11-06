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
                          classify: '字典',
                          name: '快学网',
                          fullName: '快学网',
                          url: 'http://www.kxue.com/',
                          desc: '在线词典，包括了新华字典，汉语词典，成语大全，近义词，反义词。',
                        },
                        {
                              classify: "搜索文献期刊",
                              name: "OALib",
                              fullName: "Open Access Library",
                              url: "http://www.oalib.com/",
                              desc: "可以免费获取很多的学术文章"
                        },
                        {
                              classify: "电子图书馆",
                              name: "阿德雷德大学电子文本收藏中心",
                              fullName: "阿德雷德大学电子文本收藏中心",
                              url: "https://ebooks.adelaide.edu.au/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "科廷大学技术文献库",
                              fullName: "科廷大学技术文献库",
                              url: "https://espace.curtin.edu.au/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "各国图书下载地址",
                              name: "xiaoxiong’s Blog",
                              fullName: "xiaoxiong’s Blog",
                              url:
                                    "http://xiaoxiong.is-programmer.com/pages/74097.html",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "昆士兰大学数字文库",
                              fullName: "昆士兰大学数字文库",
                              url: "https://espace.library.uq.edu.au/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "SETIS悉尼大学学术电子文本及图像服务",
                              fullName: "SETIS悉尼大学学术电子文本及图像服务",
                              url: "http://setis.library.usyd.edu.au/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "Infomotions 西方文学/哲学网",
                              fullName: "Infomotions 西方文学/哲学网",
                              url: "http://infomotions.com/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "搜索",
                              name: "维基百科",
                              fullName: "WikiPedia",
                              url: "https://zh.wikipedia.org/",
                              desc: "最全的百科全书搜索网站"
                        },
                        {
                              classify: "电子图书馆",
                              name: "康奈尔大学",
                              fullName: "康奈尔大学",
                              url: "https://arxiv.org/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "Bartleby",
                              fullName: "Bartleby",
                              url: "https://www.bartleby.com/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "Bibliomania",
                              fullName: "Bibliomania",
                              url: "http://www.bibliomania.com/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "Cogprints",
                              fullName: "Cogprints",
                              url: "http://cogprints.org/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "麻省理工学院的开放文献网站",
                              fullName: "麻省理工学院的开放文献网站",
                              url: "http://ocw.mit.edu/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "美国国家科学院在线数据据库",
                              fullName: "美国国家科学院在线数据据库",
                              url: "https://www.nap.edu/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "牛津大学档案馆",
                              fullName: "牛津大学档案馆",
                              url: "http://ota.ox.ac.uk/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "法兰西国家图书馆",
                              fullName: "法兰西国家图书馆",
                              url: "https://gallica.bnf.fr/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "世界图书馆",
                              fullName: "世界图书馆",
                              url: "http://abu.cnam.fr/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子书网站",
                              name: "日本文学著作",
                              fullName: "日本文学著作",
                              url: "https://www.aozora.gr.jp/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "英语文学网站",
                              name: "英语文学",
                              fullName: "英语文学",
                              url: "https://www.litencyc.com/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "数学",
                              name: "数学世界",
                              fullName: "数学世界",
                              url: "http://mathworld.wolfram.com/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "社科文献",
                              name: "ICPSR",
                              fullName: "ICPSR",
                              url: "https://www.icpsr.umich.edu/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "文献",
                              name: "联合国教科文组织",
                              fullName: "联合国教科文组织",
                              url: "https://en.unesco.org/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "电子图书馆",
                              name: "中国国家图书馆",
                              fullName: "中国国家图书馆",
                              url: "http://www.nlc.cn/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子书",
                              name: "台湾大学图书馆免费电子书",
                              fullName: "台湾大学图书馆免费电子书",
                              url: "http://ebooks.lib.ntu.edu.tw/",
                              desc: "不好意思，太深奧，看不懂了..."
                        },
                        {
                              classify: "电子图书馆",
                              name: "世界数字图书馆",
                              fullName: "世界数字图书馆",
                              url: "https://www.wdl.org/zh/",
                              desc: "不好意思，太深奧，看不懂了...."
                        },
                        {
                              classify: "学术搜索",
                              name: "Library Genesis",
                              fullName: "Library Genesis",
                              url: "http://gen.lib.rus.ec/",
                              desc:
                                    "网站上论文很多，下载方便，几乎每天都在更新。"
                        },
                        {
                              classify: "学术搜索",
                              name: "DOAJ",
                              fullName: "DOAJ",
                              url: "https://doaj.org",
                              desc:
                                    "DOAJ收录了12181份学术期刊，其中9169份期刊可以搜索到文章内容，大概有来自128个国家的3421165篇论文。"
                        },
                        {
                              classify: "学术搜搜",
                              name: "NSTL",
                              fullName: "NSTL",
                              url: "http://oar.nstl.gov.cn/",
                              desc:
                                    "该平台收录的期刊数量达7500多种，收录的期刊文献近500万篇，覆盖学科范围较广。"
                        },
                        {
                              classify: "学术搜索",
                              name: "Socolar",
                              fullName: "Socolar",
                              url: "http://www.socolar.com",
                              desc:
                                    "旨在为用户提供OA资源检索和全文链接服务的公共服务平台，为非赢利性项目。"
                        },
                        {
                              classify: "学术搜索",
                              name: "cnplinker",
                              fullName: "cnplinker",
                              url: "http://cnplinker.cnpeak.com/",
                              desc:
                                    " 给用户提供一个方便快捷的查阅国外各类期刊文献的综合网络平台。"
                        },
                        {
                              classify: "学术搜索",
                              name: "PLOS",
                              fullName: "PLOS",
                              url: "https://www.plos.org/",
                              desc:
                                    "PLOS出版8种生命科学与医学领域的开放存取期刊"
                        },
                        {
                              classify: "文献搜素",
                              name: "Cell Research",
                              fullName: "Cell Research",
                              url: "https://www.nature.com/cr/",
                              desc:
                                    "是nature旗下的cell板块，可以查询cell方面的科研资料"
                        },
                        {
                              classify: "文献搜索",
                              name: "sciencedirect",
                              fullName: "sciencedirect",
                              url: "https://www.sciencedirect.com/journal/cell",
                              desc: "可以直接搜不同学科方面的期刊论文信息"
                        },
                        {
                              classify: "文献搜索",
                              name: "MDPI",
                              fullName: "MDPI",
                              url: "https://www.mdpi.com/",
                              desc: "..."
                        },
                        {
                              classify: "文献搜索",
                              name: "生命科学",
                              fullName: "生命科学",
                              url: "http://www.lifescience.net.cn/",
                              desc: "可以查找到关于生命科学方面的期刊论文"
                        },
                        {
                              classify: "数字图书馆",
                              name: "高等教育数字图书馆",
                              fullName: "高等教育数字图书馆",
                              url: "http://www.calis.edu.cn/",
                              desc: "可以查找全国高校图书馆资料"
                        },
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
