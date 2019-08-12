import React, {Component} from 'react';
import styles from './index.less';
// import {TabBar,Button, WingBlank, WhiteSpace,Flex} from 'antd-mobile';
import classNames from 'classnames';
// import IconFont from '../../components/IconFont';
import {connect} from 'dva';
import TabBar from './tabBar';
import TopList from '../../components/topList';
@connect(({home,login})=>{
  return {
    home,
    loginState:login.loginState
  }
})
class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      type:"1"
    }
  }
  componentDidMount(){
    this.loginCheck();
    this.props.dispatch({
      type:"home/getTopList",
      payload:{
        type:this.state.type
      }
    })
  }
  loginCheck(){
    const {loginState} = this.props;
    if(loginState.state==0) this.props.history.push("/login");
  }
  render() {
    console.log(this.props);
    const {type} = this.state;
    const {topListData} = this.props.home;
    const sourceAduio = "http://m8.music.126.net/20190730173646/48490d3f00e975987234698292e4df9f/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3";
    return (
      <div  className={classNames(styles.index)}>
        <TabBar />
        {/*<TopList*/}
          {/*topListData = {topListData}*/}
          {/*type={type}*/}
        {/*/>*/}
        <audio control="true " width="300" height="200">
          <source src={sourceAduio} />
        </audio>
      </div>
    );
  }
}

export default Home;
