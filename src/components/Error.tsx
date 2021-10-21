import { styled } from "solid-styled-components";

const Container = styled("section")`
  padding: 32px 0px;
  color: ${({ theme }) => theme().typography.p};
`;

const Error = (props: { name: string }) => {
  return <Container>Information isn't found: {props.name}</Container>;
};

export default Error;
