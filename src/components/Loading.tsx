import { styled, keyframes } from "solid-styled-components";

const spinner = keyframes`
  to {transform: rotate(360deg);}
`;
const Container = styled("section")`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: 50px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: ${spinner} 0.6s linear infinite;
`;

const Loading = () => {
  return <Container></Container>;
};

export default Loading;
