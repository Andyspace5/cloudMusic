<template>
  <div class="audio">
    <div>
      <div class="logo">
        <img :src="musicInfo.length!=0&&musicInfo.songs[0].al.picUrl"/>
      </div>
      <div class="info">
        <h4>{{musicInfo.length!=0&&musicInfo.songs[0].al.name}}</h4>
        <p>{{musicInfo.length!=0&&musicInfo.songs[0].ar[0].name}}</p>
      </div>
    </div>
    <div>
      <div class="playControls" @click="controlsAudio">
        <van-icon class="iconfont" class-prefix='icon' :name='isPlay?"zanting":"bofang"' size="30"/>
      </div>
      <div class="musicList">
        <van-icon class="iconfont" class-prefix='icon' name='icon--3' size="30" />
      </div>
    </div>
    
    <audio ref="audio" :src="musicUrl" controls :autoplay="isPlay?'autoplay':'false'" loop hidden/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('home')
export default {
   name: 'Audio',
   computed: {
    ...mapState(['musicUrl', 'musicInfo', 'isPlay']),
   },
   methods: {
     controlsAudio: function () {
        const audio = this.$refs.audio;
        if(this.isPlay==false){
          audio.play()
          this.$store.commit('home/isPlay',true)
        }else{
          audio.pause()
          this.$store.commit('home/isPlay',false)
        }
     }
   },
}
</script>
<style scope lang="less">
  .audio{
    height: 54px;
    // background: #ccc;
    border-top:1px solid #ececec;
    box-shadow: 0 1px 0 1px#ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    >div{
      display: flex;
      align-items: center;
      height: 100%;
    }
    .logo{
      width: 40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      margin-left: 10px;
    }
    .playControls{
      width:30px;
      height: 30px;
      margin-right: 20px;
    }
    .musicList{
      width: 30px;
      height: 30px;
    }
  }
  audio{
    width: 100%;
    background: #fff;
  }
</style>
