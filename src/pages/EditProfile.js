import { useState, useContext } from "react";
import axios from "axios";
import { LoadingContext } from "../context/loading.context";
import { post } from "../services/authService";
import { useNavigate } from "react-router-dom";



function ParentProfile() {
  const {parent, setParent} = useContext(LoadingContext)
  const [parentProfile, setParentProfile] = useState({
    name: parent.name,
    email: parent.email,
    password: parent.password,
    city: parent.city
    // children: [],
  });

  const [newChild, setNewChild] = useState({
    name: "",
    age: "",
    relation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParentProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleChildChange = (event) => {
    const { name, value } = event.target;
    setNewChild((prevChild) => ({
      ...prevChild,
      [name]: value,
    }));
  };

  // const handleAddChild = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post(`/parent/${parentProfile._id}/child`, newChild)
  //     .then((response) => {
  //       setParentProfile((prevProfile) => ({
  //         ...prevProfile,
  //         children: [...prevProfile.children, response.data],
  //       }));
  //       setNewChild({
  //         name: "",
  //         age: "",
  //         relation: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const navigate = useNavigate()

  const handleUpdateProfile = () => {
    post(`/parent/${parent._id}/profile`, parentProfile)
      .then((response) => {
        setParent(response.data);
        navigate(`/profile/${response.data._id}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="updates">
      <h3>Update</h3>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleUpdateProfile();
        // handleAddChild();
}}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={parentProfile.name}
          onChange={handleChange}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={parentProfile.email}
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={parentProfile.password}
          onChange={handleChange}
        ></input>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={parentProfile.city}
          onChange={handleChange}
        ></input>
        {/* <h3>Children</h3> */}
        {/* {parentProfile.children.map((child, index) => (
          <div key={index}>
            <label>Name</label>
            <input type="text" value={child.name} disabled></input>
            <label>Age</label>
            <input type="text" value={child.age} disabled></input>
            <label>Relation</label>
            <input type="text" value={child.relation} disabled></input>
          </div>
          ))} */}
        {/* <h4>Add Child</h4>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newChild.name}
          onChange={handleChildChange}
        ></input>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={newChild.age}
          onChange={handleChildChange}
        ></input> */}
        {/* <label>Relation</label>
        <select
          name="relation"
          value={newChild.relation}
          onChange={handleChildChange}
        >
          <option value="">Select</option>
          <option value="Parent">Parent</option>
          <option value="Grandparent">Grandparent</option>
          <option value="Guardian">Guardian</option>
          <option type="Aunt">Aunt</option>
          <option type="Uncle">Uncle</option>
          <option type="Sibling">Sibling</option>
        </select> */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  )}
  {/* );
} */}

export default ParentProfile;
