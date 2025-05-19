import { motion } from 'framer-motion'
import skillsData from '../assets/data/skills'

const Skills = () => {
  const categories = [
    {
      title: "Core Languages",
      skills: skillsData.filter(skill => skill.category === "Programming Languages")
    },
    {
      title: "Frontend",
      skills: skillsData.filter(skill => skill.category === "Frontend")
    },
    {
      title: "Backend",
      skills: skillsData.filter(skill => skill.category === "Backend")
    },
    {
      title: "Tools & Infrastructure",
      skills: skillsData.filter(skill => 
        skill.category === "Version Control" ||
        skill.category === "Database" ||
        skill.category === "DevOps"
      )
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 mb-4">
            Tech Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and technological proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: catIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      delay: skillIndex * 0.1
                    }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 text-center text-sm mb-2">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills