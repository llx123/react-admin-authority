
const dashboard = (state = {  
  browser: [],
  comments: [],
  completed: [],
  cpu: {
    cpu: 0,
    data: [],
    space: 0,
    usage: 0,
  },
  numbers: [],
  quote: {},
  recentSales: [],
  sales: [],
  user: {
    avatar: "",
    email: "",
    name: "",
    sales: 0,
    sold: 0,
  }
  }, action) => {  
  switch (action.type) {
    case 'DASHBOARD_LIST':
      return {
        ...state,
        ...action.data,
      }
    default:
      return {...state}
  }
}

export default dashboard
