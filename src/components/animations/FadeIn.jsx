import { memo } from 'react'
import { motion } from 'framer-motion'
import './FadeIn.css'

const FadeIn = memo(function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = 'up',
    className = ''
}) {
    const directions = {
        up: { y: 30 },
        down: { y: -30 },
        left: { x: 30 },
        right: { x: -30 },
        none: {}
    }

    return (
        <motion.div
            className={`fade-in ${className}`}
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20,
                delay
            }}
        >
            {children}
        </motion.div>
    )
})

export default FadeIn
