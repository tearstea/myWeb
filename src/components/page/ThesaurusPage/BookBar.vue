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
                              classify: "书库",
                              name: "ePUBee电子书库",
                              fullName: "ePUBee电子书库",
                              url: "http://cn.epubee.com/books/",
                              desc:
                                    "提供的各个类型的电子书可下载，无论是常见的txt、pdf、epub还是一些mobi、azw3、caj、pdg、pdz、djvu、ceb等格式，都可以找到。"
                        },
                        {
                              classify: "书库",
                              name: "鸠摩搜书",
                              fullName: "鸠摩搜书",
                              url: "https://www.jiumodiary.com/",
                              desc: "界面简洁，资源丰富"
                        },
                        {
                              classify: "小说搜索",
                              name: "混混小说网",
                              fullName: "混混小说网",
                              url: "https://www.hunhun520.com/",
                              desc: "可找到各类小说，并提供免费下载"
                        },
                        {
                              classify: "学术搜索",
                              name: "BookSC",
                              fullName: "BookSC",
                              url: "http://zh.booksc.org",
                              desc:
                                    "有256万+书籍以及5242万+文献可以免费下载，大多数是pdf,djvu,eupb格式。"
                        },
                        {
                              classify: "网盘搜索",
                              name: "西林街",
                              fullName: "西林街",
                              url: "http://www.xilinjie.com/",
                              desc: "全能型网盘搜索引擎，更是网盘搜索神器！"
                        },
                        {
                              classify: "电子书",
                              name: "Project Gutenberg",
                              fullName: "Project Gutenberg",
                              url: "http://www.gutenberg.org/",
                              desc:
                                    "一个公益计划，目前提供了几万本免费电子书（主要是公版书所以免费，不是盗版），Kindle爱好者不可错过。"
                        },
                        {
                              classify: "搜索引擎",
                              name: "Wolfram Alpha",
                              fullName: "Wolfram Alpha",
                              url: "http://www.wolframalpha.com/",
                              desc: "会计算、会答题、会画图的万能搜索引擎。"
                        },
                        {
                              classify: "学术",
                              name: "科塔学术",
                              fullName: "科塔学术",
                              url: "https://www.sciping.com",
                              desc:
                                    "科学与学术资源导航平台，介绍了各种科研进展与学术资源"
                        },
                        {
                              classify: "阅读",
                              name: "语文",
                              fullName: "语文",
                              url: "http://www.eywedu.com/",
                              desc:
                                    "包含了各年级的书籍还有历史文化古诗词名著等，点击可以直接在线阅读。缺点是广告有点多"
                        },
                        {
                              classify: "阅读",
                              name: "天天美文网",
                              fullName: "天天美文网",
                              url: "http://www.365essay.com/",
                              desc: "中国著名作家美文在线阅读的网站"
                        },
                        {
                              classify: "古籍",
                              name: "中国哲学书电子化计划",
                              fullName: "中国哲学书电子化计划",
                              url: "https://ctext.org",
                              desc:
                                    "包含了中国百家诸子的文集，也有英文版的，古今可对照着阅读。对于研究中国古代文化的研究者应该非常有用。"
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
