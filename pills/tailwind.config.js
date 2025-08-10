/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                "pills": {
                    "primary": "#5577AA",     // Main Brand Color
                    "primary-content": "#ffffff",
                    "secondary": "#7799CC",   // Lighter Brand Variant
                    "secondary-content": "#ffffff",
                    "accent": "#8BB9F0",      // Light Accent
                    "accent-content": "#1a202c",
                    "neutral": "#3d4451",     // Dark Gray
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",    // White Base
                    "base-200": "#f8fafc",    // Light Gray
                    "base-300": "#e2e8f0",    // Medium Light Gray
                    "base-content": "#1a202c", // Dark text for light background
                    "info": "#5577AA",        // Info using brand color
                    "info-content": "#ffffff",
                    "success": "#4caf50",     // Success Green
                    "success-content": "#ffffff",
                    "warning": "#ff9800",     // Warning Orange
                    "warning-content": "#ffffff",
                    "error": "#f44336",       // Error Red
                    "error-content": "#ffffff",
                },
                "pills-dark": {
                    "primary": "#6688BB",     // Slightly lighter brand for dark
                    "primary-content": "#ffffff",
                    "secondary": "#8BB9F0",   // Light brand variant
                    "secondary-content": "#1a202c",
                    "accent": "#AACCEE",      // Lighter accent for dark
                    "accent-content": "#1a202c",
                    "neutral": "#2a2e37",     // Dark Neutral
                    "neutral-content": "#ffffff",
                    "base-100": "#1a202c",    // Dark Base
                    "base-200": "#2d3748",    // Dark Gray
                    "base-300": "#4a5568",    // Medium Dark Gray
                    "base-content": "#ffffff", // Light text for dark background
                    "info": "#6688BB",        // Info using brand color
                    "info-content": "#ffffff",
                    "success": "#4caf50",
                    "success-content": "#ffffff",
                    "warning": "#ff9800",
                    "warning-content": "#ffffff",
                    "error": "#f44336",
                    "error-content": "#ffffff",
                },
            },
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula"
        ],
        darkTheme: "pills-dark", // default dark theme
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
}
