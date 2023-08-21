/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./node_modules/@themesberg/flowbite/*/.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                "black-100": "#2B2C35",
                "primary-blue": {
                    DEFAULT: "#2B59FF",
                    100: "#F5F8FF",
                },
                "secondary-orange": "#f79761",
                "light-white": {
                    DEFAULT: "rgba(59,60,152,0.03)",
                    100: "rgba(59,60,152,0.02)",
                },
                grey: "#747A88",
            },
            backgroundImage: {
                pattern: "url('/pattern.png')",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
