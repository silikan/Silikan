module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                prgreen: {
                    50: "#D4FADE",
                    100: "#6cffbb",
                    200: "#62ffb1",
                    300: "#58ffa7",
                    400: "#4eff9d",
                    500: "#44f993",
                    600: "#1cd16b",
                    700: "#1abf5c",
                    800: "#18b74d",
                    900: "#16a53e",
                },

                prblue: {
                    50: "#CCCED6",
                    100: "#000826",
                    200: "#999DAD",
                    300: "#002FEB",
                    400: "#001D8F",
                    500: "#000A33",
                    600: "#000826",
                    700: "#00051A",
                    800: "#000414",
                    900: "#00020A",
                },
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
    darkMode: "class",
};