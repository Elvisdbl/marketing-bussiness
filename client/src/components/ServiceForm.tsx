import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { getServices } from "../API";
import { IService } from "../interface/interfaces";
const ServiceForm = () => {
  const [services, setServices] = useState([] as Array<IService>);
  const [image, setImage] = useState({} as Blob);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const requestServices = async () => {
      setServices(await getServices());
    };
    requestServices();
  }, []);

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("type", type);
    data.append("description", description);
    data.append("price", price);

    try {
      const res = await fetch("/service", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <fieldset>
          <legend>Service</legend>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id=""
            value={type}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setType(e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id=""
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value);
            }}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id=""
            value={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files !== null) {
                setImage(e.target.files[0]);
              }
            }}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>type</th>
              <th>description</th>
              <th>price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {services.map(({ id_service, title, type, description, price }) => {
              return (
                <tr>
                  <td>{id_service}</td>
                  <td>{title}</td>
                  <td>{type}</td>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>
                    <i className="fas fa-pencil-alt"></i>
                  </td>
                  <td>
                    <i className="fas fa-trash"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ServiceForm;
