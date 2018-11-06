  <template>
  <div style="width:100%">
    <a href="http://gotolink.cn"><img class="goname" :src="goname" alt="沟渠网"></a>
    <el-button type="primary" plain class="click" @click="show3 = !show3"><img :src="imgbtn" alt="沟渠网"></el-button>
    <el-container v-cloak>
      <el-aside style="width: auto; height:auto;">
        <div class="click-box">
          <el-collapse-transition>
            <div v-show="show3">
              <div class="transition-box">
                <Sidebar />
              </div>
            </div>
          </el-collapse-transition>
        </div>
      </el-aside>
      <el-container>
        <el-header style="height: 60px;">
          <Header />
        </el-header>
        <el-main>
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
        <el-footer style="height: 110px;">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
  <script>
import Sidebar from "@/components/common/Sidebar.vue";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
export default {
      name: "Home",
      components: {
            Sidebar,
            Header,
            Footer
      },

      data() {
            return {
                  show3: true,
                  goname: require("@/assets/gouqu.png"),
                  imgbtn: require("@/assets/imgbtn.png")
            };
      }
};
</script>

  <style scoped>
[v-cloak] {
      display: none;
}
.el-header,
.el-footer,
.el-aside {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
}

.el-aside {
      color: #333;
      text-align: center;
      padding-bottom: 20px;
      box-shadow: -4px 16px 10px 0px #b3c0d1fa;
}

.el-main {
      background-color: #eaededd4;
      color: #333;
      text-align: center;
      width: 100%;
      min-height: 700px;
      padding: 4px 6px 10px 10px;
      box-shadow: inset -3px 0 20px 0px black;
}
  .el-footer {
    box-shadow: 10px 20px 30px 4px #b3c0d1fa;
}
p {
      position: fixed;
      top: 18%;
      left: 50%;
      z-index: 0;
}

.click {
      position: absolute;
      padding: 5px 3px 0px 3px;
      background-color: #cedff3;
      border-radius: 50%;
      z-index: 999999;
      left: 44px;
      margin-top: 10px;
      border: 1px solid #2196F3;
}

.click-box {
      margin-top: 60px;
}
.transition-box {
      border-radius: 4px;
      color: #fff;
      box-sizing: border-box;
}

img {
      width: 38px;
}
.goname {
  position: absolute;
  margin-top: 6px;
  left:14px;
  width: 18px;
  height: 48px;
}
</style>