import { Component } from "react"
import createBoard from "./utils"
import Cell from "./Cell"


export default class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameBoard: createBoard(25, 7),
      counter: 0,
      lose: false
    }


    this.onClickHandler = this.onClickHandler.bind(this)
  }



  onClickHandler = (c) => {
    const counterFunction = () => {
      this.setState(prevCounter => ({
        counter: prevCounter.counter + 1
      }))
    }

    counterFunction();

    if (c.hasMine) {
      this.setState({
        lose: true
      })
    }

    console.log(this.state.counter);


    const newGameBoard = this.state.gameBoard.map((cell) =>
      cell.index === c.index ? { ...cell, visible: true } : cell
    )

    this.setState({
      gameBoard: newGameBoard
    })

  }

  render() {
    const displyGameBoard = this.state.gameBoard.map((c) => (
      <Cell
        key={c.index}
        onClickHandler={this.onClickHandler}
        cellData={c}
        className="cell"
      />
    ))
    return (
      <>
        {this.state.counter === 18 &&
          <div className="endingDiv">
            <h1>You win</h1>
            <button
              onClick={() => { window.location.reload() }}
              className="playAgain">
              Play agian</button>
          </div>}

        {this.state.lose &&
          <div className="endingDiv">
            <h1>You lose</h1>
            <button
              onClick={() => { window.location.reload() }}
              className="playAgain">
              Play agian</button>
          </div>}
        <div className="gameBoard">

          {displyGameBoard}

        </div>
      </ >
    )
  }
}