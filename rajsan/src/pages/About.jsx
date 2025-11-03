 import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    // { icon: BookOpen, title: "50,000+ Books", desc: "Vast collection of academic and literature books" },
    { icon: Users, title: "Community First", desc: "Serving students and readers since 2024" },
    { icon: Clock, title: "24/7 Access", desc: "Flexible timing for night owls and early birds" },
    // { icon: Award, title: "Quality Service", desc: "Dedicated staff for personalized assistance" }
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
    <section id="about" className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">RajSan Library</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-white">Our Story</h3>
              </div>
              
              <div className="space-y-3 text-gray-300 text-sm md:text-base">
                <p>
                  Founded in 2024 by <span className="text-blue-400">Yashraj Shukla</span> and 
                  <span className="text-blue-400"> Rajkumar Shukla</span>, RajSan Library has been 
                  a beacon of knowledge in Ganj Basoda.
                </p>
                
                <p>
                  Located at <span className="text-white">Behlot Bypass Road near Old Dehat Police Station</span>, 
                  we've become the go-to destination for students and book lovers.
                </p>

                <p>
                  Our mission is to make quality education and reading material accessible to everyone.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-blue-500" />
                    Our Mission
                  </h4>
                  <p className="text-xs text-gray-300">
                    Empower minds through accessible education and foster lifelong love for reading.
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-blue-500" />
                    Our Vision
                  </h4>
                  <p className="text-xs text-gray-300">
                    Create an educated, informed community through knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features & Stats */}
          <div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-6 h-6 text-blue-500 mb-2" />
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white text-center mb-6">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs font-medium">
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
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Us?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 text-sm">
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