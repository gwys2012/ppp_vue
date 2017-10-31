// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './pages/secondcomponent.vue'
import error404 from './pages/404.vue'


// 创建一个路由器实例
// 并且配置路由规则
let routes = [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent,
      chilrd:[
        {
          path: '/first',
          component: First
        }
      ]
    },
    {
      path: '/404',
      component: error404
    }
  ]

export default routes
