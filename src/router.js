import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import routerData from './common/routerCommon';

function RouterConfig({ history,app }) {
  console.log(routerData);
  const dynamicWarp = routerData.map(({key,model,component})=>{
    let path ={
      key : key,
      component : dynamic({
        app,
        models: () =>model.map((item)=>item!==""&&import(`./models/${item}`)),
        component: () => import(`./routes/${component}`)
      })
    };
    return path;
  });
  return (
    <Router history={history}>
      <Switch>
        {
          dynamicWarp.map(({key,component})=>{
            return  <Route path={`/${key}`} key={key} exact component={component} />
          })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
