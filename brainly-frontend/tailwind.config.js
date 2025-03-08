/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        marquee: "marquee 10s linear infinite",

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors:{
        gray:{
          50:"rgba(255,255,255,0.5)",
          100:"#eeeeef",
          200:"#e6e9ed",
          600:"#95989c"

        },
        purple:{
          200:"#d9ddee",
          500:"#9492db",
          600:"#7164c0"
        },

      }
    },
  },
  plugins: [
    plugin(addVariablesForColors)
  ],
}



function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
