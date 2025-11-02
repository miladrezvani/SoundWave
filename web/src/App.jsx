import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Albums from "./components/cards/Albums";
import Player from "./components/cards/Player";
import PlayerQueue from "./components/cards/PlayerQueue";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [album, setAlbum] = useState();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-row gap-5 justify-center h-screen items-center">
        <Player></Player>
        <PlayerQueue album_id={album}></PlayerQueue>
        <Albums setAlbum={setAlbum}></Albums>
      </div>
    </QueryClientProvider>
  );
}

export default App;
