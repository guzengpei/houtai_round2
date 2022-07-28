// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  name: 'employees',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/employees'),
      // 路由元信息
      meta: { title: '员工管理', icon: 'people' }
    }
  ]
}
