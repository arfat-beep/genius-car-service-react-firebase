import React from "react";

import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import googleLogo from "../../../../images/google-svg.svg";
import facebookLogo from "../../../../images/facebook-circular-logo.png";
import githubLogo from "../../../../images/github.png";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  googleUser && navigate("/");
  githubUser && navigate("/");
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="w-50 bg-primary " style={{ height: "1px" }}></div>
        <strong className=" p-2">OR</strong>
        <div className="w-50 bg-primary " style={{ height: "1px" }}></div>
      </div>
      {googleError && <p className="text-danger">{googleError.message}</p>}
      {googleLoading && <p className="text-warning">Loading... Please wait</p>}
      {githubError && <p className="text-danger">{githubError.message}</p>}
      {githubLoading && <p className="text-warning">Loading... Please wait</p>}
      <button
        className="btn btn-info d-block mx-auto w-50 mb-3"
        onClick={() => signInWithGoogle()}
      >
        <img
          src={googleLogo}
          style={{ width: "40px", paddingRight: "10px" }}
          alt=""
        />
        Google Sign In
      </button>
      <button className="btn btn-info d-block mx-auto w-50 mb-3">
        <img
          src={facebookLogo}
          style={{ width: "40px", paddingRight: "10px" }}
          alt=""
        />{" "}
        Facebook Sign In
      </button>
      <button
        className="btn btn-info d-block mx-auto w-50 mb-3"
        onClick={() => signInWithGithub()}
      >
        <img
          src={githubLogo}
          style={{ width: "40px", paddingRight: "10px" }}
          alt=""
        />{" "}
        Github Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
