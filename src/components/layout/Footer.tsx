import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} AutoStore. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
