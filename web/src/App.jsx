import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Albums from "./components/cards/Albums";
import Player from "./components/cards/Player";
import PlayerQueue from "./components/cards/PlayerQueue";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-row gap-5 justify-center h-screen items-center">
        <Player></Player>
        <PlayerQueue></PlayerQueue>
        <Albums></Albums>
      </div>
    </QueryClientProvider>
  );
}

export default App;
