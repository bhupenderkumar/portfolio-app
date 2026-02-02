import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { icon: <Github className="w-5 h-5" />, href: 'https://github.com/bhupenderkumar', label: 'GitHub' },
      { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/bhupik', label: 'LinkedIn' },
      { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/java_angular', label: 'Twitter' },
      { icon: <Mail className="w-5 h-5" />, href: 'mailto:rajus9231@gmail.com', label: 'Email' },
    ],
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow-sm">
                <span className="text-xl font-display font-bold text-white">BK</span>
              </div>
              <div>
                <span className="text-xl font-display font-semibold text-white">
                  Bhupender
                </span>
                <span className="text-xl font-display font-semibold gradient-text">
                  .dev
                </span>
              </div>
            </motion.a>
            <p className="text-gray-400 max-w-md mb-6">
              Senior Full Stack Developer & Web3 Engineer with 12+ years of experience 
              building scalable applications, DeFi protocols, and trading systems.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:rajus9231@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  rajus9231@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919717267473"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9717267473
                </a>
              </li>
              <li className="text-gray-400">New Delhi, India</li>
            </ul>
            <div className="mt-6">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:shadow-glow-sm transition-shadow"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Bhupender Kumar. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            in India
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
