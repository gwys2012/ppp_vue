<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    
  <!-- <el-card class="box-card">-->
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
<!--	</el-card>-->

      <ul >
        <li v-for="user in userList" v-if="seen">
姓名：{{ user.name }} - 年齡：{{ user.age }} - {{seen}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
      userList: [],
      seen: true
    }
  },
  mounted: function() {
    //alert("页面加载完毕");
    this.getInit("黄南南教学123")
    this.getUserList();
  },
  methods:{
    getInit:function(params){
      this.author = params
    },
    getUserList:function(){
      for(let i = 0;i < 10;i++){
        let user = {
          name:`何勝杰${i}`,
          age:`1${i}`
        }
        this.userList.push(user)  
      }
      
      /*
       axios.get("url", params).then(function(){
         
       })
       * */
    }
  }
}
</script>

<style>
	/*@import "./css/index.css";*/
</style>