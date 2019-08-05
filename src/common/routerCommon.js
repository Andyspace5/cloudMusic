import dynamic from 'dva/dynamic';
const routerData=[
  {
    key : 'Home',
    model: 'Home',
    component : 'Home'
  }
];
export  const dynamicWrap = ({app})=>{
  return routerData.map(({key,model,component})=>{
    return {
      component : dynamic({
        app,
        models: () => [import(`../models/${model}`),],
        component: () => import(`../routes/${component}`)
      })
    }
  });
}

