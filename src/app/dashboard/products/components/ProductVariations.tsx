"use client";

import { useState } from "react";
import { Variation } from "@/types/variation"; 

interface VariationsProps {
  onUpdate: (variations: Variation[]) => void;
}

const Variations = ({ onUpdate }: VariationsProps) => {
  const [variations, setVariations] = useState<Variation[]>([]);

  const addVariation = () => {
    const newVariation: Variation = {
      name: "",
      options: [""] // Start with one empty option
    };
    setVariations([...variations, newVariation]);
    onUpdate([...variations, newVariation]);
  };

  const handleNameChange = (index: number, value: string) => {
    const updated = variations.map((variation, i) => 
      i === index ? { ...variation, name: value } : variation
    );
    setVariations(updated);
    onUpdate(updated);
  };

  const handleOptionChange = (varIndex: number, optIndex: number, value: string) => {
    const updated = variations.map((variation, i) => {
      if (i === varIndex) {
        const options = [...variation.options];
        options[optIndex] = value;
        return { ...variation, options };
      }
      return variation;
    });
    setVariations(updated);
    onUpdate(updated);
  };

  const addOption = (varIndex: number) => {
    const updated = variations.map((variation, i) => 
      i === varIndex ? { ...variation, options: [...variation.options, ""] } : variation
    );
    setVariations(updated);
    onUpdate(updated);
  };

  return (
    <div className="border p-4 rounded-md space-y-4">
      <label className="block text-sm font-semibold mb-2">Product Variations</label>
      
      {variations.map((variation, varIndex) => (
        <div key={varIndex} className="space-y-2 border p-3 rounded-md">
          {/* Variation Name */}
          <input
            type="text"
            placeholder="Variation Name (e.g. Color)"
            className="border p-2 w-full mb-2"
            value={variation.name}
            onChange={(e) => handleNameChange(varIndex, e.target.value)}
          />

          {/* Options */}
          <div className="space-y-2">
            {variation.options.map((option, optIndex) => (
              <div key={optIndex} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Option value (e.g. Red)"
                  className="border p-2 flex-1"
                  value={option}
                  onChange={(e) => handleOptionChange(varIndex, optIndex, e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addOption(varIndex)}
              className="text-sm bg-gray-100 px-2 py-1 rounded"
            >
              + Add Option
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addVariation}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
      >
        ➕ Add Variation Type
      </button>
    </div>
  );
};

export default Variations;