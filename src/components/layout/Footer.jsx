import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import './Footer.css'

const services = [
    { path: '/services/ai-automation', label: 'AI Automation' },
    { path: '/services/cloud-security', label: 'Cloud Security' },
    { path: '/services/devops', label: 'DevOps & DevSecOps' },
    { path: '/services/ai-ml-solutions', label: 'AI/ML Solutions' },
    { path: '/services/data-analytics', label: 'Data Analytics' },
    { path: '/services/cloud-migration', label: 'Cloud Migration' },
]

const Footer = memo(function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            <img src="/cloud-logo.png" alt="SKIFIN" className="footer-logo-img" />
                        </Link>
                        <p className="footer-description">
                            AI-Assisted Solutions Through Vibe Coding. We transform businesses
                            with cutting-edge technology solutions.
                        </p>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link to={service.path}>{service.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <FiMail />
                                <a href="mailto:contact@skifin.com">contact@skifin.com</a>
                            </li>
                            <li>
                                <FiPhone />
                                <a href="tel:+918700605399">+91-8700605399</a>
                            </li>
                            <li>
                                <FiMapPin />
                                <span>B-27, Sector 64, Noida, Uttar Pradesh</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SKIFIN. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
})

export default Footer
