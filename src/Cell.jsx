


export default function Cell({ cellData, onClickHandler }) {



  return (
    <>
      <button
        onClick={() => onClickHandler(cellData)}
        disabled={cellData.visible}
      >
        {!cellData.visible ? "🤔" : cellData.hasMine ? "💣" : cellData.numberOfNeighbouringMines}
      </button>

    </>
  )
}