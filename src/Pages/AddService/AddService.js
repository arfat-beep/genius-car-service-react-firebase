import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PageTitle from "../Shared/Helmet/PageTitle";

const AddService = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/service/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => navigate("/"));
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <PageTitle title={"Add Service"}></PageTitle>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Add Service name"
          className="mb-3"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Add Service Description"
          className="mb-3"
          {...register("description", { required: true })}
        />
        <input
          placeholder="Price"
          className="mb-3"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          placeholder="Image Url"
          className="mb-3"
          type="text"
          {...register("img", { required: true })}
        />
        <input className="mb-3" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
