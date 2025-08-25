# SharkMath Design System

## Colors

### Primary
- **Primary Green**: `#80D11D` - Main brand color, buttons, highlights
- **Primary Dark**: `#4F9000` - Button shadows, hover states

### Text Colors
- **Primary Text**: `#042C51` - Main headings, body text
- **Secondary Text**: `#6F7D8C` - Subtitles, secondary information  
- **Tertiary Text**: `#ACB7C2` - Disabled states, hints
- **White**: `#FFFFFF` - Button text on colored backgrounds

### UI Colors
- **Stroke/Border**: `#E8EDE3` - Borders, dividers, button outlines

### Social Brand Colors
- **Google Blue**: `#4285F4`
- **Google Green**: `#34A853` 
- **Google Yellow**: `#FBBC05`
- **Google Red**: `#EB4335`
- **Facebook**: `#1877F2`

## Typography

### Fonts
- **Headings**: `Abhaya Libre ExtraBold` (800 weight)
- **Body Text**: `Roboto` (400, 500, 700 weights)

### Font Sizes & Line Heights
- **Logo**: 19.7px / 23px line-height
- **Main Headline**: 56px / 51px line-height
- **Section Headings**: 16px / 19px line-height  
- **Button Text**: 14px / 16px line-height

### Letter Spacing
- **Tight**: -4% (for headings)
- **Normal**: 0% (for body text)

## Spacing System

### Gaps
- **XS**: 8px
- **SM**: 8.5px (specific gap in header)
- **MD**: 16px
- **LG**: 24px

## Components

### Buttons

#### Dimensions
- **Small**: 40px height
- **Medium**: 44px height  
- **Large**: 48px height
- **Padding**: 12px horizontal, 20px vertical
- **Border Radius**: 12px

#### Specific Sizes
- **Email Button**: 258px width
- **Social Buttons**: 83px width

#### Shadows
- **Primary Button**: `0px 3px 0px #4F9000`
- **Secondary Button**: `0px 3px 0px #E8EDE3`

### Icons
- **XS**: 12px (chevron)
- **SM**: 16px (email, social icons)
- **MD**: 18px (flag)
- **LG**: 28px (logo icon)

## Layout

### Container
- **Max Width**: 1400px
- **Padding**: 20px horizontal

### Header
- **Height**: 56px

### Hero Section  
- **Total Height**: 844px
- **Content Width**: 763px
- **Content Height**: 209px

### Device Mockup
- **Width**: 1008px
- **Height**: 620px
- **Position**: 185px from left, 311px from top

### Green Background Section
- **Height**: 327px
- **Top Position**: 517px from top
- **Gradient Overlay**: 226px height, starts 618px from top

## Gradients

### Green Fade
```
linear-gradient(0deg, #80D11D 0%, rgba(128, 209, 29, 0) 56.19%)
```

## Usage for Tailwind Config

When setting up `tailwind.config.js`, use these values to extend the default theme:

```js
// Colors
colors: {
  'shark-green': '#80D11D',
  'shark-green-dark': '#4F9000',
  'shark-blue': '#042C51',
  'shark-gray': '#6F7D8C',
  'shark-gray-light': '#ACB7C2',
  'shark-stroke': '#E8EDE3'
}

// Fonts  
fontFamily: {
  'heading': ['Abhaya Libre ExtraBold', 'serif'],
  'body': ['Roboto', 'sans-serif']
}

// Custom spacing
spacing: {
  '8.5': '8.48px'  // For specific header gap
}
```