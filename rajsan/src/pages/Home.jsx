import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "library1.webp", title: "Study Zone", description: "Quiet spaces for focused learning" },
  { src: "library2.webp", title: "Reading Area", description: "Comfortable seating for immersive reading" },
  { src: "library3.webp", title: "Collaboration Space", description: "Areas for group discussions and projects" },
  { src: "library4.webp", title: "Book Collection", description: "Vast collection of academic resources" },
  { src: "library5.webp", title: "Digital Hub", description: "Modern technology for digital learning" },
];

function Home() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth + 20;
      const newIndex = direction === "left" 
        ? Math.max(0, currentIndex - 1)
        : Math.min(photos.length - 1, currentIndex + 1);

      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const goToSlide = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth + 20;
      setCurrentIndex(index);
      scrollRef.current.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center overflow-hidden">
      <motion.section
        className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 gap-12 max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Rajsan Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            Where Knowledge Meets Inspiration
          </p>
          <p className="text-gray-400 mb-10 text-lg leading-8 max-w-md mx-auto md:mx-0">
            A peaceful hub for students to learn, grow, and collaborate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Library
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Book a Visit
            </Button>
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 md:p-4 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-gray-700"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex justify-center w-full">
              <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide px-4 w-[350px] sm:w-[450px] md:w-[500px]"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="shrink-0 w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white mb-1">{photo.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {photo.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 md:p-4 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-gray-700"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="w-full max-w-5xl py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "📚", title: "50K+ Books", desc: "Vast collection" },
            { icon: "🕒", title: "24/7 Access", desc: "Flexible timing" },
            { icon: "👥", title: "Community", desc: "Active members" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Home; 

