import React, { Component } from 'react'

import { getDashboardList } from '../../services/dashboard'


class Dashboard extends Component {
  
  componentDidMount() {
    getDashboardList()
  }
  render() {
    return (
      <h2>Dashboard</h2>
    )
  }
}

export default Dashboard