<template>
  <div class="rankMusicList">
    <MusicList
      :listData = "rankMusicList.tracks||[]"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from '@/components/MusicList'
import { createNamespacedHelpers } from 'vuex'
const { mapState} = createNamespacedHelpers('rank')

export default {
  name: 'home',
  components:{
    MusicList
  },
  mounted() {
    // console.log(this.$store.state)
  },
  computed: {
    ...mapState(['rankMusicList']),
  },
  methods: {
    
  }
}
</script>
<style scoped lang="less">
  
</style>
