import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiArrowRight, FiImage, FiMessageCircle, FiTrendingUp, FiDatabase, FiCpu, FiGrid, FiActivity } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import './AIMLSolutions.css'

const features = [
    {
        icon: <FiCpu size={28} />,
        title: 'Generative AI Integration',
        description: 'Integrate GPT, Claude, and custom LLMs into your applications for content generation and automation.'
    },
    {
        icon: <FiImage size={28} />,
        title: 'Computer Vision',
        description: 'Object detection, image classification, and visual inspection solutions for various industries.'
    },
    {
        icon: <FiMessageCircle size={28} />,
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment detection, and language understanding for customer insights.'
    },
    {
        icon: <FiTrendingUp size={28} />,
        title: 'Predictive Analytics',
        description: 'ML models for demand forecasting, churn prediction, and risk assessment.'
    },
    {
        icon: <FiDatabase size={28} />,
        title: 'Custom ML Models',
        description: 'Tailored machine learning solutions trained on your specific data and use cases.'
    },
    {
        icon: <FiGrid size={28} />,
        title: 'MLOps Platform',
        description: 'End-to-end ML lifecycle management from experimentation to production deployment.'
    }
]

const process = [
    { step: 1, title: 'Data Assessment', description: 'Evaluate your data quality and availability' },
    { step: 2, title: 'Model Design', description: 'Select algorithms and design architecture' },
    { step: 3, title: 'Training', description: 'Train and validate models with your data' },
    { step: 4, title: 'Deployment', description: 'Deploy models to production securely' },
    { step: 5, title: 'Monitoring', description: 'Track performance and retrain as needed' }
]

const stats = [
    { value: '95%', label: 'Model Accuracy' },
    { value: '50+', label: 'Models Deployed' },
    { value: '3x', label: 'ROI Increase' },
    { value: '100TB', label: 'Data Processed' }
]

const AIMLSolutions = memo(function AIMLSolutions() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page aiml-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero Section with 3D Neural Network Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Neural Network Nodes */}
                    <div className="neural-network">
                        {/* Layer 1 */}
                        <motion.div className="neuron n1-1" animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} />
                        <motion.div className="neuron n1-2" animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                        {/* Layer 2 */}
                        <motion.div className="neuron n2-1" animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
                        <motion.div className="neuron n2-2" animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} />
                        {/* Layer 3 */}
                        <motion.div className="neuron n3-1" animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} />
                    </div>

                    {/* Data Streams */}
                    <motion.div
                        className="data-stream stream-1"
                        animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="data-stream stream-2"
                        animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                    />

                    {/* Brain Pulse Effect - Abstract Representation */}
                    <motion.div
                        className="brain-pulse"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                            rotate: [0, 360]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    >
                        <FiActivity size={100} strokeWidth={0.5} />
                    </motion.div>

                    {/* Floating Data Cubes */}
                    <motion.div
                        className="data-cube cube-1"
                        animate={{
                            y: [0, -20, 0],
                            rotateX: [0, 180, 360],
                            rotateY: [0, 180, 360]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                        <FiDatabase size={24} />
                    </motion.div>
                    <motion.div
                        className="data-cube cube-2"
                        animate={{
                            y: [0, 25, 0],
                            rotateX: [0, -180, -360],
                            rotateY: [0, -180, -360]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
                    >
                        <FiGrid size={20} />
                    </motion.div>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">🧠 Intelligent Solutions</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>
                            AI/ML Solutions
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Harness the power of Generative AI, Machine Learning, and Deep Learning
                            to unlock insights and automate decision-making.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Build AI Solutions
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                View Capabilities
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

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

            <section id="features" className="service-features">
                <div className="container">
                    <SectionTitle
                        title="AI/ML Capabilities"
                        subtitle="From generative AI to custom ML models"
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

            <section className="service-process">
                <div className="container">
                    <SectionTitle
                        title="ML Development Lifecycle"
                        subtitle="From data to production-ready models"
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

            <section className="service-cta">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Ready to Leverage AI?</h2>
                            <p>Let's build intelligent solutions that drive your business forward.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Start AI Project
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default AIMLSolutions
