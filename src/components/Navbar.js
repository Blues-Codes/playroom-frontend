import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
    const { parent, child } = useContext(LoadingContext);
    const { logout } = useContext(AuthContext)
    // const handleLogout = async () => {
    //   try {
    //     // perform logout logic, e.g. send a request to the server
    //     await fetch("/logout", {
    //       method: "POST",
    //       credentials: "include",
    //     });
  
    //     // clear local session data
    //     sessionStorage.clear();
  
    //     // reload the current page, which will trigger a redirect to the login page
    //     window.location.reload();
    //   } catch (error) {
    //     console.error("Error logging out: ", error);
    //   }
    // };

    const handleClick = () => {
        if (child) {
            localStorage.clear()
            // navigate(`/profile/${parent._id}`)
        }
    }

  return (
    <>
      {parent ? (
        <nav className="navigation">
          {/* <Link to={"/about"}>About</Link> */}
          <Link to={"/PreLoaded-games"}>PreLoaded Games</Link>
          {/* <Link to={"/created-games"}>Created Games</Link> */}
          <Link to={`/profile/${parent._id}`}>Profile</Link>
          <Link to={"/storytime"}>Story Time</Link>
          <Link to={"/nurseryrhymes"}>Nursery Rhymes</Link>
          <Link to="/" onClick={()=>logout()}>Log Out</Link>

        </nav>
      ) : (
        <nav className="navigation">
          <Link to={"/"}>Home</Link>
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={"/login"} onClick={handleClick}
          >Login </Link>
          <Link to={"/childlogin"}>Child Login </Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;