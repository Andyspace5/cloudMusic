import React, {Component} from 'react';
import {Flex} from 'antd-mobile';
import styles from './tabBar.less';
import cs from 'classnames';
import {connect} from 'dva';
import IconFont from '../../components/IconFont';
@connect(({home})=>{
  return {home}
})
class TabBar extends Component {
  changeTab(id){
    console.log(id);
    this.props.dispatch({
      type : "Home/changeTab",
      payload:{
        id
      }
    })
  }
  render() {
    console.log(this.props);

    const {tabBarData,tabNow} = this.props.home;
    const tabBar = tabBarData.map((item)=>{
      return (
        <Flex.Item
          key={item.id}
          className={cs(styles.barItem,item.id===tabNow?styles.tabNow:"")}
          onClick={this.changeTab.bind(this,item.id)}
        >
          <IconFont type={item.icon} />
          <p>{item.name}</p>
        </Flex.Item>
      )
    });
    return (
      <React.Fragment>
        <Flex className={styles.tabBar}>
          {tabBar}
        </Flex>
      </React.Fragment>
    );
  }
}

export default TabBar;
