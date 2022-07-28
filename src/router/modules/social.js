// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/social',
  component: Layout,
  name: 'social',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/social'),
      // 路由元信息
      meta: { title: '社保', icon: 'table' }
    }
  ]
}
