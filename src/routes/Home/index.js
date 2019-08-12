import React, {Component} from 'react';
import styles from './index.less';
import {SearchBar,List,Button, WingBlank, WhiteSpace,Flex} from 'antd-mobile';
import classNames from 'classnames';
// import IconFont from '../../components/IconFont';
import {connect} from 'dva';
import TabBar from './tabBar';
import TopList from '../../components/topList';
import Audio from "../component/Audio";
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
      type:"1",
      limit:10,
      iptValue:"",
      nowPlay:""
    }
  }
  componentDidMount(){
    // this.loginCheck();
    this.props.dispatch({
      type:"home/getTopList",
      payload:{
        type:this.state.type
      }
    })
  }
  loginCheck(){
    const {loginState} = this.props;
    if(loginState==0) this.props.history.push("/login");
  }
  musicSearch(value){
    const {limit} = this.state;
    if(value=="")return
    this.props.dispatch({
      type:"home/searchMusic",
      payload: {
        keywords : value,
        limit : limit
      }
    });
    this.setState({
      iptValue:value,
      nowPlay:""
    })
  }
  rendSearchList(){
    const {searchList} = this.props.home;
    const {nowPlay} = this.state;
    return  searchList.map((item,index)=>{
      return (
        <List.Item
          key={item.id}
          data-id = {item.id}
          onClick={this.playMusic.bind(this,item.id,index)}
          className={nowPlay===index?styles.active:""}>
          <h4>{item.name}</h4>
          <p>{item.artists[0].name}</p>
        </List.Item>
      )
    })
  }
  playMusic(id,index){
    if(id=="")return
    this.props.dispatch({
      type:"home/getMusicUrl",
      payload: {
        id
      }
    })
    this.setState({
      nowPlay:index
    })
  }
  loadMore(){
    const {limit,iptValue} = this.state;
    this.setState({
      limit : limit+10
    },()=>{
      this.musicSearch(iptValue)
    })
  }
  // audioEnd=(check)=>{
  //   const {searchList} = this.props.home;
  //   const {nowPlay} = this.state;
  //   console.log(searchList[nowPlay + 1].id);
  //   if(check) this.playMusic(searchList[nowPlay+1].id);
  // };
  render() {
    console.log(this.props);
    const {musicUrl,searchList} = this.props.home;
    return (
      <div  className={classNames(styles.index)}>
        <Flex
          direction="column"
          className={styles.home_ct}
        >
          {/*<TabBar />*/}

          <SearchBar
            placeholder="Search"
            maxLength={8}
            onSubmit={(value)=>{this.musicSearch(value)}}
          />
          <Flex.Item>
            <List>
              {this.rendSearchList()}
            </List>
            <p  style={{display:searchList.length==0?"none":"block"}} className={styles.loadMore} onClick={()=>{this.loadMore()}}>加载更多</p>
          </Flex.Item>
          <Audio
            musicUrl={musicUrl}
            // getEnd={this.audioEnd}
          />
        </Flex>
      </div>
    );
  }
}

export default Home;
