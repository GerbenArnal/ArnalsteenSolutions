import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center perspective-3d overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 holographic opacity-10"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black font-[Montserrat] mb-8"
            data-text="ARNALSTEEN"
            animate={{
              textShadow: [
                "0 0 20px #FF0080",
                "0 0 40px #00FFFF",
                "0 0 20px #FF0080",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="bg-gradient-to-r from-[#FF0080] via-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent">
              ARNALSTEEN
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 cyber animate-pulse-glow"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            NEXT-GEN IT SOLUTIONS
          </motion.h2>
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl font-light mb-16 max-w-4xl mx-auto leading-relaxed">
            Transforming small businesses with cutting-edge web development, cloud solutions, and intelligent automation. 
            <span className="electric font-semibold"> Your digital future starts here.</span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[#FF0080] to-[#FF1493] px-12 py-4 rounded-full font-semibold text-lg neon-border"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px #FF0080, 0 0 60px #FF0080",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("services")}
            className="border-2 border-[#00FFFF] text-[#00FFFF] px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#00FFFF] hover:text-[#0A0A0A] transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px #00FFFF",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cyber text-2xl cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("services")}
      >
        ↓
      </motion.div>
    </section>
  );
}
