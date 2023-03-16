import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
    const { parent, child } = useContext(LoadingContext);
    const { logout } = useContext(AuthContext)

    const handleClick = () => {
        if (child) {
            localStorage.clear()
        }
    }

  return (
    <>
      {parent ? (
        <nav className="navigation">
          <Link to={`/profile/${parent._id}`}>Profile</Link>
          <Link to="/" onClick={()=>logout()}>Log Out</Link>
          <Link to={"/childlogin"}>Child Login </Link>

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