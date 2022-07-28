// 设置路由守卫 访问权限拦截
import router from '@/router'
import store from '@/store'
// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 设置路由路径白名单
const whiteList = ['/404', '/login']
// 开始设置路由守卫
router.beforeEach(async (to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 获取用户基本资料
      // 用户中有id的话就不用获取了
      if (!store.state.user.userInfo.userId) {
        await store.dispatch('user/getUserInfo')
      }
      // console.log(store.state.user.userInfo)
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
  nprogress.done()
})
router.afterEach(() => {
  nprogress.done()
})
