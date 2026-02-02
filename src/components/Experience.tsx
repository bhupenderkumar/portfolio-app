import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: 'full-time'
  description: string
  highlights: string[]
  technologies: string[]
  color: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Lab49',
    location: 'Noida, India',
    period: 'Jun 2021 - Present',
    type: 'full-time',
    description: 'Leading Web3 development and building trading systems for capital markets technology.',
    highlights: [
      'Lead design and development of decentralized applications (dApps) and smart contracts on Solana and Ethereum',
      'Build trading systems and DeFi protocols for capital markets technology using Rust/Anchor and Solidity',
      'Architect scalable microservices using Spring Boot with high-performance backend systems',
      'Implement Web3 integrations including wallet connections, token transfers, and on-chain data processing',
      'Developed RWA tokenization platform and prediction market protocols',
    ],
    technologies: ['Solana', 'Ethereum', 'Rust', 'Anchor', 'Solidity', 'Java', 'Spring Boot', 'React', 'TypeScript', 'Web3.js'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Java Software Engineer',
    company: 'Colt Technology Services',
    location: 'Remote',
    period: 'Sep 2018 - May 2021',
    type: 'full-time',
    description: 'Developed monitoring solutions and automated workflows for enterprise systems.',
    highlights: [
      'Led implementation of Kibana ELK Stack monitoring dashboards, reducing incident response times by 40%',
      'Automated repetitive workflows through Python scripts, reducing manual efforts by 60%',
      'Built full-stack applications with Angular frontend and Java Spring backend',
      'Collaborated with stakeholders to define requirements and deliver solutions aligned with business objectives',
    ],
    technologies: ['Java', 'Angular', 'Python', 'Kibana', 'Elasticsearch', 'Logstash', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Bureau Veritas Group',
    location: 'Noida, India',
    period: 'Oct 2016 - Sep 2018',
    type: 'full-time',
    description: 'Developed workflow optimization tools and decision-support systems.',
    highlights: [
      'Developed workflow optimization utility that reduced processing time from 3 days to 20 minutes (90% improvement)',
      'Created decision-support program for data-driven decisions, increasing response speed across departments',
      'Resolved major connection leaks, improving system stability in high-concurrency environments',
    ],
    technologies: ['Java', 'Spring Framework', 'jQuery', 'AJAX', 'Oracle DB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'DXC Technology',
    location: 'Gurugram, India',
    period: 'Oct 2015 - Jan 2017',
    type: 'full-time',
    description: 'Focused on performance optimization and system integration.',
    highlights: [
      'Implemented Lazy Loading in JAXB context creation, significantly reducing initialization times',
      'Developed .NET Web Service integration tool, automating metadata extraction and reducing response time by 30%',
      'Redesigned MongoDB client connection pooling for optimized database performance under heavy load',
    ],
    technologies: ['Java', 'MongoDB', 'Spring Framework', 'JAXB', '.NET'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Mobile Application Developer',
    company: 'Canon India',
    location: 'Gurugram, India',
    period: 'Oct 2014 - Oct 2015',
    type: 'full-time',
    description: 'Developed cross-platform mobile applications and received Best Trainee Award.',
    highlights: [
      'Developed cross-platform mobile applications using PhoneGap framework for iOS and Android',
      'Implemented XML parsing with jQuery and SOAP web services integration',
      'Received Best Trainee Award for delivering two hybrid apps with 4.8/5 average rating',
    ],
    technologies: ['PhoneGap', 'JavaScript', 'jQuery', 'SOAP', 'HTML5', 'CSS3'],
    color: 'from-indigo-500 to-violet-500',
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />
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
              Career Journey
            </span>
            <h2 className="section-heading">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subheading">
              12+ years of building impactful solutions across enterprises
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />

              {/* Experience items */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 transform md:-translate-x-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-glow`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-6 hover:border-primary-500/30 transition-all group"
                    >
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shrink-0`}>
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`text-gray-400 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.highlights.slice(0, 3).map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className={`text-sm text-gray-300 flex items-start gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <ChevronRight className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 5 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20">
                            +{exp.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mt-16"
          >
            <h3 className="text-center text-xl font-display font-semibold text-white mb-6">
              Education & Certifications
            </h3>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor of Technology in Computer Science Engineering
                  </h4>
                  <p className="text-primary-400">University of Technical Education (UPTU)</p>
                  <p className="text-sm text-gray-400">2011 - 2015 | CGPA: 7.2</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'SCJP', desc: 'Sun Certified Java Programmer' },
                  { name: 'ISTQB', desc: 'Software Testing Certification' },
                  { name: 'AWS ML', desc: 'Machine Learning Specialty' },
                ].map((cert) => (
                  <motion.div
                    key={cert.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className="text-lg">🏆</span>
                    <div>
                      <p className="text-sm font-medium text-white">{cert.name}</p>
                      <p className="text-xs text-gray-400">{cert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
