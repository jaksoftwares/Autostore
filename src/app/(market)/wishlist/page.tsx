"use client";
import { useState } from "react";
import Image from "next/image";

export default function WishlistPage() {
  // Sample wishlist items (Fetch from backend or local storage in real implementation)
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Alloy Wheels Set",
      price: 15000,
      image: "/product3.png",
    },
    {
      id: 2,
      name: "Car LED Headlights",
      price: 6500,
      image: "/product4.png",
    },
  ]);

  // Function to remove an item from the wishlist
  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Function to move an item to the cart
  const moveToCart = (id: number) => {
    const itemToMove = wishlist.find((item) => item.id === id);
    if (itemToMove) {
      // Here, you would typically update the cart state or make an API call to add the item to the cart
      console.log(`Added to Cart: ${itemToMove.name}`);
      removeItem(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">💖 Wishlist</h2>

        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Ksh {item.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => moveToCart(item.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
                >
                  🛒 Move to Cart
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
