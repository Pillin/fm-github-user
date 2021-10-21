import { createContext, createSignal, useContext } from "solid-js";

import { themes } from "../theme";

export const ThemeContext = createContext([themes.base, {}]);

export function ThemeProvider(props: any) {
  const [state, setState] = createSignal(themes.black);
  const store = [
    state,
    {
      changeToBlack() {
        setState({ ...themes.black });
      },
      changeToWhite() {
        setState({ ...themes.white });
      }
    }
  ];

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
