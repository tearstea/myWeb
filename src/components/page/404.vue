<template>
  <div class="error-page">
    <div class="error-code">④<span>☉</span>④</div>
    <div class="error-desc"><span style="color: red; font-size: 34px;">WRONG&nbsp;!&nbsp;!&nbsp;!<br></span>踏破铁鞋无觅处<br>您所访问的页面却不存在<br>不如....</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" class="error-btn" round>回到首页</el-button>
      </router-link>
      <el-button class="error-btn" type="primary" round @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
      methods: {
            goBack() {
                  this.$router.go(-1);
            }
      }
};
</script>


<style scoped>
.error-page {
      padding-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: #f3f3f3;
      box-sizing: border-box;
}
.error-code {
      line-height: 1;
      font-size: 100px;
      font-weight: bolder;
      color: #2d8cf0;
     
}
.error-code span {
      color: #00a854;
}
.error-desc {
      font-size: 28px;
      color: #777;
       margin-top: 20px;
}
.error-handle {
      margin-top: 20px;
      padding-bottom: 260px;
}
.error-btn {
      margin-left: 18px;
      font-size: 20px;
      padding: 8px 14px;
}
</style>

