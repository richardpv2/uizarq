import { useCallback, useState, useContext } from "react";
import styles from "../styles/Footer.module.css";

import LogoUizarq from "../assets/img/logo.webp";
import LogoVisa from "../assets/img/footer/paymethods/visagris.png";
import LogoPayPal from "../assets/img/footer/paymethods/paypalgris.png";
import LogoMasterCard from "../assets/img/footer/paymethods/mastercardgris.png";
import LogoBanco from "../assets/img/footer/paymethods/girobancariogris.png";

import FooterWindow from "./FooterWindow";
import ContextLang from "../ContextLang";

interface itemsInfoI
  extends Array<{
    position: number;
    title: string;
    url: string;
    file: string;
  }> {}

const clients: itemsInfoI = [
  {
    position: 1,
    title: "Galiscope",
    url: "https://www.galiscope.com/",
    file: "clients/galiscopeblanco.png",
  },
  {
    position: 2,
    title: "Concasa",
    url: "https://concasa.com/",
    file: "clients/concasablanco.png",
  },
  {
    position: 3,
    title: "Grupo J.Carter",
    url: "https://www.grupojcarter.com/",
    file: "clients/jcarterblanco.png",
  },
  {
    position: 4,
    title: "Hba Architects",
    url: "https://hbaarchitects.com/about-us/",
    file: "clients/hba.png",
  },
  {
    position: 5,
    title: "Joseph Kasbar",
    url: "https://www.josephkasbar.com/",
    file: "clients/jk.png",
  },
  {
    position: 6,
    title: "JTC Architects",
    url: "https://jtcarch.com",
    file: "clients/jtc.png",
  },
  {
    position: 7,
    title: "MR Architecture dt",
    url: "https://mrarchitecturedt.ch",
    file: "clients/mrarchitecturedt.png",
  },
];
const networks: itemsInfoI = [
  {
    position: 1,
    title: "LinkedIn",
    url: "https://ar.linkedin.com/company/uizarq",
    file: "networks/linkedinblanco.png",
  },
  {
    position: 2,
    title: "Facebook",
    url: "https://es-la.facebook.com/uizarq/",
    file: "networks/facebookblanco.png",
  },
  {
    position: 3,
    title: "Instagram",
    url: "https://www.instagram.com/uizarq/?hl=es",
    file: "networks/instagramblanco.png",
  },
  {
    position: 4,
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCgsVP6qNnE0wVeI8xViwRIA",
    file: "networks/youtubeblanco.png",
  },
  {
    position: 5,
    title: "Behance",
    url: "https://www.behance.net/uizarq",
    file: "networks/behanceblanco.png",
  },
];

function Footer() {
  const { stateLang } = useContext(ContextLang)!;
  const [stateWindow, setWindow] = useState<0 | 1 | 2>(0);
  const RenderItems = useCallback(
    ({ itemsInfo }: { itemsInfo: itemsInfoI }) => {
      const items = [];
      for (let index = 1; index <= itemsInfo.length; index++) {
        const item = itemsInfo.find((element) => element.position === index);
        items.push(
          <a
            href={item!.url}
            target="_blank"
            rel="noreferrer"
            key={index}
            title={"Go to " + item!.title}
          >
            <img
              draggable="false"
              src={
                new URL("../assets/img/footer/" + item!.file, import.meta.url)
                  .href
              }
              alt={item!.title}
            />
          </a>
        );
      }
      return <>{items}</>;
    },
    []
  );

  return (
    <div className={styles.container}>
      <span className={styles.rainbowLine} />
      <div className={styles.clients}>
        <h2>{stateLang === "en" ? "SOME CLIENTS" : "ALGUNOS CLIENTES"}</h2>
        <div className={styles.clientsLogos}>
          <RenderItems itemsInfo={clients} />
        </div>
      </div>
      <span className={styles.grayLine} />
      <div className={styles.networks}>
        <RenderItems itemsInfo={networks} />
      </div>
      <span className={styles.grayLine} />
      <div className={styles.foot}>
        <div className={styles.legalInfo}>
          <img src={LogoUizarq} alt="Logo Uizarq" draggable="false" />|
          <button onClick={() => setWindow(1)}>LEGAL</button>|
          <button onClick={() => setWindow(2)}>
            {stateLang === "en" ? "PRIVACY" : "PRIVACIDAD"}
          </button>
        </div>
        <div className={styles.payMethods}>
          <img alt="VISA" src={LogoVisa} draggable="false" />
          <img alt="PayPal" src={LogoPayPal} draggable="false" />
          <img alt="MasterCard" src={LogoMasterCard} draggable="false" />
          <img alt="Banco" src={LogoBanco} draggable="false" />
        </div>
        <p className={styles.contactInfo}>
          UIZARQ LLC.
          <span className={styles.whitespace} />
          <span className={styles.whitespace} />
          30 N Gould St STE N
          <span className={styles.whitespace} />
          Sheridan, WY 82801
          <span className={styles.whitespace} />
          <span className={styles.whitespace} />
          {stateLang === "en" ? "Phone" : "Telefono"}:{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5493644354975"
            target="_blank"
            rel="noopener noreferrer"
            title={"Go to WhatsApp"}
            style={{ textDecoration: "none", color: "#0066CC" }}
          >
            +54 9 364 435-4975
          </a>
          <span className={styles.whitespace} />
          E-mail:{" "}
          <a
            href="mailto:info@uizarq.com"
            style={{ textDecoration: "none", color: "#0066CC" }}
          >
            info@uizarq.com
          </a>
        </p>
      </div>
      <FooterWindow stateWindow={stateWindow} setWindow={setWindow} />
    </div>
  );
}

export default Footer;
