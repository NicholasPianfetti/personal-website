# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio website built with TypeScript, React 19, and Tailwind CSS 4. The project uses Turbopack for enhanced development and build performance.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack)
- **Production build**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Linting**: `npm run lint` (ESLint with Next.js configurations)

## Project Structure

- **App Router**: Uses Next.js 15 app directory structure (`src/app/`)
- **Components**: Portfolio sections located in `src/components/`
  - Individual components for each section: Hero, About, Experience, Projects, AdditionalExperience, Interests
  - Header component for navigation
- **Styling**: Tailwind CSS 4 with custom CSS variables and dark mode support
- **TypeScript**: Strict TypeScript configuration with path aliases (`@/*` maps to `./src/*`)

## Key Technologies

- **Next.js 15**: App Router with Turbopack
- **React 19**: Latest React features
- **Tailwind CSS 4**: Modern CSS framework with inline theme configuration
- **TypeScript**: Strict type checking enabled
- **Geist Fonts**: Primary typography (Geist Sans and Geist Mono)

## Architecture Notes

- Single-page application with component-based sections
- Dark mode support via CSS custom properties and `prefers-color-scheme`
- Responsive design with mobile-first approach
- ESLint configured with Next.js core web vitals and TypeScript rules
- No test framework currently configured
- No additional documentation or development rules files present

## Component Structure

Portfolio components are placeholder files with comment descriptions indicating their intended purpose. The main layout uses custom CSS variables for theming and includes font optimization through Next.js font loading.