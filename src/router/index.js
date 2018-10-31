import Vue from 'vue'
import Router from 'vue-router'
// 导入自定义组件
import HeaderId from '@/components/HeaderId'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 声明自定义组件
export default new Router({
  // 组件首次执行的页面序列是路由的第一个
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HeaderId',
      component: HeaderId
    }
  ]
})
