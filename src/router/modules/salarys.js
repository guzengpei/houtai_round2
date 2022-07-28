// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/salarys',
  component: Layout,
  name: 'salarys',
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/salarys'),
      // 路由元信息
      meta: { title: '工资', icon: 'money' }
    }
  ]
}
