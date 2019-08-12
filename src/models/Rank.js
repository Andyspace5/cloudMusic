import {queryRank} from '../services/Rank';
export default {
  namespace: "Rank",
  state:{
    initListData:[]
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
    }
  },
  reducers:{
    queryRankData(state,action){
      return{
        ...state,
        ...action.payload
      }
    }
  }
}
