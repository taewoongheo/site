module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "h1 a[linkedheading], h2 a[linkedheading], h3 a[linkedheading], h4 a[linkedheading], h5 a[linkedheading], h6 a[linkedheading]":
              {
                fontWeight: "inherit",
              },

            "code:not(pre code)": {
              backgroundColor: "rgba(155, 155, 155, 0.2)",
              border: "1px dashed rgba(0, 0, 0, 0.4)",
              padding: "0.15em 0.3em",
              borderRadius: "0.25em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },

            mark: {
              backgroundColor: "rgb(217, 245, 162)",
            },

            a: { fontWeight: "500" },
            strong: { fontWeight: "700" },
            "ol > li::marker": { fontWeight: "400" },
            dt: { fontWeight: "700" },

            "ul > li::marker": {
              color: "rgba(0,0,0,0.4)",
              fontWeight: "700",
            },

            blockquote: {
              fontWeight: "600",
              fontStyle: "inherit",
              color: "rgba(0, 0, 0, 1)",
              borderLeftWidth: "2px",
              borderColor: "rgba(0, 0, 0, 0.4)",
              quotes: "none",

              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },

            h1: { fontWeight: "800" },
            "h1 strong": { fontWeight: "900" },
            h2: { fontWeight: "700", fontSize: "2rem" },
            "h2 strong": { fontWeight: "800", fontSize: "2rem" },
            h3: { fontWeight: "600", fontSize: "1.5rem" },
            "h3 strong": { fontWeight: "700", fontSize: "1.5rem" },
            h4: { fontWeight: "500", fontSize: "1.25rem" },
            "h4 strong": { fontWeight: "600", fontSize: "1.25rem" },

            "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": { textDecoration: "none" },

            "thead th": {
              fontWeight: "700",
              borderBottomWidth: "1.5px",
              borderColor: "rgba(0,0,0,0.4)",
            },
            tr: {
              borderBottomWidth: "1px",
              borderColor: "rgba(0,0,0,0.4)",
            },
            "tbody td": {
              borderTopWidth: "1px",
              borderColor: "rgba(0,0,0,0.4)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
