import { getToken } from '../../../utils/auth'

let token = getToken();

const user = (state = {token}, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...state,
        token: action.token
      }
    case 'DO_LOGIN':
      return {
        ...state,
        token: action.token
      }
    default:
      return {...state}
  }
}

export default user
