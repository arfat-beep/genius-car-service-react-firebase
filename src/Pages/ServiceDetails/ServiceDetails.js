import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return <div>This is service details page {serviceId} </div>;
};

export default ServiceDetails;
