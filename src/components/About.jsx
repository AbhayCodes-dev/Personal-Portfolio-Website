import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 mb-4">
            About My Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Exploring the intersection of technology, creativity, and problem-solving through code and innovation
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-gray-800 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-6">
              My Professional Story
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                I'm a passionate developer driven by a deep curiosity to create and innovate. My journey in programming 
                is fueled by a desire to solve complex problems and build meaningful digital solutions.
              </p>
              <p className="leading-relaxed">
                Collaboration is at the heart of my work. I thrive in dynamic environments where creativity meets 
                technical expertise. Beyond coding, I'm constantly exploring emerging technologies and pushing the 
                boundaries of what's possible.
              </p>
              <p className="leading-relaxed">
                My approach combines technical skills with a user-centric mindset, always seeking to create 
                impactful and intuitive experiences through code.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 
                          hover:from-indigo-700 hover:to-emerald-700 
                          text-white rounded-lg font-semibold 
                          transition-all duration-300 
                          shadow-lg hover:shadow-xl 
                          transform hover:-translate-y-1"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-gray-800 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-6">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Problem Solving',
                'Team Collaboration',
                'Agile Methodologies',
                'Continuous Learning',
                'System Architecture',
                'Performance Optimization'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: index * 0.1
                  }}
                  className="px-4 py-2 
                    bg-gray-700 
                    text-emerald-300 
                    rounded-lg 
                    text-sm 
                    font-medium 
                    hover:bg-gray-600 
                    transition-colors 
                    duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About