import { useContext, useEffect, useRef } from "react";
import styles from "../Styles/FooterWindow.module.css";
import btnClose from "../Assets/img/footer/buttonclose.svg";
import ContextLang from "../ContextLang";

interface IWindow {
  stateWindow: 0 | 1 | 2;
  setWindow: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}
const SaltoDeLinea = () => <span className={styles.whitespace} />;
const Titulo = ({ ...props }) => (
  <h2 className={styles.title} {...props}>
    {props.children}
  </h2>
);
const Subtitulo = ({ ...props }) => (
  <h3 className={styles.subtitle} {...props}>
    {props.children}
  </h3>
);
const Parrafo = ({ ...props }) => (
  <p className={styles.paragraph} {...props}>
    {props.children}
  </p>
);

export default function FooterWindow({ stateWindow, setWindow }: IWindow) {
  const refWindow = useRef<HTMLDivElement>(null);
  const { useLang } = useContext(ContextLang)!;
  let index = 0;

  const Lang = useLang();
  const useText = () => {
    index += 1;
    switch (stateWindow) {
      case 1:
        return Lang.FooterScreen.Legal[index - 1];
      case 2:
        return Lang.FooterScreen.Privacy[index - 1];

      default:
        break;
    }
  };

  useEffect(() => {
    if (stateWindow > 0) {
      refWindow.current!.animate(
        [
          { opacity: 0, visibility: "hidden" },
          { opacity: 1, visibility: "visible" },
        ],
        {
          easing: "ease",
          duration: 150,
          fill: "forwards",
        }
      );
    }
  }, [stateWindow]);

  return (
    <div ref={refWindow} className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.text_container} id="text_container">
            <div className={styles.btn_container} id="btn_container">
              <button
                className={styles.btn_close}
                onClick={() => {
                  refWindow
                    .current!.animate(
                      [
                        { opacity: 1, visibility: "visible" },
                        { opacity: 0, visibility: "hidden" },
                      ],
                      {
                        easing: "ease",
                        duration: 150,
                        fill: "forwards",
                      }
                    )
                    .finished.then(() => setWindow(0));
                }}
              >
                <img src={btnClose} alt="" />
              </button>
            </div>
            {stateWindow === 1 && (
              <>
                <Titulo>{useText()}</Titulo>
                <Parrafo>{useText()}</Parrafo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Parrafo>
                  {useText()}
                  <SaltoDeLinea />
                  {useText()}
                </Parrafo>
                <SaltoDeLinea />
                <Parrafo>
                  UIZARQ LLC.
                  <SaltoDeLinea />
                  30 N Gould St STE N
                  <SaltoDeLinea />
                  Sheridan, WY 82801
                  <SaltoDeLinea />
                  Northwest Registered Agent Service, Inc.
                  <SaltoDeLinea />
                  {useText()} 1/12/2022
                  <SaltoDeLinea />
                  {useText()}
                  <a href="tel:+5493644354975">+54 9 364 435-4975</a>
                  <SaltoDeLinea />
                  {useText()}Agustin Orue
                  <SaltoDeLinea />
                  {useText()}
                  <a href="mailto:info@uizarq.com">info@uizarq.com</a>
                </Parrafo>
                <SaltoDeLinea />
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                </Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                  <SaltoDeLinea />
                  {useText()}
                  <SaltoDeLinea />
                  {useText()}
                </Parrafo>
              </>
            )}
            {stateWindow === 2 && (
              <>
                <Titulo>{useText()}</Titulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <ul style={{ paddingLeft: "40px" }}>
                  <li>
                    <Parrafo>{useText()}</Parrafo>
                  </li>
                  <li>
                    <Parrafo>{useText()}</Parrafo>
                  </li>
                </ul>
                <SaltoDeLinea />
                <Parrafo>
                  {useText()}
                  <SaltoDeLinea />
                  <SaltoDeLinea />
                  {useText()}
                </Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <Parrafo>
                  {useText()}
                  <a
                    href="https://www.google.com/intl/es/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.google.com/intl/es/policies/privacy/
                  </a>
                  . {useText()}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .{useText()}
                  <a
                    href="https://www.facebook.com/privacy/explanation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.facebook.com/privacy/explanation
                  </a>
                  .
                </Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>{useText()}</Parrafo>
                <SaltoDeLinea />
                <Subtitulo>{useText()}</Subtitulo>
                <Parrafo>
                  {useText()}{" "}
                  <a href="mailto:info@uizarq.com">info@uizarq.com</a>
                  {useText()}
                </Parrafo>
                <SaltoDeLinea />
                <Parrafo>
                  UIZARQ LLC.
                  <SaltoDeLinea />
                  30 N Gould St STE N
                  <SaltoDeLinea />
                  Sheridan, WY 82801
                  <SaltoDeLinea />
                  Northwest Registered Agent Service, Inc.
                  <SaltoDeLinea />
                  {useText()} 12/01/2022
                  <SaltoDeLinea />
                  {useText()}
                  <a
                    href="tel:+5493644354975"
                    style={{ textDecoration: "none", color: "#0066CC" }}
                  >
                    +54 9 364 435-4975
                  </a>
                  <SaltoDeLinea />
                  {useText()}{" "}
                  <a href="mailto:info@uizarq.com">info@uizarq.com</a>
                </Parrafo>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
