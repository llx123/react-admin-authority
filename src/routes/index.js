import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AllComponents from '../components';
import queryString from 'query-string';
import routesConfig from './config';

export default class MyRouter extends Component {

  render() {
    return (
      <Switch>
        {
          Object.keys(routesConfig).map(key =>
            routesConfig[key].map(r => {
              const route = r => {
                const Component = AllComponents[r.component];
                return (
                  <Route
                    key={r.route || r.path}
                    exact
                    path={r.route || r.path}
                    render={props => {
                      const reg = /\?\S*/g;
                      // 匹配?及其以后字符串
                      const queryParams = window.location.hash.match(reg);
                      // 去除?的参数
                      const { params } = props.match;
                      Object.keys(params).forEach(key => {
                        params[key] = params[key] && params[key].replace(reg, '');
                      });
                      props.match.params = { ...params };
                      const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} };
                      // 回传route配置                      
                      return <Component {...merge} />
                    }}
                  />
                )
              }
              return r.component ? route(r) : r.children.map(r => route(r));
            })
          )
        }
        <Route exact path="/404" component={() => <h1>404</h1>} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}
