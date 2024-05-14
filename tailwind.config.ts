import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "debpink":"rgb(255 5 59)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        },
        borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage:{
        "office":"url(https://marketplace.canva.com/EAE4zByjCKI/1/0/900w/canva-black-and-white-simple-motivation-phone-wallpaper-OKXDbZ05FS0.jpg)",
        "brain":"url(https://wallpaperaccess.com/full/3221579.jpg)",
        "robot":"url(https://w0.peakpx.com/wallpaper/928/475/HD-wallpaper-wall-e-movie-poster-thumbnail.jpg)",
        "ang":"url(https://i.pinimg.com/originals/12/11/32/1211329789c0fdcafbfa1e26b899ef50.jpg)",
        "duck":"url(https://i.pinimg.com/564x/e5/c8/ca/e5c8cadf60004969803fda42cc2f53ac.jpg)",
        "start":"url(https://w0.peakpx.com/wallpaper/715/145/HD-wallpaper-naruto-amoled-anime-black-iphone-kid-oled-orange-samsung-tablet-thumbnail.jpg)",
        "microphone":"url(https://w.forfun.com/fetch/11/114908eb6bbb058dbda7b1a1cab71f9b.jpeg)",
        "hands":"url(https://img.freepik.com/premium-photo/two-businessman-shake-hand-with-partner_9493-6813.jpg)"
      }, keyframes: {
        'fade-in-bottom': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-bottom': 'fade-in-bottom 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
 
export default config;