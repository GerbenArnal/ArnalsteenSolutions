import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cloud, Cog, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development & Hosting",
    description: "Complete web presence solutions from concept to deployment. Modern, responsive websites built with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Responsive website creation with WordPress & modern frameworks",
      "Hosting consultation & optimal environment setup",
      "Ongoing maintenance & performance monitoring",
    ],
    gradientFrom: "#FF0080",
    gradientTo: "#FF1493",
    borderColor: "border-[#FF0080]/20",
    hoverBorder: "hover:border-[#FF0080]",
    checkColor: "text-[#00FFFF]",
  },
  {
    icon: Cloud,
    title: "Cloud Storage & Sync",
    description: "Secure, accessible file storage solutions that keep your data synchronized across all devices and locations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Strategic cloud provider consultation & selection",
      "Complete setup & cross-device synchronization",
      "Advanced security protocols & access management",
    ],
    gradientFrom: "#00FFFF",
    gradientTo: "#8A2BE2",
    borderColor: "border-[#00FFFF]/20",
    hoverBorder: "hover:border-[#00FFFF]",
    checkColor: "text-[#FFD700]",
  },
  {
    icon: Cog,
    title: "Task Automation",
    description: "Intelligent automation solutions that eliminate repetitive tasks and dramatically increase operational efficiency.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Smart workflow automation with Zapier & IFTTT",
      "Advanced form processing & data integration",
      "Custom automation solutions for your unique needs",
    ],
    gradientFrom: "#FFD700",
    gradientTo: "#FF0080",
    borderColor: "border-[#FFD700]/20",
    hoverBorder: "hover:border-[#FFD700]",
    checkColor: "text-[#FF0080]",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black font-[Montserrat] mb-8">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF0080] bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary IT solutions designed for small businesses and startups, focusing on usability, affordability, and future scalability.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group perspective-3d"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className={`relative p-8 rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-gray-900 border ${service.borderColor} ${service.hoverBorder} transition-all duration-500 overflow-hidden h-full`}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradientFrom}10, ${service.gradientTo}10)`,
                  }}
                />
                
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <service.icon 
                      className="text-2xl mr-4" 
                      style={{ color: service.gradientFrom }}
                      size={24}
                    />
                    <h3 className="text-2xl font-bold font-[Montserrat] text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className={`mr-3 ${service.checkColor}`} size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="w-full py-3 rounded-xl font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
