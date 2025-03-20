import { siteConfig } from '@/config/site';

// Map theme color names to Tailwind color classes
export const themeColors = {
    blue: {
        primary: {
            50: 'bg-blue-50',
            100: 'bg-blue-100',
            600: 'bg-blue-600 hover:bg-blue-700',
            900: 'text-blue-900',
        },
        hover: 'hover:text-blue-600',
    },
    green: {
        primary: {
            50: 'bg-green-50',
            100: 'bg-green-100',
            600: 'bg-green-600 hover:bg-green-700',
            900: 'text-green-900',
        },
        hover: 'hover:text-green-600',
    },
    red: {
        primary: {
            50: 'bg-red-50',
            100: 'bg-red-100',
            600: 'bg-red-600 hover:bg-red-700',
            900: 'text-red-900',
        },
        hover: 'hover:text-red-600',
    },
    // Add more themes as needed
};

// Get current theme from config
export const currentTheme = themeColors[siteConfig.theme.primaryColor as keyof typeof themeColors];

// Define type for valid shade values
type ThemeShade = '50' | '100' | '600' | '900';

// Helper function to get theme class
export function getThemeClass(variant: string, shade: ThemeShade): string {
    return currentTheme.primary[shade] || '';
} 