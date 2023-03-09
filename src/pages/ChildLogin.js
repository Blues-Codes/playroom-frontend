import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PreLoadedGames from "./PreLoadedGames";
import { post } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { LoadingContext } from "../context/loading.context";

function Keyboard({ onLetterClick }) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "\u2190"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function handleClick(letter) {
    onLetterClick(letter);
  }

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <>
          <div key={index} className="row">
            {row.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  handleClick(letter);
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

const ChildLogin = () => {
  const [text, setText] = useState("");
  const { authenticateParent } = useContext(AuthContext);
  const {child, setChild} = useContext(LoadingContext);
  const navigate = useNavigate()

  console.log(text);
  function handleLetterClick(letter) {
    if (letter === "\u2190") {
      setText(text.slice(0, -1)); // remove last character from text
    } else {
      setText(text + letter.toLowerCase());
    } // const { user } = AuthContext();
    // const { childId } = useParams();
  }

  const handleChildLogin = (e) => {
    e.preventDefault();
    post("/child/childlogin", { text })
      .then((results) => {
        console.log(results.data);
        setChild(results.data.child)
        navigate("/preloaded-games")
        localStorage.setItem("authToken", results.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => {
      //   authenticateParent();
      // });
  };

  return (
    <>
      <div className="childLogin">
        <Keyboard onLetterClick={handleLetterClick} />
        <form onSubmit={handleChildLogin}>
          <input type="text" name="text" value={text} />
          <button>GO</button>
        </form>
      </div>
      <div className="welcomeMsg">
        <h3> Hi Login and Let's play a game!</h3>
      </div>
    </>
  );
};

export default ChildLogin;