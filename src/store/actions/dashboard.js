import * as types from './type'
import { getDashboardList } from '../../services/dashboard'

export const setData = (aa) => {
  return { ...aa }
}

export const getDashboard = (text) => dispatch => {
  return new Promise((resolve, reject) => {
    getDashboardList().then(response=>{
      const data = response.data
      dispatch(setData({
        type: types.DASHBOARD_LIST,
        data
      }))
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })    
}

