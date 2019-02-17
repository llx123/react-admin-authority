import * as types from './type'
import { doLogin, doLogout } from '../../services/login'
import { setToken, removeToken } from '../../utils/auth'

export const setInfos = (aa) => {
  return { ...aa }
}
export const getInfo = (text) => dispatch => {
  dispatch(setInfos({
    type: types.USER_INFO,
    token: text
  }))
}

export const login = (text) => dispatch => {
  return new Promise((resolve, reject) => {
    doLogin('admin','admin').then(response=>{
      const data = response.data
      dispatch(setInfos({
        type: types.DO_LOGIN,
        token: data.token
      }))
      setToken(data.token)
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })    
}

export const logout = (text) => dispatch => {
  return new Promise((resolve, reject) => {
    doLogout('admin','admin').then(response=>{      
      dispatch(setInfos({
        type: types.DO_LOGOUT,
        token: ""
      }))
      removeToken()
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })    
}
