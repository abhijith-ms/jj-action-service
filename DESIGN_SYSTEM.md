# JJ Action Services - Design System

## Color Palette

### Primary Colors
- **Primary Blue**: `#2563EB` 
  - Usage: Main accent, buttons, links, highlights
  - Tailwind: `primary`, `bg-primary`, `text-primary`
  - Hover: `primary-600` (#1d4ed8)

- **Dark Navy**: `#0F172A`
  - Usage: Headings, brand anchor
  - Tailwind: `navy`, `bg-navy`, `text-navy`

### Neutrals
- **White**: `#FFFFFF`
  - Usage: Main background
  - Tailwind: `white`, `bg-white`, `text-white`

- **Light Gray**: `#F5F6F7`
  - Usage: Section backgrounds, cards
  - Tailwind: `light-gray`, `bg-light-gray`

- **Cool Gray**: `#64748B`
  - Usage: Secondary text, labels
  - Tailwind: `cool-gray`, `text-cool-gray`

### Optional Secondary Accents (use sparingly)
- **Emerald Green**: `#059669`
  - Usage: Success states, eco/home services
  - Tailwind: `emerald`, `bg-emerald`, `text-emerald`

- **Terracotta Orange**: `#EA580C`
  - Usage: Warm Portuguese-inspired CTAs
  - Tailwind: `terracotta`, `bg-terracotta`, `text-terracotta`

## Typography

### Headings (Modern + Professional)
- **Font**: Poppins (Google Font)
- **Weights**: SemiBold (600) or Bold (700)
- **Usage**: Page titles, section headings
- **Tailwind**: `font-heading`
- **Classes**: 
  - H1: `text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-navy`
  - H2: `text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy`
  - H3: `text-2xl sm:text-3xl font-semibold font-heading text-navy`
  - H4: `text-xl sm:text-2xl font-semibold font-heading text-navy`

### Body Text (Clean + Minimal)
- **Font**: Inter (Google Font)
- **Weights**: Regular (400) or Medium (500)
- **Usage**: Paragraphs, service descriptions
- **Tailwind**: `font-body`
- **Classes**:
  - Lead: `text-lg sm:text-xl font-body text-cool-gray`
  - Body: `text-base font-body text-cool-gray`
  - Small: `text-sm font-body text-cool-gray`

### Accent / Buttons (Readable + Strong)
- **Font**: Poppins
- **Weight**: Medium (500)
- **Usage**: CTAs, navigation menu, button labels
- **Tailwind**: `font-accent`

## Button Styles

### Primary Button
```css
bg-primary hover:bg-primary-600 text-white font-accent font-medium
```

### Secondary Button
```css
bg-light-gray hover:bg-cool-gray hover:text-white text-navy font-accent font-medium
```

### Outline Button
```css
border border-cool-gray hover:bg-light-gray text-cool-gray font-accent font-medium
```

### Terracotta CTA Button
```css
bg-terracotta hover:bg-terracotta-600 text-white font-accent font-medium
```

## Component Styles

### Cards
```css
bg-white rounded-lg shadow-sm border border-cool-gray/20 p-6
```

### Sections
```css
py-16 lg:py-20
```

### Container
```css
container mx-auto px-4 sm:px-6 lg:px-8
```

## Usage Guidelines

1. **Consistency**: Always use the defined color variables and font classes
2. **Hierarchy**: Use navy for headings, cool-gray for body text
3. **Accent Colors**: Use emerald and terracotta sparingly for emphasis
4. **Fonts**: Poppins for headings and buttons, Inter for body text
5. **Spacing**: Use consistent padding and margins as defined in the system

## Implementation Notes

- All colors are defined in `tailwind.config.js`
- Font imports are in `index.html`
- Utility classes are available in `src/lib/styles.ts`
- Base styles are defined in `src/index.css`