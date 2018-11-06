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
                              classify: "表白小玩意",
                              name: "亲爱的",
                              fullName: "亲爱的",
                              url: "http://www.madongdong.me/love/index.php",
                              desc:
                                    "第一步：填写内容，填完之后，点提交；第二步：把提交之后的网址复制发给自己所爱的人。对方点开之后，会有怦然心动的感觉哟！可以自己先试试哟"
                        },
                        {
                              classify: "网盘",
                              name: "OneDrive",
                              fullName: "OneDrive",
                              url: "https://www.fixdown.com/soft/2020.html",
                              desc:
                                    "OneDrive普通用户只有5GB的空间，但是微软为office365用户提供了5T的网盘空间，并且office365教育版学生和老师免费申请。只需要一个教育网邮箱即可。以下为可提供免费邮箱的教育网：http://mail.mzr.me	http://mail.jl-mb.me	http://mail.51.al:3000	http://mail.hrka.net http://free365.ooohttp://officevip.club http://mail.xgdfz.tech http://abcda.tech http://officevip.club "
                        },
                        {
                              classify: "全球版权登记系统",
                              name: "全球版权登记系统",
                              fullName: "Concensum",
                              url: "https://concensum.org/",
                              desc:
                                    "职业摄影师的福音，可进行谷歌的Concensum全球图片备案，那么就不用担心被人盗图了。一旦侵权，将会追踪，"
                        },
                        {
                              classify: "全球图片跟踪与版权执行系统",
                              name: "图片跟踪与版权执行系统",
                              fullName: "Copytrack",
                              url: "https://www.copytrack.com/",
                              desc: "如果图片侵权，号称“打不赢官司，不收费”政策"
                        },
                        {
                              classify: "密码泄露查询",
                              name: "密码泄露查询工具",
                              fullName: "密码泄露查询工具",
                              url: "https://haveibeenpwned.com/",
                              desc:
                                    "只需输入你的邮箱号，就能查询是否有网站的账号、密码泄露。"
                        },
                        {
                              classify: "随手绘画",
                              name: "随手绘制绘画网站",
                              fullName: "随手绘制绘画网站",
                              url: "http://weavesilk.com/",
                              desc:
                                    "电脑端使用，手机支持apple下载。进入界面，可以随手绘制绘画。帮助你绘制非常华丽的图形。工作的时候，可以试试"
                        },
                        {
                              classify: "塔防游戏",
                              name: "Goole地图塔防",
                              fullName: "Goole地图塔防",
                              url: "http://www.mapstd.com/",
                              desc:
                                    "随手输入个地名，就可以进行塔防游戏，工作之余，时间少，可以休闲放松下"
                        },
                        {
                              classify: "云盘",
                              name: "团队文档库",
                              fullName: "团队文档库",
                              url: "http://ddl.escience.cn/",
                              desc:
                                    "个人空间初始化10GB，空间不足5G,可手动扩容，个人空间扩容免费，每次可扩容，增加10G，如果不够，继续扩容，免费，上传下载无速度限制。。要实名注册登录。"
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
