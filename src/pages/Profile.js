import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
// import UpdateList from "./Updates";
// import { Route } from 'react-router-dom';
// import Updates from './Updates';

const Profile = () => {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    fetch("/api/updates")
      .then((response) => response.json())
      // .then((data) => setUpdates(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Link to={"/edit-profile"}>
        <button>Edit Profile</button>
      </Link>
      {/* <Link to={"/Resources"}>
        <button>Additional Resources</button>
      </Link> */}
      <button onClick={logout}> Log Out</button>
    </div>
  );
};

export default Profile;