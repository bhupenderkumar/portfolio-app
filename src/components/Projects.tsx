import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Blocks, Bot, TrendingUp, Coins, BarChart3, Code2 } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  icon: React.ReactNode
  image?: string
  tags: string[]
  category: string
  color: string
  github?: string
  demo?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Solana MCP Server',
    description: 'Model Context Protocol server for Solana blockchain actions',
    longDescription: 'Built a comprehensive MCP server enabling AI agents to interact with the Solana blockchain. Supports token transfers, account queries, and program interactions through a standardized protocol.',
    icon: <Blocks className="w-8 h-8" />,
    tags: ['Solana', 'TypeScript', 'MCP', 'Web3.js', 'AI Agents'],
    category: 'Blockchain',
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/bhupenderkumar',
    highlights: [
      'Enables AI agents to perform Solana transactions',
      'Standardized protocol for blockchain interactions',
      'Supports SPL token operations and NFTs',
    ],
  },
  {
    id: 2,
    title: 'RWA Asset Tokenization',
    description: 'Platform for digitizing traditional assets on blockchain',
    longDescription: 'Developed a Real World Asset tokenization platform that enables fractional ownership of physical assets through blockchain technology. Built on Solana for high throughput and low fees.',
    icon: <Coins className="w-8 h-8" />,
    tags: ['Solana', 'Rust', 'Anchor', 'React', 'DeFi'],
    category: 'DeFi',
    color: 'from-yellow-500 to-orange-500',
    highlights: [
      'Fractional ownership of real-world assets',
      'Compliant token standards',
      'Automated dividend distribution',
    ],
  },
  {
    id: 3,
    title: 'Polymarket Trading Bot',
    description: 'Automated copy trading bot for prediction markets',
    longDescription: 'Created an intelligent trading bot that monitors successful traders on Polymarket and automatically mirrors their positions. Features risk management and performance analytics.',
    icon: <TrendingUp className="w-8 h-8" />,
    tags: ['Python', 'Web3', 'Trading', 'Analytics', 'API'],
    category: 'Trading',
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/bhupenderkumar',
    highlights: [
      'Real-time position monitoring',
      'Risk management controls',
      'Performance tracking dashboard',
    ],
  },
  {
    id: 4,
    title: 'Stable Coin Prediction Platform',
    description: 'Solana-based prediction market with smart contracts',
    longDescription: 'Built a decentralized prediction market platform on Solana using stable coin settlements. Features automated market making, oracle integration, and transparent payouts.',
    icon: <BarChart3 className="w-8 h-8" />,
    tags: ['Solana', 'Rust', 'Anchor', 'Oracle', 'Smart Contracts'],
    category: 'DeFi',
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Decentralized oracle integration',
      'Automated market maker (AMM)',
      'Instant stable coin settlements',
    ],
  },
  {
    id: 5,
    title: 'Solana Transaction Graph',
    description: 'Visualization tool for blockchain transactions',
    longDescription: 'Developed an interactive graph visualization tool that maps Solana transaction flows. Enables users to trace token movements, identify patterns, and analyze wallet interactions.',
    icon: <Code2 className="w-8 h-8" />,
    tags: ['TypeScript', 'React', 'D3.js', 'Solana', 'GraphQL'],
    category: 'Analytics',
    color: 'from-indigo-500 to-violet-500',
    github: 'https://github.com/bhupenderkumar',
    highlights: [
      'Interactive graph visualization',
      'Transaction flow analysis',
      'Wallet clustering detection',
    ],
  },
  {
    id: 6,
    title: 'AI Agent System',
    description: 'Code agent and sub-agent system for workflow automation',
    longDescription: 'Built an AI-powered agent system that automates complex development workflows. Features task decomposition, code generation, and intelligent error handling.',
    icon: <Bot className="w-8 h-8" />,
    tags: ['Python', 'LLM', 'AI Agents', 'Automation', 'OpenAI'],
    category: 'AI',
    color: 'from-rose-500 to-pink-500',
    highlights: [
      'Multi-agent collaboration',
      'Intelligent task decomposition',
      'Self-healing error recovery',
    ],
  },
]

const categories = ['All', 'Blockchain', 'DeFi', 'Trading', 'Analytics', 'AI']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Featured Work
            </span>
            <h2 className="section-heading">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading">
              Showcase of blockchain applications, DeFi protocols, and innovative solutions
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-glow-sm'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  />
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-sm`} />
                  
                  <div className="relative glass rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group-hover:border-white/20">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>

                    {/* Highlights */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-1 mb-4 overflow-hidden"
                        >
                          {project.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className="text-xs text-gray-300 flex items-center gap-2"
                            >
                              <ArrowRight className="w-3 h-3 text-accent-500" />
                              {highlight}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/bhupenderkumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
