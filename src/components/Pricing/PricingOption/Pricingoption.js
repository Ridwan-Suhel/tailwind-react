import React from "react";
import Benifit from "./Benefit/Benifit";
import "./PricingOption.css";
const Pricingoption = (props) => {
  const { name, price, benefit, id } = props.price;
  return (
    <div className="card text-white">
      <h4 className="text-2xl">{name}</h4>
      <h4 className="text-6xl text-black font-bold">
        {price}
        <span className="text-xl text-gray-600">/mo</span>
      </h4>
      <ul className="card-info text-left ">
        <h3 className="font-bold text-lg">Benifits: </h3>
        {benefit.map((benifit) => (
          <Benifit benifit={benifit}></Benifit>
        ))}
      </ul>
    </div>
  );
};

export default Pricingoption;
