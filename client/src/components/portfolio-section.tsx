import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Rocket, Star } from "lucide-react";

const portfolioItems = [
  {
    icon: Plus,
    title: "Coming Soon",
    description: "Amazing project in development",
    gradient: "from-[#FF0080]/20 to-[#00FFFF]/20",
    border: "border-[#FF0080]/30",
    iconColor: "#FF0080",
  },
  {
    icon: Rocket,
    title: "In Progress",
    description: "Innovative solution launching soon",
    gradient: "from-[#00FFFF]/20 to-[#FFD700]/20",
    border: "border-[#00FFFF]/30",
    iconColor: "#00FFFF",
  },
  {
    icon: Star,
    title: "Next Level",
    description: "Revolutionary project concept",
    gradient: "from-[#FFD700]/20 to-[#8A2BE2]/20",
    border: "border-[#FFD700]/30",
    iconColor: "#FFD700",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black font-[Montserrat] mb-8">
            <span className="bg-gradient-to-r from-[#FF0080] via-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of innovative projects and cutting-edge solutions. More amazing work coming soon!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative h-80 rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.border} overflow-hidden`}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.iconColor}10, transparent)`,
                }}
              />
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <item.icon 
                      size={48} 
                      className="mb-4 mx-auto"
                      style={{ color: item.iconColor }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] px-12 py-4 rounded-full font-semibold text-lg neon-border"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 40px #FF0080, 0 0 80px #00FFFF",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
