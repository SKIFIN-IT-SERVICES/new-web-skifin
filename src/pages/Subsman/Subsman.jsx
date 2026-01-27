import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
    FiPackage, FiArrowRight, FiTruck, FiCalendar, FiSmartphone, FiBox,
    FiCheckCircle, FiMapPin, FiPause, FiTrendingUp, FiCreditCard, FiUsers,
    FiActivity, FiLayers, FiShield
} from 'react-icons/fi'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import FadeIn from '../../components/animations/FadeIn'
import SEO from '../../components/common/SEO'
import './Subsman.css'

// --- Extended Feature Data based on Documentation ---
const powerFeatures = [
    {
        icon: <FiMapPin size={32} />,
        title: 'Micro-Location Intelligence',
        description: 'Forget basic pinning. We map entire apartment complexes by Tower, Floor, and Flat sequence. This granularity allows delivery partners to clear a 500-flat society in minutes, not hours.',
        badge: 'Top Efficiency'
    },
    {
        icon: <FiPause size={32} />,
        title: 'Smart Vacation Logic',
        description: 'Customers can pause subscriptions for specific dates. The system automatically adjusts billing, inventory requirements, and delivery routes instantly. No manual calls needed.',
        badge: 'Zero Waste'
    },
    {
        icon: <FiTrendingUp size={32} />,
        title: 'Leak-Proof Inventory',
        description: 'Every packet is tracked from depot to doorstep. The "Stock Reconciliation" feature flags missing items and return packets specifically, closing the loop on revenue leakage.',
        badge: 'Profit Booster'
    },
    {
        icon: <FiCreditCard size={32} />,
        title: 'Automated Billing Engine',
        description: 'Generate thousands of itemized bills for prepaid and postpaid customers in one click. Supports multiple payment gateways and auto-reminders for due payments.',
        badge: 'Cash Flow'
    },
    {
        icon: <FiUsers size={32} />,
        title: 'Team Performance',
        description: 'Track delivery partner attendance, payout calculations based on deliveries made, and live location monitoring during shift hours.',
        badge: 'Ops Control'
    },
    {
        icon: <FiLayers size={32} />,
        title: 'Product Variants',
        description: 'Manage complex catalogs with variations (e.g., Milk 500ml vs 1L). Set different prices for different customer groups or societies comfortably.',
        badge: 'Flexible'
    }
]

const ecosystem = [
    {
        role: 'Vendor Admin Panel',
        title: 'The Command Center',
        desc: 'A powerful web dashboard to oversee your entire innovative supply chain.',
        features: ['Society-wise Order Summary', 'Daily P&L Statements', 'Live Rider Tracking', 'Inventory Forecasting'],
        color: 'var(--color-primary)',
        uiType: 'desktop'
    },
    {
        role: 'Delivery Partner App',
        title: 'The Field Runner',
        desc: 'A rugged, offline-capable app designed for high-speed ground operations.',
        features: ['Sequence-optimized Route', 'One-tap Delivery Proof', 'Return Packet Entry', 'Cash Collection Log'],
        color: '#10b981',
        uiType: 'mobile-delivery'
    },
    {
        role: 'Customer App',
        title: 'The Shopping Experience',
        desc: 'A frictionless ordering app that increases retention and order value.',
        features: ['Calendar-based Subscriptions', 'Wallet & Recharge History', 'Vacation/Pause Toggle', 'Multi-address Support'],
        color: '#f59e0b',
        uiType: 'mobile-customer'
    }
]

// --- Visual Components (CSS Mockups) for Ecosystem ---
const VendorMockup = () => (
    <div className="css-mockup desktop">
        <div className="mockup-header">
            <div className="dots"><span /><span /><span /></div>
            <div className="bar" />
        </div>
        <div className="mockup-body">
            <div className="sidebar" />
            <div className="main-view">
                <div className="widget w1" />
                <div className="widget-row">
                    <div className="widget w2" />
                    <div className="widget w3" />
                </div>
                <div className="list-view">
                    <div className="list-item" />
                    <div className="list-item" />
                    <div className="list-item" />
                </div>
            </div>
        </div>
    </div>
)

const DeliveryMockup = () => (
    <div className="css-mockup mobile mobile-green">
        <div className="notch" />
        <div className="screen-content">
            <div className="map-view">
                <div className="path-line" />
                <div className="pin p1" />
                <div className="pin p2" />
            </div>
            <div className="bottom-sheet">
                <div className="sheet-handle" />
                <div className="sheet-row r1" />
                <div className="sheet-row r2" />
            </div>
        </div>
    </div>
)

