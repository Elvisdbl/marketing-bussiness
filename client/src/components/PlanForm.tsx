import React, { useState,useEffect, FormEvent, ChangeEvent } from "react";
// import {IPlanDetails} from '../interface/interfaces';

const PlanForm = () => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  // const [details ,setDetails ] = useState([] as IPlanDetails );

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        price,
      }),
    };

    try {
      const res = await fetch("/plan", config);
      const result = res.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

    const a = document.querySelector(".detailform");
    const  addInput = () => {
      const input = document.createElement('input');
      if(a){
        a.appendChild(input);
      }
    }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <fieldset>
          <legend>Plan</legend>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setType(e.target.value);
            }}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPrice(e.target.value);
            }}
          />
          
          {/* <input type="text" name="" id="" 
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value);
          }}
          /> */}

        <div className="detailform">
          <label>Details</label>
          <input type="text" name="" id="" />
          <input type="button" value="add" onClick={addInput}/>
        </div>
        
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PlanForm;
