import React, { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

interface User {
  username: string;
  password: string;
}

const Login = () => {
  const [userDetails, setUserDetails] = useState<User>({
    username: "",
    password: "",
  });
  const handleChange = (event: any) => {
    const name = event.target.name;
    if (name === "username") {
      setUserDetails({ ...userDetails, username: event.target.value });
    } else {
      setUserDetails({ ...userDetails, password: event.target.value });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(userDetails);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => console.log(res),
    onError: (err) => console.log(err),
    // flow: "auth-code",
  });

  useEffect(() => {});

  return (
    <div
      id="loginPage"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div
        className="d-flex flex-column align-items-center h-50 w-50 pt-3 rounded bg-transparent text-white"
        id="loginContainer"
      >
        <form
          action="post"
          className="d-flex flex-column align-items-center w-100"
        >
          <h1>Login</h1>
          <div className="form-group w-50 mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
              id=""
              className="form-control"
            />
          </div>
          <div className="form-group w-50 mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              id=""
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-pill w-50 mb-2"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <hr className="w-50" />
        <button
          type="button"
          className="btn btn-outline-warning rounded-pill w-50 mt-2"
          onClick={() => googleLogin()}
        >
          Login with Google
        </button>
        {/* <GoogleLogin
          onSuccess={(res) => console.log(res)}
          onError={() => console.log("Error")}
          shape="pill"
          theme="filled_black"
        /> */}
      </div>
    </div>
  );
};

export default Login;
