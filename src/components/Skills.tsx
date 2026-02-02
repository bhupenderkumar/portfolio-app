import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string
  level: number
  icon: string
}

interface SkillCategory {
  title: string
  icon: string
  color: string
  bgColor: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Blockchain & Web3',
    icon: '⛓️',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'Solana', level: 95, icon: '◎' },
      { name: 'Ethereum', level: 90, icon: '⟠' },
      { name: 'Rust/Anchor', level: 88, icon: '🦀' },
      { name: 'Solidity', level: 85, icon: '💎' },
      { name: 'Web3.js', level: 92, icon: '🌐' },
      { name: 'DeFi Protocols', level: 88, icon: '💰' },
      { name: 'Smart Contracts', level: 90, icon: '📜' },
      { name: 'Token Development', level: 85, icon: '🪙' },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    skills: [
      { name: 'Java', level: 95, icon: '☕' },
      { name: 'Spring Boot', level: 95, icon: '🍃' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Node.js', level: 88, icon: '💚' },
      { name: 'TypeScript', level: 92, icon: '📘' },
      { name: 'REST APIs', level: 95, icon: '🔗' },
      { name: 'Microservices', level: 90, icon: '🏗️' },
      { name: 'Kotlin', level: 75, icon: '🟣' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 92, icon: '📘' },
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'JavaScript', level: 95, icon: '📒' },
      { name: 'HTML5/CSS3', level: 92, icon: '🌈' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Redux', level: 88, icon: '🔄' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    skills: [
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'Git', level: 95, icon: '📊' },
      { name: 'Jenkins', level: 85, icon: '🤖' },
      { name: 'ELK Stack', level: 90, icon: '📈' },
      { name: 'MongoDB', level: 90, icon: '🍃' },
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'Elasticsearch', level: 85, icon: '🔍' },
      { name: 'AWS', level: 80, icon: '☁️' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
    skills: [
      { name: 'LLM Integration', level: 85, icon: '🧠' },
      { name: 'AI Agents', level: 82, icon: '🤝' },
      { name: 'DialogFlow', level: 80, icon: '💬' },
      { name: 'Rasa', level: 78, icon: '🗣️' },
      { name: 'NLP', level: 75, icon: '📝' },
      { name: 'OpenAI API', level: 85, icon: '⚡' },
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Technical Expertise
            </span>
            <h2 className="section-heading">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subheading">
              A comprehensive toolkit built over 12+ years of hands-on experience
            </p>
          </motion.div>

          {/* Category tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeCategory === index
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white bg-white/5'
                }`}
              >
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                  >
                    <span className="text-2xl">{skillCategories[activeCategory].icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">
                      {skillCategories[activeCategory].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {skillCategories[activeCategory].skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-mono text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                          className={`skill-bar-fill bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All technologies grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-center text-lg font-display font-semibold text-gray-400 mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Solana', 'Ethereum', 'Rust', 'Anchor', 'Solidity', 'Web3.js',
                'Java', 'Spring Boot', 'React', 'TypeScript', 'Node.js', 'Python',
                'Angular', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS',
                'GraphQL', 'REST', 'Microservices', 'Redis', 'Elasticsearch', 'Kafka',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.02 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
