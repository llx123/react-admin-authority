import React, { Component } from 'react';
import Routes from './routes';
import AllComponents from './components/index'
import DocumentTitle from 'react-document-title';

import { Layout, Icon } from 'antd';

const { Header, Footer, Content, } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };
  componentWillMount() {
    
  }
  componentDidMount() {
    
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    const SiderMenu = AllComponents['SiderMenu']
    return (
      <DocumentTitle title="react-admin">
        <Layout style={{ height: '100%' }} >
          <SiderMenu collapsed={collapsed}/>
          <Layout >
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content>
              <Routes/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              React-Admin ©{new Date().getFullYear()} Created by llx123
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}


export default App;
