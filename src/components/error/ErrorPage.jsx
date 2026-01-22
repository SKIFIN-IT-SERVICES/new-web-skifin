import { memo } from 'react'
import { motion } from 'framer-motion'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'
import './ErrorPage.css'

const ErrorPage = memo(function ErrorPage({ error, onRetry }) {
    return (
        <div className="error-page">
            <motion.div
                className="error-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <motion.div
                    className="error-icon"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                >
                    <FiAlertTriangle size={80} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Oops! Something went wrong
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    We encountered an unexpected error. Don't worry, our team has been notified.
                </motion.p>

                {error && (
                    <motion.div
                        className="error-details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <code>{error.message || 'Unknown error'}</code>
                    </motion.div>
                )}

                <motion.button
                    className="btn btn-primary btn-lg"
                    onClick={onRetry}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FiRefreshCw /> Try Again
                </motion.button>
            </motion.div>

            {/* Animated background elements */}
            <div className="error-bg-elements">
                <motion.div
                    className="bg-circle bg-circle-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <motion.div
                    className="bg-circle bg-circle-2"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.1, 0.15]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </div>
        </div>
    )
})

export default ErrorPage
