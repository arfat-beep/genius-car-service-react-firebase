import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h3>Email is not verified</h3>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
