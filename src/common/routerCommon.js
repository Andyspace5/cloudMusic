const routerData=[
  {
    key : '/',
    model: ['Home','Login'],
    component : 'Home'
  },
  {
    key : 'Home',
    model: ['Home'],
    component : 'Home'
  },
  {
    key : 'Login',
    model:['Login'],
    component : 'Login'
  },
  {
    key : 'Rank',
    model:['Rank'],
    component : 'Rank'
  },
  {
    key : 'Arank',
    model:['Rank','Home'],
    component : 'Rank/Arank'
  }
];

export default routerData;
