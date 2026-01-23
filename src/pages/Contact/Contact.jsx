import { memo, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import FadeIn from '../../components/animations/FadeIn'
import SEO from '../../components/common/SEO'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Placeholder EmailJS keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"

const Contact = memo(function Contact() {
    const formRef = useRef()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }, [])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // Check if using placeholder keys - Simulate success for demo purposes
            if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
                await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate network delay
                console.log("Simulating successful submission (Placeholder Keys detected)")
            } else {
                // Real EmailJS submission
                await emailjs.sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    EMAILJS_PUBLIC_KEY
                )
            }

            setIsSubmitted(true)
            setFormData({ name: '', email: '', company: '', service: '', message: '' })

            setTimeout(() => setIsSubmitted(false), 5000)
        } catch (err) {
            console.error('EmailJS Error:', err)
            setError('Failed to send message. Please verify your EmailJS keys.')
        } finally {
            setIsSubmitting(false)
        }
    }, [])

    return (
        <motion.div
            className="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Contact Skifin - AI & IT Consulting"
                description="Get in touch with Skifin for your AI and IT consultancy needs. We are ready to help you scale."
                keywords="Contact Skifin, Hire AI Developers, IT Support, Tech Consultation"
            />
            {/* Hero Section with 3D Elements */}
            <section className="contact-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Floating Message Boxes */}
                    <motion.div
                        className="message-box box-1"
                        animate={{
                            y: [0, -15, 0],
                            rotateZ: [0, 3, 0, -3, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="message-line" />
                        <div className="message-line short" />
                    </motion.div>
                    <motion.div
                        className="message-box box-2"
                        animate={{
                            y: [0, 20, 0],
                            rotateZ: [0, -2, 0, 2, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="message-line" />
                        <div className="message-line short" />
                        <div className="message-line" />
                    </motion.div>

                    {/* Connection Nodes */}
                    <motion.div
                        className="node node-1"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="node node-2"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    />
                    <motion.div
                        className="node node-3"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    />

                    {/* Connection Lines */}
                    <svg className="connection-svg" viewBox="0 0 400 300">
                        <motion.path
                            d="M 50 150 Q 200 50 350 150"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.path
                            d="M 100 250 Q 200 150 300 250"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        />
                    </svg>

                    {/* Gradient Wave */}
                    <motion.div
                        className="gradient-wave"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">📧 Let's Connect</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="hero-title">Get in Touch</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Ready to transform your business? Let's start a conversation.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <FadeIn direction="right">
                            <div className="contact-form-wrapper">
                                <h2>Send Us a Message</h2>
                                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                                    {error && (
                                        <div className="form-error">
                                            <FiAlertCircle /> {error}
                                        </div>
                                    )}
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="company">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="service">Service Interested In</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ai-automation">AI Automation</option>
                                                <option value="cloud-security">Cloud Security</option>
                                                <option value="devops">DevOps & DevSecOps</option>
                                                <option value="ai-ml">AI/ML Solutions</option>
                                                <option value="data-analytics">Data Analytics</option>
                                                <option value="cloud-migration">Cloud Migration</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        loading={isSubmitting}
                                        disabled={isSubmitted}
                                        icon={isSubmitted ? <FiCheck /> : <FiSend />}
                                        iconPosition="right"
                                    >
                                        {isSubmitted ? 'Message Sent!' : 'Send Message'}
                                    </Button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Contact Info */}
                        <FadeIn direction="left" delay={0.2}>
                            <div className="contact-info">
                                <h2>Contact Information</h2>
                                <p className="info-description">
                                    Have a question or want to learn more? Reach out through any of these channels.
                                </p>

                                <div className="info-items">
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <FiMail size={24} />
                                        </div>
                                        <div className="info-content">
                                            <h4>Email</h4>
                                            <a href="mailto:contact@skifin.com">contact@skifin.com</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <FiPhone size={24} />
                                        </div>
                                        <div className="info-content">
                                            <h4>Phone</h4>
                                            <a href="tel:+918700605399">+91-8700605399</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <FiMapPin size={24} />
                                        </div>
                                        <div className="info-content">
                                            <h4>Location</h4>
                                            <span>Galaxy Business Park, Sector 62, Noida</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="response-time">
                                    <span className="dot" />
                                    We typically respond within 24 hours
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </motion.div>
    )
})

export default Contact
