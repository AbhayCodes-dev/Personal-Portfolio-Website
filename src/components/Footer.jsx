import { motion } from 'framer-motion'
import socialData from '../assets/data/social'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
              Abhay
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
              A passionate developer dedicated to crafting exceptional digital experiences that push the boundaries of innovation and design.
            </p>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialData.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 flex items-center justify-center"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 filter dark:brightness-0 dark:invert"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Abhay. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer