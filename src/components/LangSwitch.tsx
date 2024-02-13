import styles from "../Styles/LangSwitch.module.css";
import ContextLang from "../ContextLang";
import { useContext } from "react";

export default function LangSwitch({ error }: { error: boolean }) {
  const { stateLang, setLang } = useContext(ContextLang)!;
  return (
    <div
      className={styles.lang_switch}
      style={error ? { top: "10px", border: "1px solid black" } : {}}
    >
      <p style={error ? { color: "black" } : {}}>
        {stateLang === "en" ? "EN" : "ES"}
      </p>
      <div>
        <button
          onClick={() =>
            setLang((prevState) => (prevState !== "en" ? "en" : "es"))
          }
        >
          {stateLang !== "en" ? "EN" : "ES"}
        </button>
      </div>
    </div>
  );
}
