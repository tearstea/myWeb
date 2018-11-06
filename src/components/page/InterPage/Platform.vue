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
                              classify: "教程",
                              name: "菜鸟教程",
                              fullName: "菜鸟教程",
                              url: "http://www.runoob.com/",
                              desc:
                                    "初学者必备网站，菜鸟教程提供了最全的的web技术基础教程,介绍了HTML教程、CSS教程、Javascript教程、Python基础教程，PHP教程等各种建站基础。同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习如何建站。本站致力于推广W3C标准技术，所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容。"
                        },
                        {
                              classify: "教程",
                              name: "w3cshool",
                              fullName: "w3cshool",
                              url: "https://www.w3cschool.cn/",
                              desc:
                                    "介绍了HTML教程、CSS教程、Javascript教程、Python基础教程，数据库，PHP教程等各种建站基础。同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习如何建站。本站致力于推广W3C标准技术，所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容。"
                        },
                        {
                              classify: "工具库",
                              name: "w3c工具库",
                              fullName: "w3cshool在线工具库",
                              url: "https://123.w3cschool.cn/webtools",
                              desc:
                                    "整理一些常用的在线工具,比如代码工具、站长辅助工具、正则表达式工具、编码转换工具、颜色工具、XML在线工具、在线IDE编码工具、格式化美化工具、CSS在线工具等"
                        },
                        {
                              classify: "教程",
                              name: "慕课网",
                              fullName: "慕课网",
                              url: "https://www.imooc.com/",
                              desc:
                                    "MOOC 是以连通主义理论和网络化学习的开放教育学为基础的。这些课程跟传统的大学课程一样循序渐进地让学生从初学者成长为高级人才。课程的范围不仅覆盖了广泛的科技学科，比如数学、统计、计算机科学、自然科学和工程学，也包括了社会科学和人文学科。慕课课程并不提供学分，也不算在本科或研究生学位里。绝大多数课程都是免费的。Coursera 的部分课程提供收费服务“Signature Track”，可以自由选择是否购买。"
                        },
                        {
                              classify: "教程",
                              name: "极客学院",
                              fullName: "极客学院",
                              url: "https://www.jikexueyuan.com/",
                              desc:
                                    "极客学院 [1]  是中国android开发在线学习平台，汇集了几十名国内顶尖的有多年项目和实战经验的Android开发授课大师，精心制作了上千个高质量视频教程，涵盖了Android开发学习的基础入门、中级进阶，高级提升、项目实战开发等专业的android开发课程。"
                        },
                        {
                              classify: "社区平台",
                              name: "前端网",
                              fullName: "前端网 ",
                              url: "https://www.qdfuns.com/",
                              desc:
                                    "学习交流平台，可以实时了解IT行业各方面的知识与新闻"
                        },
                        {
                              classify: "源码",
                              name: "源码之家",
                              fullName: "源码之家",
                              url: "http://www.mycodes.net/",
                              desc: "提供最新免费网站源码下载"
                        },
                        {
                              classify: "源码",
                              name: "源码搜藏网",
                              fullName: "源码搜藏网",
                              url: "http://www.codesocang.com/",
                              desc:
                                    "网站源码，安卓源码，VIP源码，最新精品织梦模板下载"
                        },
                        {
                              classify: "代码托管",
                              name: "CODING ",
                              fullName: " CODING ",
                              url: "https://coding.net/",
                              desc:
                                    "中国最大的git平台，CODING 的项目管理包含了任务、Wiki、文件等功能。支持多成员协作，并且深度集成了代码仓库的操作与状态。代码托管功能除了提供高性能远端 Git 仓库外，还支持代码审查、Bug 跟踪和一键部署等功能。同时支持多平台协作，真正做到随时随地开发、协作与部署。"
                        },
                        {
                              classify: "社区平台",
                              name: "CSDN",
                              fullName: "CSDN",
                              url: "https://www.csdn.net/",
                              desc:
                                    "CSDN 专注为IT专业人士及IT企业提供“集成化信息传播与服务平台”，CSDN拥有全球最大的中文IT技术社区，形成了网站, 杂志、图书、电子商务、企业服务、教育培训等关联专业业务互动的商业模式。"
                        },
                        {
                              classify: "社区平台",
                              name: "博客园",
                              fullName: "博客园",
                              url: "https://www.cnblogs.com/",
                              desc: "开发者的网上家园，聚集了优秀的技术类博客"
                        },
                        {
                              classify: "教程",
                              name: "网易课堂",
                              fullName: "网易云课堂",
                              url: "https://study.163.com/",
                              desc:
                                    "网易云课堂立足于实用性的要求，网易云课堂与多家教育、培训机构建立合作，课程数量已达4100+，课时总数超50000,涵盖实用软件、IT与互联网、外语学习、生活家居、兴趣爱好、职场技能、金融管理、考试认证、中小学、亲子教育等十余大门类。"
                        },
                        {
                              classify: "代码托管&社区",
                              name: "GitHub",
                              fullName: "GitHub",
                              url: "https://github.com/",
                              desc:
                                    "gitHub是一个面向开源及私有软件项目的托管平台，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能"
                        },
                        {
                              classify: "代码托管&社区",
                              name: "GitLab",
                              fullName: "GitLab",
                              url: "https://gitlab.com/",
                              desc:
                                    "GitLab是由GitLabInc开发，使用MIT许可证的基于网络的Git仓库管理工具，且具有wiki和issue跟踪功能。使用Git作为代码管理工具，并在此基础上搭建起来的web服务。与github不同的是，可以搭建免费私人仓库"
                        },
                        {
                              classify: "服务器&域名注册",
                              name: "腾讯云",
                              fullName: "腾讯云",
                              url: "https://cloud.tencent.com/",
                              desc:
                                    "腾讯云—腾讯倾力打造的云计算品牌，以卓越科技能力助力各行各业数字化转型，为全球客户提供领先的云计算、大数据、人工智能服务，以及定制化行业解决方案。"
                        },
                        {
                              classify: "编辑器",
                              name: " VS Code",
                              fullName: "Visual Studio Code",
                              url: "https://code.visualstudio.com/",
                              desc:
                                    "Visual Studio Code是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比 Diff、GIT 等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。软件跨平台支持 Win、Mac 以及 Linux。"
                        },
                        {
                              classify: "编辑器",
                              name: "WebStorm",
                              fullName: "WebStorm",
                              url: "https://www.jetbrains.com/webstorm/",
                              desc:
                                    "WebStorm 是jetbrains公司旗下一款JavaScript 开发工具。目前已经被广大中国JS开发者誉为“Web前端开发神器”、“最强大的HTML5编辑器”、“最智能的JavaScript IDE”等。与IntelliJ IDEA同源，继承了IntelliJ IDEA强大的JS部分的功能。"
                        },
                        {
                              classify: "编辑器",
                              name: "Atom",
                              fullName: "Atom",
                              url: "https://atom.io/",
                              desc:
                                    "Atom 是 Github 专门为程序员推出的一个跨平台文本编辑器。具有简洁和直观的图形用户界面，并有很多有趣的特点：支持CSS，HTML，JavaScript等网页编程语言。它支持宏，自动完成分屏功能，集成了文件管理器。"
                        },
                        {
                              classify: "社区平台",
                              name: "Atom 中文社区",
                              fullName: "Atom 中文社区",
                              url: "http://atom-china.org/",
                              desc:
                                    "主打交流平台，可以提出关于ATIOM实用过程中出现的问题，也可以在这个平台中寻求到解决方案"
                        },
                        {
                              classify: "编辑器",
                              name: "notepad++",
                              fullName: "notepad++",
                              url: "https://notepad-plus-plus.org/",
                              desc:
                                    "Notepad++++ 是一款非常有特色的编辑器，软件小巧高效，支持27种编程语言，通吃C,C++ ,Java ,C#, XML, HTML, PHP,JS 等。是开源软件，可以免费使用，同时也支持各类流行的计算机编程语言。编辑器可以运行在微软的windows系统环境下，它的使用是受GPL许可证保护的，支持的语言：C、C++、Java、C#、XML、HTML、PHP、Javascript。"
                        },
                        {
                              classify: "编辑器",
                              name: "Komodo",
                              fullName: "Komodo Edit",
                              url: "https://www.activestate.com/komodo-edit",
                              desc:
                                    "Komodo 是一个跨平台支持多种程序语言的Integrated Development Environment (IDE)软件,目前他支持了在Windows与Linux上,Perl、Python及JavaScript等的程序语言开发,以及多种程序语言语法不同颜色标注."
                        },
                        {
                              classify: "编辑器",
                              name: "Sublime Text3",
                              fullName: "Sublime Text3",
                              url: "https://www.sublimetext.com/",
                              desc:
                                    "Sublime Text是一款具有代码高亮、语法提示、自动完成且反应快速的编辑器软件，不仅具有华丽的界面，还支持插件扩展机制，用她来写代码，绝对是一种享受。相比于难于上手的Vim，浮肿沉重的Eclipse，VS，即便体积轻巧迅速启动的Editplus"
                        },
                        {
                              classify: "图库",
                              name: "Pixabay",
                              fullName: "Pixabay",
                              url: "https://pixabay.com/",
                              desc:
                                    "社区分享了1.5 百万张免费图片和视频。图库容量很大，是外国的分享网站"
                        },
                        {
                              classify: "图库",
                              name: "Life Of Pix",
                              fullName: "Life Of Pix",
                              url: "https://stock.adobe.com/",
                              desc: "一个外国的图片网站，分享了大量精美素材"
                        },
                        {
                              classify: "图库",
                              name: "pexels",
                              fullName: "pexels",
                              url: "https://www.pexels.com/",
                              desc: "分享了大量无水印图片，可以直接使用"
                        },
                        {
                              classify: "图库",
                              name: "Unsplash",
                              fullName: "Unsplash",
                              url: "https://unsplash.com/",
                              desc:
                                    "需要用英文搜索，有大量的图片，可以用来进行二次创作"
                        },
                        {
                              classify: "图库",
                              name: "Magdeleine",
                              fullName: "Magdeleine",
                              url: "https://magdeleine.co/",
                              desc:
                                    "可以通过一种颜色来搜索色调相似的图片，可以保持一篇文章图片风格一致。"
                        },
                        {
                              classify: "图库",
                              name: "Cupcake",
                              fullName: " Cupcake",
                              url: "http://cupcake.nilssonlee.se/",
                              desc: "一家偏爱冷色调的图片网站，免费图库"
                        },
                        {
                              classify: "设计工具",
                              name: "ARKIT作图",
                              fullName: "ARKIT作图",
                              url: "https://arkie.cn/",
                              desc:
                                    "ARKIE作图(阿几作图)是一款智能设计工具,只需输入文字,即可一键生成海报。"
                        },
                        {
                              classify: "开源镜像",
                              name: "GitTab",
                              fullName: "GitTab",
                              url:
                                    "https://gittab.cn/tags/#%E5%BC%80%E6%BA%90%E9%95%9C%E5%83%8F",
                              desc:
                                    "由于镜像网站很多，在这个网站中没有写进来，本站长专门作了收录，于是把所有的镜像网址专门放在一个博客中，这个博客包含了很多，如阿里云镜像，清华大旭镜像，搜狐镜像，还有各大高校镜像"
                        },
                        {
                              classify: "缩短网址",
                              name: "SUO",
                              fullName: "短网址",
                              url: "http://suo.im/",
                              desc:
                                    "很多时候我们分享一些东西的时候会包含链接，但过长的链接很影响我们的阅读体验，所以通常的做法会通过短网址网站来进行网址缩短。SUO 可以批量操作"
                        },
                        {
                              classify: "缩短网址",
                              name: "短网址",
                              fullName: "新浪短网址",
                              url: "http://sina.lt/",
                              desc: "可以选择子想要缩短网址的后缀"
                        },
                        {
                              classify: "学习平台",
                              name: "软件自学网",
                              fullName: "软件自学网 ",
                              url: "http://www.rjzxw.com/",
                              desc:
                                    "软件自学网是一个分享AutoCAD、PS、flash、3DMAX、PROE、Excel、Word、CorelDARAW、UG、AI等各类视频教程的自学网站"
                        },
                        {
                              classify: "命令行工具",
                              name: "MobaXterm",
                              fullName: " MobaXterm",
                              url: "https://mobaxterm.mobatek.net/",
                              desc:
                                    "MobaXterm，是一款增强型终端、X服务器和Unix命令集（GNU/ Cygwin）封装在一个单一的便携式exe文件。MobaXterm可以开启多个终端视窗，以最新的X服务器为基础的X.Org，可以轻松地来试用Unix / Linux上的GNU Unix命令。"
                        },
                        {
                              classify: "git命令行工具",
                              name: "Git",
                              fullName: "Git",
                              url: "https://git-scm.com/",
                              desc:
                                    "Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。"
                        },
                        {
                              classify: "npm命令行工具",
                              name: "Node.js",
                              fullName: " Node.js",
                              url: "http://nodejs.cn/",
                              desc:
                                    "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 Node.js 的包管理器 npm，是全球最大的开源库生态系统。"
                        },
                        {
                              classify: "脚本语言",
                              name: "Ruby",
                              fullName: " Ruby",
                              url: "https://ruby-china.org/",
                              desc: "https://ruby-china.org/"
                        },
                        {
                              classify: "Blog生成工具",
                              name: "Jekyll",
                              fullName: " Jekyll",
                              url: "http://jekyllcn.com/",
                              desc: "将纯文本转换为静态博客网站"
                        },
                        {
                              classify: "软件收集网站",
                              name: "I Tell You",
                              fullName: "I Tell You",
                              url: "http://msdn.itellyou.cn/",
                              desc:
                                    "比较良心的个人收录软件网站，收集了大量操作系统、应用程序、CRM软件等原版软件，可以直接在此网站下载，非常便捷"
                        },
                        {
                              classify: "社区平台",
                              name: "Stack Overflow",
                              fullName: " Stack Overflow",
                              url: "https://stackoverflow.com/",
                              desc:
                                    "每个月，超过5000万开发人员来到Stack Overflow学习，分享他们的知识，并建立自己的职业生涯。"
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
                              classify: "中文it书籍",
                              name: "中文在线教程书籍",
                              fullName: "中文在线教程书籍",
                              url:
                                    "https://github.com/justjavac/free-programming-books-zh_CN",
                              desc:
                                    "这是github上的一个开源项目，大量免费的计算机编程类中文书籍。收集了从编程语言到操作系统各个方面的中文在线免费书籍和教程。"
                        },
                        {
                              classify: "配色",
                              name: "Color Hunt",
                              fullName: "Color Hunt",
                              url: "https://colorhunt.co/",
                              desc:
                                    "提供了很多很好看的网站页面配色方案，可一键复制使用"
                        },
                        {
                              classify: "字体",
                              name: "有字库",
                              fullName: "有字库",
                              url: "https://www.youziku.com/",
                              desc:
                                    "一个免费在线字体网站，无需现在字体文件，直接在代码里引入提供的链接，就可使用各种字体了"
                        },
                        {
                              classify: "网站浏览量统计",
                              name: "百度统计",
                              fullName: "百度统计",
                              url: "https://tongji.baidu.com/",
                              desc:
                                    "对于拥有自己网站的老板、it行业人士，可以用这个软件，实时监控自己网站的浏览量"
                        },
                        {
                              classify: "中文IT资料",
                              name: "Computer Science Learning Notes",
                              fullName: "Computer Science Learning Notes",
                              url: "https://github.com/CyC2018/CS-Notes",
                              desc:
                                    "github仓库项目，包含了“算法pencil2	操作系统computer	网络cloud	面向对象couple	数据库floppy_disk	Java coffee	系统设计bulb	工具hammer	编码实践speak_no_evil”等方面的中文资料，对于英语有硬伤的程序猿可谓是福音。"
                        },
                        {
                              classify: "学习平台",
                              name: "freeCodeCamp",
                              fullName: "freeCodeCamp",
                              url: "https://www.freecodecamp.org/",
                              desc:
                                    "课程体系十分合理，而且讲练结合。更重要的是，完全免费。"
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
                  if (rowIndex % 2) {
                        return "warning-row";
                  } else if (rowIndex % 3) {
                        return "success-row";
                  }
                  return "";
            }
      }
};
</script>
