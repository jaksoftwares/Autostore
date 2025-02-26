"use client";
import { useState } from "react";
import Image from "next/image";

const faqCategories = [
  {
    category: "Orders",
    questions: [
      { 
        question: "How do I place an order?", 
        answer: "Browse the products, add items to your cart, and proceed to checkout. Follow the steps to enter your details and complete payment."
      },
      { 
        question: "Can I cancel or modify my order?", 
        answer: "You can modify or cancel your order within 30 minutes of placing it. After that, processing begins, and changes cannot be made."
      },
      { 
        question: "Where can I see my order history?", 
        answer: "Log in to your account and navigate to the 'My Orders' section to view your purchase history."
      }
    ]
  },
  {
    category: "Payments & Pricing",
    questions: [
      { 
        question: "What payment methods do you accept?", 
        answer: "We accept M-Pesa, credit/debit cards, PayPal, and bank transfers."
      },
      { 
        question: "Are payments secure?", 
        answer: "Yes! We use secure SSL encryption to protect your payment information."
      },
      { 
        question: "Do you offer installment payments?", 
        answer: "Currently, we do not offer installment plans, but we are working to introduce flexible payment options soon."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      { 
        question: "How long does shipping take?", 
        answer: "Shipping times vary based on location. Typically, deliveries take 3-7 business days."
      },
      { 
        question: "Can I track my order?", 
        answer: "Yes, once your order is shipped, you will receive a tracking number via email."
      },
      { 
        question: "Do you offer international shipping?", 
        answer: "Currently, we only ship within Kenya, but we plan to expand internationally soon."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      { 
        question: "What is your return policy?", 
        answer: "You can return items within 7 days of delivery. Items must be in original packaging and unused."
      },
      { 
        question: "How do I request a refund?", 
        answer: "Contact our support team with your order details, and we will process your refund if eligible."
      },
      { 
        question: "Are return shipping costs covered?", 
        answer: "If the return is due to our error (wrong or defective item), we cover the return shipping. Otherwise, customers are responsible for shipping costs."
      }
    ]
  },
  {
    category: "Account & Security",
    questions: [
      { 
        question: "How do I create an account?", 
        answer: "Click the 'Sign Up' button on the homepage, enter your details, and verify your email."
      },
      { 
        question: "I forgot my password. How can I reset it?", 
        answer: "Go to the login page and click 'Forgot Password' to receive a reset link via email."
      },
      { 
        question: "How do I update my account details?", 
        answer: "Log in and navigate to the 'Account Settings' page to update your information."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/faq-hero.jpg" 
          alt="FAQ Page" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg">Find answers to common questions about AutoStore</p>
          <input
            type="text"
            placeholder="Search for answers..."
            className="mt-6 px-4 py-3 w-3/4 md:w-1/2 rounded-lg text-gray-900"
          />
        </div>
      </section>

      {/* 📚 FAQ Section */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        {faqCategories.map((section, sectionIdx) => (
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
        <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
        <p className="text-lg">If your question isn&apos;t listed here, contact our support team.</p>
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
    </div>
  );
}
