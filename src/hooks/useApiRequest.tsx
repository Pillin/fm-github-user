
import axios from "axios";
import { createResource } from "solid-js";

export enum Method {
  get = "get"
}


export const makeRequest = (verb: Method, params: any) => async (endpoint: string) => (await axios[verb](endpoint, params)).data;

const useApiRequest = (
  endpoint: string,
  { verb = Method.get, params = {} }: { verb?: Method; params?: any } = {}
) => {
  const [getData] = createResource(endpoint, makeRequest(verb, params));
  return { getData };
};

export default useApiRequest;
