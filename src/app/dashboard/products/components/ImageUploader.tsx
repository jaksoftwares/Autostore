"use client";

import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

interface ImageUploaderProps {
  onUpload: (images: string[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(uploadedImages);
      onUpload(uploadedImages);
    }
  };

  return (
    <div className="border p-4 rounded-md">
      <label className="block text-sm font-semibold mb-2">Product Images</label>
      <input type="file" multiple onChange={handleFileChange} className="mb-2" />
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <div key={index} className="relative w-20 h-20">
            <Image
              src={img}
              alt="Product"
              layout="fill" // ✅ Makes the image responsive
              objectFit="cover" // ✅ Ensures proper fitting
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
