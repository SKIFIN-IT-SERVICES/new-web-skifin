---
description: Standard animation patterns and configurations for SkiFin website
---

# Animation Patterns Workflow

This workflow documents standard animation patterns used across the SkiFin website.

## Framer Motion Configuration

### Page Transitions

```jsx
// Consistent page transition animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// Usage in page component
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
  {/* Page content */}
</motion.div>
```

### Fade In Animation

```jsx
// FadeIn component
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Smooth easing
    },
  },
};

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);
```

### Slide In Animations

```jsx
// Slide from left
const slideLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Slide from right
const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
```

### Stagger Children

```jsx
// Container with staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Usage
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Scale Animations (Buttons, Cards)

```jsx
// Hover scale effect
const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

// Usage
<motion.button {...scaleOnHover}>
  Click Me
</motion.button>
```

## CSS Keyframe Animations

### Pulse Animation

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Float Animation

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

### Gradient Shift

```css
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
}
```

### Shimmer (Loading)

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-skeleton) 0%,
    var(--color-skeleton-highlight) 50%,
    var(--color-skeleton) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Spin Animation

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

## Error/Success Page Animations

### Error Animation

```jsx
const errorVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: 'spring', 
      stiffness: 260, 
      damping: 20,
    },
  },
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

// Error icon with shake animation
<motion.div
  variants={errorVariants}
  initial="initial"
  animate={["animate", "shake"]}
>
  <ErrorIcon />
</motion.div>
```

### Success Animation

```jsx
const successVariants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 15,
    },
  },
};

const checkmarkPath = {
  initial: { pathLength: 0 },
  animate: { 
    pathLength: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

// Animated checkmark SVG
<motion.svg variants={successVariants} initial="initial" animate="animate">
  <motion.path
    variants={checkmarkPath}
    d="M5 13l4 4L19 7"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
  />
</motion.svg>
```

## Performance Guidelines

### Do:
- Use `will-change` sparingly for known animations
- Prefer `transform` and `opacity` (GPU accelerated)
- Use `whileInView` for scroll animations
- Set `viewport={{ once: true }}` to animate only once
- Use `useMemo` for animation variants objects

### Don't:
- Animate `width`, `height`, `top`, `left` (causes layout)
- Animate more than necessary elements simultaneously
- Forget to cleanup intervals/timeouts
- Use heavy animations on mobile without testing

## Animation Utility Classes

```css
/* Utility classes for quick animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out forwards;
}

/* Delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
```

## Checklist for Animations

- [ ] Use consistent timing functions across site
- [ ] Test animations on low-power devices
- [ ] Respect `prefers-reduced-motion` media query
- [ ] Ensure animations don't block interaction
- [ ] Loading states have subtle animations
- [ ] Error states have attention-grabbing animations
- [ ] Success states have satisfying feedback
