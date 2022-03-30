import React from "react";
import Pricingoption from "./PricingOption/Pricingoption";

const Pricing = () => {
  const price = [
    {
      id: 1,
      name: "premium",
      price: 90,
      benefit: [
        "Unlimited gb",
        "sixteen hour daily",
        "one person in a day",
        "max one month",
        "dpo features",
      ],
    },
    {
      id: 2,
      name: "regular",
      price: 50,
      benefit: [
        "Unlimited gb",
        "24 hour daily",
        "one person in a day",
        "max one month",
        "dpo features",
      ],
    },
    {
      id: 3,
      name: "free",
      price: 0,
      benefit: [
        "Unlimited gb",
        "seven hour daily",
        "one person in a day",
        "max one month",
        "dpo features",
      ],
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="pricing-area grid grid-cols-3 gap-4">
        {price.map((price) => (
          <Pricingoption key={price.id} price={price}></Pricingoption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
