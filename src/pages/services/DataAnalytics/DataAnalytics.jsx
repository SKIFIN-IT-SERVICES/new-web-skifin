import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiBarChart2, FiArrowRight, FiPieChart, FiActivity, FiDatabase, FiLayers, FiTrendingUp, FiGrid } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import SEO from '../../../components/common/SEO'
import './DataAnalytics.css'

const features = [
    {
        icon: <FiPieChart size={28} />,
        title: 'Business Intelligence',
        description: 'Interactive dashboards and reports that turn your data into actionable insights.'
    },
    {
        icon: <FiTrendingUp size={28} />,
        title: 'Predictive Analytics',
        description: 'Forecast trends, demand, and outcomes with advanced statistical models.'
    },
    {
        icon: <FiActivity size={28} />,
        title: 'Real-Time Processing',
        description: 'Stream processing pipelines for real-time data analysis and alerting.'
    },
    {
        icon: <FiDatabase size={28} />,
        title: 'Data Warehousing',
        description: 'Modern data warehouse solutions for centralized analytics at scale.'
    },
    {
        icon: <FiLayers size={28} />,
        title: 'ETL Pipelines',
        description: 'Automated data ingestion, transformation, and loading workflows.'
    },
    {
        icon: <FiGrid size={28} />,
        title: 'Data Visualization',
        description: 'Stunning visualizations that make complex data easy to understand.'
    }
]

const process = [
    { step: 1, title: 'Data Audit', description: 'Assess your data sources and quality' },
    { step: 2, title: 'Architecture', description: 'Design your analytics platform' },
    { step: 3, title: 'Build', description: 'Implement pipelines and dashboards' },
    { step: 4, title: 'Train', description: 'Enable your team with data literacy' },
    { step: 5, title: 'Iterate', description: 'Continuously improve insights' }
]

const stats = [
    { value: '60%', label: 'Faster Insights' },
    { value: '2PB', label: 'Data Managed' },
    { value: '99.9%', label: 'Uptime' },
    { value: '500+', label: 'Dashboards' }
]

const DataAnalytics = memo(function DataAnalytics() {
    const memoizedFeatures = useMemo(() => features, [])
    const memoizedProcess = useMemo(() => process, [])
    const memoizedStats = useMemo(() => stats, [])

    return (
        <motion.div
            className="service-page data-analytics-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Data Analytics Services - Skifin"
                description="Transform raw data into actionable insights with Business Intelligence and Big Data Analytics."
                keywords="Data Analytics, Business Intelligence, Big Data, Predictive Analytics, Data Visualization"
            />
            {/* Hero Section with 3D Data Elements */}
            <section className="service-hero">
                <div className="hero-bg-pattern" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    {/* 3D Bar Chart */}
                    <ParallaxFloat speed={0.25} className="bar-chart-3d">
                        <motion.div
                            className="bar bar-1"
                            animate={{ height: ['20%', '60%', '20%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="bar-face front"></div>
                            <div className="bar-face right"></div>
                            <div className="bar-face top"></div>
                        </motion.div>
                        <motion.div
                            className="bar bar-2"
                            animate={{ height: ['40%', '80%', '40%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            <div className="bar-face front"></div>
                            <div className="bar-face right"></div>
                            <div className="bar-face top"></div>
                        </motion.div>
                        <motion.div
                            className="bar bar-3"
                            animate={{ height: ['30%', '90%', '30%'] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                            <div className="bar-face front"></div>
                            <div className="bar-face right"></div>
                            <div className="bar-face top"></div>
                        </motion.div>
                    </ParallaxFloat>

                    {/* Floating Pie Chart Segments */}
                    <ParallaxFloat speed={-0.2} rotateSpeed={0.2}>
                        <motion.div
                            className="pie-segment seg-1"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            <svg viewBox="0 0 100 100">
                                <path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" fill="rgba(255, 255, 255, 0.2)" />
                            </svg>
                        </motion.div>
                    </ParallaxFloat>

                    {/* Rising Trend Line */}
                    <svg className="trend-line-svg" viewBox="0 0 300 100">
                        <motion.path
                            d="M0,100 L50,80 L100,90 L150,40 L200,60 L250,20 L300,0"
                            fill="none"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.circle
                            r="5"
                            fill="#FFFFFF"
                            animate={{
                                offsetDistance: ["0%", "100%"],
                                opacity: [0, 1, 0]
                            }}
                            style={{ offsetPath: "path('M0,100 L50,80 L100,90 L150,40 L200,60 L250,20 L300,0')" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Data Points */}
                    <motion.div className="data-point p1" animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                    <motion.div className="data-point p2" animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
                    <motion.div className="data-point p3" animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }} />

                    {/* Grid Background */}
                    <div className="grid-bg" />
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">📊 Actionable Insights</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1>
                            Data Analytics
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Transform raw data into strategic insights with business intelligence,
                            predictive analytics, and real-time data processing.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="hero-buttons">
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Unlock Your Data
                            </Button>
                            <Button variant="outline" size="lg" href="#features">
                                See Solutions
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
                        title="Analytics Solutions"
                        subtitle="From data warehousing to real-time insights"
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
                        title="Analytics Journey"
                        subtitle="From raw data to strategic insights"
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
                            <h2>Ready for Data-Driven Decisions?</h2>
                            <p>Let's build an analytics platform that powers your growth.</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Start Analytics Project
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default DataAnalytics
