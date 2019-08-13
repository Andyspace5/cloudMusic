import {routerRedux} from 'dva/router'
import {queryRank,queryArank} from '../services/Rank';
export default {
  namespace: "rank",
  state:{
    initListData:[],
    aRankListData:[]
  },
  effects:{
    *getRankData({payload},{call,put}){
      const res = yield call(queryRank);
      yield put({
        type :"queryRankData",
        payload:{
          initListData : res.data.list
        }
      })
    },
    *openRankList({payload},{call,put}){
      const res = yield call(queryArank,payload.idx);
      yield put({
        type:"saveArankList",
        payload:{
          aRankListData : res.data.playlist
        }
      })
      yield put(routerRedux.push('/Arank'))
    }
  },
  reducers:{
    queryRankData(state,action){
      return{
        ...state,
        ...action.payload
      }
    },
    saveArankList(state,action){
      return{
        ...state,
        ...action.payload
      }
    }

  }
}
