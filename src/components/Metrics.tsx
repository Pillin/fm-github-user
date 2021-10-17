import { styled } from "solid-styled-components";
import { theme } from "../theme";

const Container = styled("section")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
  padding: 24px;
  background-color: ${({ theme }) => theme.background};
  margin: 32px 0px;
  ${theme.breakpoints.mobile} {
    font-size: 11px;
    text-align: center;
  }
`;

const Content = styled("section")`
  display: flex;
  flex-direction: column;
  min-width: 32%;
  color: ${({ theme }) => theme.typography.metric};

  > div:nth-child(2) {
    font-weight: 600;
  }
  ${theme.breakpoints.mobile} {
    > div:nth-child(2) {
      font-size: 16px;
    }
  }
`;

const Metric = (props: { name: string; value: string }) => {
  return (
    <Content>
      <div>{props.name}</div>
      <div>{props.value}</div>
    </Content>
  );
};

const Metrics = (props: { metrics: { name: string; value: string }[] }) => {
  return (
    <Container>
      {props.metrics.map((elem, index) => (
        <Metric {...elem} />
      ))}
    </Container>
  );
};

export default Metrics;
