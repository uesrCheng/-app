<template>
  <div class="hello">
  	<yhSearch></yhSearch>
    <div class="nav-wrap">
       <div class="nav">
        <ul class='navlist' >
          <li  :class="{ active : navlist.isactive}" v-for="(navlist, key) in navlists" :key="navlist.id" @click="ChangeClass(key)">
            {{ navlist.name }}
          </li>
        </ul>
      </div>
     <div class="more"><img src="../../assets/et-more.png"></div>
    </div>
    <component v-bind:is="Whitchinfor"  v-bind:infor="infor"></component>
    <yhFooter></yhFooter>
  </div>
</template>

<script>
import yhSearch from "../Common/yhSearch";
import GFguojia from "../Common/GFguojia";
import yhFooter from "../Common/yhFooter";
export default {
  name: "yhMain",
  data() {
    return {
      allinfor: [
        "GFguojia",
        "GFguojia",
        "TJbiaozhun",
        "TJdifang",
        "shuyu",
        "toutiao",
        "tupian",
        "moxing",
        "zhaobiao",
        "kuzhan"
      ],
      Whitchinfor: "GFguojia",
      infor: [
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》"
      ],
      GuoGuiFan: [
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》",
        "《建筑设计防火规范 GB50016-2014》施行2015年5月1日",
        "《建筑设计防火规范 GB50016-2014》(2018年修订版施行2018年10月1日)",
        "《住宅设计规范 GB50096-2011》"
      ],
      DiGuiFan: [
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012",
        "【广西省】居住建筑节能设计标准DBJ45/029-2016",
        "【北京市】公建节能设计标准DBJ45/029-2017",
        "【北京市】蒸压加气混凝土墙面抹灰施工技术规程DBJ/T01-68-2012"
      ],
      navlists: [
        { name: "国家规范", isactive: true },
        { name: "地方规范", isactive: false },
        { name: "标准图集", isactive: false },
        { name: "地方图集", isactive: false },
        { name: "术语", isactive: false },
        { name: "头条", isactive: false },
        { name: "图片", isactive: false },
        { name: "模型", isactive: false },
        { name: "招标", isactive: false },
        { name: "酷站", isactive: false }
      ]
    };
  },
  components: {
    yhSearch,
    GFguojia,
    yhFooter
  },
  methods: {
    ChangeClass: function(x) {
      for (let index = 0; index < this.navlists.length; index++) {
        this.navlists[index].isactive = false;
        this.navlists[x].isactive = true;
      }
      this.Whitchinfor = this.allinfor[x];

      if (x == 0) {
        this.infor = this.GuoGuiFan;
      } else if (x == 1) {
        this.infor = this.DiGuiFan;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 12.8rem;
}
.nav-wrap {
  width: 12.8rem;
  height: 1.2rem;
  overflow: hidden;
  position: fixed;
  background: #ffffff;
  border-bottom: #B7B7B7 1px solid;
}

.nav {
  width: 12.8rem;
  overflow: scroll;
  
  background: #efefef;
}
.navlist {
  width: 170%;
  box-sizing: border-box;
  overflow: hidden;
  background: #ffffff;
}
.more {
  position: fixed;
  right: 0;
  top: 1.9rem;
  padding: 0.25rem 0.4rem;
  box-sizing: border-box;
  background: #ffffff;
  opacity: 0.9;
   box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);  
   border-top-left-radius: 11%;
    border-bottom-left-radius: 11%;
}
.more img{
  width: 100%;
  height: 100%;
}
.navlist li {
  list-style: none;
  float: left;
  padding:0.45rem 0.4rem;
  line-height: 0.5rem;
}
.active {
  color: red;
}
</style>
