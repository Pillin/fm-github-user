import { styled } from "solid-styled-components";
import { useContext } from "solid-js";
import { Switch, Match, } from "solid-js";
import { H1 } from "./Typography";
import { Theme } from "../theme";
import { Icon } from "./Image";
import { useTheme } from "../Contexts/Theme"

const Container = styled("section")`
  max-width: 730px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0px;
  color:${({ theme }) => theme.button.color};
`

const DarkTheme = (props: { onClick: () => {} }) => {
  return <Button onClick={props.onClick}>
    DARK
    <Icon src="/src/assets/icon-moon.svg" alt="moon" />
  </Button>
}

const WhiteTheme = (props: { onClick: () => {} }) => <Button onClick={props.onClick}>
  LIGHT
  <Icon src="/src/assets/icon-sun.svg" alt="moon" />
</Button>


const Header = (props: {}) => {
  const [state, { changeToBlack, changeToWhite }] = useTheme();
  return (
    <Container>
      <H1>devfinder</H1>
      <Switch fallback={<DarkTheme onClick={changeToWhite} />}>
        <Match when={state().name === "Black"}><WhiteTheme onClick={changeToWhite} /></Match>
        <Match when={state().name === "White"}><DarkTheme onClick={changeToBlack} /></Match>
      </Switch>
    </Container>
  );
};

export default Header;
