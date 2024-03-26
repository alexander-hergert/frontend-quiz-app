/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "rubik-italic": ["Rubik-Italic", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
      },
      backgroundColor: {
        html: "rgb(254, 241, 232)",
        css: "rgb(224, 253, 239)",
        js: "rgb(235, 240, 255)",
        accessibility: "rgb(246, 231, 255)",
        react: "rgb(232, 243, 255)",
        nodejs: "rgb(232, 255, 243)",
        sql: "rgb(255, 243, 232)",
        git: "rgb(255, 232, 232)",
        nav: "rgb(167, 41, 245)",
        gray: "rgb(244, 246, 250)",
        green: "rgb(58, 215, 131)",
        red: "rgb(238, 84, 84)",
      },
      textColor: {
        gray: "rgb(171, 193, 225)",
      },
      borderColor: {
        green: "rgb(58, 215, 131)",
        red: "rgb(238, 84, 84)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "rgb(255, 255, 255)",
          secondary: "rgb(244, 246, 250)",
          neutral: "rgb(0, 0, 0)",
          accent: "rgb(98, 108, 127)",
          info: "rgb(167, 41, 245)",
          error: "rgb(238, 84, 84)",
        },
        dark: {
          primary: "rgb(59, 77, 103)",
          secondary: "rgb(49, 62, 81)",
          neutral: "rgb(255, 255, 255)",
          accent: "rgb(171, 193, 225)",
          info: "rgb(167, 41, 245)",
          error: "rgb(255, 255, 255)",
        },
      },
    ],
  },
};
