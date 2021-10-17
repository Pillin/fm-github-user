import { styled } from "solid-styled-components";
import { Icon } from "./Image";
import { P } from "./Typography";
import { theme } from "../theme"

const Container = styled("section")`
  display: flex;
  width: 50%;
  margin: 16px 0px 0px 0px;
  ${theme.breakpoints.mobile} {
     width: 100%;
  }
`;

const Description = styled(P)`
  padding-left: 18px;
`;

const SocialLink = (props: {
  icon: { src: string; alt: string };
  value: string;
}) => {
  return (
    <Container>
      <Icon src={props.icon.src} alt={props.icon.alt} style={{ width: "auto", height: "20px", margin: "0px" }} />
      <Description>
        {props.value && <a>{props.value}</a>}
        {!props.value && <>Not Available</>}
      </Description>
    </Container>
  );
};

export default SocialLink;
