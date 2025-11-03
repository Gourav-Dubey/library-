import { motion } from "framer-motion";
import { Wifi, Sun, Zap, Droplets, Utensils, ParkingCircle, Newspaper, VolumeX, Users } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: VolumeX,
      image: "Quiet Study Environment.jpeg",
      title: "Quiet Study Environment",
      description: "Peaceful and distraction-free zones for focused learning"
    },
    {
      icon: Users,
      image: "Personal Cabins.jpeg",
      title: "Personal Cabins",
      description: "Private study spaces for individual concentration"
    },
    {
      icon: Wifi,
      image: "Free High-Speed Wi-Fi.jpeg",
      title: "Free High-Speed Wi-Fi",
      description: "Blazing fast internet for research and online learning"
    },
    {
      icon: Sun,
      image: "Proper Lighting & Ventilation.jpeg",
      title: "Proper Lighting & Ventilation",
      description: "Well-lit spaces with fresh air circulation"
    },
    {
      icon: Zap,
      image: "Charging Points at Every Seat.jpeg",
      title: "Charging Points at Every Seat",
      description: "Convenient power outlets for all your devices"
    },
    {
      icon: Droplets,
      image: "Clean Washrooms.jpeg",
      title: "Clean Washrooms",
      description: "Hygienic and well-maintained restroom facilities"
    },
    {
      icon: Utensils,
      image: "Dedicated Lunch Area.jpeg",
      title: "Dedicated Lunch Area",
      description: "Comfortable space for meals and breaks"
    },
    {
      icon: ParkingCircle,
      image: "Bike & Car Parking.jpeg",
      title: "Bike & Car Parking",
      description: "Secure parking facilities for vehicles"
    },
    {
      icon: Newspaper,
      image: "Daily Newspaper & Magazines.jpeg",
      title: "Daily Newspaper & Magazines",
      description: "Latest newspapers and educational magazines"
    }
  ];

  return (
    <section id="facilities" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-500">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art amenities designed for your comfort and productivity
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 rounded-full p-2 text-white">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Premium Learning Environment
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At RajSan Library, we believe that the right environment enhances learning. 
              That's why we've invested in top-quality facilities to ensure your study 
              experience is comfortable, productive, and enjoyable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;