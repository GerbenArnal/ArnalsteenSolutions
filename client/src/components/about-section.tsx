import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0080]/5 to-[#00FFFF]/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black font-[Montserrat] mb-8">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FF0080] bg-clip-text text-transparent">
                INNOVATION
              </span>
              <br />
              <span className="text-white">MEETS EXPERTISE</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              As an independent developer and student, I bring fresh perspectives and cutting-edge knowledge to every project. 
              My focus is on delivering exceptional value through modern, scalable solutions that grow with your business.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#FF0080]/10 to-[#00FFFF]/10 border border-[#FF0080]/20"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold electric mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#00FFFF]/10 to-[#FFD700]/10 border border-[#00FFFF]/20"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold cyber mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-400">Support Available</div>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-[#FF0080] to-[#FF1493] px-8 py-3 rounded-full font-semibold"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px #FF0080",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-semibold hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px #FFD700",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Story
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Solo developer workspace with modern setup"
              className="rounded-3xl shadow-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Floating Tech Stack Icons */}
            {[
              { icon: "⚛️", position: "-top-4 -left-4", gradient: "from-[#FF0080] to-[#FF1493]", delay: 0 },
              { icon: "🟢", position: "-top-4 -right-4", gradient: "from-[#00FFFF] to-[#8A2BE2]", delay: 0.5 },
              { icon: "☁️", position: "-bottom-4 -left-4", gradient: "from-[#FFD700] to-[#FF0080]", delay: 1 },
              { icon: "🐳", position: "-bottom-4 -right-4", gradient: "from-[#8A2BE2] to-[#00FFFF]", delay: 1.5 },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`absolute ${tech.position} w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center text-2xl`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: tech.delay,
                  ease: "easeInOut",
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
