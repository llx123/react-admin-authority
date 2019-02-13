import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import routes from '../../routes/config';
import SiderMenu from './Menu';
import styles from './index.less';

const { Sider } = Layout;

class MySider extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount() {
    
  }
  menuClick = e => {

  };
  openMenu = v => {

  };
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        theme="light"
      >
        <div className={styles.logo} />
        <SiderMenu
          menus={routes.menus}
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
          onClick={this.menuClick}
          onOpenChange={this.openMenu}
        />
      </Sider>
    )
  }
}

export default withRouter(MySider);
