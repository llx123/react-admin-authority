import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Layout } from 'antd'

import styles from './index.less'


const { SubMenu } = Menu

const Header = ({
  changeSlider, iconType, logout
}) => {
  let handleClickMenu = e => e.key === 'logout' && logout()

  return (
    <Layout.Header className={styles.header}>
      <div
        className={styles.button}
        onClick={changeSlider}
      >
        <Icon type={iconType} />
      </div>
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {'UserName'}
            </span>}
          >
            <Menu.Item key="logout">
              Sign out
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

Header.propTypes = {
  logout: PropTypes.func,
  changeSlider: PropTypes.func,
  iconType: PropTypes.string,
  // menu: PropTypes.array,
  // user: PropTypes.object,
  // siderFold: PropTypes.bool,
  // changeOpenKeys: PropTypes.func,
}

export default Header
