import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { get } from "../services/authService"

const Profile = () => {
  const [parent, setParent] = useState(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    get('/parent/profile')
      .then(res => {
        setParent(res.data)})
  }, []);

  useEffect(() => {
    fetch("/api/updates")
      .then((response) => response.json())
  }, []);

  return (
    <>
      <div>
        <Link to={"/edit-profile"}>
          <button>Edit Profile</button>
        </Link>
        <button onClick={logout}> Log Out</button>
      </div>
      {parent && (
        <div>
          <h3> Welcome {parent.name}</h3>
          <h3>Your Email: {parent.email} </h3>
          <h3>Your City: {parent.city}</h3>
          <h3>Your Child's Name: {parent.childName} </h3>
          <h3>Your Child's Age: {parent.childAge} </h3>
          <h3>Your Relation: {parent.relation} </h3>


          {parent.updates.length ? 

parent.updates.map((update) =>{
    return (
        <div>
          update
          {console.log("this update", update)}
                      <p>{update.child.name}</p>
            <p>{update.gamePlayed.title}</p>
            <p>{update.createdAt}</p>
        </div>
    )
})
: <h4>No updates</h4>
}

        </div>
      )}
    </>
  );
};

export default Profile;