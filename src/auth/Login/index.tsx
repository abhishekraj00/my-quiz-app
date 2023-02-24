import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./log.css";

interface UserData {
  name: string;
  email: string;
  phoneNo: string;
  langauage: string;
}

const Login: React.FC = () => {
  //user Data
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phoneNo: "",
    langauage: "English",
  });

  const navigate = useNavigate();

  //function input change
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // function called on submit button submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userData);
    navigate("/questionpage");
  };

  // function to set value change in select and option
  const handelInput2 = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="card from_main p-4 ">
      <h1>Welcome to quiz App</h1>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your Name"
          name="name"
          value={userData.name}
          onChange={handelInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="InputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="InputEmail1"
          placeholder="Enter your email"
          name="email"
          onChange={handelInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="InputPhoneNo">Phone No</label>
        <input
          type="number"
          className="form-control"
          id="InputPhoneNo"
          placeholder="Enter Phone Number"
          name="phoneNo"
          onChange={handelInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Select1">Select Prefered Language</label>
        <select
          name="langauage"
          className="form-control"
          id="Select1"
          onChange={handelInput2}
          defaultValue="Please select your prefered language"
        >
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-dark m-4 pl-4"
        onClick={handleSubmit}
        disabled={
          userData.name && userData.email && userData.phoneNo ? false : true
        }
      >
        Start Test
      </button>
    </form>
  );
};

export default Login;
