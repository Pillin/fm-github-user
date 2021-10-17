import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { themes, Theme } from "./theme";
import { ThemeProvider as ThemeProviderS } from "solid-styled-components";
import Header from "./components/Header";
import { styled } from "solid-styled-components";
import InputButton from "./components/core/InputButton";
import GithubProfile from "./components/GithubProfile";
import { ThemeProvider, useTheme } from "./Contexts/Theme";
import { DataProvider } from "./Contexts/Data";



const Container = styled("section") <{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const App: Component = () => {
  const [state,] = useTheme();
  const [theme, setTheme] = createSignal(state());


  createEffect(() => {
    console.log("efecto", state());
    setTheme(state());
  });

  return (
    <ThemeProviderS theme={state().name === "Black" ? themes.black : themes.white} >
      {state().name}
      <Container>
        <Header />
        <DataProvider>
          <InputButton label="" />
          <GithubProfile name="fforres" />
        </DataProvider>
      </Container>
    </ThemeProviderS>
  );
};

const AppTheme = () => <ThemeProvider>
  <App />
</ThemeProvider>

export default AppTheme;






