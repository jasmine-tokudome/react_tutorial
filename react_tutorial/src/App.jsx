function Square() {
  return <button className="square">1</button>
}

export default function Boad() {
  return(
  <>
  <div className="board-row">
  <Square/>
  <Square/>
  <Square/>
  </div>
  <div className="board-row">
  <Square/>
  <Square/>
  <Square/>
  </div>
  <div className="board-row">
  <Square/>
  <Square/>
  <Square/>
  </div>
  </>
  );
}
