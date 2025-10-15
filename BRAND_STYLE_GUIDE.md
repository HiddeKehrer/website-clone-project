# Pipeguru Brand Style Guide

**Version 1.0** • Last Updated: October 2025

---

## 📐 Design Philosophy

Pipeguru's design system follows a **minimalist, monochrome aesthetic** with emphasis on clarity, sophistication, and professional elegance. The design avoids color distractions and relies on typography, spacing, and subtle effects to create visual hierarchy.

---

## 🎨 Color Palette

### Primary Colors (Monochrome System)

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Pure Black** | `#000000` | `--color-foreground` | Primary text, buttons, headings |
| **Pure White** | `#ffffff` | `--color-background` | Card backgrounds, emphasis areas |
| **Off-White** | `#fefefe` | `bg-emphasis` | Subtle card backgrounds |
| **Background Gray** | `#f8f9fa` | - | Main page background, section frames |

### Gray Scale

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Heading Black** | `#171717` | - | H1-H6 elements |
| **Dark Gray** | `#666666` | `--color-muted-foreground` | Secondary text |
| **Medium Gray** | `#999999` | `--color-chart-3` | Tertiary elements |
| **Light Gray** | `#f5f5f5` | `--color-secondary` | Subtle backgrounds |
| **Border Gray** | `#e5e5e5` | `--color-border` | Borders, dividers |
| **Text Gray** | `#666666` | `--color-text-gray` | Muted text content |

### Accent Colors (Reserved, Used Sparingly)

| Color | Usage | Notes |
|-------|-------|-------|
| **Green** | `#10b981` | Used only in hero section growth chart animation |
| **Accent Underline** | `bg-accent` | Yellow/green underline on emphasized text |

### ⚠️ Color Do's and Don'ts

