<template>
<div class="table-frame">
 <el-table
    :data="tableData5"
    style="width: 100%"
     border
     :row-class-name="tableRowClassName">
    <el-table-column type="expand" label="详情">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand" >
          <el-form-item label="网站全名：">
            <a :href="props.row.url" class="classA" rel="nofollow noopener noreferrer" target="_blank">
              <el-button
                size="mini"
                round>{{ props.row.fullName }}
                </el-button>
            </a>
          </el-form-item>
          <el-form-item label="网站地址：">
            <span  class="spanA">
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
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      label="分类"
      prop="classify"
      sortable>
    </el-table-column>
    <el-table-column
      label="简称"
      prop="name"
      sortable>
    </el-table-column>
    <el-table-column
      label="链接">
      <template slot-scope="props">
          <a :href="props.row.url" class="classB" rel="nofollow noopener noreferrer" target="_blank">
            <el-button
              type="success"
              size="mini"
              round>GO</el-button>
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
          classify: '资讯',
          name: '中國旅游網',
          fullName: '中國旅游網',
          url: 'http://www.cntour.cn/',
          desc: '中国文旅门户网站',
        },
           {
          classify: '资讯',
          name: '穷游锦囊',
          fullName: '穷游锦囊',
          url: 'http://guide.qyer.com/',
          desc: '提供旅游指南书下载，自助游攻略，旅游攻略分享社区',
        },
           {
          classify: '旅途摄影',
          name: '画旅途',
          fullName: '画旅途',
          url: 'http://www.hualvtu.com/',
          desc: '分享了很多旅行地的精美摄影照片',
        },
           {
          classify: '旅游分享',
          name: 'Feekr',
          fullName: 'Feekr',
          url: 'http://www.feekr.com/',
          desc: '分享了旅途中的美景，并作文字介绍',
        },
           {
          classify: '旅游分享',
          name: '相约久久',
          fullName: '相约久久',
          url: 'https://www.meet99.com/',
          desc: '不仅有国内景点推荐，还有国外景点推荐，对于不知道往哪游的旅友，是个不错的地方',
        },
           {
          classify: '旅游分享',
          name: '游多多',
          fullName: '游多多',
          url: 'http://www.yododo.com/',
          desc: '有着非常多的景点全景分享，并佐以文字，非常详细。也可以把自己旅游的美景生活上传。',
        },
        //    {
        //   classify: '',
        //   name: '',
        //   fullName: '',
        //   url: '',
        //   desc: '',
        // },
        ]
      }
    },
  methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'success-row';
        } else if(rowIndex % 2) {
          return 'warning-row';
        } else if (rowIndex % 3) {
          return 'success-row';
        }
        return '';
      }
    },
  
  }
</script>
