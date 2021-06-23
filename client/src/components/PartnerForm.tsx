import React, { useState, useEffect,FormEvent, ChangeEvent } from "react";
import {getPartners} from '../API';
import {IPartner} from '../interface/interfaces'
const PartnerForm = () => {
  const [image, setImage] = useState({} as Blob);
  const [name, setName] = useState("");
  const [partners, setPartners] = useState([] as Array<IPartner>);


  useEffect(() => {
    const requestPartners = async () => {
      setPartners(await getPartners());
    };
    requestPartners();
  }, []);

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("name", name);

    try {
      const res = await fetch("/partner", {
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
          <legend>Partner</legend>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
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
              <th>name</th>
              <th>image</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {partners.map(({ id_partner, name, image}) => {
              return (
                <tr>
                  <td>{id_partner}</td>
                  <td>{name}</td>
                  <td><img src={`http://localhost:5000/${image}`} alt={name} /></td>

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

export default PartnerForm;
