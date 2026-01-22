import { memo } from 'react'
import { motion } from 'framer-motion'
import './SectionTitle.css'

const SectionTitle = memo(function SectionTitle({
    title,
    subtitle,
    centered = true,
    light = false
}) {
    return (
        <motion.div
            className={`section-title ${centered ? 'centered' : ''} ${light ? 'light' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="title">{title}</h2>
            {subtitle && <p className="subtitle">{subtitle}</p>}
        </motion.div>
    )
})

export default SectionTitle
