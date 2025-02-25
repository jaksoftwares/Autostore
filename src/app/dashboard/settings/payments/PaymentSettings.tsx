"use client";

import { useState } from "react";

const PaymentSettings = () => {
  const [paymentMethods, setPaymentMethods] = useState(["Credit Card", "PayPal", "M-Pesa"]);
  const [newMethod, setNewMethod] = useState("");

  const handleAddMethod = () => {
    if (newMethod.trim() && !paymentMethods.includes(newMethod)) {
      setPaymentMethods([...paymentMethods, newMethod]);
      setNewMethod("");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Available Payment Methods</h3>
      <ul className="mb-4">
        {paymentMethods.map((method, index) => (
          <li key={index} className="p-2 border-b">
            {method}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          value={newMethod}
          onChange={(e) => setNewMethod(e.target.value)}
          placeholder="Enter a new payment method"
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={handleAddMethod}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default PaymentSettings;