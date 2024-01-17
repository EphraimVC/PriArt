/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            abril: ["Abril Fatface", "serif"],
        },
        extend: {
            backgroundImage: {
                mainBg: "url('/src/assets/bgImage.png')",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
