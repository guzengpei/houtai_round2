// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/setting',
  component: Layout,
  name: 'setting',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/setting'),
      // 路由元信息
      meta: { title: '公司设置', icon: 'setting' }
    }
  ]
}
