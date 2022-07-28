// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/attendances',
  component: Layout,
  name: 'attendances',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/attendances'),
      // 路由元信息
      meta: { title: '考勤', icon: 'skill' }
    }
  ]
}
