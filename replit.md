# Cancer Awareness & Support Web Application

## Overview

This is a compassionate web application designed to raise cancer awareness and provide support to those affected by cancer. The application features an emotionally resonant design inspired by leading healthcare and nonprofit organizations, focusing on hope, community support, and clear pathways to engagement. It includes inspirational quotes, a contact form for reaching out, and a warm, welcoming interface that balances emotional connection with accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application pattern)
- Client code located in `client/src/` directory with entry point at `main.tsx`

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Design system follows "new-york" style variant with custom color palette centered around purple/pink cancer awareness theme (primary: `hsl(316 65% 45%)`)
- Component library includes 40+ pre-built, accessible components (buttons, forms, cards, dialogs, etc.)
- Custom CSS variables for theming with support for light/dark modes

**Design Philosophy**
- Reference-based approach drawing from American Cancer Society, St. Jude, and Charity: Water
- Generous whitespace and typography (Poppins/Inter fonts) for calm, approachable atmosphere
- Responsive design with mobile-first approach (breakpoints at 768px and 1024px)
- Hero banner with full-width emotional imagery and gradient overlays for text readability

**State Management**
- **TanStack Query (React Query)** for server state management and API data caching
- React Hook Form with Zod validation for form state and validation
- Custom hooks for mobile detection and toast notifications

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system throughout the codebase
- Development mode uses `tsx` for TypeScript execution
- Production build uses `esbuild` for bundling server code

**API Structure**
- RESTful API endpoints under `/api` prefix
- Single implemented endpoint: `GET /api/quote` - proxies Quotable API for inspirational quotes
- Middleware for JSON request parsing with raw body preservation
- Custom logging middleware for API request/response tracking (logs only API calls, truncates at 80 chars)

**Data Layer**
- In-memory storage implementation (`MemStorage` class) for user data
- Interface-based storage abstraction (`IStorage`) allowing easy swap to persistent database
- Drizzle ORM configured for PostgreSQL (ready for database integration)
- Schema definitions using Zod for runtime validation

**Development Setup**
- Vite middleware integration for SSR and HMR in development
- Separate development and production modes
- Custom error overlay and dev tools for Replit environment

### External Dependencies

**Third-Party APIs**
- **Quotable API** (`https://api.quotable.io`) - Provides random inspirational quotes filtered by tags (inspirational, wisdom, hope)

**Database Configuration**
- **Drizzle ORM** with PostgreSQL dialect configured but not yet connected
- Connection expects `DATABASE_URL` environment variable
- Migration files stored in `./migrations` directory
- Schema defined in `shared/schema.ts`

**UI Libraries & Frameworks**
- **Radix UI** - Headless component primitives for accessibility
  - 25+ Radix UI packages for various components (accordion, dialog, dropdown, select, etc.)
- **Tailwind CSS** with PostCSS for processing
- **class-variance-authority** and **clsx** for conditional styling
- **Lucide React** for icon system
- **cmdk** for command palette functionality
- **embla-carousel-react** for carousel components
- **react-day-picker** for calendar/date selection
- **vaul** for drawer components

**Form Handling & Validation**
- **React Hook Form** for performant form management
- **Zod** for schema validation with TypeScript inference
- **@hookform/resolvers** for integrating Zod with React Hook Form
- **drizzle-zod** for database schema to Zod schema conversion

**Session Management**
- **connect-pg-simple** configured for PostgreSQL session storage (not yet active)

**Build & Development Tools**
- **Vite plugins** for Replit integration (cartographer, dev banner, runtime error modal)
- **esbuild** for production server bundling
- **TypeScript** with strict mode enabled
- Path aliases configured: `@/*` (client), `@shared/*` (shared), `@assets/*` (assets)

**Styling Utilities**
- **tailwind-merge** for merging Tailwind classes
- **date-fns** for date formatting and manipulation
- **Autoprefixer** for CSS vendor prefixing