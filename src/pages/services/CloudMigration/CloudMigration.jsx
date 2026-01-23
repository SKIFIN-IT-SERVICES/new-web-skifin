import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiCloud, FiArrowRight, FiServer, FiGlobe, FiZap, FiTrendingDown, FiRefreshCw, FiLayers, FiUploadCloud } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import SEO from '../../../components/common/SEO'
import './CloudMigration.css'

const features = [
    {
        icon: <FiGlobe size={28} />,
        title: 'Multi-Cloud Strategy',
        description: 'Design and implement strategies across AWS, Azure, and GCP for flexibility and resilience.'
    },
    {
        icon: <FiServer size={28} />,
        title: 'Hybrid Cloud',
        description: 'Seamlessly integrate on-premises infrastructure with public and private cloud environments.'
    },
    {
        icon: <FiZap size={28} />,
        title: 'Serverless Solutions',
        description: 'Build event-driven applications that scale automatically and reduce operational overhead.'
    },
    {
        icon: <FiTrendingDown size={28} />,
        title: 'Cost Optimization',
        description: 'Right-size resources, implement FinOps practices, and reduce cloud spend by up to 40%.'
    },
    {
        icon: <FiRefreshCw size={28} />,
        title: 'Application Modernization',
        description: 'Refactor legacy applications for cloud-native deployment with containers and microservices.'
    },
    {
        icon: <FiLayers size={28} />,
        title: 'Edge Computing',
        description: 'Deploy compute resources closer to users for low-latency, high-performance applications.'
    }
]

const process = [
    { step: 1, title: 'Assess', description: 'Evaluate current infrastructure and workloads' },
    { step: 2, title: 'Plan', description: 'Design migration strategy and timeline' },
    { step: 3, title: 'Migrate', description: 'Execute migration with minimal disruption' },
    { step: 4, title: 'Optimize', description: 'Fine-tune for performance and cost' },
    { step: 5, title: 'Manage', description: 'Ongoing support and optimization' }
]

const stats = [
    { value: '40%', label: 'Cost Savings' },
    { value: '99.99%', label: 'Availability' },
    { value: '5x', label: 'Faster Scaling' },
    { value: '0', label: 'Downtime' }
]

const CloudMigration = memo(function CloudMigration() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page cloud-migration-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Cloud Migration & Modernization - Skifin"
                description="Expert cloud migration services to AWS, Azure, and GCP. Modernize your infrastructure today."
                keywords="Cloud Migration, Application Modernization, Hybrid Cloud, Multi-Cloud, Serverless"
            />
            {/* Hero Section with 3D Cloud Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Floating Clouds */}
                    <motion.div
                        className="cloud cloud-1"
                        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <FiCloud size={100} strokeWidth={1} />
                    </motion.div>
                    <motion.div
                        className="cloud cloud-2"
                        animate={{ x: [0, -15, 0], y: [0, -12, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <FiCloud size={80} strokeWidth={1} />
                    </motion.div>
                    <motion.div
                        className="cloud cloud-3"
                        animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    >
                        <FiCloud size={60} strokeWidth={1} />
                    </motion.div>

                    {/* Server to Cloud Upload Animation */}
                    <div className="upload-container">
                        <motion.div
                            className="server-icon"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <FiServer size={40} />
                        </motion.div>

                        {/* Upload Particles */}
                        <div className="particles">
                            <motion.div className="particle p-1" animate={{ y: [0, -100], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                            <motion.div className="particle p-2" animate={{ y: [0, -100], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                            <motion.div className="particle p-3" animate={{ y: [0, -100], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }} />
                        </div>

                        <motion.div
                            className="cloud-target"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <FiUploadCloud size={50} />
                        </motion.div>
                    </div>

                    {/* Orbiting Satellite/Node */}
                    <motion.div
                        className="satellite-orbit"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    >
                        <div className="satellite">
                            <div className="solar-panel left"></div>
                            <div className="body"></div>
                            <div className="solar-panel right"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">☁️ Seamless Migration</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>
                            Cloud Migration
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Migrate to the cloud with confidence. Our experts handle multi-cloud,
                            hybrid deployments, and serverless transformations.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Start Migration
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                Explore Services
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
                        title="Cloud Services"
                        subtitle="End-to-end cloud transformation services"
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
                        title="Migration Journey"
                        subtitle="A proven approach to cloud transformation"
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
                            <h2>Ready to Move to the Cloud?</h2>
                            <p>Let's design your cloud strategy and execute a seamless migration.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Plan Your Migration
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default CloudMigration
