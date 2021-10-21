import { createSignal } from "solid-js";

import { styled } from "solid-styled-components";
import { PrimaryButton } from "../Buttons";
import { Icon } from "../Image";
import { Theme, theme } from "../../theme";
import { useData } from "../../Contexts/Data";
export interface InputButtonProps {
  label: string;
}

const Container = styled("section")`
  width: 100%;
  max-width: 730px;
`;

const Content = styled("section")<{ theme?: Theme }>`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme().backgroundBox};
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;

  ${theme.breakpoints.mobile} {
    height: 60px;
  }
`;

const Input = styled("input")`
  height: 50px;
  background: transparent;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  border-style: solid;
  border: 0px;
  color: ${({ theme }) => theme().typography.input};
  outline: transparent;
  &:focus {
    border: 0px;
  }
  &::placeholder {
    color: ${({ theme }) => theme().typography.input};
  }
  ${theme.breakpoints.mobile} {
    font-size: 13px;
  }
`;

const Span = styled("span")`
  color: #f74646;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0px;
  min-width: 110px;
  padding: 0px 8px;
`;

const InputButton = (props: InputButtonProps) => {
  const [data, { changeName }] = useData();
  const [name, setName] = createSignal("");
  return (
    <Container>
      <label>{props.label}</label>
      <Content>
        <Icon src="/src/assets/icon-search.svg" alt="icon search" />
        <Input
          placeholder="Search Github username"
          onChange={(e) => setName(e.target.value)}
          value={name()}
        />

        <PrimaryButton
          onClick={() => {
            changeName(name());
          }}
        >
          Search
        </PrimaryButton>
      </Content>
    </Container>
  );
};

export default InputButton;
