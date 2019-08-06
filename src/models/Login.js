import {LoginIn} from '../services/Login';
export default {
  namespace: 'login',
  state: {
    loginState:{
      state : 0,
      reqText:""
    }
  },

  effects: {
    *loginIn({payload},{put,call}){
      const res = yield call(LoginIn,payload);
      console.log(res);
      // if (res.err) return res;
      // yield put({
      //   type : "loginIn",
      //   payload:{
      //     loginState:{
      //       state : 0,
      //       reqText:""
      //     }
      //   }
      // })
    }

  },

  reducers: {
    loginIn(state,action){
      return {
        ...state,
        ...action.payload
      }
    }
  },

};
