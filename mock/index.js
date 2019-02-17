import Mock from 'mockjs'
import User from './user'
import Dashboard from './dashboard'

// 登录、登出
Mock.mock(/\/user\/login/, 'post', User.login)
Mock.mock(/\/user\/info/, 'get', User.info)
Mock.mock(/\/user\/logout/, 'post', User.logout)

// dashboard
Mock.mock(/\/dashboard\/list/, 'get', Dashboard)

export default Mock
