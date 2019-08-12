import {LoginIn} from '../services/Login';
export default {
  namespace: 'login',
  state: {
    loginState:0,
    userInfo:[]
  },

  effects: {
    *loginIn({payload},{put,call}){

      const res = yield call(LoginIn,payload);
      yield put({
        type : "loginIn",
        payload:res.data
      })
    }

  },

  reducers: {
    loginIn(state,action){
      let data = action.payload;
      console.log(data)
      let mState;
      if(data.code==200){
        mState ={
          loginState : 1,
          userInfo : data
        };
      }else{
        mState ={
          loginState : 0,
        };
      }
      return {
        ...state,
        ...mState
      }
    }
  },

};
