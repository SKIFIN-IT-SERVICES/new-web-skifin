import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiArrowRight, FiZap, FiLayers, FiCode, FiMessageSquare, FiFileText, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import './AIAutomation.css'

const features = [
    {
        icon: <FiZap size={28} />,
        title: 'Agentic AI Systems',
        description: 'Autonomous AI agents that plan, reason, and execute complex multi-step workflows with minimal human intervention.'
    },
    {
        icon: <FiLayers size={28} />,
        title: 'Hyperautomation',
        description: 'End-to-end automation combining RPA, AI, ML, and process mining to automate any business process.'
    },
    {
        icon: <FiCode size={28} />,
        title: 'Robotic Process Automation',
        description: 'Software robots that handle repetitive tasks, data entry, and system integrations 24/7 without errors.'
    },
    {
        icon: <FiMessageSquare size={28} />,
        title: 'Intelligent Chatbots',
        description: 'AI-powered conversational agents for customer support, lead generation, and internal helpdesk.'
    },
    {
        icon: <FiFileText size={28} />,
        title: 'Document Processing',
        description: 'Extract, classify, and process data from any document format using OCR and NLP technologies.'
    },
    {
        icon: <FiTrendingUp size={28} />,
        title: 'Predictive Automation',
        description: 'ML models that predict issues before they occur and trigger automated remediation workflows.'
    }
]

const process = [
    { step: 1, title: 'Discovery', description: 'We analyze your processes and identify automation opportunities' },
    { step: 2, title: 'Design', description: 'We architect the optimal automation solution for your needs' },
    { step: 3, title: 'Build', description: 'We develop and train AI models and automation workflows' },
    { step: 4, title: 'Deploy', description: 'We implement with minimal disruption to your operations' },
    { step: 5, title: 'Optimize', description: 'We continuously monitor and improve performance' }
]

const stats = [
    { value: '40%', label: 'Cost Reduction' },
    { value: '80%', label: 'Time Saved' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Operation' }
]

const AIAutomation = memo(function AIAutomation() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page ai-automation-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero Section with 3D Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements - Gears & Circuits */}
                <div className="hero-3d-elements">
                    {/* Spinning Gears */}
                    <ParallaxFloat speed={0.2} rotateSpeed={0.5} className="hero-float-wrapper">
                        <motion.div
                            className="gear gear-1"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            <svg viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="20" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                                <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="10 5" />
                                <path d="M50 10 L55 25 L45 25 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M50 90 L55 75 L45 75 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M10 50 L25 55 L25 45 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M90 50 L75 55 L75 45 Z" fill="rgba(255,255,255,0.4)" />
                            </svg>
                        </motion.div>
                    </ParallaxFloat>
                    <ParallaxFloat speed={-0.2} rotateSpeed={-0.3} className="hero-float-wrapper">
                        <motion.div
                            className="gear gear-2"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        >
                            <svg viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="40" r="15" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <circle cx="40" cy="40" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8 4" />
                            </svg>
                        </motion.div>
                    </ParallaxFloat>

                    {/* Circuit Lines */}
                    <motion.div
                        className="circuit circuit-1"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="circuit circuit-2"
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    />

                    {/* Data Pulses */}
                    <motion.div
                        className="pulse-dot dot-1"
                        animate={{
                            x: [0, 100, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="pulse-dot dot-2"
                        animate={{
                            y: [0, 80, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                    />

                    {/* Robot Silhouette */}
                    <motion.div
                        className="robot-icon"
                        animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <FiCpu size={60} />
                    </motion.div>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">🤖 Intelligent Automation</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>AI Automation</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Transform your operations with intelligent automation powered by Agentic AI,
                            RPA, and Hyperautomation. Achieve unprecedented efficiency and accuracy.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Get Started
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                Explore Features
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Section */}
            <section className="service-stats">
                <div className="container">
                    <div className="stats-row">
                        {memoizedStats.map((stat, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="stat-item">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="service-features">
                <div className="container">
                    <SectionTitle
                        title="What We Offer"
                        subtitle="Comprehensive AI automation solutions tailored to your business needs"
                    />
                    <div className="features-grid">
                        {memoizedFeatures.map((feature, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <Card variant="glass" className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="service-process">
                <div className="container">
                    <SectionTitle
                        title="Our Process"
                        subtitle="A proven methodology for successful automation implementation"
                    />
                    <div className="process-timeline">
                        {memoizedProcess.map((item, index) => (
                            <FadeIn key={index} delay={index * 0.15}>
                                <div className="process-step">
                                    <div className="step-number">{item.step}</div>
                                    <div className="step-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Ready to Automate?</h2>
                            <p>Let's discuss how AI automation can transform your business operations.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Schedule Consultation
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default AIAutomation
