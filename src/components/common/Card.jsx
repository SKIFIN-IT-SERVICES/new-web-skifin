import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const Card = memo(function Card({
    children,
    variant = 'default',
    hover = true,
    className = '',
    onClick,
    ...props
}) {
    const cardClass = useMemo(() => {
        return `card card-${variant} ${hover ? 'card-hover' : ''} ${className}`.trim()
    }, [variant, hover, className])

    return (
        <motion.div
            className={cardClass}
            onClick={onClick}
            whileHover={hover ? {
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    )
})

export default Card
