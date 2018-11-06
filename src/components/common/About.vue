<template>
  <div class="about">
    <el-carousel :interval="3500" type="card" height="240px" arrow="hover">
      <el-carousel-item v-for="item in lists" :key="item.index">
        <a :href="item.href" target="_blank">
          <h2>{{item.text}}</h2>
          <img style="width:220px;height:160px;" :src="item.pigurl" alt="沟渠网">
        </a>
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <div class="line"></div>
      <div class="text">关&nbsp;&nbsp;于</div>
      <div class="line"></div>
    </div>
    <div class="bottom">
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <h3 style="color:#fff;">W&nbsp;E & M&nbsp;E</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活中，我们总在寻寻觅觅，却不知何往。也许某一天，我们突然遇到了一山一水，一座城，也许一个人，然后我们的心定了下来。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾经，我也在寻觅中寻找，于是，遇到了她，从此，想做些事，让自己的心定下来，抑或，也是想留下点什么，给自己淡淡的一生轻描一笔。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初入IT行业，总在BUG中不知所往，技术却一直在低水平，但也想做点事，于是在闲暇之余，做了这样的简单的网站。希望能为“WE”们带来点什么吧。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在不断的寻找中，经过筛选，也才只找到了这冰山一角，还有更多的知识宝藏等着我们去发掘。也希望看到这个网站的众多“WE”们能为我这个单单的“ME”带来更多更好更有用的网站。本人在此，感激不尽。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人才拙识浅，见少闻寡，时间短少，网站尚有很多未完善之处，还望“WE”们能够发邮件告知。本网站所有信息均在互联网上查找，如有侵权，请告知，本人将尽快删除。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想做一个知识传播的平台，奈人少力微。既然不能做知识的制作者，那就做一个知识的传播者吧。唉...千言万语，尽在不言中......</p>
          <br>
          <p style="text-align: right; margin-right:30px;">戊戌年九月廿四</p>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="hover" :body-style="{ padding: '0 8px' }">
          <h3 style="color:#fff;">M&nbsp;E</h3>
          <img :src="image1" style="width:100px;" alt="logo">
          <p>人生信条：种一棵树的最佳时间是十年之前，其次是现在！</p>
          <P>TEL：18571609243</P>
          <p>Q&nbsp;Q&nbsp;：786810151</p>
          <p>E-mail：longtolink@163.com</p>
          <p>个人博客： <a href="https://gittab.cn/" style="color:#2c8cf0;" target="_blank">GitTab</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://github.com/tearstea" style="color:#2c8cf0;" target="_blank">GitHub</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="http://copyfree.cn/" style="color:#2c8cf0;" target="_blank">天黑了</a></p>
          <p>公众号：互联网遗址 （扫一扫，可关注）</p><img :src="image2" style="width:100px;" alt="公众号">
        </el-card>
      </el-col>
    </div>

  </div>
</template>
<script>
export default {
      data() {
            return {
                  lists: [
                        {
                              text: "每周推荐",
                              href: "https://gittab.cn/",
                              pigurl: require("@/assets/images/select/about_2.jpg")
                        },
                        {
                              text: "经典名篇",
                              href: "http://copyfree.cn/",
                              pigurl: require("@/assets/images/select/copyfree.jpg")
                        },
                        {
                              text: "每周推荐",
                              href: "",
                              pigurl: require("@/assets/images/select/about_3.jpg")
                        },
                        {
                              text: "每周推荐",
                              href: "",
                              pigurl: require("@/assets/images/select/about_4.jpg")
                        },
                        {
                              text: "每周推荐",
                              href: "",
                              pigurl: require("@/assets/images/select/about_5.jpg")
                        }
                  ],
                  image1: require("@/assets/melogo.png"),
                  image2: require("@/assets/mycode.png")
            };
      }
};
</script>

<style scoped>
.about {
      background: black;
      margin: 0 -4px 0 -6px;
      padding-bottom: 10px;
      box-shadow: 0 0 18px 9px black;
}
.bottom {
      display: flex;
      top: 10px;
}
h2 {
      color: #e8d9d9;
      font-size: 22px;
      font-weight: 400;
}
.el-carousel__item h5 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      margin: 0;
}

.el-carousel__item:nth-child(2n) {
      background-color: black;
}

.el-carousel__item:nth-child(2n + 1) {
      background-color: black;
}

.title {
      display: flex;
      width: 80%;
      margin: 40px auto 24px auto;
}

.line {
      flex: 1;
      position: relative;
      top: -16px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.text {
      padding: 0 12px;
      font-size: 26px;
      color: white;
}
.el-card {
      background-color: black;
      color: #c2d0e2d4;
      padding: 10px;
      border: 1px dashed #b3c2e55c;
      word-break: break-all;
      word-wrap: break-word;
      border-bottom-color: black;
      border-top-color: black;
}
.bottom h5 {
      line-height: 0;
}
.bottom p {
      text-align: left;
      font-weight: 100;
      margin: 0 4x;
      line-height: 22px;
      font-size: 14px;
      text-align: justify;
}
</style>