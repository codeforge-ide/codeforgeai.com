import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Basic form structure, add state and submission logic as needed
  return (
    <section id="contact" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto" // Centering container
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center"> {/* Adjusted size, gradient */}
          Get In Touch
        </h2>
        {/* Form Card Style */}
        <form className="space-y-6 bg-gray-800/50 p-8 rounded-lg shadow-lg border border-gray-700/60">
          <div> {/* Group label and input */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label> {/* Adjusted style */}
            <input
              type="email"
              name="email"
              id="email"
              required
              // Standardized Input Style
              className="block w-full px-4 py-2.5 rounded-md bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 focus:ring-1 transition"
              placeholder="you@example.com"
            />
          </div>
          <div> {/* Group label and textarea */}
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label> {/* Adjusted style */}
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              // Standardized Textarea Style
              className="block w-full px-4 py-2.5 rounded-md bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 focus:ring-1 transition resize-none" // Added resize-none
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            {/* Standardized Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-colors text-lg" // Primary button style with focus states
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
