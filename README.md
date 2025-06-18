# Page Navigation Demo

A modern, interactive page navigation component built with **Next.js 15**, **React 19**, and **TypeScript**. This project demonstrates advanced UI patterns including drag-and-drop functionality, dynamic page management, and responsive design.

## 🚀 Features

### Core Functionality

- **Dynamic Page Navigation** - Seamless switching between form pages
- **Drag & Drop Reordering** - Intuitive page reorganization using @dnd-kit
- **Add Page Functionality** - Insert new pages at any position with hover-triggered controls
- **Context Menus** - Right-click actions for page management (rename, duplicate, delete, etc.)
- **Simple Form Pages** - Clean page content to showcase navigation
- **Responsive Design** - Horizontal scrolling navigation for mobile devices

### Technical Highlights

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict type checking
- **Tailwind CSS 4** for modern styling
- **Accessibility** features (ARIA attributes, keyboard navigation)
- **Error Boundaries** for production-ready error handling
- **Performance Optimizations** (memoized callbacks, efficient re-renders)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (shadcn/ui)
- **Drag & Drop**: @dnd-kit
- **Icons**: Lucide React
- **Linting**: ESLint 9 with Next.js config

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd page-navigation

# Install dependencies
yarn install

# Start development server
yarn dev
```

## 🔧 Development

```bash
# Development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application page
│   ├── error.tsx           # Next.js error boundary
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── PageContent.tsx     # Individual page components
│   └── PageNavigation.tsx  # Main navigation component
└── lib/
    ├── constants.ts        # Application constants
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary**: Slate (backgrounds, text)
- **Accent**: Amber (buttons, highlights)
- **Interactive**: Blue (focus states, links)
- **Status**: Green (success), Red (errors)

### Typography

- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Custom Fonts**: BL Melody, Inter (for specific UI elements)

### Components

- **Buttons**: Multiple variants (ghost, outline, default)
- **Forms**: Validated inputs with error states
- **Navigation**: Tabbed interface with drag-and-drop
- **Modals**: Context menus and dropdowns

## 🔍 Key Components

### PageNavigation

- Horizontal tab navigation with drag-and-drop reordering
- Hover-triggered "add page" buttons between tabs
- Context menus for page management actions
- Active/inactive state management with visual indicators

### PageContent

- Simple form components to showcase navigation functionality
- Consistent styling across all page types
- Clean, focused design that highlights the navigation component

### Error Handling

- Next.js 15 error boundary (`error.tsx`) for automatic error catching
- User-friendly fallback UI with retry functionality
- Error logging for debugging and monitoring

## 🎯 Features Demonstrated

### State Management

- React hooks (`useState`, `useCallback`)
- Page navigation state management
- Complex component state coordination

### User Experience

- Intuitive drag-and-drop interactions
- Smooth animations and transitions
- Responsive design patterns
- Accessibility compliance

### Performance

- Memoized callbacks to prevent unnecessary re-renders
- Optimized bundle size (155KB first load)
- Efficient component updates

### Code Quality

- TypeScript strict mode
- ESLint configuration with Next.js rules
- Consistent code formatting
- Clean, maintainable code structure

## 🧪 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Accessibility**: Screen readers, keyboard navigation

## 📱 Responsive Behavior

- **Desktop**: Full navigation bar with hover effects
- **Tablet**: Horizontal scrolling navigation
- **Mobile**: Touch-friendly interactions with swipe support

## 🔐 Production Considerations

- Error boundaries for graceful error handling
- Clean component architecture
- Performance optimizations
- TypeScript for type safety
- Scalable navigation system

## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

```bash
# Build for production
yarn build

# The output will be in the `.next` directory
```

## 📄 License

This project is created for demonstration purposes.

---

**Built with ❤️ using Next.js 15 and React 19**
