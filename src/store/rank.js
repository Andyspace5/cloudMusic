export default{
    namespaced: true,
    state:{
        rankList: [],
        rankMusicList: []
    },
    mutations:{
        rankList: function (state, data) {
            state.rankList = data.data.list
        },
        rankMusicList: function (state, data) {
          state.rankMusicList = data.data.playlist
        },
    },
    actions:{
        rankList: function (context, data) {
          data.then((resData) => {
            context.commit('rankList', resData)
          })
        },
        rankMusicList: function (context, data) {
          data.then((resData) => {
            context.commit('rankMusicList', resData)
          })
        },
    },
    getter:{

    }
}