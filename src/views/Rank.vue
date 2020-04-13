<template>
   <div class="rank">
     <van-grid
      :columnNum=3
      :border=false
     >
      <van-grid-item
        v-for="item in rankList"
        :key="item.id"
        :data-id="item.id"
        :name = "item.name"
        :idx = "rankItemIdx(item.name)"
        @click="getRankMusic(rankItemIdx(item.name))"
      >
        <div class="mItem">
          <div>
            <img :src="item.coverImgUrl"/>
          </div>
          <p>{{item.name}}</p>
        </div>
      </van-grid-item>
    </van-grid>
   </div>
</template>

<script>
import { getAllTopList, getTopList } from '@/services/rank'
import {createNamespacedHelpers}  from 'vuex'
const {mapState} = createNamespacedHelpers("rank");

export default {
   name: 'rank',
   data() {
       return {}
   },
  components: {},
  mounted() {
    this.rendRankList()
  },
  computed: {
    ...mapState(['rankList']),
    
  },
  methods: {
    rendRankList () {
      let data = getAllTopList()
      this.$store.dispatch('rank/rankList', data)
    },
    rankItemIdx: function (name) { 
      const bz = {
        "0": "云音乐新歌榜",
        "1": "云音乐热歌榜",
        "2": "网易原创歌曲榜",
        "3": "云音乐飙升榜",
        "4": "云音乐电音榜",
        "5": "UK排行榜周榜",
        "6": "美国Billboard周榜",
        "7": "KTV嗨榜",
        "8": "iTunes榜",
        "9": "Hit FM Top榜",
        "10": "日本Oricon周榜",
        "11": "韩国Melon排行榜周榜",
        "12": "韩国Mnet排行榜周榜",
        "13": "韩国Melon原声周榜",
        "14": "中国TOP排行榜(港台榜)",
        "15": "中国TOP排行榜(内地榜)",
        "16": "香港电台中文歌曲龙虎榜",
        "17": "华语金曲榜",
        "18": "中国嘻哈榜",
        "19": "法国 NRJ EuroHot 30周榜",
        "20": "台湾Hito排行榜",
        "21": "Beatport全球电子舞曲榜",
        "22": "云音乐ACG音乐榜",
        "23": "云音乐说唱榜",
        "24": "云音乐古典音乐榜",
        "25": "云音乐电音榜",
        "26": "抖音排行榜",
        "27": "新声榜",
        "28": "云音乐韩语榜",
        "29": "英国Q杂志中文版周榜",
        "30": "电竞音乐榜",
        "31": "云音乐欧美热歌榜",
        "32": "云音乐欧美新歌榜",
        "33": "说唱TOP榜"
      }
      return Object.values(bz).indexOf(name)
    },
    getRankMusic: function (idx) { 
      let data = getTopList(idx)
      this.$store.dispatch('rank/rankMusicList',data).then(()=>{
        this.$router.push({path:'rankMusic'})
      })
    }
  },
}
</script>

<style scoped lang='less'>
  .mItem{
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
