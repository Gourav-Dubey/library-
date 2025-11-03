import { motion } from "framer-motion";
import { MapPin, Phone, Globe, User, Copyright, Mail, Heart, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Library Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-2xl">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  RajSan Library
                </h3>
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Your gateway to knowledge and learning. A peaceful space for students 
                to explore, discover, and grow together in the world of books and wisdom.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">
                      Behlot Bypass Road near Old Dehat Police Station, Ganj Basoda
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contact</h4>
                    <p className="text-gray-400 text-sm">9827583132</p>
                    <p className="text-gray-400 text-sm">8966835743</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Owner Information */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ownership & Development
            </h4>
            
            <div className="space-y-6">
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-cyan-500/10 rounded-2xl mb-3 group-hover:bg-cyan-500/20 transition-colors">
                  <User className="w-8 h-8 text-cyan-400 mx-auto" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Yashraj Shukla</p>
                  <p className="text-cyan-400 text-sm">Rajkumar Shukla</p>
                  <p className="text-gray-400 text-xs mt-1">Library Owners</p>
                </div>
              </motion.div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-green-500/10 rounded-2xl mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Globe className="w-8 h-8 text-green-400 mx-auto" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Gourav Dubey</p>
                  <p className="text-gray-400 text-xs mt-1">Website Developer</p>
                </div>
              </motion.div>

              {/* Made with Love */}
              <motion.div 
                className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-400 text-sm">Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span className="text-gray-400 text-sm">for readers</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Copyright className="w-4 h-4" />
            <span>{currentYear} RajSan Library. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;