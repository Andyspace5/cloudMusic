export default {
  namespaced: true,

  state: {
    num: 1,
    topList: [],
    searchList: [],
    musicUrl: "",
    musicInfo: [],
    isPlay: false
  },
  mutations: {
   
    searchList: function (state, data) {
      state.searchList = data.data.result
    },
    musicUrl: function (state,data) { 
      state.musicUrl = data.data.data[0].url
    },
    musicInfo: function (state, data) {
      state.musicInfo = data.data
    },
    isPlay: function (state,data) { 
      state.isPlay=data
    }
  },
  actions: {
    search: function (context, data) { 
      data.then((resData) => {
        context.commit('searchList', resData)
      })
    },
    musicUrl: function (context, data) { 
      data.then((resData) => {
        context.commit('musicUrl', resData)
      })
    },
    musicInfo: function (context, data) {
      data.then((resData) => {
        context.commit('musicInfo', resData)
      })
    }  
  },
  getters: {
    
  }
}
