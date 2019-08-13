import React, {Component} from 'react';
import {connect} from 'dva';
import {List} from 'antd-mobile';
import Audio from '../component/Audio';
@connect(({rank,home})=>{
  return{
    aRankListData : rank.aRankListData,
    musicUrl : home.musicUrl
  }
})

class Arank extends Component {
  constructor(props) {
    super(props);
    this.state={
      nowPlay :""
    }
  }

  playMusic(id,index){
    if(id=="")return
    this.props.dispatch({
      type:"home/getMusicUrl",
      payload: {
        id
      }
    });
    this.setState({
      nowPlay:index
    })
  }
  renderAlist(){
    const {tracks} = this.props.aRankListData;
    return tracks.map((item,index)=>{
      return(
        <List.Item id={item.id} onClick={()=>{this.playMusic(item.id,index)}}>
          <h4>{item.name}</h4>
          <p>{item.ar[0].name}</p>
        </List.Item>
      )
    })
  }
  render() {
    const {aRankListData,musicUrl} = this.props;
    console.log(aRankListData);
    return (
      <div>
        <h4>{aRankListData.name}</h4>
        <List>
          {this.renderAlist()}
        </List>
        <Audio
          musicUrl={musicUrl}
        />
      </div>
    );
  }
}

export default Arank;
