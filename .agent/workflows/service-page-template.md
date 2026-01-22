---
description: Template for creating technology service pages with consistent structure
---

# Service Page Template Workflow

This workflow provides a standard template for creating service detail pages (AI Automation, Cloud Security, DevOps, etc.).

## Standard Service Page Structure

### Section 1: Hero Section
- Service icon/illustration
- Service title and tagline
- Brief description (2-3 sentences)
- CTA button (Get Started / Learn More)

### Section 2: Overview
- What is this service?
- Why it matters in 2025
- Key statistics/market data

### Section 3: Features Grid
- 4-6 key features with icons
- Each feature: Icon + Title + Description
- Use glassmorphic cards

### Section 4: Benefits
- 3-4 main benefits
- Use alternating layout (image left/right)
- Include relevant icons/graphics

### Section 5: Process/How It Works
- Step-by-step process (3-5 steps)
- Numbered with icons
- Brief description for each step

### Section 6: Use Cases/Industries
- 3-4 industry applications
- Icon + Industry name + Brief description

### Section 7: CTA Section
- Strong call-to-action
- Contact form or button
- Trust indicators (certifications, partners)

## Template Component

```jsx
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IconName } from 'react-icons/[library]';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FadeIn from '../../components/animations/FadeIn';
import './[ServiceName].css';

const features = [
  {
    icon: <IconName />,
    title: 'Feature Title',
    description: 'Feature description explaining the benefit.',
  },
  // Add 3-5 more features
];

const process = [
  { step: 1, title: 'Discovery', description: 'We analyze your needs' },
  { step: 2, title: 'Strategy', description: 'We design the solution' },
  { step: 3, title: 'Implementation', description: 'We build and deploy' },
  { step: 4, title: 'Optimization', description: 'We continuously improve' },
];

const [ServiceName] = memo(function [ServiceName]() {
  const memoizedFeatures = useMemo(() => features, []);
  
  return (
    <motion.div 
      className="service-page [service-name]-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <FadeIn>
            <div className="service-icon">
              <IconName size={80} />
            </div>
            <h1>[Service Name]</h1>
            <p className="tagline">Tagline describing the service</p>
            <Button variant="primary" size="large">
              Get Started
            </Button>
          </FadeIn>
        </div>
        <div className="hero-visual">
          {/* Add illustration or animation */}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <SectionTitle 
          title="What We Offer"
          subtitle="Comprehensive solutions for your needs"
        />
        <div className="features-grid">
          {memoizedFeatures.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card variant="glass">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <SectionTitle 
          title="Our Process"
          subtitle="How we deliver results"
        />
        <div className="process-steps">
          {process.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="process-step">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <FadeIn>
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your goals.</p>
          <Button variant="primary" size="large">
            Contact Us Today
          </Button>
        </FadeIn>
      </section>
    </motion.div>
  );
});

export default [ServiceName];
```

## CSS Template

```css
.service-page {
  min-height: 100vh;
}

/* Hero Section */
.service-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 8rem 4rem 4rem;
  background: var(--gradient-dark);
  min-height: 100vh;
  align-items: center;
}

.service-icon {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.service-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-hero .tagline {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
}

/* Features Grid */
.features-section {
  padding: 6rem 4rem;
  background: var(--color-background-light);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1280px;
  margin-inline: auto;
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

/* Process Section */
.process-section {
  padding: 6rem 4rem;
  background: var(--color-background-dark);
}

.process-steps {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  padding: 2rem;
  max-width: 250px;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

/* CTA Section */
.cta-section {
  padding: 6rem 4rem;
  text-align: center;
  background: var(--gradient-primary);
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .service-hero {
    grid-template-columns: 1fr;
    padding: 6rem 2rem 3rem;
    text-align: center;
  }
  
  .service-hero h1 {
    font-size: 2.5rem;
  }
  
  .features-section,
  .process-section,
  .cta-section {
    padding: 4rem 1.5rem;
  }
}
```

## Service Page Data Structure

For each service page, maintain data in structured format:

```js
const serviceData = {
  name: 'AI Automation',
  slug: 'ai-automation',
  icon: 'FaRobot',
  tagline: 'Intelligent automation for the modern enterprise',
  description: 'Transform your operations with AI-powered automation...',
  features: [...],
  benefits: [...],
  process: [...],
  useCases: [...],
  stats: {
    efficiency: '40%',
    costReduction: '60%',
    accuracy: '99.9%',
  },
};
```

## Checklist for Each Service Page

- [ ] Hero section with compelling headline
- [ ] Features grid with 4-6 features
- [ ] Process section (how it works)
- [ ] Benefits/value proposition
- [ ] Industry use cases
- [ ] Strong CTA section
- [ ] All animations working
- [ ] Responsive on all breakpoints
- [ ] Page registered with lazy loading
