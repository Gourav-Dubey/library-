 import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Users, title: "Community First", desc: "Serving students and readers since 2024" },
    { icon: Clock, title: "24/7 Access", desc: "Flexible timing for night owls and early birds" },
  ];

  const stats = [
    { number: "50K+", label: "Books Collection" },
    { number: "5K+", label: "Happy Members" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Service Available" }
  ];

  const whyChoose = [
    "Student Friendly - Special discounts and flexible plans for students",
    "Modern Facilities - Digital catalog, reading rooms, and study spaces", 
    "Expert Guidance - Professional staff to help you find the right books"
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-400">RajSan Library</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in the journey of knowledge and learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Story</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  Founded in 2024 by <span className="text-blue-400 font-semibold">Yashraj Shukla</span> and 
                  <span className="text-blue-400 font-semibold"> Rajkumar Shukla</span>, RajSan Library has been 
                  a beacon of knowledge in Ganj Basoda.
                </p>
                
                <p>
                  Located at <span className="text-white font-medium">Behlot Bypass Road near Old Dehat Police Station</span>, 
                  we've become the go-to destination for students and book lovers.
                </p>

                <p>
                  Our mission is to make quality education and reading material accessible to everyone.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/50">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Our Mission
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Empower minds through accessible education and foster lifelong love for reading.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/50">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-blue-400" />
                    Our Vision
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Create an educated, informed community through knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features & Stats */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Us?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-cyan-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;