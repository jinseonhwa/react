import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop =scrollHeight  - clientHeight;
  }

  render() {
    const style = {
      position: 'relative',
      width: '300px',
      height: '300px',
      border: '1px solid black',
      overflow: 'auto',
    };

    const innterStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={(ref) => {this.box=ref}}
      >
        <div style={innterStyle}/>
      </div>
    );
  }
}

export default ScrollBox;