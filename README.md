# EchoSee — Smart Glasses for the Hearing Impaired
## Accessible Website Development Project

**Project Objective:** Design and develop a modern, animated, accessibility-first website for EchoSee Smart Glasses.

**Responsibilities** Partnerships, FAQ, Contact + Accessibility Lead  

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

## Day 1 Progress ✅

### Completed Tasks

#### 1. **EchoSee Home Page (index.html)**
- Hero section with compelling tagline and CTA buttons
- "Pre-Order Now" and "Learn More" buttons with hover effects
- Responsive design for mobile, tablet, desktop

#### 2. **Accessible FAQ Accordion**
- Semantic HTML structure (`<section>`, `<h3>`, `<button>`, `<div role="region">`)
- ARIA roles: `aria-expanded`, `aria-controls`, `aria-labelledby`, `aria-hidden`, `aria-describedby`
- Keyboard navigation:
  - **Tab** to navigate between questions
  - **Enter/Space** to toggle answer
  - **Arrow Up/Down** to move focus between questions
  - **Home/End** to jump to first/last question
- Screen-reader friendly instructions (SR-only text)
- Only one answer open at a time
- Smooth expand/collapse animations with fallback for `prefers-reduced-motion`

#### 3. **Styling & Accessibility (Day 1 Improvements)**
- Added skip navigation link for keyboard users
- Added screen reader live region for dynamic announcements
- Enhanced focus-visible states with dual-ring design
- Increased touch targets on mobile (52px buttons, 60px FAQ items)
- Background gradient animation with reduced motion support
- Tagline typing animation with blinking cursor
- CTA button hover glow effect
- Added footer with copyright notice

#### 4. **Bug Fixes**
- Fixed FAQ accordion collapse issue
- Proper animation state management
- Clean panel toggling logic

---

## Day 2 Progress ✅

### Contact Form with Floating Labels

#### 1. **Accessible Form Structure**
- Semantic `<form>` with proper labels and inputs
- Fields: Name, Email, Subject (select), Message (textarea)
- ARIA attributes: `aria-invalid`, `aria-describedby`, `aria-live`
- `autocomplete` attributes for better user experience

#### 2. **Floating Labels**
- CSS-only floating label animation using `:placeholder-shown`
- Smooth transitions on focus and blur
- Label positioning with transform and transition
- Visual feedback for valid/invalid states

#### 3. **Form Validation**
- Real-time validation on blur and input
- Email pattern validation
- Minimum length validation for message field
- Visual error states with `aria-invalid`
- Error messages with `aria-live` for screen readers

#### 4. **Animations & Interactions**
- Loading spinner animation on submit button
- Success message fade-in animation
- Button disabled state during submission
- Focus management for invalid fields

---

## Project Structure

```
accessible-ui-internship/
├── index.html              # Home page with hero + FAQ + Contact
├── css/
│   ├── variables.css       # CSS custom properties and theme variables
│   ├── base.css            # Reset, global styles, and animations
│   ├── components.css      # All component styles
│   ├── utilities.css       # Utility classes and responsive breakpoints
│   └── styles.css          # Main import file
├── js/
│   └── main.js             # FAQ accordion & contact form logic
├── README.md               # This file
└── .github/
    └── copilot-instructions.md
```

---

## Features Implemented

### HTML
- ✅ Semantic structure (`<header>`, `<section>`, `<main>`, `<footer>`, `<button>`, `<label>`)
- ✅ ARIA attributes for accessibility
- ✅ Screen-reader instructions
- ✅ Proper label associations
- ✅ Skip navigation link
- ✅ Live region for dynamic announcements

### CSS
- ✅ Modular CSS architecture (5 separate files)
- ✅ Hero section with responsive typography
- ✅ Button styles (primary & secondary) with hover glow
- ✅ FAQ accordion expand/collapse animations
- ✅ Floating label form styling
- ✅ Focus-visible states for keyboard users
- ✅ Reduced motion support (`@media prefers-reduced-motion`)
- ✅ Mobile-first responsive design
- ✅ Background gradient animation
- ✅ Tagline typing animation

### JavaScript
- ✅ FAQ toggle functionality
- ✅ Keyboard event handling (Enter, Space, Arrow keys, Home, End)
- ✅ Single-panel-open logic
- ✅ ARIA state management
- ✅ Animation timing & cleanup
- ✅ Reduced motion detection
- ✅ Screen reader announcements
- ✅ Form validation with ARIA
- ✅ Loading and success state handling

### Accessibility (WCAG 2.1 Level AA)
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus visible states
- ✅ Color contrast
- ✅ Reduced motion respect
- ✅ ARIA roles & labels
- ✅ Skip navigation
- ✅ Live regions
- ✅ Form validation announcements

---

## How to Run Locally

### Option 1: Open Directly (Quick Test)
```bash
# Simply open index.html in your browser
start index.html
```

