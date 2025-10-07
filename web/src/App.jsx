import Albums from "./components/cards/Albums";
import Player from "./components/cards/Player";
import PlayerQueue from "./components/cards/PlayerQueue";

function App() {
  return (
    <>
      <div className="flex flex-row  gap-5 m-5">
        <Player></Player>
        <PlayerQueue></PlayerQueue>
        <Albums></Albums>
      </div>
    </>
  );
}

export default App;
