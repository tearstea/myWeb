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
                              classify: "艺术",
                              name: "Synaptic Stimuli",
                              fullName: "Synaptic Stimuli",
                              url: "https://synapticstimuli.com/",
                              desc: "值得一看"
                        },
                        {
                              classify: "艺术blog",
                              name: "Contemporary Art Blogs ",
                              fullName: "Contemporary Art Blogs ",
                              url: "http://contemporaryartblogs.com/",
                              desc:
                                    "集合了狠毒艺术性质的blog，可以欣赏到不同风格的艺术"
                        },
                        {
                              classify: "艺术社区",
                              name: "中国当代艺术社区",
                              fullName: "中国当代艺术社区",
                              url: "http://www.art-ba-ba.com/",
                              desc: "可以看到各种各样的艺术资料"
                        },
                        {
                              classify: "艺术",
                              name: "艺廊网",
                              fullName: "艺廊网",
                              url: "http://www.artthat.net/",
                              desc: "集合了不同风格的作品"
                        },
                        {
                              classify: "艺术",
                              name: "COLOSSHL",
                              fullName: "COLOSSHL",
                              url: "https://www.thisiscolossal.com/",
                              desc: "集合了视觉艺术品"
                        },
                        {
                              classify: "艺术品社交平台",
                              name: "Artand",
                              fullName: "Artand",
                              url: "http://artand.cn/",
                              desc:
                                    "艺术家的在线画廊，可以在这平台把自己的艺术品售卖出去"
                        },
                        {
                              classify: "绘画",
                              name: "我爱画画",
                              fullName: "我爱画画",
                              url: "http://www.woaihuahua.com/",
                              desc: "可能对于初级学习者很有用"
                        },
                        {
                              classify: "素描",
                              name: "任小青 ",
                              fullName: "任小青 ",
                              url: "https://www.jianshu.com/u/a925c2c9c6ed",
                              desc:
                                    "简书上的博主，不断更新自己的素描，讲述作画技巧，画的还是不错的。"
                        },
                        {
                              classify: "素描视频",
                              name: "素描入门",
                              fullName: "素描入门",
                              url:
                                    "http://m.v.dxsbb.com/renwen/1114/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了素描基本的技巧。"
                        },
                        {
                              classify: "钢琴视频",
                              name: "钢琴教学",
                              fullName: "钢琴教学",
                              url:
                                    "http://m.v.dxsbb.com/renwen/948/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了钢琴基本的技巧。"
                        },
                        {
                              classify: "古筝视频",
                              name: "古筝教学",
                              fullName: "古筝教学",
                              url:
                                    "http://m.v.dxsbb.com/renwen/952/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了古筝基本的技巧。"
                        },
                        {
                              classify: "楷书视频",
                              name: "硬笔书法楷书",
                              fullName: "硬笔书法楷书",
                              url:
                                    "http://m.v.dxsbb.com/renwen/931/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了楷书基本的技巧。"
                        },
                        {
                              classify: "吉他视频",
                              name: "吉他教学入门",
                              fullName: "吉他教学入门",
                              url:
                                    "http://m.v.dxsbb.com/renwen/853/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了吉他基本的技巧。"
                        },
                        {
                              classify: "普通话视频",
                              name: "普通话学习",
                              fullName: "普通话学习",
                              url:
                                    "http://m.v.dxsbb.com/renwen/570/player-0-0.html",
                              desc:
                                    "ｐｃ端视频界面不太友好，但手机端完全不用担心，介绍了普通话基本的技巧。"
                        },
                        {
                              classify: "艺术",
                              name: "DeviantArt",
                              fullName: "DeviantArt",
                              url: "https://www.deviantart.com",
                              desc: "大量的原画分享，视觉盛宴。"
                        },
                        {
                              classify: "艺术平台",
                              name: "站酷",
                              fullName: "站酷",
                              url: "https://www.zcool.com.cn/",
                              desc: "国内最大的艺术工作者聚集地"
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
