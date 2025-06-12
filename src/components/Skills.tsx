import { motion } from 'framer-motion'
import {
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa'
import {
  SiKotlin,
  SiSpringboot,
  SiDjango,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiConfluence,
  SiJira,
  SiDatadog,
  SiRuby,
} from 'react-icons/si'

const skillCategories = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Python', icon: FaPython },
      { name: 'Ruby', icon: SiRuby },
    ],
  },
  {
    category: 'Framework',
    items: [
      { name: 'SpringBoot', icon: SiSpringboot },
      { name: 'Django', icon: SiDjango },
      { name: 'Ruby on Rails', icon: SiRubyonrails },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt },
      { name: 'AWS', icon: FaAws },
      { name: 'Confluence', icon: SiConfluence },
      { name: 'Jira', icon: SiJira },
      { name: 'DataDog', icon: SiDatadog },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">보유기술</h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((categoryData, categoryIndex) => (
            <motion.div
              key={categoryData.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {categoryData.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryData.items.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    {skill.icon && <skill.icon className="w-6 h-6 text-primary mr-2" />}
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
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
