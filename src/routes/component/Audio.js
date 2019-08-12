import React, {Component} from 'react';
import styles from "../Home/index.less";

class Audio extends Component {
  constructor(props){
    super(props);
    this.state={
      isEnd:false
    }
  };

  audioLs(audio){
    // const {getEnd} = this.props;
    // if (!audio)return
    // audio.addEventListener('ended', function () {
    //   getEnd(true);
    // }, false);
  }
  render() {
    const {musicUrl} = this.props;
    return (
      <div className={styles.audio}>
        <audio ref={(audio)=>{this.audioLs(audio)}} loop={true} src={musicUrl} controls={"controls"} width="300" height="200" autoPlay={true} />
      </div>
    );
  }
}

export default Audio ;
