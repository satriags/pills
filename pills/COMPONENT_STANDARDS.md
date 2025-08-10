# Pills API Website - Component Standards & Guidelines

## 📋 Overview
Website remake pills.satriags.com menggunakan Next.js 14 dengan Daisy UI sebagai UI framework. Semua komponen dibuat dengan standar modern dan reusable dengan dukungan theme switching yang lengkap.

## 🗂️ Struktur Project
```
src/
├── app/                    # App Router Pages
│   ├── page.tsx           # Landing Page
│   ├── blog/              # Blog Section
│   ├── pricing/           # Pricing Plans
│   ├── product/           # API Products
│   ├── doc/               # Documentation
│   ├── status/            # Service Status
│   ├── contact/           # Contact Form
│   └── member/            # Login/Register
├── components/
│   ├── Navbar.tsx         # Main Navigation with Theme Controls
│   └── ui/                # Reusable UI Components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       ├── ThemeSelector.tsx  # Advanced Theme Selector
│       └── index.ts
├── hooks/
│   └── useTheme.ts        # Theme Management Hook
└── ...
```

## 🎨 Theme System

### Overview
Sistem theme yang lengkap menggunakan Daisy UI dengan dukungan 21+ theme dan localStorage persistence.

### Available Themes
**Light Themes:** light, cupcake, bumblebee, emerald, corporate, retro, cyberpunk, valentine, garden, aqua
**Dark Themes:** dark, synthwave, halloween, forest, black, luxury, dracula, business, night, coffee
**Special Themes:** winter, acid, lemonade, pastel, fantasy, wireframe, cmyk, autumn, lofi, dim, nord, sunset

### Theme Components

#### useTheme Hook
```tsx
const { theme, setTheme, toggleTheme, mounted } = useTheme()
```

**Features:**
- ✅ SSR-safe hydration
- ✅ localStorage persistence  
- ✅ Light/dark toggle
- ✅ 21+ Daisy UI themes support
- ✅ TypeScript strict typing

#### ThemeSelector Component
Modal advanced untuk memilih dari 21+ theme yang tersedia.
```tsx
<ThemeSelector isOpen={showThemeSelector} onClose={() => setShowThemeSelector(false)} />
```

#### Navbar Theme Integration
- Quick toggle button (light/dark)
- Advanced theme selector button
- Mobile responsive menu
- Tooltips dengan descriptions
- Smooth transitions

## 🎨 Design System

### Color Palette (Theme Aware)
- **Primary**: Adaptive primary color per theme
- **Secondary**: Adaptive secondary color per theme
- **Accent**: Adaptive accent color per theme
- **Base**: Background colors (base-100, base-200, base-300)
- **Content**: Text colors (base-content, primary-content)
- **Neutral**: Neutral tones untuk borders dan dividers

### Typography
- **Headings**: Font bold dengan hierarki yang jelas (text-5xl, text-4xl, text-3xl, text-2xl, text-xl)
- **Body**: Regular weight dengan good contrast (base-content)
- **Labels**: Slightly smaller dengan theme-aware colors

## 🧩 Component Standards

### 1. Button Component
```tsx
import { Button } from '@/components/ui';

// Usage Examples
<Button variant="primary" size="lg">Primary Action</Button>
<Button variant="outline" size="sm">Secondary Action</Button>
<Button loading={true}>Loading State</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline'
- `size`: 'xs' | 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean

### 2. Card Component
```tsx
import { Card, CardActions } from '@/components/ui';

<Card title="Card Title" shadow="xl">
  <p>Card content here</p>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
```

### 3. Input Component
```tsx
import { Input } from '@/components/ui';

<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
  error="Invalid email format"
/>
```

### 4. Modal Component
```tsx
import { Modal } from '@/components/ui';

<Modal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
  size="lg"
>
  <p>Modal content</p>
</Modal>
```

### 5. Badge Component
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" size="sm">Active</Badge>
<Badge variant="outline">Category</Badge>
```

## 📱 Responsive Design Rules

