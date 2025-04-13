import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Chatbot from '../components/Chatbot';
import SupportTicket from '../components/SupportTicket';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-4"
          >
            Apple Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Get help with your Apple products
          </motion.p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 rounded-full p-1">
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'faq' ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('ticket')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'ticket' ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
                }`}
              >
                Support Ticket
              </button>
            </div>
          </div>

          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  question: 'How do I set up my new iPhone?',
                  answer: 'To set up your new iPhone, turn it on and follow the on-screen instructions. You can transfer data from your old device or set up as new.'
                },
                {
                  question: 'How do I update my iOS?',
                  answer: 'Go to Settings > General > Software Update. If an update is available, tap Download and Install.'
                },
                {
                  question: 'How do I back up my iPhone?',
                  answer: 'You can back up your iPhone using iCloud or iTunes. For iCloud, go to Settings > [Your Name] > iCloud > iCloud Backup.'
                },
                {
                  question: 'How do I contact Apple Support?',
                  answer: 'You can contact Apple Support through the Apple Support app, website, or by calling 1-800-MY-APPLE.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'ticket' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <SupportTicket />
            </motion.div>
          )}
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default SupportPage;