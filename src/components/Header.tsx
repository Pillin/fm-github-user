import { styled } from "solid-styled-components";
import { Switch, Match } from "solid-js";
import { H1 } from "./Typography";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { Icon } from "./Image";
import { useTheme } from "../Contexts/Theme";

const Container = styled("section")`
  max-width: 730px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 32px 0px;
`;

const Button = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0px;
  color: ${({ theme }) => theme().button.color};
`;

const DarkTheme = (props: { onClick: () => {} }) => {
  return (
    <Button onClick={props.onClick}>
      DARK
      <Icon src={MoonIcon} alt="moon" />
    </Button>
  );
};

const WhiteTheme = (props: { onClick: () => {} }) => (
  <Button onClick={props.onClick}>
    LIGHT
    <Icon src={SunIcon} alt="moon" />
  </Button>
);

const Header = (props: {}) => {
  const [state, { changeToBlack, changeToWhite }] = useTheme();
  return (
    <Container>
      <H1>devfinder</H1>
      <Switch fallback={<DarkTheme onClick={changeToWhite} />}>
        <Match when={state().name === "Black"}>
          <WhiteTheme onClick={changeToWhite} />
        </Match>
        <Match when={state().name === "White"}>
          <DarkTheme onClick={changeToBlack} />
        </Match>
      </Switch>
    </Container>
  );
};

export default Header;
