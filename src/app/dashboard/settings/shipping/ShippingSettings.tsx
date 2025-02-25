"use client";

import { useState } from "react";

interface ShippingRate {
  region: string;
  rate: string;
}

const ShippingSettings = () => {
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([
    { region: "Nairobi", rate: "KSH 200" },
    { region: "Other Counties", rate: "KSH 500" },
  ]);
  const [newRegion, setNewRegion] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleAddShippingRate = () => {
    if (newRegion.trim() && newRate.trim()) {
      setShippingRates([...shippingRates, { region: newRegion, rate: newRate }]);
      setNewRegion("");
      setNewRate("");
    }
  };

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

      <div className="space-y-4">
        <input
          type="text"
          value={newRegion}
          onChange={(e) => setNewRegion(e.target.value)}
          placeholder="Enter a new region"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={newRate}
          onChange={(e) => setNewRate(e.target.value)}
          placeholder="Enter the shipping rate"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddShippingRate}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Shipping Rate
        </button>
      </div>
    </div>
  );
};

export default ShippingSettings;