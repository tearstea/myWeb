  <template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-light">
        <el-tag class="appear" :key="tag" v-for="tag in dynamicTags" closable size="mini" :disable-transitions="false" @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <a href="http://gotolink.cn">
          <el-button type="primary" round>主页</el-button>
        </a>
        <router-link to="/about">
          <el-button type="info" plain round>关于</el-button>
        </router-link>
        <el-popover placement="top-start" title="温情通知" width="180" trigger="hover" content="网站初建立，会有很多bug。不足之处，还望同仁能予以指出，发邮件于我，本人非常感谢，并将给予小小红包，还望笑纳，略表心意。">
          <el-button type="info" plain round slot="reference">通知</el-button>
        </el-popover>
        <el-button type="info" plain round @click="open">
          小技巧
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

  <script>
export default {
      data() {
            return {
                  dynamicTags: ["若喜欢本站，快捷键“Ctrl+D”可收藏作为书签"]
            };
      },
      methods: {
            // 通知
            open() {
                  const h = this.$createElement;
                  this.$notify({
                        // position: "top-left",
                        offset: 45,
                        duration: 3000,
                        title: "小技巧",
                        message: h(
                              "i",
                              {
                                    style:
                                          "color: #606266;line-height:18px; font-size:14px; font-style: normal;"
                              },
                              "电脑端，为了获得更好的视觉效果，可按住Ctrl+鼠标滚轮缩放到你想要的比例，效果最佳！如果喜欢本网站，可直接快捷键“Ctrl+D”进行收藏作为书签。手机端可以直接选择添加书签。由于部分网站可能需要谷歌浏览器才能打开，给您带来的小小麻烦，还请谅解。在浏览器中，二维码不能直接识别，可先保存或者分享到自己的微信再进行识别。同时希望您能够分享出去，让越来越多的人多了解知识，学习知识。谢谢咯..."
                        )
                  });
            },
            // 标签
            handleClose(tag) {
                  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            }
      }
};
</script>
  <style scoped>
@media screen and (max-width: 1024px) {
      .appear {
            display: none;
            z-index: 1;
      }
}

.grid-content {
      height: 60px;
}
.bg-purple-light {
      text-align: right;
}

.row-bg {
      background-color: #f9fafc;
}
.el-button.is-round {
      padding: 4px 12px 4px 12px;
      height: 30px;
      line-height: 16px;
      margin-top: 16px;
      margin-right: 10px;
}
.el-button--primary {
      font-weight: 100;
      font-size: 16px;
}
.el-button--info {
      color: #0f0e0e;
      font-weight: 100;
      font-size: 16px;
      color: black;
      background-color: #dcdfe6;
      border-color: hsla(220, 93%, 48%, 0.639);
}

.el-popover {
      background: green !important;
}
</style>

