import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/Helmet/PageTitle";

const Login = () => {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const passwordRef = useRef("");
  const from = location?.state?.from?.pathname || "/";

  // Login with Email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // forget password hooks
  const [sendPasswordResetEmail, sending, forgetError] =
    useSendPasswordResetEmail(auth);

  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  // handle forget password function
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      toast.success("sent mail");
      await sendPasswordResetEmail(email);
    } else {
      toast.error("Please enter your email");
    }
  };

  // Loading untill user arrive
  if (loading) {
    return <Loading></Loading>;
  }

  // after login user navigation
  user && navigate(from, { replace: true });

  // navigate to register form function
  const navigateRegister = () => navigate("/register");
  return (
    <div className="w-50 mx-auto my-3">
      <PageTitle title="Login"></PageTitle>
      <h1 className="text-primary text-center">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </Form.Group>
        <p
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={handleForgetPassword}
        >
          Forget password ?
        </p>
        {sending && <p>Please Kindly check your email</p>}
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={navigateRegister}
        >
          Please Register
        </span>
      </p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
