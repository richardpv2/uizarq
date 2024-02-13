import { createContext } from "react";

const ContextLoaded = createContext<null | {
  stateLoaded: {
    Loader: boolean;
    View: boolean;
  };
  setLoaded: React.Dispatch<
    React.SetStateAction<{
      Loader: boolean;
      View: boolean;
    }>
  >;
}>(null);

export default ContextLoaded;
