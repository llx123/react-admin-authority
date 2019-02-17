import request from '../utils/request'

export function doLogin(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function doLogout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
