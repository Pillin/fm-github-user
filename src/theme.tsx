export const baseTheme = {
  breakpoints: {
    mobile: "@media (min-width: 0px) and (max-width: 768px)"
  }
};

const blackTheme = {
  ...baseTheme,
  name: "Black",
  background: "#141d2f",
  backgroundBox: "#1e2a47",
  typography: {
    p: "#ffffff",
    h1: "#ffffff",
    h2: "#ffffff",
    h3: "#0079ff;",
    h4: "#ffffff",
    h5: "#ffffff",
    input: "white",
    metricDisabled: "#f2f2f2",
    metric: "#ffffff"
  },
  button: {
    color: "white"
  }
};

const whiteTheme = {
  ...baseTheme,
  name: "White",
  background: "#f6f8ff",
  backgroundBox: "#ffffff",
  typography: {
    p: "#4b6a9b",
    h1: "#2b3442",
    h2: "#2b3442",
    h3: "#0079ff",
    h4: "#4b6a9b",
    h5: "#4b6a9b",
    input: "#4b6a9b",
    metricDisabled: "#f2f2f2",
    metric: "#4b6a9b"
  },
  button: {
    color: "black"
  }
};

export const themes = {
  base: whiteTheme,
  black: blackTheme,
  white: whiteTheme
};

export const theme = themes.base;

export type Theme = typeof themes.base;
