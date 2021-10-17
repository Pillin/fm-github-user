import { styled } from "solid-styled-components";
import { createEffect, createSignal, createResource } from "solid-js";
import { Theme } from "../theme";
import GithubProfileUser from "./GithubProfileUser";
import { makeRequest, Method } from "../hooks/useApiRequest";
import { useData } from "../Contexts/Data";

const Container = styled("article") <{
  theme?: Theme;
}>`
  width: 100%;
  max-width: 730px;
  transition: height 3s linear;
`;

const GithubProfile = (props: any) => {
  const [data,] = useData();
  const [endpoint, setEndpoint] = createSignal("");
  const [getData] = createResource(endpoint, makeRequest(Method.get, {}));

  createEffect(() => {
    const url = `https://api.github.com/users/${data().name}`;
    if (data().name) {
      setEndpoint(url);
    }
  });

  return (
    <Container>
      {getData.loading && "LOADING"}
      {getData.error && "ERROR"}
      {!getData.loading && !getData.error && <GithubProfileUser {...getData()} />}
    </Container>
  );
};

export default GithubProfile;
