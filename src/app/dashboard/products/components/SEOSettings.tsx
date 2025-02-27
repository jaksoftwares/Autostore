"use client";

import { useState } from "react";

interface SEOSettingsProps {
  onUpdate: (seoData: { metaTitle: string; metaDescription: string; tags: string }) => void;
}

const SEOSettings = ({ onUpdate }: SEOSettingsProps) => {
  const [seoData, setSeoData] = useState({
    metaTitle: "",
    metaDescription: "",
    tags: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({ ...prev, [name]: value }));
    onUpdate({ ...seoData, [name]: value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold">🔍 SEO Settings</h3>

      {/* Meta Title */}
      <div className="mt-2">
        <label className="block text-sm font-semibold">Meta Title</label>
        <input
          type="text"
          name="metaTitle"
          className="border rounded-md p-2 w-full"
          placeholder="Enter SEO title"
          value={seoData.metaTitle}
          onChange={handleChange}
        />
      </div>

      {/* Meta Description */}
      <div className="mt-2">
        <label className="block text-sm font-semibold">Meta Description</label>
        <textarea
          name="metaDescription"
          rows={2}
          className="border rounded-md p-2 w-full"
          placeholder="Enter SEO description"
          value={seoData.metaDescription}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* SEO Tags */}
      <div className="mt-2">
        <label className="block text-sm font-semibold">SEO Tags (comma-separated)</label>
        <input
          type="text"
          name="tags"
          className="border rounded-md p-2 w-full"
          placeholder="e.g. car, engine, oil"
          value={seoData.tags}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SEOSettings;
