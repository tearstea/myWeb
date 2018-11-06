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
                              classify: "js框架",
                              name: "Vue ",
                              fullName: " vue.js",
                              url: "https://cn.vuejs.org/",
                              desc:
                                    "是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动，是现阶段最火的前端框架"
                        },
                        {
                              classify: "js框架",
                              name: "Vue CLI 3",
                              fullName: "Vue CLI 3",
                              url: "https://cli.vuejs.org/",
                              desc:
                                    "vue-cli 是 vue 官方团队推出的一款快速开发 vue 项目的构建工具，具有开箱即用并且提供简洁的自定义配置等功能。 vue-cli 从 2.0 到 3.0 的升级有太多的新东西，最让人振奋的是，开发的时候，可以在pc与移动端同时展现，对于开发移动端界面非常便利"
                        },
                         {
                          classify: 'Vue状态管理',
                          name: 'Vuex',
                          fullName: 'Vuex',
                          url: 'https://vuex.vuejs.org/zh/guide/',
                          desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。',
                        },
                          {
                          classify: 'Vue路由',
                          name: 'Vue Router',
                          fullName: 'Vue Router',
                          url: 'https://router.vuejs.org/zh/',
                          desc: 'Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。',
                        },
                        {
                              classify: "Js工具库",
                              name: "jQuery",
                              fullName: " jQuery API",
                              url: "https://www.jquery123.com/",
                              desc:
                                    "jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。"
                        },
                        {
                              classify: "jQ插件库",
                              name: "JQuery插件",
                              fullName: "JQuery插件",
                              url: "http://www.jq22.com/",
                              desc:
                                    "收集jQuery插件和提供各种jQuery特效的详细使用方法,在线预览,jQuery插件下载及教程"
                        },
                        {
                              classify: "UI框架",
                              name: "Bootstrap",
                              fullName: "Bootstrap ",
                              url: "http://www.bootcss.com/",
                              desc:
                                    "Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。"
                        },
                        {
                              classify: "jQuery",
                              name: "jQuery中文文档 ",
                              fullName: "jQuery API中文文档，在线手册",
                              url: "http://jquery.cuishifeng.cn/",
                              desc:
                                    "非常详细介绍了jQuery的使用，中文在线介绍对于初学者以及英语能力欠缺的童鞋很有帮助，"
                        },
                        {
                              classify: "HTML&CSS",
                              name: "设计工具",
                              fullName: "设计工具 设计达人",
                              url: "",
                              desc:
                                    "免费在线设计工具，可提高工具效率，若初学HTML&CSS，不妨来看看"
                        },
                        {
                              classify: "UI组件",
                              name: "Element",
                              fullName: " Element",
                              url: "http://element-cn.eleme.io/",
                              desc:
                                    "Element,网站快速成型工具，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"
                        },
                        {
                              classify: "构建工具",
                              name: "NPM",
                              fullName: "NPM",
                              url: "https://www.npmjs.com/",
                              desc:
                                    "npm是JavaScript的包管理器和世界上最大的软件注册表。发现可重用代码的包 - 并以强大的新方式组装它们。"
                        },
                        {
                              classify: "UI组件",
                              name: "iView ",
                              fullName: "iView ",
                              url: "https://www.iviewui.com/",
                              desc:
                                    "iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。"
                        },
                        {
                              classify: "js框架",
                              name: " Angular 中文 ",
                              fullName: " Angular 中文网",
                              url: "https://www.angular.cn/",
                              desc:
                                    "AngularJS是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。"
                        },
                        {
                              classify: "js框架",
                              name: "Angular英文网",
                              fullName: "Angular英文网",
                              url: "https://docs.angularjs.org/",
                              desc:
                                    "AngularJS是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。"
                        },
                        {
                              classify: "js框架",
                              name: "React",
                              fullName: " React",
                              url: "https://reactjs.org/",
                              desc:
                                    "React是一个JavaScript框架，用于构建“可预期的”和“声明式的”Web用户界面，它已经使Facebook更快地开发Web应用。"
                        },
                        {
                              classify: "UI框架",
                              name: "JEUI",
                              fullName: "JEUI",
                              url: "http://www.jemui.com/",
                              desc:
                                    "JEUI是一款简单、易用、轻量的前端框架，遵循原生 HTML/CSS/JS 的书写与组织形式"
                        },
                        {
                              classify: "UI框架",
                              name: "MDUI",
                              fullName: "Material Design User Interface",
                              url: "https://www.mdui.org/",
                              desc:
                                    "MDUI 是一套用于开发 Material Design 网页的前端框架"
                        },
                        {
                              classify: "UI框架",
                              name: "ZUI",
                              fullName: "ZUI",
                              url: "http://zui.sexy/",
                              desc:
                                    "一个基于 Bootstrap 深度定制开源前端实践方案，帮助你快速构建现代跨屏应用。"
                        },
                        {
                              classify: "UI框架",
                              name: "B-JUI",
                              fullName: "B-JUI ",
                              url: "http://www.b-jui.com/",
                              desc:
                                    "B-JUI 前端管理框架适用于快速开发各类 WEB 管理系统，可与任意后端程序（java、php、.net...）配合使用。B-JUI 基于 Bootstrap 样式及 jQuery 库开发，目前有各类常用组件，已集成部分常用插件，可以很的方便引入第三方 jQuery 插件。"
                        },
                        {
                              classify: "UI框架",
                              name: "layui",
                              fullName: "layui ",
                              url: "https://www.layui.com/",
                              desc:
                                    "layui，是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用。其外在极简，却又不失饱满的内在，体积轻盈，组件丰盈，从核心代码到 API 的每一处细节都经过精心雕琢，非常适合界面的快速开发。"
                        },
                        {
                              classify: "UI框架",
                              name: "Antd",
                              fullName: " Ant Design",
                              url: "https://ant.design/",
                              desc:
                                    "Ant Design 是React的实现，开发和服务于企业级后台产品。特性 Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。 React Component 基础上精心封装的高质量 UI 组件 less,Do more思想类似，在UI开发方面的提供UI基类、底层统一的API及风格统一的界面，让设计师也可构建成熟的用户界面系统、模块化的开发方式让开发者更专注于业务层的处理，提升开发效率及用户体验。 less,Do more思想类似，在UI开发方面的提供UI基类、底层统一的API及风格统一的界面，让设计师也可构建成熟的用户界面系统、模块化的开发方式让开发者更专注于业务层的处理，提升开发效率及用户体验。"
                        },
                        {
                              classify: "CSS",
                              name: "DIVCSS5",
                              fullName: " DIVCSS5",
                              url: "http://www.divcss5.com/",
                              desc:
                                    "专门针对css的学习与分享平台，通俗易懂知识讲解、案例分析、实例示范让您轻松学习DIV+CSS布局技术、轻松实现xhtml标准网页重构开发"
                        },
                        {
                              classify: "HTML",
                              name: "HTML5",
                              fullName: " HTML5技术网",
                              url: "http://www.51html5.com/",
                              desc: "专门针对html5的学习与分享平台"
                        },
                        {
                              classify: "游戏框架",
                              name: "Phaser",
                              fullName: " Phaser",
                              url: "http://www.phaserengine.com/",
                              desc: "简单，有趣，免费开源的HTML5游戏框架"
                        },
                        {
                              classify: "javascript",
                              name: "js教程",
                              fullName: "js参考手册 ",
                              url: "http://www.php.cn/course/list/2.html",
                              desc:
                                    "免费视频教程，比较详细介绍了javascript，初级，中级，高级，还有视频教程，实战项目。"
                        },
                        {
                              classify: "技术标准指南",
                              name: "w3c英文",
                              fullName: "万维网联盟英文网",
                              url: "https://www.w3.org/",
                              desc:
                                    "万维网联盟（W3C）是一个国际社区，它制定开放标准以确保网络的长期发展。"
                        },
                        {
                              classify: "技术标准指南",
                              name: "w3c中文",
                              fullName: "万维网联盟中文网 ",
                              url: "http://www.chinaw3c.org/",
                              desc:
                                    "万维网联盟（W3C）是一个国际社区，它制定开放标准以确保网络的长期发展。"
                        },
                        {
                              classify: "web特效",
                              name: "5iweb",
                              fullName: "5iweb",
                              url: "http://www.5iweb.com.cn/",
                              desc:
                                    "集结了html5 css3动画，手机微信特效，banner幻灯片动画，图片相册特效，产品列表特效，jQuery特效以及前端知识库"
                        },
                        {
                              classify: "移动应用开发框架",
                              name: "React Native",
                              fullName: "React Native中文网",
                              url: "https://reactnative.cn/",
                              desc:
                                    "React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。"
                        },
                        {
                              classify: "图片压缩",
                              name: "JPEGmini",
                              fullName: "JPEGmini",
                              url: "https://www.jpegmini.com/",
                              desc:
                                    "将照片体积缩小50%-80%，使照片更小，而不失真！"
                        },
                        {
                              classify: "转换格式",
                              name: "格式工厂",
                              fullName: "format factory",
                              url: "http://www.pcfreetime.com/",
                              desc:
                                    "可以将不同的格式全部转换成统一的格式，例如可以将不同的图片，jpg、png、gif等不同格式图片统一转换成统一png图片。"
                        },
                        {
                              classify: "web技术文档",
                              name: "MDN 技术文档",
                              fullName: " MDN 技术文档",
                              url:
                                    "https://developer.mozilla.org/zh-CN/docs/Web",
                              desc:
                                    "Mozilla、微软、谷歌、三星、W3C共同的统一文档网站"
                        },
                        {
                              classify: "CSS",
                              name: "css参考手册",
                              fullName: "css参考手册",
                              url: "http://www.css88.com/book/css/",
                              desc: "很全的参考手册"
                        },
                        {
                              classify: "在线测试",
                              name: "跨屏测",
                              fullName: "跨屏测",
                              url: "http://kuapingce.com/",
                              desc: "可以在线测试移动端网页浏览效果"
                        },
                        {
                              classify: "IE不同版本",
                              name: "ie浏览器中文网站",
                              fullName: "ie浏览器中文网站",
                              url: "http://www.iefans.net/",
                              desc: "可以下载不同版本的IE浏览器"
                        },
                        {
                              classify: "检测",
                              name: "浏览器内核检测 ",
                              fullName: "浏览器内核检测 ",
                              url: "https://ie.icoa.cn/",
                              desc: "可在线监测自己电脑浏览器或者手机的内核信息"
                        },
                        {
                              classify: "icons",
                              name: "iconfont",
                              fullName: "iconfont",
                              url: "http://www.iconfont.cn/",
                              desc:
                                    "有着大量的icon图标"
                        },
                              {
                          classify: '轮播图',
                          name: 'Swiper',
                          fullName: 'Swiper',
                          url: 'https://www.swiper.com.cn',
                          desc: '这个是中文网站。可能其他框架没有你想要效果的轮播图，但这个网站绝对有！不仅有pc端，还有移动端。',
                        },
                              {
                          classify: '弹出层',
                          name: 'popper.js',
                          fullName: 'popper.js',
                          url: 'https://popper.js.org/',
                          desc: 'Popper.js 是一个扩展性较好的 tooltips 提示类 JS 插件，不需要依赖 jQuery 库，大小仅为 3.5KB 左右，使用与配置相当简单',
                        },
                          {
                          classify: '响应式的图像Lightbox 插件',
                          name: 'baguetteBox.js',
                          fullName: 'baguetteBox.js',
                          url: 'https://feimosi.github.io/baguetteBox.js',
                          desc: 'baguetteBox.js 是一个简单和易于使用的响应式的图像Lightbox 插件，支持滑动手势在移动设备上使用。纯JavaScript 实现，不依赖第三方库和插件。',
                        },
                          {
                          classify: 'js',
                          name: 'egg',
                          fullName: 'egg',
                          url: 'https://eggjs.org',
                          desc: 'egg.js是阿里推出的基于koa的node开发框架，Egg 的插件机制有很高的可扩展性，一个插件只做一件事。',
                        },
                          {
                          classify: '图表库',
                          name: 'ECharts',
                          fullName: 'ECharts',
                          url: 'http://echarts.baidu.com',
                          desc: '百度开发的一个前端可视化js库，涵盖了大部分报表的制作，包括折线图、柱状图、饼图、散点图等，使用简单，文档详细，示例丰富',
                        },
                          {
                          classify: '图表库',
                          name: 'AntV',
                          fullName: 'AntV',
                          url: 'https://antv.alipay.com',
                          desc: '阿里开发的一个前端可视化库，包含了G2 G6 F2,简单易学，以数据驱动，具有高度的扩展性和易用性，用户无需关注底层的实现细节，几条语句便可快速构建出统计报表，也涵盖了大部分图表。',
                        },
                          {
                          classify: 'SEO优化',
                          name: 'Open Graph协议',
                          fullName: 'The Open Graph protocol',
                          url: 'http://ogp.me/',
                          desc: 'OGP协议，这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、renren采用。对于做企业网站的还是要知道，对于网站被收录，还是非常有用的。',
                        },
                          {
                          classify: 'UI 框架',
                          name: 'Mint UI',
                          fullName: 'Mint UI',
                          url: 'https://mint-ui.github.io',
                          desc: '基于 Vue.js 的移动端组件库',
                        },
                          {
                          classify: 'UI 框架',
                          name: 'WeUI',
                          fullName: 'WeUI',
                          url: 'https://weui.io/',
                          desc: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含button、cell、dialog、toast、article、icon等各式元素。',
                        },
                        //   {
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

