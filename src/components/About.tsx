import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Award, Rocket, Target, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const highlights = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: '40% Faster',
      description: 'Reduced incident response time at Colt through ELK Stack',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: '90% Efficient',
      description: 'Workflow optimization from 3 days to 20 minutes',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: '10+ dApps',
      description: 'Blockchain projects on Solana & Ethereum',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Best Trainee',
      description: 'Awarded at Canon India for excellence',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="section-heading">
              Crafting <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="section-subheading">
              A passionate technologist dedicated to building innovative solutions 
              that drive business value
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="relative group">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                {/* Card */}
                <div className="relative glass rounded-2xl p-6 overflow-hidden">
                  {/* Avatar */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-display font-bold text-white animate-morph">
                        BK
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-500 rounded-full border-4 border-dark-800 flex items-center justify-center">
                        <span className="text-[10px]">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white">
                        Bhupender Kumar
                      </h3>
                      <p className="text-primary-400 text-sm font-medium">
                        Senior Full Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Info items */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Calendar className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">12+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">SCJP, ISTQB, AWS ML Certified</span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />
                </div>
              </div>

              {/* Quick stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mt-6"
              >
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-white mb-1">
                    B.Tech
                  </div>
                  <div className="text-xs text-gray-400">Computer Science</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-white mb-1">
                    Lab49
                  </div>
                  <div className="text-xs text-gray-400">Current Company</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a <span className="text-white font-semibold">Senior Full Stack Developer</span> with 
                  over 12 years of experience building enterprise-grade software solutions. Currently at{' '}
                  <span className="text-primary-400 font-semibold">Lab49</span>, I lead the development 
                  of cutting-edge blockchain applications and trading systems for global financial institutions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My expertise spans the full spectrum of modern development—from crafting intuitive 
                  user interfaces with React and TypeScript to architecting robust backend systems with 
                  Java and Spring Boot. I'm particularly passionate about Web3 technologies, having 
                  built numerous dApps, smart contracts, and DeFi protocols on Solana and Ethereum.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I believe in writing clean, maintainable code that scales. Whether it's reducing 
                  incident response times by 40% through smart monitoring solutions or transforming 
                  a 3-day workflow into a 20-minute automated process, I thrive on creating measurable 
                  impact through technology.
                </p>
              </div>

              {/* Achievement highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${item.color} shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
