import React from 'react';

class Pill extends React.Component {
  handleKeyPress = key => {
    if (!this.props.gameOver) {
      if (key === 'ArrowRight') {
        this.moveRight();
      } else if (key === 'ArrowLeft') {
        this.moveLeft();
      } else if (key === 'ArrowDown') {
        this.moveDown();
      }
    }
  };

  //start of speed increase:
  // componentDidMount() {
  //   this.props.setColor();
  //   this.pill.focus();
  //   // this.interval = setInterval(this.moveDown, 300);
  //   var interval = 1000;
  //   const timer = () => {
  //     interval = interval > 100 ? interval - 100 : 100;
  //     console.log(interval);
  //     this.moveDown();
  //     if (interval >= 50) {
  //       this.timeOut = setTimeout(timer, interval);
  //     }
  //   };
  //   timer();
  // }
  //
  // componentWillReceiveProps() {
  //   if (this.props.gameOver === true) {
  //     clearTimeout(this.timeOut);
  //   }
  // }

  componentDidMount() {
    this.props.setColor();
    this.pill.focus();
    this.interval = setInterval(this.moveDown, 200);
  }

  componentWillReceiveProps() {
    if (this.props.gameOver === true) {
      clearInterval(this.interval);
    }
  }

  moveLeft = () => {
    const nextTile = this.props.findTileLeft(1);
    if (nextTile && nextTile.status !== 'filled') {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  moveRight = () => {
    const nextTile = this.props.findTileRight(1);
    if (nextTile && nextTile.status !== 'filled') {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  moveDown = () => {
    const nextTile = this.props.findTileBelow(1);
    const currentRow = this.props.activePillPosition.split('')[0];
    if (currentRow === 'p' || nextTile.status === 'filled') {
      this.props.stopPill();
    } else {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  render() {
    return (
      <div
        ref={div => {
          this.pill = div;
        }}
        onKeyDown={event => this.handleKeyPress(event.key)}
        className={`${this.props.color} ${this.props.activePillPosition}`}
        tabIndex="0"
      />
    );
  }
}

export default Pill;
