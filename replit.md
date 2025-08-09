# sneeze Discord Bot Dashboard

## Overview

This is a full-stack web application for the "sneeze" Discord bot, built as a modern React frontend with an Express.js backend. The application serves as a comprehensive dashboard and documentation site for the Discord bot, featuring command documentation, FAQ sections, system status monitoring, and bot statistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Error Handling**: Centralized error middleware with structured responses
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless driver)
- **Migrations**: Drizzle Kit for schema migrations
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **Users**: Basic authentication system (id, username, password)
- **Commands**: Discord bot commands with categories, permissions, and premium flags
- **FAQ Items**: Frequently asked questions with ordering support
- **System Status**: Service status monitoring (Bot, API, Database, CDN)
- **Bot Stats**: Real-time statistics (total users, servers, uptime)

### API Endpoints
- `GET /api/commands` - Fetch bot commands with optional category filtering and search
- `GET /api/faq` - Retrieve FAQ items
- `GET /api/status` - Get system status for all services
- `GET /api/stats` - Fetch current bot statistics

### Frontend Pages
- **Home**: Hero section with bot statistics, features showcase, and integration highlights
- **Commands**: Searchable command documentation with category filtering
- **Status**: Real-time system status dashboard
- **FAQ**: Expandable frequently asked questions
- **404**: Custom not found page

### UI Design System
- **Color Scheme**: Dark theme with purple primary (#8B5CF6) and green success colors
- **Typography**: Inter font family for consistency
- **Components**: Glassmorphism effects, animated counters, feature cards
- **Responsive**: Mobile-first approach with breakpoint considerations

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Drizzle ORM abstracts database operations with type safety
4. **Response Flow**: JSON responses with proper error handling and status codes
5. **Client Updates**: React Query manages cache invalidation and background updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **react-hook-form**: Form handling with validation
- **wouter**: Lightweight React router

### Development Tools
- **drizzle-kit**: Database migration and introspection
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for server development
- **tailwindcss**: Utility-first CSS framework

### UI Enhancement
- **framer-motion**: Animation library (if implemented)
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets (Discord, social platforms)
- **embla-carousel-react**: Carousel component

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static files served from build output directory

### Environment Configuration
- **Development**: Local development with hot reload via Vite middleware
- **Production**: Express serves static files and API routes
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Hosting Considerations
- **Static Assets**: Frontend built to `dist/public` for CDN deployment
- **API Server**: Node.js server with PostgreSQL database connection
- **Environment Variables**: Database URL, session secrets, external API keys

The application follows a monorepo structure with shared TypeScript definitions between frontend and backend, ensuring type safety across the full stack. The modular architecture allows for easy extension of features and maintains clear separation of concerns between presentation, business logic, and data persistence layers.