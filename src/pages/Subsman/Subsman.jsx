import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiPackage, FiArrowRight, FiTruck, FiCalendar, FiSmartphone, FiBox, FiCheckCircle } from 'react-icons/fi'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import FadeIn from '../../components/animations/FadeIn'
import SEO from '../../components/common/SEO'
import './Subsman.css'

const features = [
    {
        icon: <FiCalendar size={28} />,
        title: 'Smart Scheduling',
        description: 'Automated delivery scheduling and route optimization to ensure timely deliveries.'
    },
    {
        icon: <FiTruck size={28} />,
        title: 'Delivery Management',
        description: 'Real-time tracking of drivers and deliveries with proof of delivery capture.'
    },
    {
        icon: <FiSmartphone size={28} />,
        title: 'Customer App',
        description: 'White-labeled mobile app for customers to manage subscriptions and view delivery status.'
    },
    {
        icon: <FiBox size={28} />,
        title: 'Inventory Control',
        description: 'Real-time inventory tracking and automated reordering to prevent stockouts.'
    },
    {
        icon: <FiCheckCircle size={28} />,
        title: 'Subscription Management',
        description: 'Flexible subscription plans, pause/resume options, and automated billing.'
    },
    {
        icon: <FiPackage size={28} />,
        title: 'Route Optimization',
        description: 'AI-powered route planning to minimize fuel costs and delivery time.'
    }
]

const stats = [
    { value: '30%', label: 'Cost Reduction' },
    { value: '95%', label: 'On-Time Delivery' },
    { value: '500+', label: 'Active Businesses' },
    { value: '1M+', label: 'Deliveries Managed' }
]

const Subsman = memo(function Subsman() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="subsman-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Subsman - Smart Subscription & Delivery Management"
                description="Streamline your delivery business with Subsman. Automated scheduling, route optimization, and customer apps."
                keywords="Delivery Management, Subscription Software, Route Optimization, Last Mile Delivery"
            />
            {/* Hero Section with 3D App Elements */}
            <section className="subsman-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* Floating Phone App Mockup */}
                    <motion.div
                        className="phone-mockup"
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [0, 5, 0, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="phone-screen">
                            <div className="app-header"></div>
                            <div className="app-content">
                                <motion.div className="app-card c1" animate={{ x: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                                <motion.div className="app-card c2" animate={{ x: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} />
                                <motion.div className="app-card c3" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Delivery Package */}
                    <motion.div
                        className="delivery-box"
                        animate={{
                            x: [-100, 100],
                            y: [20, -20, 20],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                        <FiBox size={40} />
                    </motion.div>

                    {/* Location Markers */}
                    <motion.div className="map-marker m1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.div className="map-marker m2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                    <motion.div className="map-marker m3" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />

                    {/* Route Line */}
                    <svg className="route-svg" viewBox="0 0 300 200">
                        <motion.path
                            d="M50,150 Q150,50 250,100"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="10 10"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">📦 Smart Delivery Management</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="hero-title">Subsman</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            The ultimate subscription management and delivery platform. Streamline your logistics,
                            retain customers, and grow your business with our all-in-one solution.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Get Started
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                Learn More
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Section */}
            <section className="subsman-stats">
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

            {/* Features Section */}
            <section id="features" className="subsman-features">
                <div className="container">
                    <SectionTitle
                        title="Why Choose Subsman?"
                        subtitle="Powerful features designed for modern delivery businesses"
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

            {/* CTA Section */}
            <section className="subsman-cta">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Transfrom Your Delivery Business</h2>
                            <p>Join hundreds of businesses using Subsman to streamline their operations.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Request Demo
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default Subsman
