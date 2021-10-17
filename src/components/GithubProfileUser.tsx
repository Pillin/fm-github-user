import { styled } from "solid-styled-components";
import { IMG } from "./Image";
import { H2, H3, P } from "./Typography";
import SocialLink from "./SocialLink";
import Metrics from "./Metrics";
import TwitterIcon from "../assets/icon-twitter.svg";
import LocationIcon from "../assets/icon-location.svg";
import { Theme, theme } from "../theme";

const Container = styled("section") <{ theme?: Theme }> `
  display: flex;
  margin: 16px 0px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.backgroundBox};
  max-width: 730px;
  min-height: 419px;
  padding: 24px;
  align-content: flex-start;
  > picture > img, > picture   {
    width: 117px;
    height: 117px;
    border-radius: 50%;
  }
  ${theme.breakpoints.mobile} {
    flex-direction: row;
    height: auto;
    > picture > img, > picture   {
      width: 80px;
      height: 80px;
    }
  }
`;

const Header = styled("section") <{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70px;
  align-content: space-between;
  margin-left: 28px;
  width: calc(100% - 170px);
  ${theme.breakpoints.mobile} {
    height: 82px;
    width: auto;
  }
`

const Content = styled("section") <{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px;
  width: calc(100% - 100px);
  margin-left: 120px;
  ${theme.breakpoints.mobile} {
    padding: 0px;
    width: 100%;
    margin-left: 0px;
  }
`;

const Description = styled(P)`
  min-height: 40px;
`;

const SSContent = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImgStyle = {};

const GithubProfile = (props: {
  name: string;
  avatar_url: string;
  created_at: string;
  login: string;
  bio: string;
  twitter_username: string;
  location: string;
  blog: string;
  company: string;
  public_repos: string;
  followers: string;
  following: string;
}) => {
  return (
    <Container>
      <>
        <IMG
          mobile={props.avatar_url}
          desktop={props.avatar_url}
          alt=""
          style={ImgStyle}
        />
        <Header>
          <H2>{props.name}</H2>
          <H3>{props.login}</H3>
          <P>Joined {new Date(props.created_at).toDateString()}</P>
        </Header>
      </>
      <Content>
        <Description>{props.bio}</Description>
        <SSContent>
          <Metrics
            metrics={[
              { name: "Repos", value: props.public_repos },
              { name: "Followers", value: props.followers },
              { name: "Following", value: props.following }
            ]}
          />
          <SocialLink
            icon={{ src: LocationIcon, alt: "location" }}
            value={props.location}
          />
          <SocialLink
            icon={{ src: TwitterIcon, alt: "twitter" }}
            value={props.twitter_username}
          />
          <SocialLink
            icon={{ src: "/src/assets/icon-website.svg", alt: "website" }}
            value={props.blog}
          />
          <SocialLink
            icon={{ src: "/src/assets/icon-company.svg", alt: "company" }}
            value={props.company}
          />
        </SSContent>
      </Content>
    </Container>
  );
};

export default GithubProfile;
