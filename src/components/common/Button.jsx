import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = memo(function Button({
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    icon,
    iconPosition = 'left',
    disabled = false,
    loading = false,
    className = '',
    onClick,
    ...props
}) {
    const buttonClass = useMemo(() => {
        return `btn btn-${variant} btn-${size} ${loading ? 'loading' : ''} ${className}`.trim()
    }, [variant, size, loading, className])

    const content = (
        <>
            {loading && <span className="btn-spinner" />}
            {icon && iconPosition === 'left' && !loading && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && !loading && <span className="btn-icon">{icon}</span>}
        </>
    )

    const motionProps = {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 17 }
    }

    if (to) {
        return (
            <motion.div {...motionProps}>
                <Link to={to} className={buttonClass} {...props}>
                    {content}
                </Link>
            </motion.div>
        )
    }

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                {...props}
            >
                {content}
            </motion.a>
        )
    }

    return (
        <motion.button
            className={buttonClass}
            disabled={disabled || loading}
            onClick={onClick}
            {...motionProps}
            {...props}
        >
            {content}
        </motion.button>
    )
})

export default Button
