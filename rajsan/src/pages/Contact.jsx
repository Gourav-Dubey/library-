import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setFormData({ name: "", email: "", phone: "", message: "" });
  //   }, 2000);
  // };
   const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("https://formspree.io/f/manlglbk", { // <-- YAHI tumhara endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Error sending message ❌");
    }
  } catch (error) {
    alert("Something went wrong ❌");
  }

  setIsSubmitting(false);
};


  const contactInfo = [
    { 
      icon: MapPin, 
      text: "Behlot Bypass Road, Ganj Basoda, MP",
      color: "text-red-500"
    },
    { 
      icon: Phone, 
      text: "9827583132 | 8966835743",
      color: "text-green-500"
    },
    { 
      icon: Mail, 
      text: "rajsanlibrary@gmail.com",
      color: "text-blue-500"
    },
    { 
      icon: Clock, 
      text: "24/7 Study Access • Main: 6AM-11PM",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 px-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto">
          Ready to help you on your learning journey
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          
          <div className="space-y-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <div className={`p-2 rounded-lg bg-gray-700/50 ${item.color} flex-0 mt-1`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base flex-1">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { number: "24/7", label: "Access" },
              // { number: "50K+", label: "Books" },
              { number: "200+", label: "Members" },
              // { number: "8+", label: "Years" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="text-lg md:text-xl font-bold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Send className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">
              Send <span className="text-blue-500">Message</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
              
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
              
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message... How can we help you?"
              required
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm md:text-base"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      {/* Map Section */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="max-w-4xl mx-auto mb-16"
>
  <div className="text-center mb-6">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Visit Our <span className="text-blue-500">Library</span>
    </h2>
    <p className="text-gray-300 text-sm md:text-base">Come see us in person!</p>
  </div>

  <div className="bg-gray-800/50 rounded-2xl p-4 md:p-6 border border-gray-700">
    {/* EMBED MAP */}
    <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl border border-gray-600">
      <iframe
        title="Rajsan Library Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.96402791294!2d77.931237!3d23.852990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cbb616b3d2e6d%3A0x6abdb0f3e98b8d6e!2sRajSan%20Library%2C%20Ganj%20Basoda!5e0!3m2!1sen!2sin!4v1709630400000!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>

    <div className="text-center mt-6">
      <h3 className="text-white text-xl font-bold">RajSan Library</h3>
      <p className="text-gray-300 text-sm mb-4">Behlot Bypass Road, Ganj Basoda</p>

      <a
        href="https://maps.app.goo.gl/CSunEuXh7JVfJFp47"
        
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
      >
        <MapPin className="w-4 h-4" />
        Open in Maps
      </a>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default ContactSection;