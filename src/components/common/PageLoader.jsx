import { memo } from 'react'
import { motion } from 'framer-motion'
import './PageLoader.css'

const PageLoader = memo(function PageLoader() {
    return (
        <div className="page-loader">
            <motion.div
                className="loader-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="loader-spinner">
                    <motion.div
                        className="spinner-ring"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                    <div className="spinner-logo">S</div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    )
})

export default PageLoader
