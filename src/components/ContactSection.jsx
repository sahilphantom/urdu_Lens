import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiWhatsappLine } from 'react-icons/ri';
import { Bot } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_jm8heg9", // Your Service ID
        "template_mkn5ymj", // Your Template ID
        {
          from_name: form.name,
          to_name: "Sahil Mahmood",
          from_email: form.email,
          to_email: "sahilmahmood188@gmail.com",
          message: form.message,
        },
        "wW1JIf4AHfSS-QUnt" // Your Public Key
      )
      .then(() => {
        setIsSending(false);
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: RiFacebookFill, label: 'Facebook', href: '#' },
    { icon: RiInstagramLine, label: 'Instagram', href: '#' },
    { icon: RiLinkedinFill, label: 'LinkedIn', href: '#' },
    { icon: RiWhatsappLine, label: 'WhatsApp', href: '#' },
  ];

  return (
    <section className="py-20 px-14 max-w-7xl max-sm:px-4 mx-auto">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="grid md:grid-cols-2 gap-12 items-start max-sm:gap-8">
        {/* Contact Info (Left Column) */}
        <motion.div variants={containerVariants} className="space-y-12 max-sm:space-y-8">
          {/* Email Box */}
          <motion.div variants={itemVariants} className="bg-transparent rounded-lg p-5 border border-white/10 space-y-1 max-sm:p-4">
            <label className="text-lg text-gray-100 max-sm:text-base">Email</label>
            <div className="flex items-center justify-between gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <p className="text-3xl text-gray-400 max-sm:text-xl">info@urdulens.com</p>
              <Bot className="w-14 h-14 text-purple-600 text-3xl max-sm:w-10 max-sm:h-10" />
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="bg-transparent rounded-lg p-5 border border-white/10 space-y-1 max-sm:p-4">
            <label className="text-lg text-gray-100 max-sm:text-base">Meet Us</label>
            <div className="flex items-center justify-between gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <p className="text-3xl text-gray-400 max-sm:text-xl">Location Office</p>
              <Bot className="w-14 h-14 text-purple-600 text-lg max-sm:w-10 max-sm:h-10" />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="bg-transparent rounded-lg p-5 border border-white/10 space-y-8 max-sm:p-4">
            <h3 className="text-3xl text-gray-100 max-sm:text-xl">Connect</h3>
            <div className="flex justify-start gap-8 max-sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                >
                  <social.icon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form (Right Column) */}
        <motion.div variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-transparent rounded-2xl p-8 border border-white/10 space-y-6 max-sm:p-5">
            <div className="space-y-4">
              <h2 className="text-4xl text-white max-sm:text-2xl">Talk with us</h2>
              <p className="text-gray-400 text-lg max-sm:text-base">We are here for you! How can we help you?</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12 text-white/60 max-sm:space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-1">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-transparent text-3xl border-b-4 border-white/10 outline-none max-sm:text-xl"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="space-y-1">
                <input
                  type="email"
                  name="email"install 
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-transparent text-3xl border-b-4 border-white/10 outline-none max-sm:text-xl"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="space-y-1">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your problem"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-transparent text-3xl border-b-4 border-white/10 outline-none max-sm:text-xl"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSending}
                className="w-full md:w-auto px-6 py-3 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition-colors max-sm:py-2 max-sm:px-4"
              >
                {isSending ? 'Sending...' : 'Send it now'}
              </motion.button>

              {success && (
                <p className="text-green-500 text-lg pt-2">Message sent successfully!</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;