const CustomerMockup = () => (
    <div className="css-mockup mobile mobile-orange">
        <div className="notch" />
        <div className="screen-content">
            <div className="app-nav" />
            <div className="banner" />
            <div className="product-grid-mini">
                <div className="p-card" />
                <div className="p-card" />
                <div className="p-card" />
                <div className="p-card" />
            </div>
        </div>
    </div>
)

const Subsman = memo(function Subsman() {
    return (
        <motion.div
            className="subsman-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Subsman - The Operating System for Hyper-local Delivery"
                description="Run your subscription delivery business on autopilot. Manage orders, optimize routes, and automate billing with Subsman."
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

            {/* App Ecosystem Section (Moved up for visual impact) */}
            <section id="ecosystem" className="subsman-ecosystem">
                <div className="container">
                    <SectionTitle
                        title="Three Apps. One Synchronized Core."
                        subtitle="A complete digital ecosystem that connects every stakeholder in real-time."
                        centered
                    />
                    <div className="ecosystem-grid">
                        {ecosystem.map((app, index) => (
                            <FadeIn key={index} delay={index * 0.2} style={{ height: '100%' }}>
                                <div className="ecosystem-card">
                                    <div className="mockup-container">
                                        {app.uiType === 'desktop' && <VendorMockup />}
                                        {app.uiType === 'mobile-delivery' && <DeliveryMockup />}
                                        {app.uiType === 'mobile-customer' && <CustomerMockup />}
                                    </div>
                                    <div className="card-content">
                                        <div className="app-role" style={{ color: app.color }}>{app.role}</div>
                                        <h3>{app.title}</h3>
                                        <p>{app.desc}</p>
                                        <ul className="app-features">
                                            {app.features.map((feat, i) => (
                                                <li key={i}><FiCheckCircle className="check-icon" /> {feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Power Features Section */}
            <section className="subsman-power">
                <div className="container">
                    <SectionTitle
                        title="Built for Operations at Scale"
                        subtitle="Features designed by observing thousands of real-world deliveries."
                        centered
                    />
                    <div className="power-grid">
                        {powerFeatures.map((feature, index) => (
                            <FadeIn key={index} delay={index * 0.1} style={{ height: '100%' }}>
                                <div className="power-card">
                                    <div className="power-header">
                                        <div className="power-icon">{feature.icon}</div>
                                        <span className="power-badge">{feature.badge}</span>
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Industries Section */}
            <section className="subsman-industries">
                <div className="container">
                    <SectionTitle
                        title="Tailored for Your Vertical"
                        subtitle="Subsman adapts to the unique needs of your daily delivery business."
                        centered
                    />
                    <div className="industries-grid">
                        <FadeIn delay={0.1}>
                            <div className="industry-card milk">
                                <div className="ind-icon">🥛</div>
                                <h3>Milk & Dairy</h3>
                                <p>Handle morning rush hours (4 AM - 7 AM) with "Zero-Ring" silent delivery protocols and advanced vacation management for families.</p>
                                <ul className="ind-features">
                                    <li>Morning Batch Routing</li>
                                    <li>Empty Bottle Tracking</li>
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="industry-card water">
                                <div className="ind-icon">💧</div>
                                <h3>Water Supply</h3>
                                <p>Manage 20L jar rotation efficiently. Track "Jars with Customer" vs "Jars in Van" to stop asset loss.</p>
                                <ul className="ind-features">
                                    <li>Jar Asset Management</li>
                                    <li>Deposit Handling</li>
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="industry-card tiffin">
                                <div className="ind-icon">🍱</div>
                                <h3>Tiffin / Meal Prep</h3>
                                <p>Complex varying menus management. Auto-update dispatch lists based on "Lunch" vs "Dinner" subscriptions.</p>
                                <ul className="ind-features">
                                    <li>Menu Rotation Logic</li>
                                    <li>Cut-off Time Automation</li>
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="industry-card grocery">
                                <div className="ind-icon">🥦</div>
                                <h3>Hyperlocal Grocery</h3>
                                <p>From farm to tower. Manage perishable inventory with "First-In-First-Out" logic and sequence-based delivery.</p>
                                <ul className="ind-features">
                                    <li>Perishable Stock Alerts</li>
                                    <li>Weight-based Billing</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* NEW: How It Works Section */}
            <section className="subsman-workflow">
                <div className="container">
                    <SectionTitle
                        title="From Order to Doorstep"
                        subtitle="A seamless flow that keeps your team and customers in sync."
                        centered
                    />
                    <div className="workflow-steps">
                        {[
                            { num: '01', title: 'Onboard & Import', desc: 'Upload your customers and routes via Excel or API.', icon: <FiUsers /> },
                            { num: '02', title: 'Smart Scheduling', desc: 'System auto-generates tomorrow\'s dispatch list.', icon: <FiCalendar /> },
                            { num: '03', title: 'Dispatch & Track', desc: 'Drivers get optimized routes. You track them live.', icon: <FiTruck /> },
                            { num: '04', title: 'Reconcile & Bill', desc: 'Auto-billed based on actual deliveries made.', icon: <FiCheckCircle /> }
                        ].map((step, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="workflow-card">
                                    <div className="step-num">{step.num}</div>
                                    <div className="step-icon">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Tech Specs Section */}
            <section className="subsman-tech">
                <div className="container">
                    <div className="tech-box">
                        <div className="tech-content">
                            <h2>Enterprise-Grade Infrastructure</h2>
                            <p>Built for scale. Whether you deliver 100 or 100,000 orders a day.</p>
                            <div className="tech-grid">
                                <div className="tech-item">
                                    <span className="ti-label">Uptime</span>
                                    <span className="ti-val">99.99%</span>
                                </div>
                                <div className="tech-item">
                                    <span className="ti-label">Security</span>
                                    <span className="ti-val">256-bit SSL</span>
                                </div>
                                <div className="tech-item">
                                    <span className="ti-label">API Access</span>
                                    <span className="ti-val">RESTful</span>
                                </div>
                                <div className="tech-item">
                                    <span className="ti-label">Support</span>
                                    <span className="ti-val">24/7 Priority</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-visual">
                            <div className="server-rack">
                                <div className="blink b1"></div>
                                <div className="blink b2"></div>
                                <div className="blink b3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Comparison Section (Old Way vs New Way) */}
            <section className="subsman-comparison">
                <div className="container">
                    <SectionTitle
                        title="Stop Managing Chaos"
                        subtitle="The difference between surviving and scaling is your operating system."
                        centered
                    />
                    <div className="comparison-wrapper">
                        <FadeIn direction="right">
                            <div className="comp-card chaos">
                                <div className="comp-header">
                                    <h3>❌ The Old Way</h3>
                                    <span>Manual & Stressful</span>
                                </div>
                                <ul className="comp-list">
                                    <li><span className="x-icon">✖</span> WhatsApp Orders & Calls</li>
                                    <li><span className="x-icon">✖</span> Excel Sheet Chaos</li>
                                    <li><span className="x-icon">✖</span> Lost Milk Bottles/ Jars</li>
                                    <li><span className="x-icon">✖</span> Leaking Revenue</li>
                                    <li><span className="x-icon">✖</span> Driver Theft</li>
                                </ul>
                            </div>
                        </FadeIn>
                        <div className="vs-badge">VS</div>
                        <FadeIn direction="left">
                            <div className="comp-card control">
                                <div className="comp-header">
                                    <h3>✅ The Subsman Way</h3>
                                    <span>Automated & Zen</span>
                                </div>
                                <ul className="comp-list">
                                    <li><span className="check-icon">✔</span> Customer App Ordering</li>
                                    <li><span className="check-icon">✔</span> Auto-Generated Routes</li>
                                    <li><span className="check-icon">✔</span> Asset Tracking (Jars/Crates)</li>
                                    <li><span className="check-icon">✔</span> Prepaid Wallet System</li>
                                    <li><span className="check-icon">✔</span> Live Driver Tracking</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* NEW: ROI Impact Section */}
            <section className="subsman-roi">
                <div className="container">
                    <div className="roi-box">
                        <div className="roi-text">
                            <h2>The Value of Automation</h2>
                            <p>For a typical business with 500 daily deliveries.</p>
                        </div>
                        <div className="roi-grid">
                            <motion.div
                                className="roi-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="roi-label">Hours Saved / Month</span>
                                <span className="roi-number">120+</span>
                                <span className="roi-desc">No more manual billing</span>
                            </motion.div>
                            <motion.div
                                className="roi-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="roi-label">Revenue Recovered</span>
                                <span className="roi-number">15%</span>
                                <span className="roi-desc">Plug inventory leaks</span>
                            </motion.div>
                            <motion.div
                                className="roi-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="roi-label">Customer Retention</span>
                                <span className="roi-number">3x</span>
                                <span className="roi-desc">Stickier app experience</span>
                            </motion.div>
                        </div>
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
