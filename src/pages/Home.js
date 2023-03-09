// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom"

const Home = () => {
  const pageStyle = {
    backgroundImage: "url('./images/Welcomeimage.png')",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative"
  }
  
  return (
    <div className="welcome" style={pageStyle}>
  Welcome to The Playroom! 
  <Link to={"/login"} style={{ position: "absolute", top: "96.01px", left: "117.17px", width: "150px", height: "50px" }}></Link>
  <Link to={"/parent-signup"} style={{ position: "absolute", top: "493.94px", left: "-445.76px", width: "200px", height: "50px" }}></Link>
  <Link to={"/childlogin"} style={{ position: "absolute", top: "181.43px", left: "51.40px", width: "150px", height: "50px" }}></Link>
</div>
  )
}
export default Home;