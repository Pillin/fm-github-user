import { styled } from "solid-styled-components";
import { theme } from "../theme";

export const PrimaryButton = styled("button") <{ color?: string }>`
  border-style: solid;
  border: 0px;
  border-radius: 10px;
  width: 106px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  background-color: #0079ff;
  color: white;
  &:hover {
    background-color: #60abff;
  }
  ${theme.breakpoints.mobile} {
    width: 106px;
     height: 46px;
    font-size: 12px;
   }
`;


