import request from '../utils/request'

export function getDashboardList() {
  return request({
    url: '/dashboard/list',
    method: 'get',
  })
}