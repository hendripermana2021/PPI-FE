import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-orange-700 mb-4">📬 Contact Us</h1>
        <p className="text-orange-900 text-lg mb-8">
          Have questions or want to collaborate? Reach out to us via WhatsApp or LINE!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6282167827302?text=Hello%20Autumn%20Festival!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.6 10.4c-.3-.2-1.7-1-2-.9-.3.1-1.4.9-1.7 1.1-.3.2-.6.2-.9-.2-.3-.4-1-1.1-1.4-1.3-.3-.2-.7-.1-1 .1-.3.3-1 1.1-1 2.5s1 2.9 1.1 3.1c.1.2 1.7 2.7 4.1 3.7 2.4 1 2.4.7 2.8.6.3-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1-.1-.2-.3-.3-.6-.5-.3-.2-1.7-.8-2-1-.3-.2-.4-.3-.6-.5z" />
            </svg>
            Chat via WhatsApp
          </a>

          {/* LINE Button */}
          <a
            href="https://line.me/R/ti/p/yuli.tan1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
            </svg>
            Chat via LINE
          </a>
        </div>

        {/* Optional Footer */}
        <p className="text-orange-900 mt-8">
          We’re excited to hear from you and make your Autumn Festival experience unforgettable! 🍁
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
