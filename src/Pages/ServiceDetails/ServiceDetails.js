import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../Hooks/useServiceDetails.js/useServiceDetails";
import Service from "../Home/Services/Service/Service";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails(serviceId);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Service key={service._id} service={service} />
          </div>
        </div>
      </div>
      <div className="text-center mb-4 mt-5">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
