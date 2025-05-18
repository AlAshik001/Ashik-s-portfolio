import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 py-20 text-white"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-80 h-80 bg-orange-500 opacity-20 blur-3xl rounded-full absolute -top-20 -left-10 animate-ping" />
        <div className="w-96 h-96 bg-purple-500 opacity-20 blur-2xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      {/* Contact Form Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow">
          Contact <span className="text-orange-400">Me</span>
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-black/30 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full bg-black/30 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full bg-black/30 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full bg-black/30 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Icons */}
        <div className="flex justify-center gap-8 text-2xl text-orange-300 mt-10">
          <a
            href="https://github.com/Thenvanathi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thenvanathi-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:thenvanathi2003@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
