import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Package,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';
import AnimationButton from '../layout/AnimationButton';

const WHATSAPP_NUMBER = '919893441392'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔥 WHATSAPP SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, productInterest, message } = formData;

    const whatsappMessage = `
 *New Inquiry - Harsh Enterprises*

 *Name:* ${name}
 *Email:* ${email}
 *Phone:* ${phone}
 *Product:* ${productInterest}

 *Message:*
${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        message: ''
      });
    }, 3000);
  };

  const productOptions = [
    'Seedling Tray',
    'HIPS Roll',
    'Cocopit',
    'Bulk / Custom Order'
  ];

  const inputVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 }
  };

  return (
    <motion.section className="py-20 px-4 bg-linear-to-br from-white via-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 flex flex-col items-center text-center"
                >
                  <h2 className="heading-xl text-gray-900 mb-4">
                    Get in  <span className="text-green-600">Touch</span>{" "}
                  </h2>
        
                  <p className="paragraph max-w-2xl">
                    Fill the form and send inquiry directly on WhatsApp.
                  </p>
                </motion.div>
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border">
          

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* NAME */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
              >
                <label className="font-semibold text-sm">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 " />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter Your Name"
                    className="w-full pl-12 py-3 border-2 border-slate-400 rounded-xl"
                  />
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
              >
                <label className="font-semibold text-sm">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="info@example.com"
                    className="w-full pl-12 py-3 border-2 border-slate-400 rounded-xl"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* PHONE */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
              >
                <label className="font-semibold text-sm">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-12 py-3 border-2 border-slate-400 rounded-xl"
                  />
                </div>
              </motion.div>

              {/* PRODUCT */}
              <motion.div
                variants={inputVariants}
                animate={
                  focusedField === 'productInterest' ? 'focused' : 'unfocused'
                }
              >
                <label className="font-semibold text-sm">Product *</label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    name="productInterest"
                    required
                    value={formData.productInterest}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('productInterest')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 py-3 border-2 border-slate-400 rounded-xl bg-white"
                  >
                    <option value="">Select product</option>
                    {productOptions.map((p, i) => (
                      <option key={i}>{p}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </div>

            {/* MESSAGE */}
            <motion.div
              variants={inputVariants}
              animate={focusedField === 'message' ? 'focused' : 'unfocused'}
            >
              <label className="font-semibold text-sm">Message *</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-slate-400" />
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us your requirement..."
                  className="w-full pl-12 py-3 border-2 border-slate-400 rounded-xl resize-none"
                />
              </div>
            </motion.div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={submitted}
              className="btn-primary cursor-pointer inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              <AnimationButton>

              {submitted ? (
                <>
                  <CheckCircle /> Sent
                </>
              ) : (
                <>
                  Send Inquiry <Send />
                </>
              )}
              </AnimationButton>
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
