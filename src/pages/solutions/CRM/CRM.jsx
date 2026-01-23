
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiUsers, FiBarChart2, FiActivity, FiZap, FiLayout, FiCheck, FiArrowRight } from 'react-icons/fi'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../../components/common/SEO'
import Button from '../../../components/common/Button'
import './CRM.css'

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

const ParallaxFloat = ({ children, speed = 1, className = "" }) => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, speed * 100])
    return <motion.div style={{ y }} className={className}>{children}</motion.div>
}

const CRM = () => {
    const containerRef = useRef(null)

    return (
        <div className="crm-page" ref={containerRef}>
            <SEO
                title="Intelligent CRM System"
                description="Manage relationships, automate outreach, and maximize growth with our AI-powered CRM solution."
                keywords="CRM, Customer Relationship Management, AI Automation, Sales Pipeline"
            />

            {/* Hero Section */}
            <section className="crm-hero">
                <div className="crm-hero-bg">
                    <div className="hero-gradient-orb orb-1"></div>
                    <div className="hero-gradient-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>

                <div className="container crm-hero-content">
                    <div className="crm-hero-text">
                        <FadeIn>
                            <div className="hero-badge">
                                <FiActivity className="badge-icon" /> Next-Gen Relationship Management
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="crm-title">
                                Turn Connections into <br />
                                <span className="text-gradient">Revenue Streams</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="crm-subtitle">
                                An intelligent CRM that grows with your business. Automate follow-ups,
                                visualize pipelines, and close deals faster with AI-driven insights.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="crm-cta-group">
                                <Button to="/contact" variant="primary" size="large" icon={FiArrowRight}>
                                    Get Started
                                </Button>
                                <Button to="/about" variant="secondary" size="large">
                                    Learn More
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="crm-hero-visual">
                        <ParallaxFloat speed={-0.5} className="float-card card-1">
                            <div className="card-icon"><FiUsers /></div>
                            <div className="card-info">
                                <span>Total Leads</span>
                                <strong>1,248</strong>
                            </div>
                            <div className="card-trend up">+12%</div>
                        </ParallaxFloat>

                        <ParallaxFloat speed={-0.2} className="float-card card-2">
                            <div className="card-icon"><FiBarChart2 /></div>
                            <div className="card-info">
                                <span>Conversion</span>
                                <strong>4.8%</strong>
                            </div>
                            <div className="card-trend up">+2.4%</div>
                        </ParallaxFloat>

                        <div className="main-dashboard-preview">
                            <div className="glass-panel">
                                <div className="panel-header">
                                    <div className="dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="bar"></div>
                                </div>
                                <div className="panel-body">
                                    <div className="graph-placeholder">
                                        <div className="graph-line"></div>
                                        <div className="graph-area"></div>
                                    </div>
                                    <div className="stats-row">
                                        <div className="stat-block"></div>
                                        <div className="stat-block"></div>
                                        <div className="stat-block"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="crm-features section-padding">
                <div className="container">
                    <FadeIn>
                        <div className="section-header text-center">
                            <h2 className="section-title">Why Choose Our CRM?</h2>
                            <p className="section-desc">Built for modern teams who need speed, clarity, and automation.</p>
                        </div>
                    </FadeIn>

                    <div className="features-grid">
                        <FadeIn delay={0.1}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <FiLayout className="feature-icon" />
                                </div>
                                <h3>Visual Pipeline</h3>
                                <p>Drag-and-drop deal management that gives you a clear view of your sales funnel at a glance.</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <FiZap className="feature-icon" />
                                </div>
                                <h3>Automated Actions</h3>
                                <p>Trigger emails, tasks, and notifications based on deal stage changes or lead behavior.</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <FiBarChart2 className="feature-icon" />
                                </div>
                                <h3>Deep Analytics</h3>
                                <p>Real-time dashboards showing team performance, revenue forecasts, and conversion metrics.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pipeline Section */}
            <section className="crm-pipeline section-padding">
                <div className="container pipeline-container">
                    <div className="pipeline-content">
                        <FadeIn>
                            <h2 className="section-title">Streamline Your Sales Process</h2>
                            <p className="section-desc">
                                Stop losing leads in spreadsheets. Our intuitive pipeline view helps you track every opportunity from initial contact to closed deal.
                            </p>
                            <ul className="pipeline-list">
                                <li><FiCheck /> Customizable deal stages</li>
                                <li><FiCheck /> Probability scoring</li>
                                <li><FiCheck /> Activity timeline & history</li>
                                <li><FiCheck /> Team collaboration tools</li>
                            </ul>
                        </FadeIn>
                    </div>
                    <div className="pipeline-visual">
                        <div className="pipeline-mockup">
                            <div className="pipeline-col"></div>
                            <div className="pipeline-col"></div>
                            <div className="pipeline-col active">
                                <motion.div
                                    className="deal-card"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="deal-card static"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="crm-cta section-padding">
                <div className="container">
                    <div className="cta-box">
                        <FadeIn>
                            <h2>Ready to Optimize Your Sales?</h2>
                            <p>Join high-growth teams using our CRM to scale their revenue.</p>
                            <Button to="/contact" variant="primary" size="large">
                                Schedule a Demo
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CRM
