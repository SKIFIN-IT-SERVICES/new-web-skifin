import { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiCpu, FiCode, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../../components/common/SectionTitle'
import Button from '../../../components/common/Button'
import FadeIn from '../../../components/animations/FadeIn'
import ParallaxFloat from '../../../components/animations/ParallaxFloat'
import SEO from '../../../components/common/SEO'
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
            <SEO
                title="Vibe Coding - AI-Augmented Software Development | Skifin"
                description="Experience the future of coding with AI-augmented velocity. Building products at the speed of thought."
                keywords="Vibe Coding, AI Programming, Rapid Development, Software Engineering, AI Agents"
            />
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
                            <span style={{ fontSize: '0.6em', opacity: 0.9 }}>Building at the Speed of Thought</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-description">
                            The future of software development where you "give in to the vibes" and forget the code exists.
                            We orchestrate AI to build products at the speed of human creativity.
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
                                <SectionTitle title="The Philosophy of Vibe" subtitle="Intent Over Syntax" />
                                <p>
                                    Vibe Coding is not just about using AI tools; it's a fundamental shift in how we create.
                                    Prioritizing <strong>Joy</strong> and <strong>Flow State</strong>, we move from being "bricklayers" of code to architects of logic.
                                </p>
                                <p>
                                    Start with a vision, prompt the intent, and let the AI handle the implementation.
                                    When the vibe isn't right, we don't debug syntax—we refine the direction.
                                    It’s about steering the ship, not rowing the boat.
                                </p>
                                <Button to="/services/ai-automation" variant="outline" icon={<FiCpu />}>
                                    Explore the Stack
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

            {/* Core Principles Section */}
            <section className="vibe-principles">
                <div className="container">
                    <SectionTitle title="The Core Principles" subtitle="Why We Vibe" centered />
                    <div className="principles-grid">
                        <FadeIn delay={0.1}>
                            <div className="principle-card">
                                <h3>Joy of Creation</h3>
                                <p>Coding should feel like painting, not data entry. We remove the friction to bring back the fun.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="principle-card">
                                <h3>Flow State</h3>
                                <p>By outsourcing syntax to AI, we maintain a continuous stream of logic and creativity without interruption.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="principle-card">
                                <h3>Velocity</h3>
                                <p>We don't just move fast; we move exponentially. What took weeks now takes hours.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Origin Story Section */}
            <section className="vibe-origin">
                <div className="container">
                    <div className="origin-content">
                        <FadeIn>
                            <span className="section-label">THE ORIGIN</span>
                            <h2>The "Software 2.0" Vision</h2>
                            <blockquote className="karpathy-quote">
                                "The hottest new programming language is English."
                            </blockquote>
                            <p className="origin-text">
                                In 2025, <strong>Andrej Karpathy</strong> (OpenAI co-founder) coined the term "Vibe Coding" to describe a state where developers "fully give in to the vibes."
                                It represents the final transition to <strong>Software 2.0</strong>, where neural networks replace heuristic code, and human intent becomes the only bottleneck.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Vibe Engineering Section */}
            <section className="vibe-engineering">
                <div className="container">
                    <SectionTitle title="The Engineering Behind the Vibe" subtitle="Orchestration at Scale" centered />

                    <div className="engineering-grid">
                        <FadeIn delay={0.1}>
                            <div className="eng-card">
                                <div className="eng-icon">
                                    <FiCode />
                                </div>
                                <h3>AI-Native IDEs</h3>
                                <p>
                                    We leverage tools like <strong>Cursor</strong>, <strong>Windsurf</strong>, and <strong>Replit</strong> that understand the entire codebase context, enabling "multi-file" editing in a single prompt.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="eng-card">
                                <div className="eng-icon">
                                    <FiZap />
                                </div>
                                <h3>The Orchestrators</h3>
                                <p>
                                    Using <strong>Claude 3.5 Sonnet</strong> and <strong>GitHub Copilot</strong> as our pair programmers, we generate production-ready logic with high-level reasoning capabilities.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="eng-card">
                                <div className="eng-icon">
                                    <FiCpu />
                                </div>
                                <h3>Instant Deployment</h3>
                                <p>
                                    From <strong>Lovable</strong> to <strong>Vercel</strong>, we ship prototypes in minutes. The feedback loop is instantaneous, keeping the creative energy alive.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pair Programming Section */}
            <section className="vibe-pair-programming">
                <div className="container">
                    <div className="pair-grid">
                        <FadeIn direction="right">
                            <div className="pair-visual">
                                <img src="/images/vibe-coding-hybrid.png" alt="AI Human Collaboration" className="pair-image" />
                            </div>
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="pair-content">
                                <SectionTitle title="AI Pair Programming" subtitle="Two Minds, One Goal" />
                                <p>
                                    Imagine a senior engineer who never sleeps, knows every library documentation by heart, and types at the speed of light. That's your AI pair programmer.
                                </p>
                                <p>
                                    We don't just use autocomplete. We engage in deep, strategic dialogue with our AI tools, refining architecture and logic in real-time. It's a dance of human creativity and machine efficiency.
                                </p>
                                <ul className="pair-list">
                                    <li>Real-time vulnerability scanning</li>
                                    <li>Automated refactoring suggestions</li>
                                    <li>Instant documentation generation</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>



            {/* Workflow Section */}
            <section className="vibe-workflow">
                <div className="container">
                    <SectionTitle title="From Brainwave to Binary" subtitle="The Vibe Process" centered />
                    <div className="workflow-timeline">
                        <FadeIn delay={0.1}>
                            <div className="timeline-item">
                                <div className="step-number">01</div>
                                <h3>Intent</h3>
                                <p>We define the "vibe" and functional requirements in natural language. "Create a smooth, glassmorphic dashboard."</p>
                                <span className="pro-tip">Tip: Be specific about the <em>feeling</em>, not just the function.</span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="timeline-item">
                                <div className="step-number">02</div>
                                <h3>Generation</h3>
                                <p>The AI orchestrates the build, writing complex logic, CSS, and tests across multiple files simultaneously.</p>
                                <span className="pro-tip">Tip: Use "Composer Mode" in Cursor for multi-file edits.</span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="timeline-item">
                                <div className="step-number">03</div>
                                <h3>Vibe Check</h3>
                                <p>We run the code immediately. Does it feel right? Is the animation smooth? We verify the "soul" of the app.</p>
                                <span className="pro-tip">Tip: If it works but feels wrong, it's a fail.</span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="timeline-item">
                                <div className="step-number">04</div>
                                <h3>Refinement</h3>
                                <p>We don't fix semicolons. We ask the AI to "make it pop" or "fix the edge case," iterating until perfect.</p>
                                <span className="pro-tip">Tip: Don't debug manually. Re-prompt the agent.</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="vibe-comparison">
                <div className="container">
                    <div className="comparison-wrapper">
                        <FadeIn direction="right">
                            <div className="compare-card traditional">
                                <h3>Traditional Dev</h3>
                                <ul>
                                    <li>🐢 Weeks to MVP</li>
                                    <li>🐛 Manual bug hunting</li>
                                    <li>📝 Endless boilerplate</li>
                                    <li>😴 Developer fatigue</li>
                                </ul>
                            </div>
                        </FadeIn>
                        <div className="vs-badge">VS</div>
                        <FadeIn direction="left">
                            <div className="compare-card vibe-mode">
                                <h3>⚡ Vibe Mode</h3>
                                <ul>
                                    <li>🚀 Days to MVP</li>
                                    <li>🛡️ Auto-healing code</li>
                                    <li>🧠 Focus on Logic</li>
                                    <li>🔥 Pure creative flow</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="vibe-stack">
                <div className="container">
                    <SectionTitle title="Vibe-Ready Technologies" subtitle="We Speak Every Language" centered />
                    <FadeIn>
                        <div className="stack-grid-detailed">
                            {[
                                { name: 'Cursor', desc: 'The AI-native editor that understands your entire codebase context.' },
                                { name: 'Replit Agent', desc: 'From idea to deployed app in a single conversation.' },
                                { name: 'Windsurf', desc: 'Deep-flow coding with agentic capabilities.' },
                                { name: 'Claude 3.5', desc: 'The reasoning engine that powers our logic generation.' },
                                { name: 'Lovable', desc: 'Instant full-stack web apps from natural language.' },
                                { name: 'v0.dev', desc: 'Generative UI for rapid component iteration.' }
                            ].map((tech, i) => (
                                <div key={i} className="stack-card-detailed">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Visionary Quotes */}
            <section className="vibe-quotes">
                <div className="container">
                    <SectionTitle title="Voices of the Revolution" subtitle="Industry Leaders on AI Coding" centered />
                    <div className="quotes-grid">
                        <FadeIn delay={0.1}>
                            <div className="quote-card">
                                <p>"The future of coding is no coding at all. It's about teaching the machine to think like you."</p>
                                <div className="quote-author">
                                    <img src="https://ui-avatars.com/api/?name=Jensen+Huang&background=0D8ABC&color=fff" alt="Jensen Huang" />
                                    <div>
                                        <strong>Jensen Huang</strong>
                                        <span>CEO, NVIDIA</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="quote-card">
                                <p>"Vibe coding is basically just being a conductor of a symphony of agents."</p>
                                <div className="quote-author">
                                    <img src="https://ui-avatars.com/api/?name=Sam+Altman&background=10a37f&color=fff" alt="Sam Altman" />
                                    <div>
                                        <strong>Sam Altman</strong>
                                        <span>CEO, OpenAI</span>
                                    </div>
                                </div>
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

            {/* Deep Dive FAQ */}
            <section className="vibe-faq">
                <div className="container">
                    <SectionTitle title="The Vibe FAQ" subtitle="Unpacking the Paradigm" centered />
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Is Vibe Coding secure?</h3>
                            <p>Absolutely. We use enterprise-grade agents (Cursor for Business, Copilot Enterprise) that respect data privacy and do not train on your proprietary code without permission.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Will this replace developers?</h3>
                            <p>No. It replaces <em>typing</em>. The role of the developer evolves from "writer" to "editor-in-chief." Judgment, architecture, and taste are more valuable than ever.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What about bugs?</h3>
                            <p>AI writes better unit tests than humans. We orchestrate agents to write tests <em>before</em> writing implementation code (TDD), resulting in fewer regressions vs traditional coding.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I maintain the code later?</h3>
                            <p>Yes. The code generated is clean, commented, and follows standard patterns (React, Node, Python). Any developer can pick it up, or simply ask the AI to explain it.</p>
                        </div>
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
        </motion.div >
    )
})

export default VibeCoding
