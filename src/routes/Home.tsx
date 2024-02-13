import { useContext } from "react";
import Gallery from "../components/Gallery";
import styles from "../styles/Home.module.css";
import stylesButtons from "../styles/Buttons.module.css";
import ContextLang from "../ContextLang";

import bg from "../assets/img/home/bg.webp";
import Logo from "../assets/img/logo.webp";

function Home() {
  const { useLang } = useContext(ContextLang)!;
  const Lang = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.presentacion}>
        <div className={styles.bgSlider}>
          <img src={bg} alt="backgroundSlide" />
          <img src={bg} alt="backgroundSlide" />
        </div>
        <main className={styles.mainPresentacion}>
          <img
            src={Logo}
            draggable="false"
            alt="Logo Uizarq"
            width="230"
            height="38"
            style={{ marginBottom: "15px" }}
          />
          <p>{Lang.Home.PresentationText}</p>
          <a
            className={stylesButtons.bttnLink + " " + styles.buttonPresentation}
            href="https://cutt.ly/LNDWKt8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Lang.Home.DownloadPortFolio}
          </a>
        </main>
      </div>
      <Gallery />
    </div>
  );
}

export default Home;
