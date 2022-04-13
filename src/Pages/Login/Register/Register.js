import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(name, email, password);
  };
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
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Please Register
        </span>
      </p>
    </div>
  );
};

export default Register;
