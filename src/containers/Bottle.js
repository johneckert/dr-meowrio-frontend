import React from 'react';
import { connect } from 'react-redux';
import { addPoints, setLevel, gameOver } from '../actions/actions';
import Pill from '../components/Pill.js';
import StaticPill from '../components/StaticPill.js';

class Bottle extends React.Component {
  state = {
    activePillColor: '',
    activePillPosition: 'a4',
    gameBoard: [
      [
        // a
        { position: 'a1', color: null, status: null },
        { position: 'a2', color: null, status: null },
        { position: 'a3', color: null, status: null },
        { position: 'a4', color: null, status: null },
        { position: 'a5', color: null, status: null },
        { position: 'a6', color: null, status: null },
        { position: 'a7', color: null, status: null },
        { position: 'a8', color: null, status: null }
      ],
      [
        //b
        { position: 'b1', color: null, status: null },
        { position: 'b2', color: null, status: null },
        { position: 'b3', color: null, status: null },
        { position: 'b4', color: null, status: null },
        { position: 'b5', color: null, status: null },
        { position: 'b6', color: null, status: null },
        { position: 'b7', color: null, status: null },
        { position: 'b8', color: null, status: null }
      ],
      [
        //c
        { position: 'c1', color: null, status: null },
        { position: 'c2', color: null, status: null },
        { position: 'c3', color: null, status: null },
        { position: 'c4', color: null, status: null },
        { position: 'c5', color: null, status: null },
        { position: 'c6', color: null, status: null },
        { position: 'c7', color: null, status: null },
        { position: 'c8', color: null, status: null }
      ],
      [
        //d
        { position: 'd1', color: null, status: null },
        { position: 'd2', color: null, status: null },
        { position: 'd3', color: null, status: null },
        { position: 'd4', color: null, status: null },
        { position: 'd5', color: null, status: null },
        { position: 'd6', color: null, status: null },
        { position: 'd7', color: null, status: null },
        { position: 'd8', color: null, status: null }
      ],
      [
        //e
        { position: 'e1', color: null, status: null },
        { position: 'e2', color: null, status: null },
        { position: 'e3', color: null, status: null },
        { position: 'e4', color: null, status: null },
        { position: 'e5', color: null, status: null },
        { position: 'e6', color: null, status: null },
        { position: 'e7', color: null, status: null },
        { position: 'e8', color: null, status: null }
      ],
      [
        //f
        { position: 'f1', color: null, status: null },
        { position: 'f2', color: null, status: null },
        { position: 'f3', color: null, status: null },
        { position: 'f4', color: null, status: null },
        { position: 'f5', color: null, status: null },
        { position: 'f6', color: null, status: null },
        { position: 'f7', color: null, status: null },
        { position: 'f8', color: null, status: null }
      ],
      [
        //g
        { position: 'g1', color: null, status: null },
        { position: 'g2', color: null, status: null },
        { position: 'g3', color: null, status: null },
        { position: 'g4', color: null, status: null },
        { position: 'g5', color: null, status: null },
        { position: 'g6', color: null, status: null },
        { position: 'g7', color: null, status: null },
        { position: 'g8', color: null, status: null }
      ],
      [
        //h
        { position: 'h1', color: null, status: null },
        { position: 'h2', color: null, status: null },
        { position: 'h3', color: null, status: null },
        { position: 'h4', color: null, status: null },
        { position: 'h5', color: null, status: null },
        { position: 'h6', color: null, status: null },
        { position: 'h7', color: null, status: null },
        { position: 'h8', color: null, status: null }
      ],
      [
        //i
        { position: 'i1', color: null, status: null },
        { position: 'i2', color: null, status: null },
        { position: 'i3', color: null, status: null },
        { position: 'i4', color: null, status: null },
        { position: 'i5', color: null, status: null },
        { position: 'i6', color: null, status: null },
        { position: 'i7', color: null, status: null },
        { position: 'i8', color: null, status: null }
      ],
      [
        //j
        { position: 'j1', color: null, status: null },
        { position: 'j2', color: null, status: null },
        { position: 'j3', color: null, status: null },
        { position: 'j4', color: null, status: null },
        { position: 'j5', color: null, status: null },
        { position: 'j6', color: null, status: null },
        { position: 'j7', color: null, status: null },
        { position: 'j8', color: null, status: null }
      ],
      [
        //k
        { position: 'k1', color: null, status: null },
        { position: 'k2', color: null, status: null },
        { position: 'k3', color: null, status: null },
        { position: 'k4', color: null, status: null },
        { position: 'k5', color: null, status: null },
        { position: 'k6', color: null, status: null },
        { position: 'k7', color: null, status: null },
        { position: 'k8', color: null, status: null }
      ],
      [
        //l
        { position: 'l1', color: null, status: null },
        { position: 'l2', color: null, status: null },
        { position: 'l3', color: null, status: null },
        { position: 'l4', color: null, status: null },
        { position: 'l5', color: null, status: null },
        { position: 'l6', color: null, status: null },
        { position: 'l7', color: null, status: null },
        { position: 'l8', color: null, status: null }
      ],
      [
        //m
        { position: 'm1', color: null, status: null },
        { position: 'm2', color: null, status: null },
        { position: 'm3', color: null, status: null },
        { position: 'm4', color: null, status: null },
        { position: 'm5', color: null, status: null },
        { position: 'm6', color: null, status: null },
        { position: 'm7', color: null, status: null },
        { position: 'm8', color: null, status: null }
      ],
      [
        //n
        { position: 'n1', color: null, status: null },
        { position: 'n2', color: null, status: null },
        { position: 'n3', color: null, status: null },
        { position: 'n4', color: null, status: null },
        { position: 'n5', color: null, status: null },
        { position: 'n6', color: null, status: null },
        { position: 'n7', color: null, status: null },
        { position: 'n8', color: null, status: null }
      ],
      [
        //o
        { position: 'o1', color: null, status: null },
        { position: 'o2', color: null, status: null },
        { position: 'o3', color: null, status: null },
        { position: 'o4', color: null, status: null },
        { position: 'o5', color: null, status: null },
        { position: 'o6', color: null, status: null },
        { position: 'o7', color: null, status: null },
        { position: 'o8', color: null, status: null }
      ],
      [
        //p
        { position: 'p1', color: null, status: null },
        { position: 'p2', color: null, status: null },
        { position: 'p3', color: null, status: null },
        { position: 'p4', color: null, status: null },
        { position: 'p5', color: null, status: null },
        { position: 'p6', color: null, status: null },
        { position: 'p7', color: null, status: null },
        { position: 'p8', color: null, status: null }
      ]
    ]
  };

  rowNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

  rowIndex = letter => this.rowNames.indexOf(letter);

  setColorArray = () => {
    const colorArray = [];
    colorArray.push(this.props.currentTheme.colorOne);
    colorArray.push(this.props.currentTheme.colorTwo);
    colorArray.push(this.props.currentTheme.colorThree);
    colorArray.push(this.props.currentTheme.colorFour);
    return colorArray;
  };

  setColor = () => {
    const colorArray = this.setColorArray();
    const activePillColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({ activePillColor: activePillColor });
  };

  makeActivePill = () => {
    return (
      <Pill
        setColor={this.setColor}
        stopPill={this.stopPill}
        color={this.state.activePillColor}
        gameBoard={this.state.gameBoard}
        updateActivePillPosition={this.updateActivePillPosition}
        activePillPosition={this.state.activePillPosition}
        findTileBelow={this.findTileBelow}
        findTileLeft={this.findTileLeft}
        findTileRight={this.findTileRight}
      />
    );
  };

  match = positionArray => {
    //find surrounding tiles
    const activeColor = this.state.activePillColor;
    const oneBelow = positionArray[0] === 'p' ? false : this.findTileBelow(1);
    const oneAbove = positionArray[0] === 'a' ? false : this.findTileAbove(1);
    const oneLeft = parseInt(positionArray[1], 10) <= 1 ? false : this.findTileLeft(1);
    const oneRight = parseInt(positionArray[1], 10) >= 7 ? false : this.findTileRight(1);
    const twoBelow =
      positionArray[0] === 'p' || positionArray[0] === 'o' ? false : this.findTileBelow(2);
    const twoAbove =
      positionArray[0] === 'a' || positionArray[0] === 'b' ? false : this.findTileAbove(2);
    const twoLeft = parseInt(positionArray[1], 10) <= 2 ? false : this.findTileLeft(2);
    const twoRight = parseInt(positionArray[1], 10) >= 6 ? false : this.findTileRight(2);
    //see if any match color
    const currentTile = this.findTile(this.state.activePillPosition);
    if (oneBelow.color === activeColor && oneAbove.color === activeColor) {
      this.removeTile(oneBelow);
      this.removeTile(oneAbove);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    } else if (oneBelow.color === activeColor && twoBelow.color === activeColor) {
      this.removeTile(oneBelow);
      this.removeTile(twoBelow);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    } else if (oneAbove.color === activeColor && twoAbove.color === activeColor) {
      this.removeTile(oneAbove);
      this.removeTile(twoAbove);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    } else if (oneLeft.color === activeColor && oneRight.color === activeColor) {
      this.removeTile(oneLeft);
      this.removeTile(oneRight);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    } else if (oneLeft.color === activeColor && twoLeft.color === activeColor) {
      this.removeTile(oneLeft);
      this.removeTile(twoLeft);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    } else if (oneRight.color === activeColor && twoRight.color === activeColor) {
      this.removeTile(oneRight);
      this.removeTile(twoRight);
      this.removeTile(currentTile);
      this.props.dispatchAddPoints();
      this.props.dispatchSetLevel(this.props.currentScore);
    }
  };

