import { createContext, createSignal, useContext } from "solid-js";

export const DataContext = createContext([{ name: "" }, {}]);

export function DataProvider(props: any) {
  const [state, setState] = createSignal({ name: "" });
  const store = [
    state,
    {
      changeName(name: string) {
        setState({ name });
      }
    }
  ];

  return (
    <DataContext.Provider value={store}>{props.children}</DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
