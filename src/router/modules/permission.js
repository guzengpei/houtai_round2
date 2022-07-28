// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/permission',
  component: Layout,
  name: 'permission',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/permission'),
      // 路由元信息
      meta: { title: '权限管理', icon: 'lock' }
    }
  ]
}
