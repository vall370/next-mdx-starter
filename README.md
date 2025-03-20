# Next.js Content Boilerplate

This is a flexible boilerplate for creating content-driven websites using Next.js. It includes a configurable theme system, modular components, and content management through MDX or a configurable data structure.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### Site Configuration

Edit the `src/config/site.ts` file to customize:

- Site name, description, and metadata
- Navigation links
- Footer columns and links
- Contact information
- Theme colors

### Content Configuration

Edit the `src/config/content.ts` file to:

- Define content items for your site
- Configure features and metadata
- Set up default fallback content templates

### Theming

The project includes a theme system in `src/styles/theme.ts` that maps theme names to Tailwind classes. You can:

1. Change the primary theme color in `site.ts`
2. Add new theme color schemes in `theme.ts`
3. Customize the CSS variables in `globals.css`

### Components

The main components are:

- `Header` - Site navigation
- `Footer` - Site footer with configurable columns
- `HeroSection` - Customizable hero area
- `MDXContent` - Renders MDX content

### Adding Pages

1. Create MDX files in `src/blogs/` folder
2. Add content items in `src/config/content.ts`
3. The dynamic routes will automatically generate pages for your content

## Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── [slug]/           # Dynamic pages based on content
│   ├── blogs/            # Blog pages
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
├── config/               # Site configuration
│   ├── site.ts           # Main site settings
│   └── content.ts        # Content items configuration
├── lib/                  # Utility functions
├── styles/               # Theme and styling utilities
└── types/                # TypeScript type definitions
```

## Adding New Content Types

To add a new content type:

1. Add items to the `contentConfig.items` object in `src/config/content.ts`
2. Create a new dynamic route in `src/app/[your-content-type]/[slug]/page.tsx`
3. Update item fetching functions to fetch your new content type

## Deployment

Deploy your customized site to Vercel:

```bash
npm run build
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/nextjs-content-boilerplate)

## License

This project is MIT licensed.

## SEO Features

### Automatic Sitemap Generation

The boilerplate automatically generates a sitemap.xml file during the build process. The sitemap includes:

- All dynamic content pages (insurance pages, blog posts, etc.)
- Static pages
- Each URL includes lastModified, changeFrequency, and priority information

The sitemap is accessible at `/sitemap.xml`

### Robots.txt

A robots.txt file is automatically generated to allow search engines to discover your sitemap.

### How to Customize

To customize the sitemap generation:

1. Edit `src/app/sitemap.ts` to include additional routes or change frequency/priority settings
2. Make sure your `siteConfig.url` is set correctly in `src/config/site.ts`
