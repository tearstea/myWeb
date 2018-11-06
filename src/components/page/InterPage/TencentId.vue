<template>
  <div class="table-frame">
    <el-table :data="tableData5" style="width: 100%" border :row-class-name="tableRowClassName">
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="公众号：">
              <el-popover placement="right-start" title="扫一扫，可关注" trigger="hover">
                <img :src="props.row.imgUrl" alt="沟渠网">
                <el-button type="primary" plain size="mini" round slot="reference">
                  {{ props.row.name }}
                </el-button>
              </el-popover>
            </el-form-item>
            <el-form-item label="公众号简介：">
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
      <el-table-column label="公众号" prop="name" sortable>
      </el-table-column>
      <el-table-column label="二维码">
        <template slot-scope="props">
          <el-popover placement="left-start" :title="props.row.name" trigger="hover">
            <img :src="props.row.imgUrl" alt="沟渠网">
            <el-button type="success" size="mini" round slot="reference">
              <a class="classB">GO</a>
            </el-button>
          </el-popover>
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
                              classify: "人工智能",
                              name: "Python",
                              imgUrl: require("@/assets/images/tencentid/1_python.png"),
                              desc:
                                    "如果想关注人工智能，想学习Python的可以往这扫"
                        },
                        {
                              classify: "js",
                              name: "JavaScript",
                              imgUrl: require("@/assets/images/tencentid/2-javascript.png"),
                              desc:
                                    "面向JavaScript爱好人员提供：前端最新资讯、原创内容、JavaScript、HTML5、Ajax、jQuery、Node.js等一系列教程和经验分享。"
                        },
                        {
                              classify: "框架",
                              name: " React实战",
                              imgUrl: require("@/assets/images/tencentid/3_react.png"),
                              desc:
                                    "从原理、源码和应用等多个角度深入研究React的实战，并持续关注React生态圈的发展"
                        },
                        {
                              classify: "框架",
                              name: "Angular中文社区",
                              imgUrl: require("@/assets/images/tencentid/4_angular.png"),
                              desc:
                                    " Angular 中文社区是由谷歌开发技术推广部发起，与国内众多自发成立的 Angular 社区联合，共同为广大中国开发者提供最新 Angular 资源/教程/反馈渠道的社区品牌之一"
                        },
                        {
                              classify: "node",
                              name: "Node全栈开发者 ",
                              imgUrl: require("@/assets/images/tencentid/5_node.png"),
                              desc: "该公众号记录了个人的全栈开发者历程"
                        },
                        {
                              classify: "C/C++",
                              name: "程序设计及计算机基础学习空间",
                              imgUrl: require("@/assets/images/tencentid/6_chengxu.png"),
                              desc:
                                    "程序设计（C/C++/JAVA/DS）与大学计算机基础课程学习资源分享"
                        },
                        {
                              classify: "C/C++",
                              name: " C/C++的编程教室",
                              imgUrl: require("@/assets/images/tencentid/7_cjiajia.png"),
                              desc: "讨论和学习C/C++的编程知识"
                        },
                        {
                              classify: "PHP",
                              name: " PHP自学中心",
                              imgUrl: require("@/assets/images/tencentid/8_php.png"),
                              desc:
                                    "php自学中心-和广大爱好学习PHPer提供了PHP教程，为大家提供PHP笔记题，学习方法，视频教程，学习文档等资源。php自学中心主要以学习和分享为主题，每天分享一篇有代表性的技术文章，让学习成为一种习惯"
                        },
                        {
                              classify: "PHP",
                              name: "PHP技术大全",
                              imgUrl: require("@/assets/images/tencentid/9_phpji.png"),
                              desc:
                                    "本公众号对PHP开发技术进行全面透析，所含内容适合各个阶段的PHP developer阅读和收藏"
                        },
                        {
                              classify: "java",
                              name: "java学习",
                              imgUrl: require("@/assets/images/tencentid/10_javaxue.png"),
                              desc:
                                    "关注公众号免费获取整套java学习视频资料让你更快的学习到相关的java知识！针对java零基础学习者！同时也针对企业就业者！"
                        },
                        {
                              classify: "java",
                              name: "Java后端技术 ",
                              imgUrl: require("@/assets/images/tencentid/11_javahou.png"),
                              desc:
                                    "专注Java相关技术：SSM、Spring全家桶、微服务、MySQL、MyCat、集群、分布式、中间件、Linux、网络、多线程，偶尔讲点运维Jenkins、Nexus、Docker、ELK，偶尔分享些技术干货，致力于Java全栈开发！"
                        },
                        {
                              classify: "java",
                              name: "java技术栈",
                              imgUrl: require("@/assets/images/tencentid/12_javazhan.png"),
                              desc:
                                    "专注分享Java技术干货，包括Java多线程、JVM、Spring Boot、Spring Cloud、Intellij IDEA、Dubbo、Zookeeper、Redis、架构设计、微服务、消息队列、容器、Git、面试题、最新动态等。"
                        },
                        {
                              classify: "Python",
                              name: "Python爱好者社区",
                              imgUrl: require("@/assets/images/tencentid/13_pythonai.png"),
                              desc:
                                    "人生苦短，我用Python。分享Python相关的技术文章、工具资源、精选课程、视频教程、热点资讯、学习资料等。每天自动更新和推送。"
                        },
                        {
                              classify: "测试",
                              name: "51Testing软件测试网",
                              imgUrl: require("@/assets/images/tencentid/14_ceshi.png"),
                              desc:
                                    "51Testing软件测试网提供各种线上招聘、线上课程等网络服务，出版软件测试系列丛书及电子杂志，组织线上技术交流活动；同时还举办多种线下公益活动，如软件测试沙龙、软件测试专场招聘会等。"
                        },
                        {
                              classify: " Android",
                              name: " Android技术杂货铺",
                              imgUrl: require("@/assets/images/tencentid/15_android.png"),
                              desc:
                                    "专注分享Android开发中的各种技术点、学习教程、流行框架、经验之谈，奇技淫巧等等"
                        },
                        {
                              classify: " Android",
                              name: " 安卓巴士Android开发者门户",
                              imgUrl: require("@/assets/images/tencentid/16_androidbashi.png"),
                              desc:
                                    "专业的移动开发者门户，提供Android开发学习资料，分享有价值的互联网信息。"
                        },
                        {
                              classify: "iOS ",
                              name: "iOS开发",
                              imgUrl: require("@/assets/images/tencentid/17_ios.png"),
                              desc:
                                    "iOS、iPhone资讯，万名iOS开发者、swift开发、果粉聚集，参与技术讨论，整理开发技巧，分享创业经验！享受生活、热爱编程！"
                        },
                        {
                              classify: "SQL",
                              name: "SQL数据库开发",
                              imgUrl: require("@/assets/images/tencentid/18_sql.png"),
                              desc:
                                    "原SQL学习之路，分享关于SQL Server数据库、Mysql数据库和Oracle数据库的技术知识，技术资讯，SQL语句优化，数据库故障排除和数据库学习资源。"
                        },
                        {
                              classify: "大数据",
                              name: " 大数据和云计算技术",
                              imgUrl: require("@/assets/images/tencentid/19_dashuju.png"),
                              desc:
                                    "专注大数据和云计算技术，坚持原创，欢迎和各位业界朋友相互交流和学习。 我们坚持：有深度，技术追根溯源；有态度，无关乎对错。"
                        },
                        {
                              classify: "服务器",
                              name: "高性能服务器开发",
                              imgUrl: require("@/assets/images/tencentid/20_fuwuqi.png"),
                              desc:
                                    "推崇基础学习与原理理解，不谈大而空的架构与技术术语，分享接地气的服务器开发实战技巧与项目经验，实实在在分享可用于实际编码的编程知识"
                        },
                        {
                              classify: "Linux",
                              name: "Linux中国",
                              imgUrl: require("@/assets/images/tencentid/21_linux.png"),
                              desc:
                                    "十万级技术订阅号，依托于『Linux中国』（https://linux.cn/）社区，专注于 Linux 学习、技术研究、开源思想传播。"
                        },
                        {
                              classify: "GitHub",
                              name: "GitHub精品推荐",
                              imgUrl: require("@/assets/images/tencentid/22_github.png"),
                              desc:
                                    "每天推荐一个GitHub上精品开源库。给您提供好玩、有用、热门的代码资源和资讯。"
                        },
                        {
                              classify: "人工智能",
                              name: " 全球人工智能",
                              imgUrl: require("@/assets/images/tencentid/23_ai.png"),
                              desc: "关注人工智能和数字货币动态"
                        }
                        // {
                        //       classify: '',
                        //       name: '',
                        //       imgUrl: require("@/assets/images/tencentid/1_python.png"),
                        //       desc: '',
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

