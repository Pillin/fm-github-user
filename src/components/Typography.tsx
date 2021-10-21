import { styled } from "solid-styled-components";
import { Theme } from "../theme";

export const P = styled("p")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.p};
  margin: 0px;
  font-weight: 400;
  line-height: 25px;
  font-size: 15px;
`;

export const H1 = styled("h1")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.h1};
  font-weight: 600;
  margin: 0px;
  font-size: 38px;
`;
export const H2 = styled("h2")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.h2};
  font-weight: 600;
  margin: 0px;
  font-size: 22px;
  line-height: 33px;

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 0px) and (max-width: 425px) {
    font-size: 18px;
  }
`;

export const H3 = styled("h3")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.h3};
  font-weight: 400;
  margin: 0px;
  font-size: 16px;
  line-height: 24px;
`;
export const H4 = styled("h4")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.h4};
  font-weight: 400;
  margin: 0px;
  font-size: 13px;
  line-height: 20px;
`;
export const H5 = styled("h5")<{ theme?: Theme }>`
  color: ${({ theme }) => theme().typography.h5};
  font-weight: 600;
  margin: 0px;
  font-size: 22px;
  line-height: 23px;
`;
