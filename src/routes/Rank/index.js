import React, {Component} from 'react';
import {List} from 'antd-mobile';
import {connect} from 'dva';
import styles from './index.less'
@connect(({Rank})=>{
  console.log(Rank)
  return {Rank}
})

class Rank extends Component {
    componentDidMount(){
      this.getInitList();
    }
  getInitList() {
    this.props.dispatch({
      type: "Rank/getRankData",
      payload: {}
    });
  }
  rendRankList(){
    console.log(this.props);
    const {initListData} = this.props.Rank;
    if(initListData==undefined) return;
      return (
        initListData.map((item)=>{
          console.log(item);
          return (
            <List.Item mid = {item.ToplistType}>
              <div className={styles.item}>
                <img src={item.coverImgUrl}/>
              </div>
            </List.Item>
          )
        })
      )
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
