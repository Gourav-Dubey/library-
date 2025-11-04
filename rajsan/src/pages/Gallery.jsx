 import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid, List } from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Library photos
  const libraryImages = [
    { id: 1, src: "library1.webp",  },
    { id: 2, src: "library2.webp",  },
    { id: 3, src: "library3.webp",  },
    { id: 4, src: "library4.webp",  },
    { id: 5, src: "library5.webp",  },
    { id: 6, src: "library6.webp",  },
    { id: 7, src: "library7.webp",  },
    { id: 8, src: "library8.webp",  },
    { id: 9, src: "library9.webp",  },
    { id: 10, src: "library10.webp",},
    { id: 11, src: "library11.webp",},
    { id: 12, src: "library12.webp",},
    { id: 13, src: "library13.webp",},
    { id: 14, src: "library14.webp",},
    { id: 15, src: "library15.webp",},
    { id: 16, src: "library16.webp",},
    { id: 17, src: "library17.webp",},
    { id: 18, src: "library18.webp",},
  ];

  // Pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = libraryImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(libraryImages.length / imagesPerPage);

  // Navigation functions
  const nextImage = () => {
    const currentIndex = libraryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % libraryImages.length;
    setSelectedImage(libraryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = libraryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + libraryImages.length) % libraryImages.length;
    setSelectedImage(libraryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.section 
        className="pt-28 pb-16 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Library <span className="text-blue-500">Gallery</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and study spaces
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </motion.section>

      {/* View Mode Toggle */}
      <motion.section className="px-4 pb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section className="px-4 pb-16" layout>
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={20} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // List View
            <motion.div className="space-y-4" layout>
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col md:flex-row"
                  whileHover={{ x: 10 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="md:w-48 h-48 shrink-0">
                    <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-300 mb-3">{image.description}</p>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <ZoomIn size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1} 
                className="p-2 rounded-lg bg-gray-800 text-gray-400 disabled:opacity-50 hover:bg-gray-700 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages} 
                className="p-2 rounded-lg bg-gray-800 text-gray-400 disabled:opacity-50 hover:bg-gray-700 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all">
                <X size={24} />
              </button>
              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all">
                <ChevronRight size={24} />
              </button>

              <div className="rounded-2xl overflow-hidden">
                <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;