  handleMatch = positionArray => {
    this.match(positionArray);
    this.props.dispatchAddPoints();
    this.props.dispatchSetLevel(this.props.currentScore);
  };

  removeTile = tile => {
    tile.color = null;
    tile.status = null;
    //find tile & update gameBoard
    const newGameBoard = [...this.state.gameBoard];
    const positionArray = tile.position.split('');
    const rowIdx = this.rowIndex(positionArray[0]);
    const column = parseInt(positionArray[1], 10);
    newGameBoard[rowIdx][column - 1] = tile;
    this.setState({ gameBoard: newGameBoard });
    // TODO:  add function to shift all tiles down to fill gaps
  };

  findTile = position => {
    const positionArray = this.state.activePillPosition.split('');
    const row = positionArray[0];
    return this.state.gameBoard[this.rowIndex(row)].find(tile => tile.position === position);
  };

  findTileBelow = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const nextRow =
      this.rowIndex(positionArray[0]) + distance <= 15
        ? this.rowIndex(positionArray[0]) + distance
        : 15;
    const col = positionArray[1];
    const nextPosition = [this.rowNames[nextRow], col.toString()].join('');
    const nextTile = this.state.gameBoard[nextRow].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileAbove = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const lastRow =
      this.rowIndex(positionArray[0]) - distance <= 0
        ? 0
        : this.rowIndex(positionArray[0]) - distance;
    const col = positionArray[1];
    const nextPosition = [this.rowNames[lastRow], col.toString()].join('');
    const nextTile = this.state.gameBoard[lastRow].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileLeft = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const row = this.rowIndex(positionArray[0]);
    const lastCol =
      parseInt(positionArray[1], 10) - distance <= 1
        ? 1
        : parseInt(positionArray[1], 10) - distance;
    const nextPosition = [this.rowNames[row], lastCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileRight = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const row = this.rowIndex(positionArray[0]);
    const nextCol =
      parseInt(positionArray[1], 10) + distance >= 8
        ? 8
        : parseInt(positionArray[1], 10) + distance;
    const nextPosition = [this.rowNames[row], nextCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  updateActivePillPosition = newPosition => {
    this.setState({ activePillPosition: newPosition });
  };

  stopPill = () => {
    const row = this.state.activePillPosition.split('')[0];
    const column = this.state.activePillPosition.split('')[1];
    const currentTile = this.state.gameBoard[this.rowIndex(row)].find(
      tile => tile.position === this.state.activePillPosition
    );
    currentTile.color = this.state.activePillColor;
    currentTile.status = 'filled';
    //Handle Scoring
    if (this.match([row, column])) {
      this.handleMatch([row, column]);
    }
    const newGameBoard = [...this.state.gameBoard];
    newGameBoard[this.rowIndex(row)][column - 1] = currentTile;
    //Handle End of Game
    const spawnTile = newGameBoard[0][3];
    if (spawnTile.status) {
      this.props.dispatchGameOver();
      // this.props.dispatchUpdateHighScores(this.props.currentScore, this.props.initials);
      console.log('GAMEOVER!');
    } else {
      this.setState({ activePillPosition: 'a4', gameBoard: newGameBoard }, this.setColor());
    }
  };

  gameBoardClass = () => (this.props.gameOver ? 'bottle pillgrid game-over' : 'bottle pillgrid');

  generateGameBoard = () => {
    return (
      <div className={this.gameBoardClass()}>
        {this.props.gameOver
          ? null
          : this.state.gameBoard.map(row =>
              row.map(cellObj => {
                return cellObj.status ? (
                  <StaticPill
                    key={cellObj.position}
                    color={cellObj.color}
                    position={cellObj.position}
                  />
                ) : null;
              })
            )}
        {this.props.active ? this.makeActivePill() : null}
      </div>
    );
  };

  render() {
    return this.generateGameBoard();
  }
}

const mapStateToProps = state => {
  return {
    currentTheme: state.currentTheme,
    currentScore: state.currentScore,
    active: state.active,
    gameOver: state.gameOver
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddPoints: () => dispatch(addPoints()),
    dispatchSetLevel: currentScore => dispatch(setLevel(currentScore)),
    dispatchGameOver: () => dispatch(gameOver())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bottle);
