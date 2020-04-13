<template>
  <div id="app">
    <div class="top">
      <router-link  :class="{'now':item.name==nowTab}" v-for="item in tabs" :key="item.name" :to="item.path" >
        <span @click="handTabs(item.name)">{{item.name}}</span>
      </router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
    <Audio/> 
  </div>
</template>

<script>

import Audio from '@/components/Audio.vue'
export default {
  name: 'app',
  components:{
    Audio
  },
  data() {
    return {
      nowTab:'首页',
      tabs: [
        {
          name: "首页",
          path: '/'
        },
        {
          name: "排行榜",
          path: '/rank'
        }
      ]
    }
  },
  methods: {
    handTabs: function(key){
      this.nowTab=key
    }
  },
}
</script>

<style lang="less">
@import url('//at.alicdn.com/t/font_1318179_eh7amry50n9.css');

/* 重置内外边距 */
body, div, blockquote,
h1, h2, h3, h4, h5, h6, hr, p,
dl, dt, dd, ul, ol, li,
form, button, input, textarea,
pre, fieldset, legend, th, td {
    margin: 0;
    padding: 0;
}

/* 设置默认文字样式 */
body,input,select,textarea,button { 
	font: normal 100% Arial,sans-serif;
}

/* 清除移动端按钮点击出现黑色背景 */
* { 
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}

/* 清除输入标签选中效果 */
input,select,textarea,button { 
	outline: none;
}
input {
	border: 0;
	border-radius: 0;
	-webkit-appearance: none;
	appearance: none;
}

/* 清除序列标签默认样式 */
ul,li,dl,dd,dt {
	list-style-type: none;
}

/* 清除a标签下划线样式 */
a,a:link,a:visited,a:hover,a:active {
	text-decoration:none;
}

/* 清除图片的边框 */
img {
	border: 0;
}

/* 清除文字粗体效果 */
h1,h2,h3,h4,h5,h6 {
	font-weight: normal;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.main{
  flex:1;
  background: #fff;
  overflow: auto;
}
.top{
  background: #fff;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  a{
    flex: 1;
    width: 50%;
    height: 100%;
    font-size: 14px;
    color: #333;
    span{
      display: inline-block;
      height: 100%;
      width: 100%;
      line-height: 40px;
    }
  }
  a.now{
    color: #ffa4a4;
  }
}
</style>
