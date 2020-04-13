<template>
  <div class="home">
    <van-search 
      placeholder="请输入搜索关键词"
      v-model="searchValue"
      @search="onSearch"
    />
    <MusicList
      :listData = "searchList.songs||[]"
    />
    <van-list class="searchResultList"> 
      <van-cell
        v-for="item in searchList.songs"
        :key="item.id"
        :data-id="item.id"
        @click="playMusic(item.id)"
        :class="{'playStyle':isPlayId==item.id}"
      >
        <p class="songName">{{item.name}}</p>
        <p class="artists">{{item.artists[0].name}}</p>
      </van-cell>
    </van-list>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from '@/components/MusicList'
import { getSearchMusic, getMusicUrlApi, getMusicInfo} from '@/services/home'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  name: 'home',
  components:{
    MusicList
  },
  data () {
    return {
      searchValue :"",
    }
  },
  created () {
    // console.log(this.isPlayId)
   
  },
  mounted() {
    this.musicUrl==""&&this.loadIntMusic();
  },
  computed: {
    ...mapState(['searchList', 'musicUrl']),
  },
  methods: {
    
    onSearch (value) {
      var option = {
        keywords : value,
        limit : 10
      }
      let data = getSearchMusic(option)
      this.$store.dispatch('home/search', data)
    },
    
    loadIntMusic: function () { 
      let data = getMusicUrlApi('557095893')
      this.$store.dispatch('home/musicUrl', data)
      this.isPlayId = '191232'
      let musicInfo = getMusicInfo('557095893')
      this.$store.dispatch('home/musicInfo', musicInfo)
    }
  }
}
</script>
<style scoped lang="less">
 
</style>
