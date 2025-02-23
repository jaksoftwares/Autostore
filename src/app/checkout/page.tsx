"use client";
import { useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  // Sample cart data (In real implementation, fetch from backend or global state)
  const cartItems = [
    { id: 1, name: "Alloy Wheels Set", price: 15000, image: "/product5.png", quantity: 1 },
    { id: 2, name: "Car LED Headlights", price: 6500, image: "/product6.png", quantity: 2 },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "mpesa",
  });

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle order submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🛒 Checkout</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Billing & Shipping Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">📋 Billing Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="text" name="address" placeholder="Shipping Address" required className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="text" name="city" placeholder="City" required className="w-full p-2 border rounded" onChange={handleChange} />

              <h3 className="text-lg font-semibold text-gray-700 mt-4">💳 Payment Method</h3>
              <select name="paymentMethod" className="w-full p-2 border rounded" onChange={handleChange}>
                <option value="mpesa">M-Pesa</option>
                <option value="card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>

              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                ✅ Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">🛍️ Order Summary</h3>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
                  <div className="ml-3 flex-1">
                    <h4 className="text-gray-800">{item.name}</h4>
                    <p className="text-gray-600">Ksh {item.price.toLocaleString()} x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-3">
              <h4 className="text-lg font-bold text-gray-800">Total: Ksh {totalPrice.toLocaleString()}</h4>
              <p className="text-gray-600 text-sm">Taxes & shipping calculated at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
