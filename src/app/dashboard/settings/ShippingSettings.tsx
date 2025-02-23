"use client";

import { useState } from "react";

const ShippingSettings = () => {
  const [shippingRates, setShippingRates] = useState([
    { region: "Nairobi", rate: "KSH 200" },
    { region: "Other Counties", rate: "KSH 500" },
  ]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Shipping Rates</h3>
      <ul className="mb-4">
        {shippingRates.map((shipping, index) => (
          <li key={index} className="p-2 border-b">
            {shipping.region}: <strong>{shipping.rate}</strong>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white p-2 rounded">Add Shipping Rate</button>
    </div>
  );
};

export default ShippingSettings;
