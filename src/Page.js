import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Routes from './routes'
import { logout } from './store/actions'
import config from './routes/config'
import AllComponents from './components/index'
import DocumentTitle from 'react-document-title'

import { Layout } from 'antd'

const { Footer, Content, } = Layout;

const mapStateToPorps = state => {
  const { user } = state
  return { user };
};
const mapDispatchToProps = dispatch => ({
  doLogout: bindActionCreators(logout, dispatch)
});

@connect(mapStateToPorps, mapDispatchToProps)
class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    const SiderMenu = AllComponents['SiderMenu']
    const Head = AllComponents['Header']
    const Bread = AllComponents['Bread']

    return (
      <DocumentTitle title="react-admin">
        <Layout style={{ height: '100%' }} >
          <SiderMenu collapsed={collapsed} myLocation={this.props.location} />
          <Layout>
            <Head iconType={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              logout={() => {
                this.props.doLogout().then(() => {
                  window.location.reload()
                })
              }}
              changeSlider={this.toggle} />
            <Content style={{ padding: '20px', minHeight: 'initial' }}>
              <Bread menu={config.menus}
                location={this.props.location}
              />
              <Routes />
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
