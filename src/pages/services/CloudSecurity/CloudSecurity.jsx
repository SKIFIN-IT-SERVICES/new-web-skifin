import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiArrowRight, FiLock, FiEye, FiAlertTriangle, FiKey, FiActivity, FiCheckCircle } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import SEO from '../../../components/common/SEO'
import './CloudSecurity.css'

const features = [
    {
        icon: <FiLock size={28} />,
        title: 'Zero Trust Architecture',
        description: 'Implement "never trust, always verify" security model with strict identity verification for every access request.'
    },
    {
        icon: <FiEye size={28} />,
        title: 'Cloud Security Posture Management',
        description: 'Continuous monitoring and automated remediation of cloud misconfigurations and compliance violations.'
    },
    {
        icon: <FiAlertTriangle size={28} />,
        title: 'AI Threat Detection',
        description: 'Machine learning-powered threat detection that identifies anomalies and responds to attacks in real-time.'
    },
    {
        icon: <FiKey size={28} />,
        title: 'Identity & Access Management',
        description: 'Comprehensive IAM solutions with MFA, SSO, and privileged access management.'
    },
    {
        icon: <FiActivity size={28} />,
        title: 'Security Monitoring',
        description: '24/7 security operations center with SIEM integration and incident response capabilities.'
    },
    {
        icon: <FiCheckCircle size={28} />,
        title: 'Compliance & Governance',
        description: 'Automated compliance for SOC 2, HIPAA, GDPR, PCI-DSS, and industry-specific regulations.'
    }
]

const process = [
    { step: 1, title: 'Assess', description: 'Comprehensive security audit and risk assessment' },
    { step: 2, title: 'Plan', description: 'Design security architecture and roadmap' },
    { step: 3, title: 'Implement', description: 'Deploy security controls and monitoring' },
    { step: 4, title: 'Monitor', description: 'Continuous threat monitoring and response' },
    { step: 5, title: 'Improve', description: 'Regular reviews and security enhancements' }
]

const stats = [
    { value: '99.9%', label: 'Threat Detection' },
    { value: '<1min', label: 'Response Time' },
    { value: '100%', label: 'Compliance' },
    { value: '0', label: 'Breaches' }
]

const CloudSecurity = memo(function CloudSecurity() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page cloud-security-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Cloud Security Services - Skifin"
                description="Secure your cloud infrastructure with Zero Trust, CSPM, and AI-driven threat detection."
                keywords="Cloud Security, Zero Trust, CSPM, Threat Detection, Cyber Security"
            />
            {/* Hero with 3D Security Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Security Elements */}
                <div className="hero-3d-elements">
                    {/* Rotating Shield */}
                    <ParallaxFloat speed={0.2} rotateSpeed={0.1}>
                        <motion.div
                            className="shield-container"
                            animate={{
                                rotateY: [0, 15, 0, -15, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <FiShield size={80} />
                        </motion.div>
                    </ParallaxFloat>

                    {/* Scan Lines */}
                    <motion.div
                        className="scan-line"
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Lock Icons */}
                    <motion.div
                        className="lock-float lock-1"
                        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <FiLock size={30} />
                    </motion.div>
                    <motion.div
                        className="lock-float lock-2"
                        animate={{ y: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <FiKey size={25} />
                    </motion.div>

                    {/* Hexagon Grid */}
                    <motion.div
                        className="hex-grid"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Alert Pulses */}
                    <motion.div
                        className="alert-pulse pulse-1"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.div
                        className="alert-pulse pulse-2"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                    />
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">🛡️ Enterprise Security</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>Cloud Security</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Protect your cloud infrastructure with Zero Trust Architecture, AI-driven threat detection,
                            and comprehensive compliance management.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Secure Your Cloud
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                View Solutions
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
                        title="Security Solutions"
                        subtitle="Enterprise-grade cloud security for modern threats"
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
                        title="Security Implementation"
                        subtitle="Our proven approach to securing your cloud environment"
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
                            <h2>Secure Your Infrastructure Today</h2>
                            <p>Don't wait for a breach. Let's build your security strategy together.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Get Security Assessment
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default CloudSecurity
