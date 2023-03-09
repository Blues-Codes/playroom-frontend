import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
// import UpdateList from "./Updates";
// import { Route } from 'react-router-dom';
// import Updates from './Updates';

const Profile = () => {
  const [parent, setParent] = useState(null);

  useEffect(() => {
    fetch('/profile')
      .then(res => res.json())
      .then(parent => setParent(parent));
  }, []);

  if (!parent) {
    return <div>Loading...</div>;
  }

  const { logout } = useContext(AuthContext);
  useEffect(() => {
    fetch("/api/updates")
      .then((response) => response.json())
      // .then((data) => setUpdates(data));
  }, []);

  const navigate = useNavigate();

  return (
    <>
    <div>
      <Link to={"/edit-profile"}>
        <button>Edit Profile</button>
      </Link>
      {/* <Link to={"/Resources"}>
      <button>Additional Resources</button>
    </Link> */}
      <button onClick={logout}> Log Out</button>
    </div><div>
        <h3> `Welcome ${parent.name}`</h3>
        <h3>Your Email: {parent.email} </h3>
        <h3>Your City: {parent.city}</h3>
        <h3>Your Child's Name: {parent.childName} </h3>
        <h3>Your Child's Age: {parent.childAge} </h3>
        <h3>Your Relation: {parent.relation} </h3>
        {/* <h3>Your Profile: </h3> */}
      </div>
      </>
  );
};

export default Profile;