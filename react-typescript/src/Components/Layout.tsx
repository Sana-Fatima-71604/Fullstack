import { Link } from "react-router-dom";
import { useState } from "react";

const Layout: React.FC = () => {
  const [currentmailvalue, updateUsermailvalue] = useState("");
  const [currentPasswordvalue, updatePasswordvalue] = useState("");
  const isDisabled = currentPasswordvalue === "" || currentmailvalue === "";

  const signinHandler = async () => {
    console.log(currentmailvalue);
    console.log(currentPasswordvalue);
  };
  return (
    <>
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
      </div>
    </>
  );
};

export default Layout;
