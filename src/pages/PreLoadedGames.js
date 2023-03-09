import { useState, useEffect, useContext } from "react";
import { post, get } from "../services/authService";
import { LoadingContext } from "../context/loading.context";

const PreLoadedGames = () => {
  const [gamesList, setGameList] = useState(null);
  const { child } = useContext(LoadingContext);

  const addGame = (game) => {
    console.log("this is the game", game)
    let newList = [...gamesList]

    let gameIndex = gamesList.findIndex((thisGame) => thisGame._id === game._id) 

    let updatedGame = Object.assign({}, game) 
    updatedGame.playable = true  

    newList[gameIndex] = updatedGame

    console.log(updatedGame)
    setGameList(newList)


    if (child) {
        post('/updates/create', {
          child: child, game: game
        })
        .then((results) => {
          console.log("Creating", results.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
} 

useEffect(() => {
    if (!gamesList)
      get("/updates/allGames").then((result) => {
        setGameList(result.data);
      });
  }, []);
  console.log(gamesList);
  return (
    <div className="preloaded frame">
      {gamesList ? (
        gamesList.map((game) => {
          return (
            <div className="gamecontainer">
              <h1>{game.title}</h1>
              <iframe src={game.play_link} title="game" />
              {/* <img src={}></img> */}
              <div className={game.playable ? "hidden" : "overlay"} onClick={() => addGame(game)}>
                <h1>Play Game</h1>
                <h1 className={game.playable ? "visible" : "hidden"}>Visible</h1>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Games Found</p>
      )}
    </div>
  );
};

export default PreLoadedGames;