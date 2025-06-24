# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14.0.0 admin dashboard application built with React 18, TypeScript, and Tailwind CSS v3. The project includes additional dependencies for HTTP requests (axios), cookie management (js-cookie), notifications (react-hot-toast), and icons (lucide-react).

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Project Structure

The project uses Next.js App Router with the following structure:

- `src/app/` - App Router pages and layouts
  - `dashboard/page.js` - หน้าแดชบอร์ด
  - `login/page.js` - หน้าเข้าสู่ระบบ
  - `layout.tsx` - Root layout with Geist fonts and global CSS
  - `page.tsx` - Home page component (redirect)
  - `globals.css` - Global styles with Tailwind CSS and CSS custom properties
- `app/` - Additional App Router structure (legacy)
  - `dashboard/page.js` - Dashboard page
  - `login/page.js` - Login page
  - `layout.js` - Root layout
  - `page.js` - Home page (redirect)
- `components/` - React Components
  - `Layout.js` - Dashboard layout
  - `LoginForm.js` - ฟอร์มเข้าสู่ระบบ
  - `UserTable.js` - ตารางผู้ใช้
  - `StatCard.js` - Card สถิติ
  - `BanModal.js` - Modal ระงับผู้ใช้
  - `LoadingSpinner.js` - Loading component
- `hooks/` - Custom React Hooks
  - `useAuth.js` - Authentication logic
  - `useUsers.js` - User management logic
- `lib/` - Utility functions
  - `api.js` - Axios configuration
  - `auth.js` - Auth service
  - `userService.js` - User API calls
- `public/` - Static assets (SVG icons)
- `tsconfig.json` - TypeScript configuration with path mapping (`@/*` → `./src/*`)

## Architecture Notes

### Styling System
- Uses Tailwind CSS v3 with PostCSS and Autoprefixer
- CSS custom properties for theming (light/dark mode support)
- Geist Sans and Geist Mono fonts loaded via `next/font/google`
- CSS variables defined in globals.css with `@theme inline` directive

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured for `@/*` imports
- Next.js plugin integrated for optimal TypeScript support

### Key Dependencies
- Next.js 14.0.0 with App Router
- React 18
- TypeScript 5
- Tailwind CSS v3
- axios - HTTP client for API requests
- js-cookie - Cookie management utility
- react-hot-toast - Toast notification system
- lucide-react - Icon library

The codebase is currently a fresh Next.js installation with default scaffolding and would benefit from implementation of actual admin dashboard components and functionality.