import React, {Component} from 'react';
import {List} from 'antd-mobile';
const ListItem = List.Item;
class TopList extends Component {
  render() {
    const {topListData} = this.props;
    const listItem = topListData.map((item)=>{
      let {name,id} = item;
      let acName = item["ar"][0]["name"];
      return(
        <ListItem key={id}>
          <h4>{name}</h4>
          <p>{acName}</p>
        </ListItem>
      )
    })
    return (
        <List>
          {listItem}
        </List>
    );
  }
}

export default TopList;
