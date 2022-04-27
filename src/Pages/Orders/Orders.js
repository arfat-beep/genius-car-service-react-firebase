import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const navigate = useNavigate();
  const user = useAuthState(auth);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const email = user[0]?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authoraization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrder(data);
      } catch (e) {
        console.log(e.message);
        console.log(e.response);
        if (e.response.status === 403 || e.response.status === 401) {
          // signOut(auth);
          // navigate("/login");
        }
      }
    };
    getOrder();
  }, []);
  return <div>This is orders page {order.length} </div>;
};

export default Orders;
