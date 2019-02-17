import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'
import styles from './index.less'

const Bread = ({ menu, location }) => {  
  // 匹配当前路由
  let pathArray = []
  let current
  let currentBefore
  
  for (let index in menu) {
    if (menu[index]['children']) {
      for (let i in menu[index]['children']) {
        currentBefore = menu[index]
        let item = menu[index]['children'][i]
        if (item.path && pathToRegexp(item.path).exec(location.pathname)) {
          current = item
          break
        }
      }
      break
    }
    if (menu[index].path && pathToRegexp(menu[index].path).exec(location.pathname)) {
      current = menu[index]
      break
    }
  }  

  let paramMap = {}
  if (!current) {
    pathArray.push(menu[0] || {
      id: 1,
      icon: 'laptop',
      name: 'Dashboard',
    })
    pathArray.push({
      id: 404,
      name: 'Not Found',
    })
  } else {
    currentBefore?pathArray.push(currentBefore,current):pathArray.push(current)
  }

  if(location.pathname !== '/dashboard') {
    pathArray.unshift(menu[0])
  }
  
  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>{item.icon
        ? <Icon type={item.icon} style={{ marginRight: 4 }} />
        : ''}{item.title}</span>
    )
    return (
      <Breadcrumb.Item key={key}>
        {((pathArray.length - 1) !== key && !item.children)
          ? <Link to={pathToRegexp.compile(item.path || '')(paramMap) || '#'}>
            {content}
          </Link>
          : content}
      </Breadcrumb.Item>
    )
  })

  return (
    <div className={styles.bread}>
      <Breadcrumb>
        {breads}
      </Breadcrumb>
    </div>
  )
}

Bread.propTypes = {
  menu: PropTypes.array,
  location: PropTypes.object,
}

export default Bread
