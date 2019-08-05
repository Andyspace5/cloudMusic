import {getAllTopList,getTopList} from "../services/Home";

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
    topListData:[]
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
    }
  },

};
