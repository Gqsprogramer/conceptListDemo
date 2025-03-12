import { createRouter,createWebHashHistory } from "vue-router";
import conceptBox from "../components/conceptBox.vue";
import conceptListBox from "../components/conceptListBox.vue";
import testPage from '../components/testPage.vue'

const router=createRouter({
  // 浏览器网页地址的加载
  history:createWebHashHistory(),

  // 高亮显示的路由类名，可用于描述路由选中下的类型渲染
  linkActiveClass:'router-active',

  routes:[
    {path:'/',redirect:'/main'},
    {path:'/main',
      component:conceptBox,
      redirect:'/main/test',
      children:[
        {path:'test',component:testPage},
      ]
    },
    
  ]
})

export default router