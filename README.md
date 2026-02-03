# EchoSee — Smart Glasses for the Hearing Impaired
## Accessible Website Development Project

**Project Objective:** Design and develop a modern, animated, accessibility-first website for EchoSee Smart Glasses.

**Responsibilities:** Partnerships, FAQ, Contact + Accessibility Lead

## Project Overview

EchoSee is an AI-powered AR device that provides real-time subtitles to the hearing impaired through smart glasses. This repository contains the **accessibility-first frontend** of the official website, emphasizing semantic HTML, keyboard navigation, screen-reader support, and smooth animations.

### Tagline
> "See What You Cannot Hear"

### Core Features
- Real-time subtitles on AR lens
- Adjustable font size
- Emoji-based emotion display
- Multilingual support (English, Urdu, 20+ premium)
- Works offline with AI chip
- Battery life: 10–12 hours

---

## Progress Summary

### Day 1 ✅ - Home Page & FAQ
- Hero section with tagline and CTA buttons
- Accessible FAQ accordion with full keyboard navigation
- Screen reader live region for announcements
- Skip navigation link for keyboard users
- Enhanced focus-visible states
- Background gradient animation
- Tagline typing animation
- CTA button hover glow effect

### Day 2 ✅ - Contact Form
- Accessible form with floating labels
- Real-time validation with ARIA states
- Loading spinner animation
- Success message with checkmark icon
- Footer with Contact Us button that scrolls to form

### Day 3 ✅ - Partnerships Page
- Logo carousel with auto-scroll animation
- Pause on hover for better accessibility
- Previous/Next navigation buttons
- 3D flip cards for partnership types
- Animated statistics counter
- Keyboard accessible carousel controls

### Recent Fixes ✅
- Restored Contact Us button in footer alongside Partnerships
- Simplified hero section (Pre-Order button only)
- Fixed carousel navigation (smooth scroll on button click)
- Fixed hover pause speed-up bug

---

## Project Structure

```
accessible-ui-internship/
├── index.html              # Home page with hero and FAQ
├── contact.html            # Contact form page
├── partnerships.html       # Partnerships page with carousel
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── base.css            # Reset and global styles
│   ├── components.css      # All component styles
│   ├── utilities.css       # Utilities and responsive breakpoints
│   └── styles.css          # Main import file
├── js/
│   └── main.js             # FAQ, form, carousel, and flip card logic
└── README.md               # This file
```

---

## Features Implemented

### HTML
- Semantic structure (`<header>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<label>`)
- ARIA attributes for accessibility
- Skip navigation link
- Screen reader live regions
- Multiple pages with consistent navigation

### CSS
- Modular architecture (5 separate files)
- Hero section with responsive typography
- Button styles with hover effects
- FAQ accordion animations
- Floating label form styling
- Logo carousel with auto-scroll
- 3D flip card animations
- Focus-visible states
- Reduced motion support
- Mobile-first responsive design

### JavaScript
- FAQ toggle functionality
- Keyboard event handling
- Screen reader announcements
- Form validation
- Loading and success states
- Carousel auto-scroll animation
- Flip card hover/focus effects
- Statistics counter animation

### Accessibility (WCAG 2.1 Level AA)
- Semantic HTML
- Keyboard navigation (Tab, Arrow keys, Enter, Space)
- Screen reader support
- Focus visible states
- Color contrast compliance
- Reduced motion respect
- ARIA roles & labels
- Skip links

---

## How to Run Locally

### Option 1: Open Directly
```bash
start index.html
```

### Option 2: Local Web Server (Recommended)
```bash
npx http-server -c-1 . -p 8080
# Then visit: http://localhost:8080
```

### Page URLs
- Home: http://localhost:8080/index.html
- Contact: http://localhost:8080/contact.html
- Partnerships: http://localhost:8080/partnerships.html

---

## Testing Checklist

### Keyboard Navigation
- [ ] Tab through FAQ buttons
- [ ] Use Enter/Space to toggle answers
- [ ] Use Arrow Up/Down to navigate between questions
- [ ] Use Arrow Left/Right to navigate carousel
- [ ] Focus visible outline appears on all buttons
- [ ] Skip to main content link works
- [ ] Tab through form fields
- [ ] Tab through flip cards (Enter/Space to flip)

### Screen Reader
- [ ] Reads heading structure correctly
- [ ] Announces button state ("expanded" / "collapsed")
- [ ] Form validation errors are announced
- [ ] Success message is announced
- [ ] Carousel announcements for partner logos

### Visual
- [ ] FAQ panels expand/collapse smoothly
- [ ] Responsive on mobile (<600px)
- [ ] Floating labels animate on focus
- [ ] Loading spinner shows during submission
- [ ] Footer displays correctly at bottom
- [ ] Carousel scrolls automatically
- [ ] Flip cards rotate on hover/focus
- [ ] Statistics counter animates when visible

---

## changes are committed with Git Workflow

All descriptive messages and pushed to:
```
https://github.com/Junaid-290/accessible-ui-internship.git
```

### Recent Commits
```
9029fe1 - fix: prevent multiple auto-scroll loops on hover
6a3722e - fix: remove extra buttons from hero, keep only Pre-Order
748a72b - fix: restore Contact Us button in footer and fix carousel navigation
496c828 - feat: Day 3 - Partnerships page with logo carousel and card flip animations
c90fc28 - docs: Update README with Day 2 progress
e194367 - refactor: Split CSS into modular files
3f79eb7 - Rename partnerships.html to index.html
a7a5c33 - Fix FAQ accordion collapse bug
9971b61 - Day 1: EchoSee home page with FAQ accordion
```

---

## Accessibility Notes

### ARIA Implementation
- `aria-expanded` — Button state
- `aria-controls` — Links button to controlled panel
- `aria-hidden` — Hides collapsed panels
- `aria-invalid` — Marks invalid form fields
- `aria-live` — Announces dynamic content
- `aria-label` — Provides labels for carousel items
- `role="region"` — Marks panels as important regions

### Keyboard Support
- **FAQ**: Tab, Enter/Space, Arrow Up/Down, Home/End
- **Carousel**: Arrow Left/Right, Tab to reach controls
- **Flip Cards**: Tab to focus, Enter/Space to flip
- **Form**: Standard form navigation
- **Skip Link**: Tab to activate skip navigation

Follows [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) for accordion and carousel patterns.

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

---

## Color Palette

```css
--accent: #0b63ff;        /* Blue */
--accent-glow: rgba(11, 99, 255, 0.4);
--accent-error: #dc2626;  /* Error red */
--bg: #ffffff;            /* White */
--text: #111827;          /* Dark gray */
--muted: #6b7280;         /* Light gray */
```

All color combinations meet WCAG AA contrast requirements.

---

## Next Steps

1. **Day 4:** Add more partnership features if needed
2. **Day 5:** Comprehensive accessibility audit & polish
3. **Optional:** Add Lottie animations for hero section
4. **Optional:** Implement dark mode toggle

---

**Last Updated:** February 3, 2026  
**Status:** Day 3 Complete | Days 4–5 In Progress
