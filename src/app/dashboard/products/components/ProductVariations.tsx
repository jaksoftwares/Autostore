"use client";

import { useState } from "react";

interface VariationsProps {
  onUpdate: (variations: unknown[]) => void;
}

const Variations: React.FC<VariationsProps> = ({ onUpdate }) => {
  const [variations, setVariations] = useState<{ name: string; value: string }[]>([]);

  const addVariation = () => {
    setVariations([...variations, { name: "", value: "" }]);
  };

  return (
    <div className="border p-4 rounded-md">
      <label className="block text-sm font-semibold mb-2">Product Variations</label>
      {variations.map((variation, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            placeholder="Variation Name (e.g. Color)"
            className="border p-2 w-1/2"
            onChange={(e) => {
              const newVariations = [...variations];
              newVariations[index].name = e.target.value;
              setVariations(newVariations);
              onUpdate(newVariations);
            }}
          />
          <input
            type="text"
            placeholder="Value (e.g. Red)"
            className="border p-2 w-1/2"
            onChange={(e) => {
              const newVariations = [...variations];
              newVariations[index].value = e.target.value;
              setVariations(newVariations);
              onUpdate(newVariations);
            }}
          />
        </div>
      ))}
      <button type="button" onClick={addVariation} className="bg-green-500 text-white px-4 py-2 rounded-md">
        ➕ Add Variation
      </button>
    </div>
  );
};

export default Variations;
