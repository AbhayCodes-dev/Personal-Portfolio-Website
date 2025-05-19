import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-blue-500/10 opacity-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6 z-20"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">Abhay</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
                  I craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">digital experiences</span>
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              A passionate developer who transforms innovative ideas into reality through 
              clean, efficient code and thoughtful, user-centric design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 
                  bg-gradient-to-r from-indigo-600 to-emerald-600 
                  hover:from-indigo-700 hover:to-emerald-700 
                  text-white rounded-lg font-semibold 
                  transition-all duration-300 
                  shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 
                  border-2 border-transparent 
                  bg-gradient-to-r from-gray-700 to-gray-800 
                  text-gray-300 
                  hover:from-gray-600 hover:to-gray-700 
                  rounded-lg font-semibold 
                  transition-all duration-300 
                  shadow-md hover:shadow-lg 
                  transform hover:-translate-y-1"
              >
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center z-20"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-500 to-emerald-500 p-1 shadow-2xl">
                <img
                  src="/src/assets/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero