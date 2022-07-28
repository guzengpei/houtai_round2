// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/departments',
  component: Layout,
  name: 'departments',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/departments'),
      // 路由元信息
      meta: { title: '组织架构', icon: 'tree' }
    }
  ]
}
