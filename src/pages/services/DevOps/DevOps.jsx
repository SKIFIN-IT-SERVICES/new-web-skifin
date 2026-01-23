import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiServer, FiArrowRight, FiGitBranch, FiPackage, FiSettings, FiCpu, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import SEO from '../../../components/common/SEO'
import './DevOps.css'

const features = [
    {
        icon: <FiGitBranch size={28} />,
        title: 'CI/CD Pipelines',
        description: 'Automated build, test, and deployment pipelines that accelerate your software delivery lifecycle.'
    },
    {
        icon: <FiPackage size={28} />,
        title: 'GitOps & IaC',
        description: 'Infrastructure as Code with Git as single source of truth for declarative deployments.'
    },
    {
        icon: <FiSettings size={28} />,
        title: 'Platform Engineering',
        description: 'Build internal developer platforms that streamline workflows and enable self-service capabilities.'
    },
    {
        icon: <FiCpu size={28} />,
        title: 'Container Orchestration',
        description: 'Kubernetes deployment, management, and optimization for cloud-native applications.'
    },
    {
        icon: <FiRefreshCw size={28} />,
        title: 'AIOps',
        description: 'AI-powered operations for predictive monitoring, anomaly detection, and automated remediation.'
    },
    {
        icon: <FiTrendingUp size={28} />,
        title: 'DevSecOps',
        description: 'Security integrated throughout the SDLC with automated vulnerability scanning and compliance.'
    }
]

const process = [
    { step: 1, title: 'Assess', description: 'Evaluate your current DevOps maturity' },
    { step: 2, title: 'Plan', description: 'Define target architecture and roadmap' },
    { step: 3, title: 'Build', description: 'Implement pipelines and automation' },
    { step: 4, title: 'Secure', description: 'Integrate security throughout' },
    { step: 5, title: 'Scale', description: 'Optimize for performance and scale' }
]

const stats = [
    { value: '10x', label: 'Faster Deployments' },
    { value: '50%', label: 'Less Downtime' },
    { value: '90%', label: 'Automation' },
    { value: '100%', label: 'Reproducibility' }
]

const DevOps = memo(function DevOps() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page devops-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="DevOps & DevSecOps Services - Skifin"
                description="Accelerate delivery with CI/CD, GitOps, and Platform Engineering solutions."
                keywords="DevOps, DevSecOps, CI/CD, Kubernetes, GitOps, Platform Engineering"
            />
            {/* Hero Section with 3D DevOps Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Infinity Loop (DevOps Symbol) */}
                    <ParallaxFloat speed={0.2} rotateSpeed={0.1} className="hero-float-wrapper">
                        <div className="infinity-container">
                            <svg viewBox="0 0 200 100" className="infinity-svg">
                                <motion.path
                                    d="M50,50 C20,50 20,20 50,20 C80,20 120,80 150,80 C180,80 180,50 150,50 C120,50 80,20 50,20"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="4"
                                />
                                <motion.path
                                    d="M50,50 C20,50 20,80 50,80 C80,80 120,20 150,20 C180,20 180,50 150,50"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="4"
                                />
                                {/* Animated Dash */}
                                <motion.path
                                    d="M50,50 C20,50 20,20 50,20 C80,20 120,80 150,80 C180,80 180,50 150,50 C120,50 80,20 50,20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeDasharray="20 180"
                                    animate={{ strokeDashoffset: [0, -200] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M50,50 C20,50 20,80 50,80 C80,80 120,20 150,20 C180,20 180,50 150,50"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeDasharray="20 180"
                                    animate={{ strokeDashoffset: [0, -200] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>
                    </ParallaxFloat>

                    {/* Pipeline Segments */}
                    <motion.div
                        className="pipeline-segment seg-1"
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="pipeline-segment seg-2"
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />

                    {/* Floating Containers */}
                    <motion.div
                        className="container-box box-1"
                        animate={{
                            y: [0, -20, 0],
                            rotateX: [0, 10, 0],
                            rotateY: [0, 10, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="box-face front"></div>
                        <div className="box-face top"></div>
                        <div className="box-face right"></div>
                    </motion.div>

                    <motion.div
                        className="container-box box-2"
                        animate={{
                            y: [0, 15, 0],
                            rotateX: [0, -10, 0],
                            rotateY: [0, -15, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <div className="box-face front"></div>
                        <div className="box-face top"></div>
                        <div className="box-face right"></div>
                    </motion.div>

                    {/* Code Brackets */}
                    <motion.div
                        className="code-bracket left"
                        animate={{ x: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        &lt;
                    </motion.div>
                    <motion.div
                        className="code-bracket right"
                        animate={{ x: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        /&gt;
                    </motion.div>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">🚀 Continuous Delivery</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>
                            DevOps & DevSecOps
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Accelerate your software delivery with CI/CD automation, GitOps practices,
                            and security-first DevSecOps pipelines.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Transform Your Pipeline
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                Explore Solutions
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
                        title="DevOps Solutions"
                        subtitle="Modern DevOps practices for agile software delivery"
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
                        title="Implementation Journey"
                        subtitle="From assessment to continuous improvement"
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
                            <h2>Ready to Accelerate Delivery?</h2>
                            <p>Let's build a DevOps culture that drives innovation.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Start Your Transformation
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default DevOps
