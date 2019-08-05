import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {dynamicWrap} from './common/routerCommon';

function RouterConfig({ history,app }) {
  console.log(dynamicWrap);
  return (
    <Router history={history}>
      <Switch>
        {
          dynamicWrap.map(({component})=>{
            return  <Route path="/" exact component={component} />
          })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
