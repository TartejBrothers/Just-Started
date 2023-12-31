import { Link } from "react-router-dom";
import React from "react";

import "./styles/login.css";
import loginvector from "./assets/loginvector.png";
import ellipse from "./assets/ellipse.png";
import unhide from "./assets/unhide.png";
import vectorline from "./assets/vectorline.png";
import sendicon from "./assets/sendicon.png";
import apple from "./assets/apple.png";
import google from "./assets/google.png";
import facebook from "./assets/fb.png";

function Login() {
  const changeType = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="leftcontainer">
            <img src={loginvector} alt="loginvector" className="loginvector" />
            <img src={vectorline} alt="Vector line" className="vectorline" />
            <img src={sendicon} alt="send" className="sendicon" />
            <img src={ellipse} alt="Graphics" className="ellipse" />
          </div>
        </div>
        <div className="right">
          <div className="rightcontainer">
            <h5>LOGIN</h5>
            <form method="post" action="/#">
              <input
                type="text"
                name="name"
                placeholder="Enter  Email / Phone No "
                style={{ marginBottom: "20px" }}
                required
              />
              <br />
              <div className="inputfield">
                <img
                  src={unhide}
                  alt="password"
                  className="passwordicon"
                  onClick={changeType}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  id="password"
                />
              </div>
              <div className="forgottext">
                <p>Forgot Password?</p>
              </div>
              <div className="submitbutton">
                <input
                  type="submit"
                  value="Login"
                  style={{
                    width: "50%",
                    fontSize: "14px", // Corrected typo in fontSize
                    padding: "10px",
                    background: "#F28D00",
                    color: "#fff",
                    justifyContent: "center", // Corrected typo in justifyContent
                    margin: "20px auto 20px auto",
                  }}
                />
              </div>
            </form>
            <p>Or</p>
            <div className="signinoptions">
              <img src={facebook} alt="" />
              <hr className="verticalline" />
              <img src={google} alt="" />
              <hr className="verticalline" />
              <img src={apple} alt="" />
            </div>
            <p>
              Don’t have an account? <Link to="/signup">Sign Up</Link> now
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
