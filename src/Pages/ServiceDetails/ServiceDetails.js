import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is service details page {serviceId}</h1>{" "}
      <div className="text-center mb-4">
        <Link to="/checkout">
          <button className="btn btn-primary">Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
