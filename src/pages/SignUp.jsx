import React, { useRef } from "react";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const {setIsLoggedIn} = useAuth();

  const createUser = async (user) => {
    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };

    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {...user, appType: "music"},
        config
      );
      // console.log("response", response);
      const token = response.data.token;
      if(token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(response.data.data.user.name));
        setIsLoggedIn(true);
        navigate("/home");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createUser(user);
  };

  return (
    <form action="" className="sign-up" onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <div className="sign-up-input">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and last name"
          ref={nameRef}
        />
      </div>
      <div className="sign-up-input">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" ref={emailRef} />
      </div>
      <div className="sign-up-input">
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
      <div>
        <input type="submit" value="Sign Up" className="submit-button" />
      </div>
    </form>
  );
}

export default SignUp;
