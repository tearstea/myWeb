<template>
  <div class="footer">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">

          <span>网站数据均为网上查找<br>&nbsp;&nbsp;&nbsp;如有侵权，请<router-link to="/about" style="font-size: 15px !important;color:#2196f3">@联系我
            </router-link><br>本人将尽快删除，谢谢
          </span>
          <br>
          <span>
            <router-link to="/law" style="font-size: 15px !important;color:#2196f3">法律声明</router-link>
          </span>

        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span>
            Q Q：<strong>786810151</strong>
          </span><br>
          <span>公众号：</span>
          <el-popover placement="right-start" title="互联网遗址" width="140" trigger="hover">
            <img :src="codeUrl" alt="沟渠网">
            <el-button type="primary" plain size="mini" round slot="reference">
              互联网遗址
            </el-button>
          </el-popover><br>
          <span>
            E-mail：longtolink@163.com
          </span><br>
          <a style="color:black;padding-right:6px;" href="https://github.com/tearstea" target="_blank">
            <el-button type="primary" round style="padding-top: 3px;font-size:14px;">GitHub</el-button>
          </a>
          <a style="color:black;" href="https://gittab.cn/" target="_blank">
            <el-button type="primary" round style="padding-top: 3px; font-size:14px;">GitTab</el-button>
          </a>
          <a style="color:black;margin-left:4px;" href="http://copyfree.cn/" target="_blank">
            <el-button type="primary" round style="padding-top: 3px; font-size:14px;">天黑了</el-button>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
      data() {
            return {
                  codeUrl: require("@/assets/mycode.png")
            };
      }
};
</script>
<style scoped>
.bg-purple {
      /* background: #d3dce6; */
      text-align: center;
}

.bg-purple-light {
      /* background: #e5e9f2; */
      text-align: left;
}

.grid-content {
      min-height: 50px;
      font-size: 14px;
      color: black;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      padding: 10px 0;
}

.row-bg {
      padding: 2px 0;
      background-color: #f9fafc;
}

span {
      font-size: 15px;
      margin-left: 4px;
      line-height: 24px;
}
</style>
