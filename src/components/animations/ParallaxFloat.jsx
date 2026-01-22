import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxFloat({
    children,
    speed = 0.5, // 0.5 = moves half as fast as scroll, -0.5 = moves against scroll
    rotateSpeed = 0,
    className = ""
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * rotateSpeed])

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
