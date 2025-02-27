"use client";

import { useState } from "react";

interface Props {
  location: string;
  onUpdate: (newLocation: string) => void;
}

const ShippingTracker: React.FC<Props> = ({ location, onUpdate }) => {
  const [newLocation, setNewLocation] = useState(location);

  const handleUpdate = () => {
    if (newLocation) {
      onUpdate(newLocation);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold">🚚 Shipping Location</h3>
      <p className="mb-2">Current Location: {location}</p>

      <input
        type="text"
        placeholder="Update location..."
        value={newLocation}
        onChange={(e) => setNewLocation(e.target.value)}
        className="border p-2 rounded-md w-full"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700"
      >
        Update Location
      </button>
    </div>
  );
};

export default ShippingTracker;
