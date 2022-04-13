import React from "react";
import notFoundImg from "../../../../images/404-page.jpg";
const NotFound = () => {
  return (
    <div className=" text-center">
      <h1 className="text-danger">Sorry Page Not Found</h1>
      <img src={notFoundImg} className="h-100" alt="" />
    </div>
  );
};

export default NotFound;
