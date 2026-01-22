---
description: Standard pattern for creating new React pages with lazy loading
---

# React Page Creation Workflow

This workflow defines how to create new React pages in the SkiFin website project with proper lazy loading, error boundaries, and animations.

## Step 1: Create the Page Component

Create the page in `src/pages/[PageName]/[PageName].jsx`:

```jsx
import { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';
import './[PageName].css';

const [PageName] = memo(function [PageName]() {
  return (
    <motion.div
      className="page [page-name]-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <SectionTitle 
          title="Page Title"
          subtitle="Page description goes here"
        />
      </section>

      {/* Main Content */}
      <section className="content-section">
        {/* Add page content here */}
      </section>
    </motion.div>
  );
});

export default [PageName];
```

## Step 2: Create the CSS File

Create `src/pages/[PageName]/[PageName].css`:

```css
.[page-name]-page {
  min-height: 100vh;
  padding-top: var(--header-height);
}

.[page-name]-page .hero-section {
  padding: 4rem 2rem;
  text-align: center;
  background: var(--gradient-primary);
}

.[page-name]-page .content-section {
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
```

## Step 3: Register in App.jsx with Lazy Loading

Add to `src/App.jsx`:

```jsx
// Add lazy import at top
const [PageName] = lazy(() => import('./pages/[PageName]/[PageName]'));

// Add route in Routes
<Route path="/page-name" element={
  <Suspense fallback={<PageLoader />}>
    <[PageName] />
  </Suspense>
} />
```

## Step 4: Add Navigation Link

Update `src/components/layout/Header.jsx` to include the new page in navigation:

```jsx
<NavLink to="/page-name">[Page Name]</NavLink>
```

## Checklist Before Moving On

- [ ] Page component created with memo()
- [ ] CSS file created with consistent naming
- [ ] Lazy loading configured in App.jsx
- [ ] Route added to React Router
- [ ] Navigation link added to Header
- [ ] Page transitions working smoothly
