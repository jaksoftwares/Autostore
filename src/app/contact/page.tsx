"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here (e.g., send email)
  };

  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/contact-hero.jpg" 
          alt="Contact AutoStore" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30" 
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">Get in touch with AutoStore for any inquiries</p>
        </div>
      </section>

      {/* ✅ Contact Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Phone", info: "+254 712 345 678", icon: "/phone-icon.png" },
          { title: "Email", info: "support@autostore.com", icon: "/email-icon.png" },
          { title: "Location", info: "Nairobi, Kenya", icon: "/location-icon.png" },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <Image src={item.icon} alt={item.title} width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.info}</p>
          </div>
        ))}
      </section>

      {/* ✉️ Contact Form */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
        <p className="mt-4 text-gray-700">We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you soon.</p>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            className="w-full mt-4 p-3 border rounded-lg h-32"
            onChange={handleChange}
          ></textarea>
          <button 
            type="submit" 
            className="mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* 🗺️ Google Map (Optional) */}
      <section className="mt-16">
        <iframe 
          className="w-full h-80" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.476887007104!2d36.82194687999702!3d-1.2863896841445734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a3728b3b7b%3A0x55c4b88a7a8c73ea!2sNairobi!5e0!3m2!1sen!2ske!4v1673795034296!5m2!1sen!2ske" 
          allowFullScreen 
          loading="lazy">
        </iframe>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto mt-8 text-left">
          {[
            { question: "How do I track my order?", answer: "You can track your order through your account dashboard or by contacting support." },
            { question: "What payment methods do you accept?", answer: "We accept M-Pesa, credit cards, and PayPal." },
            { question: "Do you offer refunds?", answer: "Yes, we have a 7-day return policy for eligible items." },
          ].map((faq, index) => (
            <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA Section */}
      <section className="text-center bg-red-600 text-white py-16">
        <h2 className="text-3xl font-bold">Need Assistance?</h2>
        <p className="mt-4 text-lg">Reach out to our support team anytime.</p>
        <a href="tel:+254712345678" className="mt-6 inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition">
          Call Now
        </a>
      </section>
    </div>
  );
}
