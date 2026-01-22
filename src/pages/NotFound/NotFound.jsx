import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import Button from '../../components/common/Button'
import './NotFound.css'

const NotFound = memo(function NotFound() {
    return (
        <motion.div
            className="not-found-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="not-found-content">
                <motion.div
                    className="error-code"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                    }}
                >
                    404
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    The page you're looking for doesn't exist or has been moved.
                </motion.p>

                <motion.div
                    className="not-found-actions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Button to="/" icon={<FiHome />}>
                        Go Home
                    </Button>
                    <Button variant="outline" onClick={() => window.history.back()} icon={<FiArrowLeft />}>
                        Go Back
                    </Button>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="not-found-bg">
                <motion.div
                    className="bg-circle"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </div>
        </motion.div>
    )
})

export default NotFound
