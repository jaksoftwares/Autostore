"use client";

import React from "react";

const steps = ["Order Placed", "Processing", "Shipped", "Delivered"];

const OrderTimeline: React.FC<{ currentStatus: string }> = ({ currentStatus }) => {
  const stepIndex = steps.indexOf(currentStatus);

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold">📍 Order Progress</h3>
      <div className="flex justify-between items-center mt-3">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm ${
                index <= stepIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <p className="text-xs mt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeline;
