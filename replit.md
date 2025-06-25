# Arnalsteen Solutions - Full-Stack Web Application

## Overview

This is a modern full-stack web application for Arnalsteen Solutions, a digital services company. The application features a stunning portfolio website with contact form functionality, built using a complete React frontend with Express backend architecture. The application is designed to showcase services, collect client inquiries, and provide a professional web presence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: TailwindCSS with custom CSS variables for theming and responsive design
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and micro-interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for robust form management

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints with proper error handling
- **Session Management**: Express sessions with PostgreSQL session store

### Build System
- **Frontend Bundler**: Vite for fast development and optimized production builds
- **Backend Bundler**: esbuild for efficient server-side bundling
- **Development**: Hot module replacement and live reloading
- **TypeScript**: Strict type checking across frontend and backend

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Eye-catching landing area with animated text and CTAs
- **Services Section**: Three main service offerings with detailed descriptions
- **About Section**: Company information with animated statistics
- **Portfolio Section**: Showcase area for upcoming projects
- **Contact Section**: Professional contact form with validation
- **Footer**: Site links and social media integration

### Backend Services
- **Contact API**: Handles form submissions with validation and storage
- **Static File Serving**: Serves frontend assets in production
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development Tools**: Request logging and debugging utilities

### Database Schema
- **Users Table**: User authentication and management
- **Contact Submissions Table**: Stores client inquiries with full details including:
  - Personal information (first name, last name, email)
  - Service interest and project details
  - Budget information and timestamps

## Data Flow

1. **Client Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact form data is validated using Zod schemas
3. **API Request**: Validated data is sent to Express backend via REST API
4. **Database Operation**: Drizzle ORM handles database insertions with type safety
5. **Response Handling**: Backend returns success/error responses to frontend
6. **User Feedback**: Frontend displays toast notifications for user feedback
7. **Admin Access**: Backend provides endpoints to retrieve all submissions

## External Dependencies

### Frontend Dependencies
- **Core**: React, TypeScript, Vite for the main application framework
- **UI/UX**: Radix UI primitives, Framer Motion, TailwindCSS for modern interface
- **Forms**: React Hook Form, Zod for form management and validation
- **HTTP**: TanStack Query for API communication and caching
- **Utilities**: date-fns, clsx, class-variance-authority for various utilities

### Backend Dependencies
- **Server**: Express.js, TypeScript for server-side logic
- **Database**: Drizzle ORM, @neondatabase/serverless for database operations
- **Sessions**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Development Tools
- **Replit Integration**: Custom Replit plugins for development environment
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Build Tools**: esbuild, PostCSS, Autoprefixer for optimized builds

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` runs both frontend and backend concurrently
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **Database**: Connected to Neon Database for consistent development data
- **Environment**: Replit-optimized with proper port configuration

### Production Deployment
- **Build Process**: `npm run build` creates optimized frontend and backend bundles
- **Static Assets**: Frontend builds to `dist/public` for efficient serving
- **Server Bundle**: Backend bundles to `dist/index.js` with external packages
- **Database**: Production PostgreSQL database via DATABASE_URL environment variable
- **Hosting**: Configured for Replit deployment with autoscaling

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Port Configuration**: Flexible port assignment for different environments
- **Asset Serving**: Static file serving in production with proper caching headers

## Changelog

- June 25, 2025: Initial setup with extreme animations and neon design
- June 25, 2025: Added GitHub Pages deployment configuration
- June 25, 2025: Created static build version with contact form adaptation
- June 25, 2025: Added automatic deployment workflow for GitHub Pages

## User Preferences

Preferred communication style: Simple, everyday language.

Repository Configuration:
- GitHub username: GerbenArnal
- Repository name: ArnalsteenSolutions
- Live URL: https://gerbanarnal.github.io/ArnalsteenSolutions/
- Deployment: Automatic via GitHub Actions