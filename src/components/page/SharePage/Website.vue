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
                              classify: "最小网站",
                              name: "guimp",
                              fullName: "guimp",
                              url: "http://www.guimp.com",
                              desc: "网页上只有不到指甲盖大小（18*18像素）的一个小方块，里面包括了所有的内容。没有新闻和图片或者聊天室，但在那个小块里，有数个小游戏弹球、乒乓、吃豆豆、足球……可谓是世界上最小的网站"
                        },
                        {
                              classify: "最高网站",
                              name: "Worlds-highest-website",
                              fullName: "Worlds-highest-website",
                              url: "https://worlds-highest-website.com",
                              desc: "无线下滑，让人有崩溃的赶脚。用户可以采用手动滚动或电梯来浏览高达1万8千939公里的网页"
                        },
                           {
                          classify: '最深网站',
                          name: 'TheDeepestSite',
                          fullName: 'TheDeepestSite',
                          url: 'http://thedeepestsite.com/',
                          desc: '感觉看不到底，这创意也是绝了，竟然是为Borjomi矿泉水做宣传的网站，滑个几十分钟恐怕也看不到底，不信你试试，反正我是没有划到底。',
                        },
                           {
                          classify: '无聊网站',
                          name: 'TAKE ME TO ANOTHER USELESS WEBSITE',
                          fullName: 'TAKE ME TO ANOTHER USELESS WEBSITE',
                          url: 'https://theuselessweb.com/',
                          desc: '无聊透顶，每次点，都会把你带到一个无无聊的网站，无聊中也算是一种乐趣吧，总共可以带你到几十个不同的网站呢',
                        },
                           {
                          classify: '无语网站',
                          name: 'isitchristmas',
                          fullName: 'isitchristmas',
                          url: 'https://isitchristmas.com/',
                          desc: '最令人无语网呢，到底哪天那次点会变成“是”呢?',
                        },
                            {
                          classify: "头晕网站",
                          name: "Shake vigorously",
                          fullName: "Shake vigorously",
                          url: "http://www.staggeringbeauty.com/",
                          desc: "看得快晕了，一直卖萌，一直摇啊摇的，到底想干啥子呢"
                        },
                            {
                          classify: "移动的猫",
                          name: "CAT BOUNCE",
                          fullName: "CAT BOUNCE",
                          url: "https://cat-bounce.com/",
                          desc: "真想问那些猫，这么跳，你父母知道吗？你能不能专业点，整点表情出来啊。想用鼠标全移走"
                        },
                            {
                          classify: "虐“狗”网站",
                          name: "muchbetterthanthis",
                          fullName: "muchbetterthanthis",
                          url: "http://www.muchbetterthanthis.com/",
                          desc: "单虐单身狗，无法自拔"
                        },
                            {
                          classify: "铃声网站",
                          name: "Ding Ding In loving",
                          fullName: "Ding Ding In loving",
                          url: "https://hectorsalamanca.com/",
                          desc: "网站的名字叫爱的终声，也希望爱也像这钟声绵远悠长"
                        },
                            {
                          classify: "错觉动态图",
                          name: "眼睛的幻觉",
                          fullName: "眼睛的幻觉",
                          url: "http://www.michaelbach.de/ot/index.html",
                          desc: "视觉现象与视错觉展示，好像感觉眼睛欺骗了我们。收集了大量动态图"
                        },
                        //     {
                        //   classify: "",
                        //   name: "",
                        //   fullName: "",
                        //   url: "",
                        //   desc: ""
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
