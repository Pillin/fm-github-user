import type { Component } from "solid-js";
import { Theme } from "./theme";
import { ThemeProvider as ThemeProviderS } from "solid-styled-components";
import Header from "./components/Header";
import { styled } from "solid-styled-components";
import InputButton from "./components/core/InputButton";
import GithubProfile from "./components/GithubProfile";
import { ThemeProvider, useTheme } from "./Contexts/Theme";
import { DataProvider } from "./Contexts/Data";

const Container = styled("section")<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme().background};
`;

const App: Component = () => {
  const [state] = useTheme();

  return (
    <ThemeProviderS theme={state}>
      <Container>
        <Header />
        <DataProvider>
          <InputButton label="" />
          <GithubProfile />
        </DataProvider>
      </Container>
    </ThemeProviderS>
  );
};

const AppTheme = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppTheme;
