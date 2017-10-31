<template>
  <div>
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
    <h2>{{time}}</h2>
    <h2 v-text="time"></h2>
    <div v-html="time"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "微信公众号 jinkey-love",
      time:"<h3>2017年10月30日14:32:07</h3>"
    }
  }
}
</script>

<style>
</style>