import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SupportTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    product: 'iPhone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      product: 'iPhone'
    });
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Create Support Ticket</h2>

      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-bold mb-2">Ticket Submitted Successfully</h3>
          <p className="text-gray-400">
            We've received your support request. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="mt-6 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Submit Another Ticket
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Product
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            >
              <option value="iPhone">iPhone</option>
              <option value="Mac">Mac</option>
              <option value="iPad">iPad</option>
              <option value="Watch">Apple Watch</option>
              <option value="AirPods">AirPods</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${isSubmitting
              ? 'bg-gray-700 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-200'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
          </button>
        </form>
      )}
    </div>
  );
};

export default SupportTicket; 