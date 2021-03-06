import React from "react";

const Expart = ({ expart }) => {
  const { name, img } = expart;
  return (
    <div className=" col-sm-12 col-md-6 col-lg-4 g-5 text-center">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expart;
