import { useState, useEffect, useContext } from "react";
import { post, get } from "../services/authService";
import { LoadingContext } from "../context/loading.context";

const StoryTime = () => {
  const [gamesList, setGameList] = useState(null);
  const { parent } = useContext(LoadingContext);
  const addGame = (game) => {
    post(`/updates/gameUpdate/${parent.childId}`, { gameId: game })
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
              {/* <img src={}></img> */}
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

export default StoryTime;
// [

//     {
//         "title":"The Very Hungry Caterpillar",
//         "embed_video":<iframe width="560" height="315" src="https://www.youtube.com/embed/75NQK-Sm1YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": false
//     },
//     {
//         "title": "The Cat in the Hat",
//         "embed_video":<iframe width="560" height="315" src="https://www.youtube.com/embed/-LL62u6-OjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ,
//         "includes_lyrics": true
//     },
//     {
//         "title": "Oh the Places You'll Go",
//         "embed_video":<iframe width="560" height="315" src="https://www.youtube.com/embed/abw43kcLrbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ,
//         "includes_lyrics": true
//     },
//     {
//         "title": "Little Red Riding Hood",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/DKdc_kVBz7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true
//     },
//     {
//         "title": "Goldilocks and the Three Bears",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/G_pUBlsgBZ8?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true
//     },
//     {
//         "title": "The GingerBread Man",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/pckuS--UlV4?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true,
//     },
//     {
//         "title": "The Three Little Pigs",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/W-WLnxbvMyw?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": false
//     },
//     {
//         "title": "The Sour Grape",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/ZCL85YoRRJU?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true,
//     },
//     {
//         "title": "We Don't eat our Classmates",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/ff1THe0tItY?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true,
//     },
//     {
//         "title": "The Rainbow Fish",
//         "embed_video": <iframe width="560" height="315" src="https://www.youtube.com/embed/TOnuVm4OrCc?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
//         "includes_lyrics": true,
//     }
    
//     ]