### Breakpoints (Tailwind CSS)
- **Mobile**: < 768px (default)
- **Tablet**: 768px+ (md:)
- **Desktop**: 1024px+ (lg:)
- **Large Desktop**: 1280px+ (xl:)

### Grid System
```tsx
// Responsive grid examples
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

## 🎯 Page Structure Standards

### 1. Page Layout Pattern
```tsx
export default function PageName() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        {/* Hero content */}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Page content */}
      </div>
    </>
  );
}
```

### 2. Section Spacing
- **Section padding**: `py-16` atau `py-20`
- **Container**: `container mx-auto px-4`
- **Element spacing**: `mb-6`, `mb-8`, `mb-12`

### 3. Hero Section Pattern
```tsx
<div className="hero bg-gradient-to-r from-[color]/10 to-[color]/10 py-20">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
      <h1 className="text-5xl font-bold mb-6">Page Title</h1>
      <p className="text-xl mb-8">Page description</p>
    </div>
  </div>
</div>
```

## 🔄 State Management Guidelines

### Form Handling
```tsx
const [formData, setFormData] = useState({
  email: '',
  password: ''
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

### Loading States
```tsx
const [loading, setLoading] = useState(false);

<Button loading={loading} onClick={handleSubmit}>
  Submit
</Button>
```

## 🎨 Styling Conventions

### CSS Classes Naming
- Use Tailwind utility classes
- Consistent spacing scale: 4, 6, 8, 12, 16, 20
- Color opacity: `/10`, `/20`, `/70` for backgrounds and text

### Component Styling
```tsx
// Good - consistent and semantic
<div className="card bg-base-100 shadow-xl">
<button className="btn btn-primary btn-lg">

// Avoid - too many utilities in one place
<div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
```

## 📝 Content Guidelines

### Text Content
- **Headings**: Clear, descriptive, hierarchy-based
- **Descriptions**: Concise but informative
- **CTAs**: Action-oriented language
- **Error messages**: Helpful and specific

### Image & Icons
- Use emojis untuk visual elements yang simple
- SVG icons untuk interactive elements
- Consistent sizing untuk icons (w-5 h-5, w-6 h-6)

## 🔍 SEO & Accessibility

### Meta Tags
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Pills API',
  description: 'Page description for SEO'
};
```

### Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text untuk images
- ARIA labels untuk interactive elements
- Keyboard navigation support

## 🧪 Testing Standards

### Component Testing
- Test all interactive components
- Test responsive behavior
- Test accessibility features

### Page Testing
- Test form submissions
- Test navigation links
- Test responsive layouts

## 📚 Documentation

### Component Documentation
Setiap komponen harus memiliki:
- PropTypes/Interface definition
- Usage examples
- Variant demonstrations
- Accessibility notes

### Page Documentation
- Purpose dan functionality
- Content management instructions
- Integration points

## 🚀 Performance Guidelines

### Code Splitting
```tsx
// Lazy load components when needed
const Modal = dynamic(() => import('@/components/ui/Modal'));
```

### Image Optimization
```tsx
import Image from 'next/image';

<Image 
  src="/api-illustration.png" 
  alt="API illustration"
  width={500}
  height={300}
  priority
/>
```

## 🔧 Development Workflow

### File Naming
- PascalCase untuk components: `Button.tsx`
- camelCase untuk utilities: `apiHelper.ts`
- kebab-case untuk pages: `about-us/page.tsx`

### Import Organization
```tsx
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party imports
import Link from 'next/link';

// 3. Internal imports
import { Button, Card } from '@/components/ui';
import Navbar from '@/components/Navbar';
```

---

## 📞 Support

Jika ada pertanyaan tentang implementasi atau standar, silakan:
1. Check dokumentasi ini terlebih dahulu
2. Lihat contoh implementasi di halaman yang sudah ada
3. Konsistensikan dengan pattern yang sudah established

**Semua halaman sudah dibuat dengan template yang bisa disesuaikan content-nya sesuai kebutuhan!** 🎉
