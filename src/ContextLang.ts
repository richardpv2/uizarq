import { createContext } from "react";

const ContextLang = createContext<null | {
  stateLang: "es" | "en";
  setLang: React.Dispatch<React.SetStateAction<"es" | "en">>;
  useLang: () => any;
}>(null);

export default ContextLang;
