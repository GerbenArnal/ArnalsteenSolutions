import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Particle Background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="particle-bg"
          style={{
            top: `${10 + i * 20}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            scale: [1, 1.2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 liquid-morph opacity-20"
        style={{
          background: "linear-gradient(135deg, #FF0080, #00FFFF)",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 liquid-morph opacity-15"
        style={{
          background: "linear-gradient(135deg, #FFD700, #8A2BE2)",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 liquid-morph opacity-25"
        style={{
          background: "linear-gradient(135deg, #00FFFF, #FF0080)",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
