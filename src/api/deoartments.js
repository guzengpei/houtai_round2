import request from '@/utils/request'

// 获取组织架构的数据
export function getDepartment () {
  return request({
    url: '/company/department'
  })
}
// 删除组织架构的部门
export function delDepartment (id) {
  return request({
    method: 'DELETE',
    url: `/company/department/${id}`
  })
}

// 添加组织架构的部门
export function addDepartment (data) {
  return request({
    method: 'POST',
    url: `/company/department`,
    data
  })
}
