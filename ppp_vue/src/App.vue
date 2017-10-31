<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <firstcomponent></firstcomponent>
    
    
    <ul>
      <li><router-link to="/first" tag="div">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
      <li><router-link to="/404">我是404頁</router-link></li>
    </ul>
    
    <hr/>
    
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstcomponent from './pages/firstcomponent.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App  hesj and hnn'
    }
  },
  components: { firstcomponent }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
