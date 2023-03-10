import { useState, useEffect, useContext } from "react";
import { post, get } from "../services/authService";
import { LoadingContext } from "../context/loading.context";

const StoryTime = () => {
    return (
      <div className="storytime">
        <h1>Pick a story to watch</h1>
        <div>
          <h2>"The Very Hungry Caterpillar"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/75NQK-Sm1YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <h2>"The Cat in the Hat"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/-LL62u6-OjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <h2>"Oh the Places You'll Go"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/abw43kcLrbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <h2>"Little Red Riding Hood"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/DKdc_kVBz7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <h2>"Goldilocks and the Three Bears"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/G_pUBlsgBZ8?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <h2>"The GingerBread Man"</h2>
          <iframe
           width="560" height="315" src="https://www.youtube.com/embed/pckuS--UlV4?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <h2>"The Sour Grape"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/ZCL85YoRRJU?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <h2>"The Rainbow Fish"</h2>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/TOnuVm4OrCc?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>
    );
  };
  
export default StoryTime;


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