"use client";

import { useState } from "react";

interface Props {
  currentStatus: string;
  onUpdate: (newStatus: string) => void;
}

const statuses = ["Pending", "Processing", "Shipped", "Delivered", "Canceled"];

const OrderStatusUpdater: React.FC<Props> = ({ currentStatus, onUpdate }) => {
  const [status, setStatus] = useState(currentStatus);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onUpdate(newStatus);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold">📌 Update Order Status</h3>
      <select
        value={status}
        onChange={handleChange}
        className="border p-2 rounded-md w-full mt-2"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderStatusUpdater;
