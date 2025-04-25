import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Basic form structure, add state and submission logic as needed
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form className="space-y-6 bg-black/40 p-8 rounded-2xl border border-purple-900/30 shadow-xl">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-medium text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full px-4 py-3 rounded-md bg-gray-900/50 border border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500 transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-base font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="block w-full px-4 py-3 rounded-md bg-gray-900/50 border border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500 transition"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-green-400/80 text-white font-bold rounded-md shadow-lg hover:from-purple-500 hover:to-green-300 transition-all text-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
