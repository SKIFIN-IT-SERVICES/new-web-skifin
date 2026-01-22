import { memo, useState, useEffect, useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import './Header.css'

const services = [
    { path: '/services/ai-automation', label: 'AI Automation' },
    { path: '/services/cloud-security', label: 'Cloud Security' },
    { path: '/services/devops', label: 'DevOps & DevSecOps' },
    { path: '/services/ai-ml-solutions', label: 'AI/ML Solutions' },
    { path: '/services/data-analytics', label: 'Data Analytics' },
    { path: '/services/cloud-migration', label: 'Cloud Migration' },
]

const products = [
    { path: '/products/subsman', label: 'Subsman Vendor Platform' },
]

const Header = memo(function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const location = useLocation()

    // Memoize the services dropdown content
    const servicesDropdown = useMemo(() => (
        <motion.div
            className="services-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
        >
            {services.map((service) => (
                <NavLink
                    key={service.path}
                    to={service.path}
                    className="dropdown-item"
                    onClick={() => setIsServicesOpen(false)}
                >
                    {service.label}
                </NavLink>
            ))}
        </motion.div>
    ), [])

    // Memoize the products dropdown content
    const productsDropdown = useMemo(() => (
        <motion.div
            className="services-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
        >
            {products.map((product) => (
                <NavLink
                    key={product.path}
                    to={product.path}
                    className="dropdown-item"
                    onClick={() => setIsProductsOpen(false)}
                >
                    {product.label}
                </NavLink>
            ))}
        </motion.div>
    ), [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
        setIsProductsOpen(false)
    }, [location])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <img src="/logo.png" alt="SKIFIN" className="logo-img" />
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className="nav-link dropdown-trigger">
                            AI Services <FiChevronDown className={isServicesOpen ? 'rotated' : ''} />
                        </button>
                        <AnimatePresence>
                            {isServicesOpen && servicesDropdown}
                        </AnimatePresence>
                    </div>

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        <button className="nav-link dropdown-trigger">
                            Products <FiChevronDown className={isProductsOpen ? 'rotated' : ''} />
                        </button>
                        <AnimatePresence>
                            {isProductsOpen && productsDropdown}
                        </AnimatePresence>
                    </div>

                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </nav>

                <NavLink to="/contact" className="btn btn-primary header-cta">
                    Request a Demo
                </NavLink>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="nav-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <NavLink to="/" className="nav-link-mobile">Home</NavLink>
                        <NavLink to="/about" className="nav-link-mobile">About</NavLink>

                        <div className="mobile-dropdown">
                            <button
                                className="nav-link-mobile dropdown-trigger-mobile"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                AI Services <FiChevronDown className={isServicesOpen ? 'rotated' : ''} />
                            </button>
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        className="mobile-dropdown-items"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {services.map((service) => (
                                            <NavLink
                                                key={service.path}
                                                to={service.path}
                                                className="nav-link-mobile sub"
                                            >
                                                {service.label}
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mobile-dropdown">
                            <button
                                className="nav-link-mobile dropdown-trigger-mobile"
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                            >
                                Products <FiChevronDown className={isProductsOpen ? 'rotated' : ''} />
                            </button>
                            <AnimatePresence>
                                {isProductsOpen && (
                                    <motion.div
                                        className="mobile-dropdown-items"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {products.map((product) => (
                                            <NavLink
                                                key={product.path}
                                                to={product.path}
                                                className="nav-link-mobile sub"
                                            >
                                                {product.label}
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink to="/contact" className="nav-link-mobile">Contact</NavLink>
                        <NavLink to="/contact" className="btn btn-primary mobile-cta">
                            Request a Demo
                        </NavLink>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
})

export default Header
