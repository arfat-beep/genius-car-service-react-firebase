import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Service from "../Home/Services/Service/Service";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useState(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
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
        <Link to="/checkout">
          <button className="btn btn-primary">Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
