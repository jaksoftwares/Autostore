"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  // Sample cart items (In real implementation, fetch from backend or local storage)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Brake Pad Set",
      price: 2500,
      image: "/product1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Engine Oil (5L)",
      price: 4500,
      image: "/product2.png",
      quantity: 2,
    },
  ]);

  // Function to update the quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🛒 Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3">Product</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded"
                      />
                      <span className="ml-4 text-gray-700">{item.name}</span>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="p-3 text-center">Ksh {item.price.toLocaleString()}</td>
                    <td className="p-3 text-center">
                      Ksh {(item.price * item.quantity).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Summary */}
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total: Ksh {totalPrice.toLocaleString()}</h3>
              <Link href="/checkout">
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
