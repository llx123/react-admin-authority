import React, { Component } from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
import routes from '../../routes/config'
import { getToken } from '../../utils/auth'
import SiderMenu from './Menu'
import styles from './index.less'

const { Sider } = Layout;

@withRouter
class MySider extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.location
    this.state = {
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      pathname
    };
  }
  static getDerivedStateFromProps(props, state) {
    const state1 = MySider.setMenuOpen(props, state);
    return {
      ...state1
    }
  }
  static setMenuOpen = (props, state) => {
    const { pathname } = props.location;
    return {
      openKey: state.pathname === pathname ? state.openKey  : pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname,
      collapsed: props.collapsed,
      pathname
    };
  };

  openMenu = v => {
    this.setState({
      openKey: v.length ? v[v.length - 1] : ""
    })
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  render() {
    const { selectedKey, openKey, collapsed } = this.state;
    
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
      >
        <div className={styles.logo}>React-Admin</div>
        <SiderMenu
          menus={routes.menus}
          mode="inline"
          token={getToken()}
          selectedKeys={[selectedKey]}
          openKeys={[openKey]}
          onOpenChange={this.openMenu}
          onClick={this.menuClick}
        />
      </Sider>
    )
  }
}

export default MySider;
