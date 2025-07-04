import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0033a0",
  primaryLight: "#0066cc",
  accent: "#f2f8fd",
  background: "#f9f9f9",
  cardBackground: "#ffffff",
  border: "#e0e0e0",
  text: "#1a1a1a",
  mutedText: "#666666",
  link: "#0066cc",
};

export const fonts = {
  body: '"Inter", "Segoe UI", "Roboto", sans-serif',
};

export const fontSize = {
  heading: "24px",
  subHeading: "20px",
  bigText: "18px",
  text: "16px",
  small: "14px",
  smaller: "13px",
  tiny: "12px",
  // Responsive
  mobile: {
    heading: "22px",
    subHeading: "18px",
    text: "15px",
    small: "13px",
    smaller: "12px",
    tiny: "11px",
  },
};

export const spacing = {
  xs: "5px",
  sm: "10px",
  md: "20px",
  lg: "30px",
  xl: "40px",
};

export const radius = {
  sm: "5px",
  md: "10px",
  lg: "20px",
};

export const shadows = {
  card: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

export const transitions = {
  base: "ease-in-out 0.3s",
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
    font-size: ${fontSize.text};
    height: 100%;
    scroll-behavior: smooth;
  }
`;
