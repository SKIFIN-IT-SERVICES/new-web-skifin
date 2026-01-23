import { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiCpu, FiCode, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import './VibeCoding.css'

const Typewriter = ({ text, delay = 0 }) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 50 + Math.random() * 50)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay, text])

    return (
        <span>
            {currentText}
            <span className="cursor" />
        </span>
    )
}

const BinaryStream = ({ speed = 10, left = '50%' }) => {
    return (
        <motion.div
            className="binary-stream"
            style={{ left }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 0.5, 0] }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        >
            {'1 0 1 1 0 0 1 0 1 0 1 1 0 1 0 0 1'.split('').join('\n')}
        </motion.div>
    )
}

const VibeCoding = memo(function VibeCoding() {
    return (
        <motion.div
            className="vibe-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Animated Hero Section */}
            <section className="vibe-hero">
                <div className="hero-bg-pattern" />

                {/* Background Binary Streams */}
                <BinaryStream speed={15} left="10%" />
                <BinaryStream speed={12} left="25%" />
                <BinaryStream speed={18} left="80%" />
                <BinaryStream speed={20} left="90%" />

                {/* 3D Animated Elements */}
                <div className="hero-3d-elements">
                    <ParallaxFloat speed={0.5}>
                        <motion.div
                            className="energy-orb orb-1"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.4, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </ParallaxFloat>

                    <ParallaxFloat speed={-0.3}>
                        <motion.div
                            className="energy-orb orb-2"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        />
                    </ParallaxFloat>

                    <ParallaxFloat speed={0.8} rotationSpeed={15}>
                        <div className="code-bubble bubble-1">
                            <div className="scan-line" />
                            <pre><Typewriter text="const vibe = await ai.connect();" /></pre>
                        </div>
                    </ParallaxFloat>

                    <ParallaxFloat speed={-0.6} rotationSpeed={-10}>
                        <div className="code-bubble bubble-2">
                            <div className="scan-line" style={{ animationDelay: '1.5s' }} />
                            <pre><Typewriter text='return "Success" + flow;' delay={2000} /></pre>
                        </div>
                    </ParallaxFloat>

                    <ParallaxFloat speed={0.4} rotationSpeed={20}>
                        <div className="code-bubble bubble-3">
                            <FiCode size={24} />
                        </div>
                    </ParallaxFloat>

                    {/* Floating Syntax Symbols */}
                    <ParallaxFloat speed={0.3} rotationSpeed={5}>
                        <div className="float-syntax syntax-1">{`{ }`}</div>
                    </ParallaxFloat>
                    <ParallaxFloat speed={-0.2} rotationSpeed={-10}>
                        <div className="float-syntax syntax-2">{`/>`}</div>
                    </ParallaxFloat>
                    <ParallaxFloat speed={0.5} rotationSpeed={15}>
                        <div className="float-syntax syntax-3">{`&&`}</div>
                    </ParallaxFloat>
                    <ParallaxFloat speed={-0.4} rotationSpeed={-5}>
                        <div className="float-syntax syntax-4">{`[]`}</div>
                    </ParallaxFloat>

                    {/* Floating Data Particles */}
                    <ParallaxFloat speed={0.9}>
                        <motion.div
                            className="data-particle"
                            style={{ top: '30%', left: '40%' }}
                            animate={{ opacity: [0, 1, 0], y: [0, -50, -100] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                        />
                    </ParallaxFloat>
                    <ParallaxFloat speed={1.1}>
                        <motion.div
                            className="data-particle"
                            style={{ bottom: '40%', right: '30%' }}
                            animate={{ opacity: [0, 1, 0], y: [0, -40, -80] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                        />
                    </ParallaxFloat>
                </div>

                <div className="container hero-content">
                    <FadeIn>
                        <span className="hero-badge">✨ The New Standard</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="hero-title">
                            Vibe Coding
                            <br />
                            <span style={{ fontSize: '0.6em', opacity: 0.9 }}>AI-Augmented Velocity</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            Experience the future of software development where human intuition meets AI precision.
                            We build products and services at the speed of thought.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Button to="/contact" size="lg" className="hero-btn" icon={<FiArrowRight />} iconPosition="right">
                            Start Your Project
                        </Button>
                    </FadeIn>
                </div>
            </section>

            {/* Concept Section */}
            <section className="vibe-concept">
                <div className="container">
                    <div className="concept-grid">
                        <FadeIn direction="right">
                            <div className="concept-content">
                                <SectionTitle title="What is Vibe Coding?" subtitle="Beyond traditional development" />
                                <p>
                                    Vibe Coding is a revolutionary approach that leverages advanced Large Language Models (LLMs)
                                    and AI agents to handle the heavy lifting of code generation. This allows our developers
                                    to stay in a "flow state" — focusing on high-level architecture, user experience, and
                                    creative problem-solving.
                                </p>
                                <p>
                                    Instead of getting bogged down in syntax and boilerplate, we guide the AI to implement
                                    complex features rapidly. The result? Faster delivery, fewer bugs, and software that
                                    feels "right" from day one.
                                </p>
                                <Button to="/services/ai-automation" variant="outline" icon={<FiCpu />}>
                                    Explore AI Services
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="concept-visual">
                                <img src="/images/vibe-coding-neural.png" alt="AI Vibe Robot" className="concept-image" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="vibe-benefits">
                <div className="container">
                    <SectionTitle title="Why Choose Vibe Coding?" subtitle="Transforming how we build your products" centered />

                    <div className="benefits-grid">
                        <FadeIn delay={0.1}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <FiZap />
                                </div>
                                <h3>Rapid Prototyping</h3>
                                <p>
                                    We turn ideas into working MVPs in days, not months. See your vision come to life immediately.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <FiCpu />
                                </div>
                                <h3>AI-Powered Quality</h3>
                                <p>
                                    AI agents continuously review code, suggest optimizations, and ensure security best practices.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <FiCode />
                                </div>
                                <h3>Focus on Value</h3>
                                <p>
                                    By automating the mundane, we spend more time on what matters most: your business logic and user value.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="vibe-cta">
                <div className="container">
                    <FadeIn>
                        <div className="cta-card">
                            <h2>Build Products with Vibe</h2>
                            <p>Ready to experience the speed of AI-assisted development?</p>
                            <Button to="/contact" size="lg" icon={<FiArrowRight />} iconPosition="right">
                                Catch the Vibe
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    )
})

export default VibeCoding
