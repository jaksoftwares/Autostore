"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  { 
    category: "Orders",
    questions: [
      { 
        question: "How do I place an order?", 
        answer: "Browse products, add items to your cart, and proceed to checkout."
      },
      { 
        question: "Can I cancel or modify my order?", 
        answer: "Orders can be modified within 30 minutes after placement by contacting support."
      }
    ]
  },
  { 
    category: "Payments",
    questions: [
      { 
        question: "What payment methods are accepted?", 
        answer: "We accept M-Pesa, credit/debit cards, PayPal, and bank transfers."
      },
      { 
        question: "Is my payment secure?", 
        answer: "Yes! We use industry-standard encryption for transactions."
      }
    ]
  },
  { 
    category: "Shipping & Delivery",
    questions: [
      { 
        question: "How long does shipping take?", 
        answer: "Shipping takes 3-7 business days depending on your location."
      },
      { 
        question: "How can I track my order?", 
        answer: "You will receive a tracking number via email after your order is shipped."
      }
    ]
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/help-hero.jpg" 
          alt="Help & Support" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">How can we help?</h1>
          <p className="mt-4 text-lg">Find answers to your questions or contact our support team</p>
          <input
            type="text"
            placeholder="Search for help..."
            className="mt-6 px-4 py-3 w-3/4 md:w-1/2 rounded-lg text-gray-900"
          />
        </div>
      </section>

      {/* 📚 FAQ Section */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">{section.category}</h3>
            <div className="mt-4 space-y-4">
              {section.questions.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left font-semibold text-gray-900 flex justify-between"
                  >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 📞 Contact Support */}
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold mb-6">Need Further Assistance?</h2>
        <p className="text-lg">Contact our support team for personalized help.</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">📞 Phone Support</h3>
            <p className="text-gray-700">Call us at <strong>+254 700 123 456</strong></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">📧 Email Support</h3>
            <p className="text-gray-700">Send us an email at <strong>support@autostore.com</strong></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">💬 Live Chat</h3>
            <p className="text-gray-700">Chat with us via the chat icon below.</p>
          </div>
        </div>
      </div>

      {/* 📝 Submit a Support Ticket */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Submit a Support Ticket</h2>
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border" />
          <textarea placeholder="Describe your issue" className="w-full px-4 py-3 rounded-lg border h-32"></textarea>
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg w-full hover:bg-red-700">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}
