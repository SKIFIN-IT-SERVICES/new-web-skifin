import { motion } from 'framer-motion'

export default function TextReveal({ text, className = "", delay = 0, color = "white" }) {
    const letters = Array.from(text)

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }

    return (
        <motion.h1
            className={className}
            style={{ display: "flex", flexWrap: "wrap", overflow: "hidden", color: color }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    )
}
