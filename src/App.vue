<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<!--
  这里一般不需要动
1、main.js是我们的入口文件，主要作用是初始化vue实例，并引入所需要的插件
2、App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。
   所以我将router标示为App.vue的子组件。
3、index.html文件入口
4、src放置组件和入口文件
5、node_modules为依赖的模块
6、config中配置了路径端口值等
7、build中配置了webpack的基本配置、开发环境配置、生产环境配置等

-->

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
