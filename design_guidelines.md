# Design Guidelines: Cancer Awareness & Support Web Page

## Design Approach
**Reference-Based Approach** drawing inspiration from compassionate healthcare and nonprofit organizations like American Cancer Society, St. Jude, and Charity: Water - balancing emotional resonance with clear functionality.

**Core Principle**: Create a warm, supportive environment that inspires hope while providing clear pathways to engagement and support.

---

## Typography
- **Primary Font**: Inter or Poppins (Google Fonts) - clean, modern, highly readable
- **Headings**: Font weight 700, sizes ranging from text-4xl to text-6xl for hero
- **Body Text**: Font weight 400, text-base to text-lg for optimal readability
- **Accent Text**: Font weight 600 for CTAs and emphasis
- **Line Height**: Generous spacing (leading-relaxed) for body copy to enhance readability

---

## Layout System
**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, and 20
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container max-width: max-w-6xl for content sections
- Component spacing: gap-8 for card grids, gap-4 for form fields
- Generous whitespace to create a calm, approachable atmosphere

**Responsive Structure**:
- Mobile: Single column, full-width sections
- Tablet (md:): 2-column layouts where appropriate
- Desktop (lg:): Up to 3 columns for feature cards

---

## Images

### Hero Banner Image
**Large hero image**: Yes - full-width, emotionally resonant
- **Description**: Warm, hopeful image showing diverse individuals in supportive settings - hands holding, people smiling together, or soft-focus purple/pink awareness ribbon imagery. Should convey hope, community, and strength without being clinical.
- **Placement**: Top of page, spanning full viewport width, height of 60vh to 70vh
- **Treatment**: Subtle gradient overlay (bottom to top) to ensure text readability
- **CTA buttons on image**: Use backdrop-blur-md with semi-transparent background for elevated buttons

### Supporting Images
- **Contact Section**: Smaller supportive image (max-w-md) showing compassionate care or community support
- **Quote Section Background**: Subtle, soft-focus texture or abstract purple/pink gradients

---

## Component Library

### Navigation
- Clean header with logo left-aligned
- Navigation links: "Home", "About", "Resources", "Contact" (right-aligned on desktop)
- Sticky navigation on scroll with subtle shadow
- Mobile: Hamburger menu expanding to full-screen overlay

### Hero Section
- Full-width banner image as described above
- Centered, overlay text with large headline (text-5xl lg:text-6xl)
- Supporting tagline underneath (text-xl)
- Two CTAs: Primary "Get Support" and Secondary "Learn More" buttons with backdrop-blur

### Awareness Message Section
- Single column, centered content (max-w-4xl)
- Compelling headline about cancer awareness
- 2-3 paragraphs of supportive, informative content
- Include key statistics in bold or highlighted format
- Optional pull quote or highlighted stat card

### Quote Section (Real-time API)
- Card-based design with soft shadow and rounded corners
- Quote text prominently displayed (text-lg to text-xl, italic)
- Author attribution below in smaller text
- Refresh/next quote button
- Subtle loading state animation
- Background: light gradient or textured pattern

### Contact Form
- Two-column layout on desktop: Form (left, 60%) + Image/Info (right, 40%)
- Form fields with labels above inputs
- Input styling: border rounded-lg, focus:ring-2 for accessibility
- Fields: Name (full width), Email (full width), Message (textarea, min-height)
- Submit button: Large, prominent, right-aligned
- Success message state built into design
- Right column: Small supportive image + contact info (phone, email, hours)

### Footer
- Three-column layout (desktop): About snippet, Quick links, Social/Newsletter
- Newsletter signup: Email input + Subscribe button
- Social media icons (if applicable)
- Copyright and links to Privacy/Terms
- Background: Subtle contrast from main page

---

## Visual Treatment

### Color Philosophy
No specific colors defined (to be implemented later), but the design will support:
- Purple/pink cancer awareness ribbon theme
- Warm, hopeful palette
- High contrast for accessibility
- Subtle gradients for depth

### Shadows & Depth
- Cards: shadow-lg for elevation
- Buttons: shadow-md, increase on hover
- Form inputs: shadow-sm, subtle focus ring

### Borders & Corners
- Rounded corners throughout: rounded-lg for cards, rounded-xl for images
- Form inputs: rounded-md for clean, modern feel
- Buttons: rounded-full for primary CTAs, rounded-lg for secondary

---

## Accessibility Standards
- All images include descriptive alt text
- Form labels explicitly associated with inputs
- Focus states clearly visible on all interactive elements
- Semantic HTML structure (header, main, section, footer)
- ARIA labels for icon-only buttons
- Color contrast ratios meeting WCAG AA standards minimum

---

## Animations
**Minimal and purposeful**:
- Smooth scroll behavior for navigation
- Fade-in on scroll for quote section
- Subtle hover lift (translate-y-1) on cards
- Form submission success animation
- No distracting or excessive motion

---

This design creates an emotionally supportive, professionally polished experience that honors the seriousness of cancer awareness while fostering hope and providing clear pathways for engagement and support.