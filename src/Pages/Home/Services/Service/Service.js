import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const navigate = useNavigate();
  const { _id, img, name, price, description } = service;
  const id = _id;
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img className="w-100" src={img} alt="" />
      <h2>{name} </h2>
      <p>price : {price} </p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetails(id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
