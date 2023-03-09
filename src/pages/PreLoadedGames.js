import { useState, useEffect, useContext } from "react";
import { post, get } from "../services/authService";
import { LoadingContext } from "../context/loading.context";

const PreLoadedGames = () => {
  const [gamesList, setGameList] = useState(null);
  const { parent } = useContext(LoadingContext);
  const addGame = (game) => {
    post(`/updates/gameUpdate/${parent._id}`, { gameId: game })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!gamesList)
      get("/updates/allGames").then((result) => {
        setGameList(result.data);
      });
  }, []);
  console.log(gamesList);
  return (
    <div className="preloaded">
      {gamesList ? (
        gamesList.map((game) => {
          return (
            <>
              <h1>{game.title}</h1>
              <iframe src={game.play_link} title="game" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addGame(game._id);
                }}
              >
                <button>Play Game</button>
              </form>
            </>
          );
        })
      ) : (
        <p>No Games Found</p>
      )}
    </div>
  );
};

export default PreLoadedGames;