**✅ DO:**
- Use black (#000000) for all primary actions and text
- Use grays (#666666, #999999) for secondary/tertiary text
- Use white/off-white (#ffffff, #fefefe) for backgrounds
- Keep the monochrome aesthetic consistent
- Use subtle gray borders (#e5e5e5) for separation

**❌ DON'T:**
- Add bright colors (blues, reds, purples) except for specific accent elements
- Use colored backgrounds
- Use colored text for body copy
- Break the monochrome aesthetic

---

## 🔤 Typography

### Font Families

```css
--font-heading: "Playfair Display", serif;
--font-body: "Nunito", sans-serif;
```

**Font Imports:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

**Local Fonts:**
- Playfair Display (400, 700): `/fonts/playfair-display-v30-latin-*.woff2`
- Inter (400, 600, 700): `/fonts/inter-v13-latin-*.woff2`

### Heading Styles

| Element | Font | Size (Mobile → Desktop) | Weight | Line Height | Usage |
|---------|------|-------------------------|--------|-------------|-------|
| **H1** | Playfair Display | `3rem` (48px) → `3.5rem` (56px) | 400 (normal) | 1.2 | Hero titles |
| **H2** | Playfair Display | `2rem` (32px) → `2.5rem` (40px) | 400 (normal) | 1.2-1.3 | Section headings |
| **H3** | Playfair Display | `1.5rem` (24px) → `2rem` (32px) | 400 (normal) | 1.4 | Card titles, subsections |
| **H4-H6** | Playfair Display | `1.25rem` → `1.5rem` | 400-600 | 1.4 | Minor headings |

### Body Text

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| **Paragraph** | Nunito | `1.0625rem` (17px) | 400 | 1.6 |
| **Small** | Nunito | `0.875rem` (14px) | 400 | 1.5 |
| **Button Text** | Nunito | `1rem` (16px) | 600 | - |

### Responsive Typography Classes

```tsx
// Section Headings
className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance]"

// Card Headings
className="font-heading text-2xl md:text-3xl font-normal leading-tight [text-wrap:balance]"

// Body Text
className="text-lg text-gray-600 max-w-2xl mx-auto"

// Muted Text
className="text-muted-foreground leading-relaxed"

// Small Labels
className="text-sm font-medium text-foreground/70"
```

### Typography Do's and Don'ts

**✅ DO:**
- Use Playfair Display for all headings
- Use `font-normal` (400) for most headings, not bold
- Add `[text-wrap:balance]` for better text wrapping
- Use `leading-tight` for headings, `leading-relaxed` for body
- Use semantic HTML tags (h1, h2, h3, p)

**❌ DON'T:**
- Use bold weights (700) for headings unless specifically required
- Mix font families within the same text block
- Use decorative fonts
- Overuse font sizes - stick to the system

---

## 📏 Spacing & Layout

### Container System

```tsx
// Max-width containers
max-w-[1200px] mx-auto px-4      // Standard section container
max-w-6xl mx-auto                 // Benefits section (wider)
max-w-4xl mx-auto                 // Pricing section (narrower)
max-w-2xl mx-auto                 // Text content containers
```

### Section Padding

```tsx
// Responsive section padding
py-12 lg:py-20 xl:py-24           // Standard section padding (value-proposition, dynamic-widgets)
py-20 lg:py-[120px]               // Larger section padding (benefits)
py-20 lg:py-24                    // Hero/CTA sections
```

### Internal Spacing

```tsx
// Header spacing
space-y-4                          // Standard vertical spacing
space-y-6 lg:space-y-8            // Larger spacing between major sections
gap-6 lg:gap-8                    // Grid gaps

// Card padding
p-3 lg:p-4                        // Benefits cards
p-4 md:p-6 lg:p-8                 // Standard card padding
p-6 lg:p-8                        // Larger cards
p-2 md:p-4                        // Content padding inside cards
```

### Grid Layouts

```tsx
// Two-column layout (50/50)
grid grid-cols-1 lg:grid-cols-2

// Two-column layout (33/66)
grid grid-cols-1 lg:grid-cols-3
  - Left: lg:col-span-1
  - Right: lg:col-span-2

// Three-column layout
grid grid-cols-1 md:grid-cols-3
```

### Frame Layout System

```tsx
// Main frame (unique to this site)
.frame-layout {
  border-left: 0.5px solid #e5e5e5;
  border-right: 0.5px solid #e5e5e5;
  margin-left: 7.5%;
  margin-right: 7.5%;
  background: #f8f9fa;
}

// Section frame
.section-frame {
  border-bottom: 1px solid #e5e5e5;
  background: #f8f9fa;
}
```

---

## 🔲 Border Radius

### Standard Radius Values

```css
--radius-lg: 0.5rem;     /* 8px */
--radius-md: calc(0.5rem - 2px);  /* 6px */
--radius-sm: calc(0.5rem - 4px);  /* 4px */
```

### Common Usage

| Element | Radius Class | Pixels |
|---------|--------------|--------|
| **Buttons** | `rounded-lg` | 8px |
| **Cards** | `rounded-xl` | 12px |
| **Large Cards** | `rounded-2xl` | 16px |
| **Badges** | `rounded-full` | Full circle |
| **Small Elements** | `rounded-md` | 6px |
| **Widgets** | `rounded-xl` | 12px |

### Border Radius Do's and Don'ts

**✅ DO:**
- Use `rounded-lg` for all buttons
- Use `rounded-xl` for cards and containers
- Use `rounded-full` for badges and pills
- Maintain consistency across similar elements

**❌ DON'T:**
- Mix different radius values on similar elements
- Use sharp corners (rounded-none) unless intentional
- Use excessive border radius (> rounded-2xl) except for circles

---

## 🎭 Shadows

### Shadow System

| Name | Tailwind Class | Usage |
|------|----------------|-------|
| **Standard Shadow** | `shadow-lg` | Default cards |
| **Extra Shadow** | `shadow-xl` | Widget cards, elevated elements |
| **2XL Shadow** | `shadow-2xl` | iPhone mockup, hero elements |
| **Black Shadow** | `shadow-lg shadow-black/25` | Black button hover states |
| **Drop Shadow** | `drop-shadow-2xl` | Images, mockups |

### Button Shadows

```tsx
// Primary button (black)
hover:shadow-lg hover:shadow-black/25

// Card hover
hover:shadow-2xl

// Widget cards
shadow-xl hover:shadow-2xl
```

### Shadow Do's and Don'ts

**✅ DO:**
- Use subtle shadows for depth
- Add hover shadows on interactive elements
- Use `shadow-black/25` for black buttons
- Use drop-shadow for images

**❌ DON'T:**
- Use colored shadows
- Overuse heavy shadows
- Stack multiple shadow classes unnecessarily

---

## 🔘 Buttons

### Primary Button (Black)

```tsx
className="
  inline-flex items-center justify-center gap-2 
  bg-black text-white 
  font-medium rounded-lg 
  px-6 py-3 text-base 
  hover:shadow-lg hover:shadow-black/25 hover:scale-105 
  transition-all duration-200 
  group
"
```

**Features:**
- Black background with white text
- Medium font weight
- 8px border radius
- Gap-2 for icon spacing
- Scale on hover (1.05)
- Shadow on hover
- Group for nested icon animations
- ArrowUpRight icon with translate animation

### Secondary Button (White/Outlined)

```tsx
className="
  bg-white text-gray-700 
  border-2 border-gray-200 
  hover:border-gray-300 hover:shadow-md
  px-6 py-4 rounded-lg 
  font-medium
  transition-all duration-300
"
```

### Active State Button

```tsx
className="
  bg-black text-white border-black 
  shadow-lg shadow-black/20 
  scale-[1.02]
"
```

### Button Sizes

| Size | Padding | Font Size | Usage |
|------|---------|-----------|-------|
| **Standard** | `px-6 py-3` | `text-base` | Main CTAs |
| **Large** | `px-7 py-3.5` or `px-8 py-4` | `text-base` | Hero CTAs |
| **Small** | `px-5 py-2.5` | `text-sm` | Header CTA |
| **Compact** | `px-4 py-2` | `text-sm` | Secondary actions |

### Icon Animations

```tsx
// ArrowUpRight hover animation
<ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
```

### Button Do's and Don'ts

**✅ DO:**
- Always use black primary buttons
- Include ArrowUpRight icon for main CTAs
- Add hover scale (1.05) and shadow effects
- Use `group` for nested icon animations
- Keep text concise ("Get started", "Talk to a founder")

**❌ DON'T:**
- Use colored buttons
- Remove hover effects
- Use multiple button styles on the same page section
- Use all caps text

---

## 🎯 Badges & Pills

### Standard Badge

```tsx
className="
  inline-flex items-center gap-2 
  bg-emphasis border border-gray-200 
  text-sm font-medium 
  px-4 py-1.5 
  rounded-full
"

// With icon
<Sparkles className="w-4 h-4" />
```

### Label Badges

```tsx
// Green indicator badge (hero section)
<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-300/60 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm">
  <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm"></div>
  <span className="text-gray-700">No engineers needed</span>
</div>
```

### Accent Badge (Limited Slots)

```tsx
<span className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-primary-green text-white text-sm font-medium px-4 py-1.5 rounded-full">
  7 spots left
</span>
```

---

## 📦 Cards & Containers

### Standard Card

```tsx
className="
  border border-border 
  bg-emphasis 
  rounded-xl 
  p-6 lg:p-8
"
```

### Benefits Card (Two-Column)

```tsx
className="
  border border-border 
  bg-emphasis 
  rounded-xl 
  grid grid-cols-1 lg:grid-cols-2 
  items-center 
  gap-5 
  p-3 lg:p-4
"
```

### Pricing Card

```tsx
className="
  bg-emphasis 
  rounded-2xl 
  border border-gray-200 
  p-8 
  flex flex-col 
  h-full 
  relative
"
```

### Card Content Spacing

```tsx
// Inner content padding
space-y-4 p-2 md:p-4           // Text content
space-y-6                      // Major sections within cards
```

---

## 🖼️ Visual Elements

### Diagonal Stripes Pattern

```tsx
const diagonalStripes = 'bg-[repeating-linear-gradient(-45deg,theme(colors.border),theme(colors.border)_1px,transparent_1px,transparent_16px)]';
```

**Usage:** Background pattern for visual interest in benefit cards

### Grid Background Pattern

```tsx
style={{
  backgroundImage: 'linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px), linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px)',
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 60%, transparent 100%)',
  opacity: 0.3,
}}
```

**Usage:** Hero section and footer CTA backgrounds

### Text Underline Accent

```tsx
<span className="relative inline-block">
  emphasized text
  <span className="absolute left-0 bottom-0 h-[3px] w-full bg-accent -mb-1"></span>
</span>
```

**Usage:** Emphasizing key words in headings

---

## 📱 Responsive Design

### Breakpoint System (Tailwind)

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

### Mobile-First Patterns

**Grid Layouts:**
```tsx
grid grid-cols-1 lg:grid-cols-2              // Stack on mobile, 2 cols on desktop
grid grid-cols-1 lg:grid-cols-3              // Stack on mobile, 3 cols on desktop
```

**Order Control:**
```tsx
order-first lg:order-last                    // Show visual first on mobile
order-2 lg:order-1                          // Swap order on desktop
```

**Responsive Sizing:**
```tsx
h-[250px] md:h-[300px] lg:h-[400px]         // iPhone mockup
w-[120px] md:w-[140px] lg:w-[160px]         // Widget containers
px-4 md:px-6 lg:px-8                        // Responsive padding
```

### Mobile Optimization Patterns

**Hide on Mobile:**
```tsx
className="hidden lg:block"                  // Desktop-only visualizer
className="hidden md:flex"                   // Desktop-only navigation
```

**Show on Mobile:**
```tsx
className="lg:hidden"                        // Mobile-only content
className="block lg:hidden"                  // Mobile-only video
```

**Responsive Text:**
```tsx
<br className="hidden sm:block" />           // Line breaks only on larger screens
```

---

## 🎬 Animations & Transitions

### Transition Standards

```tsx
// Standard transitions
transition-all duration-200                  // Fast interactions
transition-all duration-300                  // Medium interactions
transition-colors                            // Color-only transitions

// Hover effects
hover:scale-105                              // Subtle scale on buttons
hover:scale-[1.02]                          // Minimal scale on cards
```

### Framer Motion Patterns

**Standard Card Animation:**
```tsx
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.6 }}
transition={{
  duration: 0.6,
  ease: [0.25, 0.8, 0.25, 1],
  delay: index * 0.05,
}}
```

**Custom Easing:**
```tsx
ease: [0.25, 0.8, 0.25, 1]                  // Smooth cubic-bezier easing
ease: "linear"                               // Continuous motion
ease: "easeOut"                              // Deceleration
```

### AnimatePresence

```tsx
<AnimatePresence mode="wait">
  {/* Content */}
</AnimatePresence>
```

**Usage:** Smooth transitions between different content states

### Animation Do's and Don'ts

**✅ DO:**
- Use subtle animations (0.6s or less)
- Apply staggered delays (index * 0.05)
- Use consistent easing functions
- Add hover effects to interactive elements

**❌ DON'T:**
- Use long duration animations (> 1s)
- Over-animate (keep it subtle)
- Use bounce or elastic easing
- Animate too many properties simultaneously

---

## 🔗 Links & Navigation

### Navigation Links

```tsx
className="font-body text-base font-normal hover:text-gray-600 transition-colors"
```

### Footer Links

```tsx
className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
```

### Dropdown Menu

```tsx
className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
```

**Items:**
```tsx
className="flex items-center gap-3 px-4 py-3 font-body text-sm font-normal text-gray-700 hover:bg-gray-50 hover:text-black transition-colors group"
```

---

## 🖼️ Images & Media

### Image Optimization

```tsx
<Image
  src="/path/to/image.svg"
  alt="Descriptive alt text"
  width={280}
  height={570}
  className="w-auto h-[400px]"
  priority                       // For above-fold images
/>
```

### Video Elements

```tsx
<video
  className="w-full h-full object-cover rounded-lg"
  autoPlay
  loop
  muted
  playsInline                    // Required for iOS
>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Responsive Images

```tsx
// iPhone mockup
className="w-auto h-[250px] md:h-[300px] lg:h-[400px] drop-shadow-2xl"

// Overlay images
className="absolute top-1/2 -translate-y-[110%] md:-translate-y-[calc(100%_+_80px)] right-2 z-10 w-36 md:w-44 lg:w-48"
```

---

## 📐 Component Patterns

### Section Header Pattern

```tsx
<div className="text-center mb-12">
  <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
    <Sparkles className="w-4 h-4" />
    Section Label
  </span>
  <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance] mb-4">
    Section Heading
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Section description text
  </p>
</div>
```

### Value Proposition Tab Pattern

```tsx
// Tab button
<button
  className={`w-full text-left p-6 rounded-lg border transition-all duration-200 ${
    activeTab === tab.id
      ? 'bg-emphasis border-black text-black'
      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
  }`}
>
  <div className="flex items-center gap-4">
    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-green-600 font-bold text-lg">{number}</span>
    </div>
    <div className="flex flex-col">
      <h3 className="font-heading text-xl font-normal leading-tight">{label}</h3>
      <p className="text-sm mt-1">{subtitle}</p>
    </div>
  </div>
</button>

// Mobile-only content
<div className={`lg:hidden mt-4 ${activeTab === tab.id ? 'block' : 'hidden'}`}>
  {/* Content */}
</div>

// Desktop-only content
<div className="hidden lg:block">
  {/* Content */}
</div>
```

---

## 📊 Lists & Features

### Feature List Pattern

```tsx
<ul className="space-y-4">
  {features.map((feature, index) => (
    <li key={index} className="flex items-start gap-3">
      <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
      <div>
        <span>{feature}</span>
      </div>
    </li>
  ))}
</ul>
```

### Icon Sizes

| Icon | Size Class | Pixels | Usage |
|------|------------|--------|-------|
| **Small** | `w-4 h-4` | 16px | Badges, inline icons |
| **Medium** | `w-5 h-5` | 20px | Buttons, feature lists |
| **Large** | `w-6 h-6` | 24px | Mobile menu, headers |
| **Extra Large** | `w-8 h-8` | 32px | Number indicators |

---

## 🎨 Special Effects

### Backdrop Blur

```tsx
className="bg-white/80 backdrop-blur-sm"
```

**Usage:** Badges, overlays

### Gradient Backgrounds

```tsx
// Top blur overlay
background: 'linear-gradient(to bottom, rgba(248, 249, 250, 0.8) 0%, rgba(248, 249, 250, 0.4) 25%, transparent 50%)'
```

### Mask Images

```tsx
maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 60%, transparent 100%)'
```

---

## 📋 Form Elements

### Input Fields (Not heavily used, but when needed)

```tsx
className="
  border border-input 
  bg-background 
  rounded-md 
  px-3 py-2
  focus:ring-2 focus:ring-ring
"
```

---

## 🎯 Z-Index System

| Layer | Z-Index | Usage |
|-------|---------|-------|
| **Base Content** | 0 | Default layer |
| **Behind iPhone** | 5-15 | Widgets behind mockup |
| **iPhone Mockup** | 10 | Phone device |
| **Front Widgets** | 20-25 | Widgets in front of mockup |
| **Center Widget** | 25-30 | Active/featured widget |
| **Header** | 50 | Fixed header |
| **Dropdown** | 50 | Navigation dropdowns |
| **Mobile Menu** | 50 | Mobile navigation |

---

## 🏗️ Section Anatomy

### Standard Section Structure

```tsx
<section id="section-name" className="relative z-[1] py-12 lg:py-20 xl:py-24">
  <div className="max-w-[1200px] mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <span className="badge">Label</span>
      <h2>Heading</h2>
      <p>Description</p>
    </div>
    
    {/* Section Content */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## 🎨 Brand Assets

### Logo

- **Path:** `/public/logo.svg`
- **Dimensions:** 121×26px
- **White Version:** `/public/logo_white.svg`
- **Usage:** Header, footer

### Favicon

- **Path:** `/public/favicon.svg`

### Font Files

- **Inter:** `/public/fonts/inter-v13-latin-*.woff2`
- **Playfair Display:** `/public/fonts/playfair-display-v30-latin-*.woff2`

---

## ✨ Best Practices

### DO's

1. **Consistency:**
   - Use the exact same button styles across all pages
   - Maintain consistent spacing patterns
   - Stick to the monochrome color palette

2. **Typography:**
   - Use Playfair Display for all headings
   - Use `font-normal` (400 weight) for headings, not bold
   - Add `[text-wrap:balance]` to all headings

3. **Spacing:**
   - Use standard section padding: `py-12 lg:py-20 xl:py-24`
   - Maintain consistent max-width: `max-w-[1200px]`
   - Use standard gaps: `gap-6 lg:gap-8`

4. **Mobile:**
   - Always test mobile-first
   - Use `order-first lg:order-last` for visual-first mobile layouts
   - Include `playsInline` on all videos

5. **Interactivity:**
   - Add hover effects to all clickable elements
   - Use `group` for nested hover animations
   - Include ArrowUpRight icon on main CTAs

### DON'T's

1. **Colors:**
   - Don't introduce new colors without approval
   - Don't use colored backgrounds (except white/gray)
   - Don't use colored text for body copy

2. **Typography:**
   - Don't use bold headings unless specifically required
   - Don't mix fonts within sections
   - Don't use all caps in headings

3. **Layout:**
   - Don't exceed max-width of 1200px for sections
   - Don't break the frame-layout system
   - Don't add borders without matching the gray-200 color

4. **Buttons:**
   - Don't create new button variants
   - Don't remove hover effects
   - Don't use colored buttons

5. **Animation:**
   - Don't use long animations (> 1s)
   - Don't use bounce/elastic easing
   - Don't over-animate

---

## 🛠️ Utility Classes Reference

### Common Class Combinations

**Section Container:**
```tsx
className="relative z-[1] py-12 lg:py-20 xl:py-24"
```

**Content Container:**
```tsx
className="max-w-[1200px] mx-auto px-4"
```

**Two-Column Grid:**
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-8"
```

**Card:**
```tsx
className="border border-border bg-emphasis rounded-xl p-6 lg:p-8"
```

**Text Content:**
```tsx
className="space-y-4 p-2 md:p-4"
```

**Primary Button:**
```tsx
className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
```

---

## 🎭 Component-Specific Patterns

### Header

- **Fixed positioning:** `fixed top-0 left-0 right-0 z-50`
- **Background:** `bg-[#f8f9fa]`
- **Conditional border:** `border-b border-gray-200` when scrolled
- **Centered navigation:** `absolute left-1/2 -translate-x-1/2`
- **Max-width:** `max-w-[1200px]`

### Footer

- **Background:** `bg-gray-50`
- **Top border:** `border-t border-gray-200`
- **Two sections:** Main navigation + Legal links
- **Divider:** `border-t border-gray-200 pt-8 mt-8`

### Hero Section

- **Grid background** with radial gradient mask
- **Growth chart SVG animation**
- **Side border blur effects** using ::before and ::after
- **Centered content:** `flex flex-col items-center justify-center text-center`

### Benefits Section

- **Diagonal stripe backgrounds** on visual containers
- **Alternating layouts:** Some with flex-col-reverse for mobile
- **Aspect ratios:** `aspect-square lg:aspect-auto`
- **Video containers** with rounded-2xl borders

---

## 📝 Content Guidelines

### Heading Tone

- Professional but approachable
- Action-oriented ("Transform", "Run experiments", "Build")
- Avoid marketing jargon
- Keep concise and scannable

### Body Copy

- Clear, direct language
- Short paragraphs (2-3 sentences max)
- Focus on user benefits
- Avoid technical complexity

### CTA Text

- **Primary:** "Get started", "Talk to a founder", "Start experimenting"
- **Secondary:** "Learn more", "See comparison", "View pricing"
- **Action-focused** and concise

---

## 🎨 Widget System (Dynamic Inline Widgets)

### Widget Card Standards

- **Size:** `w-[160px] h-[80px]` (desktop), `w-[120px] h-[60px]` (mobile)
- **Border Radius:** `rounded-xl` (12px)
- **Shadow:** `shadow-xl hover:shadow-2xl`
- **Transition:** `transition-shadow duration-300`

### Widget Positioning

- **Base positions:** Fixed slots around iPhone
- **Center position:** `(0, 0)` relative to iPhone
- **Scale:** 1.0 for side positions, 1.1-1.2 for center
- **Z-index:** 20 for sides, 25-30 for center

### Widget Animation

```tsx
transition={{
  duration: 0.8,
  ease: [0.25, 0.8, 0.25, 1],
  delay: index * 0.05,
}}
```

---

## 🎯 Accessibility

### Best Practices

1. **Semantic HTML:** Use proper heading hierarchy (h1 → h2 → h3)
2. **Alt Text:** All images must have descriptive alt text
3. **Aria Labels:** Buttons without text must have aria-label
4. **Focus States:** All interactive elements have visible focus
5. **Color Contrast:** Black on white ensures WCAG AAA compliance

### Focus States

```tsx
focus:ring-2 focus:ring-ring
```

---

## 🔍 SEO & Performance

### Image Optimization

- Use Next.js `<Image>` component
- Add `priority` for above-fold images
- Use appropriate dimensions
- Provide alt text

### Font Loading

- Use `font-display: swap` for all fonts
- Preload critical fonts
- Self-host fonts for performance

---

## 📱 Mobile Menu Pattern

```tsx
{isMobileMenuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200">
    <nav className="container mx-auto px-4 py-4 space-y-4">
      {/* Menu items */}
    </nav>
  </div>
)}
```

---

## 🎨 Custom CSS Variables

### Core Variables

```css
--color-background: #ffffff
--color-foreground: #000000
--color-border: #e5e5e5
--color-muted-foreground: #666666
--color-accent: #f5f5f5
--font-heading: "Playfair Display", serif
--font-body: "Nunito", sans-serif
```

---

## 🚀 Implementation Checklist

When creating a new section:

- [ ] Use standard section padding (`py-12 lg:py-20 xl:py-24`)
- [ ] Include section header with badge
- [ ] Set max-width to `1200px`
- [ ] Use monochrome color palette only
- [ ] Apply responsive grid layout
- [ ] Add mobile-first ordering
- [ ] Include hover effects on interactive elements
- [ ] Use Playfair Display for headings
- [ ] Add ArrowUpRight icon to primary CTAs
- [ ] Test on mobile, tablet, and desktop
- [ ] Ensure proper z-index layering
- [ ] Add smooth transitions (0.2s - 0.8s)
- [ ] Use semantic HTML
- [ ] Add proper alt text to images
- [ ] Include aria-labels where needed

---

## 📦 File Structure

```
src/
├── app/
│   ├── globals.css          # Core styles, CSS variables, animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── sections/            # Page sections (reusable)
│   │   ├── Header.tsx
│   │   ├── hero-section.tsx
│   │   ├── benefits-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── footer.tsx
│   └── ui/                  # UI components (buttons, cards, etc.)
public/
├── logo.svg
├── fonts/
└── [media assets]
```

---

## 🎬 Animation Keyframes

### Custom Animations (globals.css)

```css
@keyframes drawTrail { /* SVG path animation */ }
@keyframes dotAppear { /* Dot scale animation */ }
@keyframes marquee { /* Logo carousel */ }
@keyframes showArrow { /* Fade in */ }
@keyframes moveArrow { /* Path motion */ }
```

---

## 🎯 Brand Voice

### Tone

- **Professional but approachable**
- **Confident without arrogance**
- **Technical but accessible**
- **Action-oriented**

### Key Messages

- "No engineers needed"
- "Reduce CAC by 25%"
- "10x more experiments"
- "First experiment live in 30 mins"

---

## 📐 Spacing Scale

| Size | Value | Usage |
|------|-------|-------|
| `space-y-1` | 0.25rem (4px) | Tight spacing |
| `space-y-2` | 0.5rem (8px) | Close elements |
| `space-y-3` | 0.75rem (12px) | Related items |
| `space-y-4` | 1rem (16px) | Standard spacing |
| `space-y-6` | 1.5rem (24px) | Section spacing |
| `space-y-8` | 2rem (32px) | Major sections |
| `space-y-10` | 2.5rem (40px) | Large section gaps |
| `space-y-12` | 3rem (48px) | Hero elements |

---

## 🎨 Aspect Ratios

```tsx
aspect-square              // 1:1 (mobile visuals)
aspect-[4/3]              // 4:3 (video containers)
aspect-auto               // Auto (desktop)
```

---

## 💡 Quick Reference

### Most Used Classes

```tsx
// Sections
"relative z-[1] py-12 lg:py-20 xl:py-24"
"max-w-[1200px] mx-auto px-4"

// Cards
"border border-border bg-emphasis rounded-xl p-6 lg:p-8"

// Buttons (Primary)
"bg-black text-white rounded-lg px-6 py-3 hover:shadow-lg hover:shadow-black/25 hover:scale-105"

// Headings
"font-heading text-3xl md:text-4xl lg:text-[40px] font-normal [text-wrap:balance]"

// Body Text
"text-lg text-gray-600"
"text-muted-foreground leading-relaxed"

// Grid
"grid grid-cols-1 lg:grid-cols-2 gap-8"
```

---

## 🔧 Developer Notes

### Important Patterns

1. **Always use `'use client'`** for interactive components
2. **Import from `next/image`** not `<img>` tags
3. **Use lucide-react** for all icons
4. **Framer Motion** for all animations
5. **Tailwind** for all styling (no custom CSS except globals.css)

### CSS Custom Properties

Prefer Tailwind classes over custom CSS variables. Only use CSS variables for:
- Theme colors
- Font families
- Border radius values

---

## 📖 Examples

### Complete Button Example

```tsx
<Link
  href="/book-call"
  className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
>
  Get started
  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
</Link>
```

### Complete Card Example

```tsx
<div className="border border-border bg-emphasis rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
  <div className="space-y-4 p-2 md:p-4">
    <h3 className="font-heading text-2xl md:text-3xl font-normal leading-tight [text-wrap:balance]">
      Card Heading
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      Card description text
    </p>
    <Link href="/link" className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3">
      Action
    </Link>
  </div>
  <div className="relative w-full aspect-square lg:aspect-auto">
    {/* Visual content */}
  </div>
</div>
```

---

## 🔐 Brand Rules

### Non-Negotiables

1. **Monochrome Only:** No colors except black, white, and grays
2. **Playfair for Headings:** Never substitute
3. **Black Buttons:** Primary actions are always black
4. **1200px Max Width:** Never exceed for content
5. **Frame Layout:** Maintain the unique bordered frame system

### Flexible Elements

1. **Accent colors:** Can be used minimally in specific contexts
2. **Animation timing:** Can adjust for specific needs
3. **Spacing:** Can adjust within reasonable bounds
4. **Content:** Can vary while maintaining tone

---

**End of Brand Style Guide**

For questions or clarification, refer to existing components in `/src/components/sections/` as reference implementations.

