/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  // Enables Tailwind's dark mode to work based on a class (e.g., <html class="dark">)
  // Our useTheme hook will manage this class alongside DaisyUI's data-theme attribute.
  darkMode: "class", 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers all files where you use Tailwind/DaisyUI
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here if needed
    },
  },
  
  // Add DaisyUI plugin
  plugins: [
    require("daisyui")
  ],
  
  // DaisyUI specific configuration
  daisyui: {
    // themes: true, // true: all themes | false: only light + dark | array: specific themes
    themes: ["light", "dark"], // Specify "light" and "dark" themes. 
                               // These names will be used in the data-theme attribute.
    darkTheme: "dark", // name of one of the included themes for dark mode by default
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
