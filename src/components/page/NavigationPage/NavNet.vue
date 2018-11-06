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
                              classify: "设计导航",
                              name: "优社导航",
                              fullName: "优社导航",
                              url: "https://hao.uisdc.com/",
                              desc: "..."
                        },
                        {
                              classify: "设计导航",
                              name: "设计导航",
                              fullName: "设计导航",
                              url: "http://hao.shejidaren.com/",
                              desc: "..."
                        },
                        {
                              classify: "设计导航",
                              name: "创造狮导航",
                              fullName: "创造狮导航",
                              url: "http://www.chuangzaoshi.com",
                              desc: "..."
                        },
                        {
                              classify: "ppt导航",
                              name: "PPT资源导航",
                              fullName: "PPT资源导航",
                              url: "http://www.hippter.com/",
                              desc: "..."
                        },
                        {
                              classify: "各国历史导航",
                              name: "Best of History Websites",
                              fullName: "Best of History Websites",
                              url: "http://besthistorysites.net/",
                              desc: "分门别类，各国历史都有介绍"
                        },
                        {
                              classify: "搜索导航",
                              name: "Anywhere Anything ",
                              fullName: "Anywhere Anything ",
                              url: "http://lackar.com/aa/",
                              desc: "..."
                        },
                        {
                              classify: "搜索导航",
                              name: "虫部落快搜",
                              fullName: "虫部落快搜",
                              url: "http://search.chongbuluo.com/",
                              desc: "..."
                        },
                        {
                              classify: "搜索导航",
                              name: "EGOUS",
                              fullName: "EGOUS",
                              url: "http://www.egouz.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "万花筒导航",
                              fullName: "万花筒导航",
                              url: "https://wht.im/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "龙轩导航",
                              fullName: "龙轩导航",
                              url: "http://ilxdh.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "龙喵网",
                              fullName: "龙喵网",
                              url: "http://ailongmiao.com/",
                              desc: "..."
                        },
                        {
                              classify: "web前端导航",
                              name: "Web前端导航",
                              fullName: "Web前端导航",
                              url: "http://www.alloyteam.com/nav/",
                              desc: "..."
                        },
                        {
                              classify: "邮箱导航",
                              name: "hao123邮箱导航",
                              fullName: "hao123邮箱导航",
                              url: "http://www.hao123.com/mail",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "小呆导航",
                              fullName: "小呆导航",
                              url: "http://webjike.com/",
                              desc: "..."
                        },
                        {
                              classify: "职业导航",
                              name: "野创职业导航",
                              fullName: "野创职业导航",
                              url: "http://www.yechuang.top/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "网站名单",
                              fullName: "网站名单",
                              url: "https://www.mingdan.top/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "GY导航",
                              fullName: "GY导航",
                              url: "http://nav.ailuoku6.top/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "果汁导航",
                              fullName: "果汁导航",
                              url: "http://guozhivip.com/nav/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "钛导航",
                              fullName: "钛导航",
                              url: "https://web.geekji.cn/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "自媒体导航",
                              fullName: "自媒体导航",
                              url: "http://www.doo123.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "24k导航",
                              fullName: "24k导航",
                              url: "https://www.24kdh.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "咪咕鱼导航",
                              fullName: "咪咕鱼导航",
                              url: "http://www.miguyu.com/",
                              desc: "..."
                        },
                        {
                              classify: "大数据导航",
                              name: "大数据导航",
                              fullName: "大数据导航",
                              url: "http://hao.199it.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "去看看",
                              fullName: "去看看",
                              url: "http://www.qkankan.com/",
                              desc: "收录了大量国外的网站"
                        },
                        {
                              classify: "导航",
                              name: "世界各国网址大全",
                              fullName: "世界各国网址大全",
                              url: "http://www.world68.com/",
                              desc: "收录了世界各国各行各业的网址"
                        },
                        {
                              classify: "导航",
                              name: "大数据导航",
                              fullName: "大数据导航",
                              url: "http://hao.199it.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "UED导航",
                              fullName: "UED导航",
                              url: "http://hao.iamue.com/",
                              desc: "..."
                        },
                        {
                              classify: "导航",
                              name: "极客导航",
                              fullName: "极客导航",
                              url: "http://www.jikedaohang.com",
                              desc: "..."
                        },
                           {
                          classify: '学术导航',
                          name: '学术网站大全',
                          fullName: '学术网站大全',
                          url: 'http://kbs.cnki.net/',
                          desc: '包含了各行各业各专业的网站',
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
