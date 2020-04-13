<template>
   <van-list class="resultList"> 
      <!-- <van-cell 
        v-for="item in listData"
        :key="item.id"
        :data-id="item.id"
        @click="playMusic(item.id)"
        :class="{'playStyle':isPlayId==item.id}"
      >
        <p class="songName">{{item.name}}</p>
        <p class="artists">{{item.artists[0].name}}</p>
      </van-cell> -->
    </van-list>
</template>

<script>
import { getMusicUrlApi, getMusicInfo} from '@/services/home'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
   name: 'MusicList',
   data() {
       return {
            isPlayId: -1
       }
   },
   props:{
       listData : {
           type: Array,
           default:[]
       }
   },
   mounted() {
      console.log(this.listData)
   },
  components: {},
  methods: {
    playMusic (mId) {
        let data = getMusicUrlApi(mId)
        let musicInfo = getMusicInfo(mId)
        
        this.$store.dispatch('home/musicUrl', data)
        this.$store.dispatch('home/musicInfo', musicInfo)
        this.isPlayId = mId
        this.$store.commit('home/isPlay',true)
    },
  },
}
</script>

<style scoped lang='less'>
 
  .playStyle{
    background: #6e6969;
    p{
      color: red;
    }
  }
   .resultList{
    .songName{
      font-size: 16px;
      font-weight: 500;
    }
    .artists{
      font-size: 14px;
      color: #ccc;
    }
  }
</style>
