import React, { useRef } from "react";
import "./SignUp.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const { state } = useLocation();

  const signInUser = async (user) => {
    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };

    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        { ...user, appType: "music" },
        config
      );
      // console.log("response", response);
      const token = response.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem(
          "userName",
          JSON.stringify(response.data.data.name)
        );
        setIsLoggedIn(true);
        if (state) {
          navigate(state.prevPath);
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    signInUser(user);
  };

  return (
    <form action="" className="sign-in" onSubmit={handleFormSubmit}>
      <h2>Sign In</h2>
      <div className="sign-in-input">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" ref={emailRef} />
      </div>
      <div className="sign-in-input">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="At least 6 characters"
          ref={passwordRef}
        />
      </div>
      <div className="sign-in-input">
        <input type="submit" value="Sign In" className="submit-button" />
      </div>
    </form>
  );
}

export default SignIn;
