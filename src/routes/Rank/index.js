import React, {Component} from 'react';
import {List} from 'antd-mobile';
import {connect} from 'dva';
import styles from './index.less'
@connect(({rank})=>{
  console.log(rank)
  return {rank}
})

class Rank extends Component {
    componentDidMount(){
      this.getInitList();
    }
  getInitList() {
    this.props.dispatch({
      type: "rank/getRankData",
      payload: {}
    });
  }
  rendRankList(){
    console.log(this.props);
    const {initListData} = this.props.rank;
    if(initListData==undefined) return;
    let idx;
      return (
        initListData.map((item,index)=>{
          switch (item.name) {
             case "云音乐新歌榜": idx = 0; break;
             case "云音乐热歌榜": idx = 1; break;
             // case "2": 网易原创歌曲榜,
             //
             // case "3": 云音乐飙升榜,
             //
             // case "4": 云音乐电音榜,
             //
             // case "5": UK排行榜周榜,
             //
             // case "6": 美国Billboard周榜
             //
             // case "7": KTV嗨榜,
             //
             // case "8": iTunes榜,
             //
             // case "9": Hit FM Top榜,
             //
             // case "10": 日本Oricon周榜
             //
             // case "11": 韩国Melon排行榜周榜,
             //
             // case "12": 韩国Mnet排行榜周榜,
             //
             // case "13": 韩国Melon原声周榜,
             //
             // case "14": 中国TOP排行榜(港台榜),
             //
             // case "15": 中国TOP排行榜(内地榜)
             //
             // case "16": 香港电台中文歌曲龙虎榜,
             //
             // case "17": 华语金曲榜,
             //
             // case"18": 中国嘻哈榜,
             //
             // case"19": 法国 NRJ EuroHot 30周榜,
             //
             // case "20": 台湾Hito排行榜,
             //
             // case "21": Beatport全球电子舞曲榜,
             //
             // case "22": 云音乐ACG音乐榜,
             //
             // case "23": 云音乐嘻哈榜
          }
          return (
            <List.Item  idx = {idx} key={item.id} onClick={()=>{this.openRankList(idx)}}>
              <div className={styles.item}>
                <img src={item.coverImgUrl}/>
              </div>
            </List.Item>
          )
        })
      )
  }
  openRankList(idx){
      this.props.dispatch({
        type : "rank/openRankList",
        payload: {
          idx
        }
      })
  }
  render() {
      return (
        <div>
          <List className={styles.listItem}>
            {this.rendRankList()}
          </List>
        </div>
      );
    }
  }

export default Rank;
