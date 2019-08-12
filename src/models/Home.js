import {getAllTopList,getTopList,getSearchMusic,getMusicUrlApi} from "../services/Home";

export default {

  namespace: 'home',
  state: {
    tabBarData:[
      {
        icon:"icon-faxian",
        name:"发现",
        id:"0"
      },
      {
        icon:"icon-shipinbofangyingpian2",
        name:"视频",
        id:"1"
      },
      {
        icon:"icon-yinle",
        name:"我的",
        id:"2"
      },
      {
        icon:"icon-pengyou",
        name:"朋友",
        id:"3"
      },{
        icon:"icon-wode",
        name:"账号",
        id:"4"
      }
    ],
    tabNow:"0",
    topListData:[],
    searchList:[],
    musicUrl:""
  },

  effects: {
    *changeTab({payload},{put}){
      yield put({
        type:"change",
        payload:{tabNow:payload.id}})
    },
    *getAllTopList({payload},{put,call}){
      const res = yield call(getAllTopList);
      yield put({
        type: "getAllList",
        payload: {
          topListData: res["data"]["playlist"]["tracks"]
        }
      })
    },
    *getTopList({payload},{put,call}){
      const res = yield call(getTopList,payload.type);
      yield put({
        type: "getList",
        payload: {
          topListData:res["data"]["playlist"]["tracks"]
        }
      })
    },
    *searchMusic({payload},{call,put}){
      const res = yield call(getSearchMusic,payload);
      yield put({
        type:"searchListData",
        payload:{
          searchList:res.data.result.songs
        }
      })
    },
    *getMusicUrl({payload},{call,put}){
      const res = yield call(getMusicUrlApi,payload.id);
      yield put({
        type:"musicUrl",
        payload:{
          musicUrl:res.data.data[0].url
        }
      })
    }
  },

  reducers: {
    change(state,action){
      return {
        ...state,
        ...action.payload
      }
    },
    getAllList(state,action){
      return {
        ...state,
        ...action.payload
      }
    },
    getList(state,action){
      return {
        ...state,
        ...action.payload
      }
    },
    searchListData(state,action){
      return{
        ...state,
        ...action.payload
      }
    },
    musicUrl(state,action){
      return {
        ...state,
        ...action.payload
      }
    }
  },

};
