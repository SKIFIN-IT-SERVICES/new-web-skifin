import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import FadeIn from '../../components/animations/FadeIn'
import ParallaxFloat from '../../components/animations/ParallaxFloat'
import TextReveal from '../../components/animations/TextReveal'
import SEO from '../../components/common/SEO'
import './Home.css'

const services = [
    {
        image: '/images/ai-automation.png',
        title: 'AI Automation',
        description: 'Agentic AI, RPA, and Hyperautomation solutions to transform your operations.',
        path: '/services/ai-automation'
    },
    {
        image: '/images/document-processing.png',
        title: 'Cloud Security',
        description: 'Zero Trust Architecture, CSPM, and AI-driven threat detection.',
        path: '/services/cloud-security'
    },
    {
        image: '/images/app-development.png',
        title: 'DevOps & DevSecOps',
        description: 'CI/CD automation, GitOps, and platform engineering solutions.',
        path: '/services/devops'
    },
    {
        image: '/images/ai-agent.png',
        title: 'AI/ML Solutions',
        description: 'Generative AI, custom ML models, and computer vision applications.',
        path: '/services/ai-ml-solutions'
    },
    {
        image: '/images/document-processing.png',
        title: 'Data Analytics',
        description: 'Business intelligence, predictive analytics, and real-time processing.',
        path: '/services/data-analytics'
    },
    {
        image: '/images/cloud-upload.png',
        title: 'Cloud Migration',
        description: 'Multi-cloud strategy, serverless solutions, and infrastructure optimization.',
        path: '/services/cloud-migration'
    }
]

const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support Available' }
]

const features = [
    'Cutting-edge AI and automation technologies',
    'Expert team with 15+ years of experience',
    'Open-source first approach',
    'Scalable and secure solutions',
    'Continuous support and maintenance',
    'Tailored solutions for your business'
]

const Home = memo(function Home() {
    const memoizedServices = useMemo(() => services, [])
    const memoizedStats = useMemo(() => stats, [])
    const memoizedFeatures = useMemo(() => features, [])

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Skifin - AI-Driven IT Services & Consulting"
                description="Transform your business with Skifin's AI automation, cloud security, and DevOps solutions. We deliver intelligent software for the future."
                keywords="AI Analysis, Cloud Security, DevOps, Machine Learning, Digital Transformation"
            />

            {/* Hero Section with 3D Animated Elements */}
            <section className="hero-section">
                <div className="hero-bg">
                    <div className="hero-gradient" />
                    <div className="hero-grid" />
                </div>

                {/* 3D Animated Background Elements */}
                <div className="hero-3d-elements">
                    {/* Rotating 3D Cube with Spring Entrance */}
                    <motion.div
                        className="cube-container"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotateY: 360,
                            rotateX: 360
                        }}
                        transition={{
                            scale: { type: "spring", stiffness: 60, damping: 20 },
                            opacity: { duration: 0.8 },
                            rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
                            rotateX: { duration: 20, repeat: Infinity, ease: 'linear' }
                        }}
                    >
                        <div className="cube">
                            <div className="cube-face front" />
                            <div className="cube-face back" />
                            <div className="cube-face right" />
                            <div className="cube-face left" />
                            <div className="cube-face top" />
                            <div className="cube-face bottom" />
                        </div>
                    </motion.div>

                    {/* Floating Gradient Orbs with Parallax-like movement */}
                    <ParallaxFloat speed={-0.3} className="hero-float-wrapper">
                        <motion.div
                            className="gradient-orb orb-1"
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                                opacity: [0.6, 0.8, 0.6]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </ParallaxFloat>
                    <ParallaxFloat speed={0.4} className="hero-float-wrapper">
                        <motion.div
                            className="gradient-orb orb-2"
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, 25, 0],
                                x: [0, -15, 0],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </ParallaxFloat>
                    <ParallaxFloat speed={-0.2} className="hero-float-wrapper">
                        <motion.div
                            className="gradient-orb orb-3"
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </ParallaxFloat>

                    {/* Geometric Lines with Staggered Entrance */}
                    <motion.div
                        className="geo-line line-1"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                        className="geo-line line-2"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />

                    {/* Pulsing Rings */}
                    <motion.div
                        className="pulse-ring ring-1"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                        className="pulse-ring ring-2"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                    />
                </div>

                <div className="hero-content container">
                    <FadeIn delay={0.1}>
                        <span className="hero-badge">
                            🚀 Powered by AI | Open Source First
                        </span>
                    </FadeIn>

                    <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TextReveal
                            text="AI-Assisted Solutions"
                            className="hero-title"
                            delay={0.2}
                            centered
                        />
                        <TextReveal
                            text="Through Vibe Coding"
                            className="hero-title text-gradient"
                            delay={0.5}
                            centered
                        />
                    </div>

                    <FadeIn delay={0.3}>
                        <p className="hero-subtitle">
                            Transform your business with cutting-edge AI automation, cloud security,
                            and DevOps solutions. We deliver enterprise-grade technology with
                            the agility of a startup.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="hero-cta">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Get Started
                            </Button>
                            <Button to="/about" variant="outline" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-grid">
                    {memoizedStats.map((stat, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="stat-item">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <SectionTitle
                        title="Services We Offer"
                        subtitle="Comprehensive technology solutions designed to accelerate your digital transformation journey"
                    />

                    <div className="services-grid">
                        {memoizedServices.map((service, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <Link to={service.path} className="service-card-link">
                                    <Card variant="glass" className="service-card">
                                        <div className="service-image">
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <span className="service-link">
                                            read more <FiArrowRight />
                                        </span>
                                    </Card>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section">
                <div className="container why-grid">
                    <div className="why-content">
                        <FadeIn direction="right">
                            <SectionTitle
                                title="Why Choose SKIFIN?"
                                subtitle="We combine deep technical expertise with a passion for innovation to deliver solutions that drive real business value."
                                centered={false}
                            />

                            <ul className="features-list">
                                {memoizedFeatures.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <FiCheck className="check-icon" />
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            <Button to="/about" variant="primary" icon={<FiArrowRight />} iconPosition="right">
                                About Us
                            </Button>
                        </FadeIn>
                    </div>

                    <FadeIn direction="left" delay={0.2}>
                        <div className="why-visual">
                            <div className="visual-card">
                                <div className="visual-glow" />
                                <div className="visual-content">
                                    <span className="visual-number">15+</span>
                                    <span className="visual-text">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Ready to Transform Your Business?</h2>
                            <p>
                                Let's discuss how our AI-powered solutions can help you achieve your goals.
                            </p>
                            <div className="cta-buttons">
                                <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                    Start Your Project
                                </Button>
                                <Button href="mailto:contact@skifin.com" variant="outline" size="lg">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default Home
