import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, profileUpdateError] = useUpdateProfile(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  user && navigate("/");
  return (
    <div className="register-container">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" id="" required />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          id=""
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          id=""
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree && "text-primary"}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>
        <input
          disabled={agree ? false : true}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Please Login
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
