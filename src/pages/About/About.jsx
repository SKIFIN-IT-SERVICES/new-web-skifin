import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiAward, FiHeart, FiTarget, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import FadeIn from '../../components/animations/FadeIn'
import SEO from '../../components/common/SEO'
import './About.css'

const values = [
    {
        icon: <FiTarget size={28} />,
        title: 'Innovation First',
        description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
        icon: <FiUsers size={28} />,
        title: 'Client Partnership',
        description: 'We work as an extension of your team, not just a vendor.'
    },
    {
        icon: <FiAward size={28} />,
        title: 'Excellence',
        description: 'We deliver quality solutions that exceed expectations.'
    },
    {
        icon: <FiHeart size={28} />,
        title: 'Open Source',
        description: 'We believe in the power of open source and community.'
    }
]

const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '100%', label: 'Client Retention' }
]

const About = memo(function About() {
    const memoizedValues = useMemo(() => values, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="About Us - Skifin"
                description="Learn about Skifin's mission to revolutionize IT services through Artificial Intelligence and human ingenuity."
                keywords="About Skifin, AI Company, IT Consulting, Tech Team"
            />

            {/* Hero Section with 3D Elements */}
            <section className="about-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Floating 3D Cards */}
                    <motion.div
                        className="float-card card-1"
                        animate={{
                            rotateY: [0, 15, 0, -15, 0],
                            rotateX: [0, 10, 0, -10, 0],
                            y: [0, -15, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="float-card card-2"
                        animate={{
                            rotateY: [0, -20, 0, 20, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Gradient Spheres */}
                    <motion.div
                        className="sphere sphere-1"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="sphere sphere-2"
                        animate={{
                            y: [0, -25, 0],
                            x: [0, 15, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Connecting Lines */}
                    <motion.div
                        className="connect-line line-1"
                        animate={{ scaleX: [0, 1], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="connect-line line-2"
                        animate={{ scaleY: [0, 1], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    />

                    {/* Orbiting Dots */}
                    <motion.div
                        className="orbit-container"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    >
                        <div className="orbit-dot dot-1" />
                        <div className="orbit-dot dot-2" />
                        <div className="orbit-dot dot-3" />
                    </motion.div>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">🏢 Our Story</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="hero-title">About SKIFIN</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            AI-Assisted Solutions Through Vibe Coding. We transform businesses
                            with cutting-edge technology and a passion for innovation.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="container">
                    <div className="story-grid">
                        <FadeIn direction="right">
                            <div className="story-content">
                                <h2>Our Story</h2>
                                <p>
                                    SKIFIN was founded with a simple mission: to make cutting-edge technology
                                    accessible to businesses of all sizes. With over 15 years of experience
                                    in software development and AI, our team has helped hundreds of companies
                                    transform their operations through intelligent automation.
                                </p>
                                <p>
                                    We believe in the power of "vibe coding" – an approach that combines
                                    technical excellence with intuitive design and AI assistance. Our solutions
                                    are not just functional; they're delightful to use and easy to maintain.
                                </p>
                                <p>
                                    As advocates of open-source technology, we leverage the best free and
                                    open-source tools to deliver enterprise-grade solutions without vendor
                                    lock-in or licensing costs.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <div className="story-visual">
                                <div className="visual-card">
                                    <span className="visual-emoji">🚀</span>
                                    <span className="visual-text">Innovation Driven</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats">
                <div className="container">
                    <div className="stats-grid">
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

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <SectionTitle
                        title="Our Values"
                        subtitle="The principles that guide everything we do"
                    />
                    <div className="values-grid">
                        {memoizedValues.map((value, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <Card variant="glass" className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Ready to Work Together?</h2>
                            <p>Let's discuss how we can help your business thrive.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Get in Touch
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default About
