---
description: Pattern for creating reusable React components with memoization
---

# Component Creation Workflow

This workflow defines how to create reusable React components for the SkiFin website.

## Step 1: Create Component File

Create in `src/components/[category]/[ComponentName].jsx`:

```jsx
import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import './[ComponentName].css';

/**
 * [ComponentName] - [Brief description]
 * @param {Object} props
 * @param {string} props.variant - Component variant (primary | secondary | outline)
 * @param {ReactNode} props.children - Child elements
 */
const [ComponentName] = memo(function [ComponentName]({ 
  variant = 'primary',
  children,
  className = '',
  ...props 
}) {
  // Use useMemo for expensive computations
  const computedClassName = useMemo(() => {
    return `component-name component-name--${variant} ${className}`.trim();
  }, [variant, className]);

  return (
    <div className={computedClassName} {...props}>
      {children}
    </div>
  );
});

[ComponentName].propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default [ComponentName];
```

## Step 2: Create CSS File

Create `src/components/[category]/[ComponentName].css`:

```css
.component-name {
  /* Base styles */
}

.component-name--primary {
  /* Primary variant */
  background: var(--color-primary);
  color: var(--color-text-primary);
}

.component-name--secondary {
  /* Secondary variant */
  background: var(--color-secondary);
  color: var(--color-text-primary);
}

.component-name--outline {
  /* Outline variant */
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}
```

## Step 3: Export from Index (Optional)

If using barrel exports, add to `src/components/[category]/index.js`:

```js
export { default as [ComponentName] } from './[ComponentName]';
```

## When to Use Memoization

### Use `memo()` when:
- Component re-renders often with the same props
- Component is expensive to render
- Component is used in lists or repeated many times

### Use `useMemo()` when:
- Computing values that are expensive
- Creating objects/arrays used as deps in useEffect
- Filtering/sorting large arrays

### Use `useCallback()` when:
- Passing callbacks to child components
- Using functions in dependency arrays

## Component Categories

| Category | Purpose | Example |
|----------|---------|---------|
| `common/` | Shared UI elements | Button, Card, Input |
| `layout/` | Page structure | Header, Footer, Sidebar |
| `animations/` | Animation wrappers | FadeIn, SlideIn |
| `error/` | Error handling | ErrorBoundary, ErrorPage |
| `forms/` | Form elements | TextField, Select |

## Checklist

- [ ] Component uses memo() wrapper
- [ ] PropTypes defined
- [ ] Default props provided
- [ ] CSS uses design system variables
- [ ] Component is tested in isolation
- [ ] useMemo/useCallback added where beneficial
