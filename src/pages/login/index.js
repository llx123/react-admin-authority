import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getInfo, login } from '../../store/actions'
import { Button, Row, Form, Input } from 'antd'

import styles from './index.less'
const FormItem = Form.Item

const mapStateToPorps = state => {
  const { user } = state
  return { user };
};
const mapDispatchToProps = dispatch => ({
  getInfo: bindActionCreators(getInfo, dispatch),
  doLogin: bindActionCreators(login, dispatch)
});

@connect(mapStateToPorps, mapDispatchToProps)
@Form.create()
class Login extends PureComponent {
  componentWillMount() {
    if(this.props.user.token) {
      // this.props.history.push('/dashboard');
    }
  }
  componentDidMount() {
    
  }
  handleOk = () => {
    const { form, doLogin } = this.props
    const { validateFieldsAndScroll } = form
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      doLogin().then(res=>{
        this.props.history.push('/dashboard');
      })
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form



    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            LOGO{JSON.stringify(this.props.user)}
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  onPressEnter={this.handleOk}
                  placeholder={`Username`}
                />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  type="password"
                  onPressEnter={this.handleOk}
                  placeholder={`Password`}
                />
              )}
            </FormItem>
            <Row>
              <Button
                type="primary"
                onClick={this.handleOk}
              >
                <span>Sign in</span>
              </Button>
              <p>
                <span>
                  <span>Username</span>
                  ：guest
                </span>
                <span>
                  <span>Password</span>
                  ：guest
                </span>
              </p>
            </Row>
          </form>
        </div>
        <div className={styles.footer}>
          footer
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
}

export default Login
