// 导出员工的路由规则
import Layout from '@/layout'
export default {
  path: '/approvals',
  component: Layout,
  children: [
    // 二级路由什么都不写就默认进去这里
    {
      path: '', component: () => import('@/views/approvals'),
      // 路由元信息
      meta: { title: '审批', icon: 'tree-table' },
      name: 'approvals'
    }
  ]
}