### Option 2: Local Web Server (Recommended)

**Node.js (http-server):**
```bash
npx http-server -c-1 . -p 8080
```
Then visit: `http://localhost:8080`

**Python 3:**
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## Testing Checklist

### Keyboard Navigation
- [x] Tab through FAQ buttons
- [x] Use Enter/Space to toggle answers
- [x] Use Arrow Up/Down to navigate between questions
- [x] Use Home/End to jump to first/last question
- [x] Focus visible outline appears on all buttons
- [x] Skip to main content link works
- [x] Tab through form fields
- [x] Form submission with Enter key

### Screen Reader (NVDA, JAWS, VoiceOver)
- [x] Reads heading structure correctly
- [x] Announces button state ("expanded" / "collapsed")
- [x] Reads SR-only instructions for FAQ
- [x] Announces panel content when expanded
- [x] Announces button focus changes
- [x] Skip link is announced when focused
- [x] Form validation errors are announced
- [x] Success message is announced

### Visual
- [x] FAQ panels expand/collapse smoothly
- [x] Only one panel open at a time
- [x] Chevron icon rotates on expand/collapse
- [x] Expanded state has visual highlight
- [x] Responsive on mobile (<600px)
- [x] Floating labels animate on focus
- [x] Loading spinner shows during submission
- [x] Success message fades in

### Animations
- [x] Smooth transitions in normal motion preference
- [x] No animations with `prefers-reduced-motion: reduce`
- [x] Typing animation on tagline
- [x] Background gradient shifts smoothly
- [x] Button hover glow effect

### Form Testing
- [x] Validation triggers on blur
- [x] Error messages appear for invalid fields
- [x] Invalid fields get red border
- [x] Form cannot submit with errors
- [x] Loading state disables button
- [x] Success message shows after submission
- [x] Form resets after success

---

## Git Workflow

All changes are staged, committed with descriptive messages, and pushed to:
```
https://github.com/Junaid-290/accessible-ui-internship.git
```

### Recent Commits
```
e194367 - refactor: Split CSS into modular files and add Day 1-2 improvements
3f79eb7 - Rename partnerships.html to index.html
a7a5c33 - Fix FAQ accordion collapse bug - set maxHeight to none instead of clearing
9971b61 - Day 1: EchoSee home page with FAQ accordion, hero section, and stable toggle logic
```

---

## Accessibility Notes

### ARIA Implementation
- `aria-expanded` — Button state (true/false)
- `aria-controls` — Links button to controlled panel
- `aria-hidden` — Hides collapsed panels from screen readers
- `aria-labelledby` — Links panel to button for context
- `aria-describedby` — Links FAQ section to instructions
- `aria-invalid` — Marks invalid form fields
- `aria-live` — Announces dynamic content to screen readers
- `role="region"` — Marks panels as important regions
- `role="alert"` — For important form errors

### Keyboard Support
Follows [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) for accordion pattern.

### Focus Management
- Clear focus outlines via `focus-visible`
- Focus visible only appears on keyboard navigation
- Logical tab order maintained
- Skip link for bypassing repetitive content
- Focus moved to first invalid field on form error

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Color Palette

```css
--max-width: 760px;
--accent: #0b63ff;        /* Blue */
--accent-glow: rgba(11, 99, 255, 0.4);
--accent-error: #dc2626;  /* Error red */
--bg: #ffffff;            /* White */
--text: #111827;          /* Dark gray */
--muted: #6b7280;         /* Light gray */
--gradient-start: #f8faff;
--gradient-end: #e8f0ff;
```

All color combinations meet WCAG AA contrast requirements.

---

## Development Notes

### Files Modified
- `index.html` — Main home page with hero, FAQ, and contact form
- `css/variables.css` — CSS custom properties
- `css/base.css` — Reset and global styles
- `css/components.css` — All component styles (hero, buttons, FAQ, forms, footer)
- `css/utilities.css` — Utility classes and responsive breakpoints
- `css/styles.css` — Main import file
- `js/main.js` — FAQ accordion logic, keyboard navigation, and form validation

### No External Dependencies
- Pure HTML, CSS, JavaScript
- No frameworks or libraries required
- Ready for production deployment

### Code Quality
- Modular CSS architecture for maintainability
- Semantic, accessible markup
- Clean, well-commented JavaScript
- Mobile-first responsive design
- ESLint compliant patterns
- Follows WAI-ARIA Authoring Practices

---

## Next Steps

1. **Day 3:** Implement logo carousel for partnerships
2. **Day 4:** Add card flip animations
3. **Day 5:** Comprehensive accessibility audit & polish

---

## Questions or Feedback?

For issues, accessibility concerns, or feature requests, please reach out to the team lead.

---

**Last Updated:** February 2, 2026  
**Status:** Day 1-2 Complete | Days 3–5 In Progress
