import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Styles/Sign.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn({ prop }) {
  const [currentmailvalue, updateUsermailvalue] = useState("");
  const [currentPasswordvalue, updatePasswordvalue] = useState("");
  const navigate = useNavigate();

  const isDisabled = currentPasswordvalue === "" || currentmailvalue === "";

  const signinHandler = async () => {
    console.log(currentmailvalue);
    console.log(currentPasswordvalue);

    const user = { email: currentmailvalue, password: currentPasswordvalue };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        user
      );
      if (response.status === 200) {
        toast(response.data.message);
        prop(currentmailvalue);
        navigate("/Settings");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast(error.response.data.message);
        } else {
          toast("An error occurred: " + error.response.data.message);
        }
        console.log(error);
      }
    }
  };

  return (
    <div id="login">
      <h2>Login</h2>

      <div className="signin">Usermail</div>

      <input
        type="text"
        placeholder="Type your Usermail"
        value={currentmailvalue}
        onChange={(e) => {
          updateUsermailvalue(e.target.value);
        }}
      />
      <br />
      <div className="signin">Password</div>
      <input
        type="password"
        placeholder="Type your Password"
        value={currentPasswordvalue}
        onChange={(e) => {
          updatePasswordvalue(e.target.value);
        }}
      />
      <br />

      <button
        type="submit"
        onClick={signinHandler}
        className="btn btn-primary"
        disabled={isDisabled}
      >
        LOGIN
      </button>
      <br />

      <Link to="/signup" className="link">
        or Sign_Up
      </Link>
      <br />

      <div className="link">
        <Link to="#" className="fa fa-facebook"></Link>
        <Link to="#" className="fa fa-twitter"></Link>
        <Link to="#" className="fa fa-google"></Link>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SignIn;
