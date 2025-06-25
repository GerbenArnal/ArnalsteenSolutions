import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#FF0080]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              className="text-3xl font-bold font-[Montserrat] mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
              <span className="electric">Arnalsteen</span>
              <span className="cyber">Solutions</span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming small businesses with next-generation IT solutions. Your digital future starts here.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "💼", color: "hover:text-[#FF0080]" },
                { icon: "💻", color: "hover:text-[#00FFFF]" },
                { icon: "🐦", color: "hover:text-[#FFD700]" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`text-gray-400 ${social.color} transition-colors text-xl`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#FF0080] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  Web Development
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#00FFFF] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  Cloud Solutions
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#FFD700] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  Task Automation
                </motion.button>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#FF0080] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-[#00FFFF] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  Portfolio
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#FFD700] transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            &copy; 2024 Arnalsteen Solutions. All rights reserved. | Crafted with{" "}
            <span className="electric">❤️</span> and cutting-edge technology.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
