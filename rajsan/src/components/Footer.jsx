import { motion } from "framer-motion";
import { MapPin, Phone, Globe, User, Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-900 border-t border-gray-800 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Library Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 bg-blue-400  bg-clip-text">
              RajSan Library
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Your gateway to knowledge and learning. A peaceful space for students 
              to explore, discover, and grow together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-0" />
                <p className="text-gray-300">
                  📍 Behlot Bypass Road near Old Dehat Police Station, Ganj Basoda
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-0" />
                <p className="text-gray-300">
                  📞 9827583132, 8966835743
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Collections', 'Events', 'Membership'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Owner Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Ownership</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-cyan-400 flex-0" />
                <div>
                  <p className="text-gray-300 font-medium">Yashraj Shukla</p>
                  <p className="text-gray-300">Rajkumar Shukla</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-2">
                <Globe className="w-5 h-5 text-green-400 flex-0" />
                <p className="text-gray-300">Website by Yashraj Shukla</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Copyright className="w-4 h-4" />
            <span>{currentYear} RajSan Library. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;