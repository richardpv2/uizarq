import { useContext, useEffect, useRef, useState } from "react";
import ContextLoaded from "../ContextLoaded.ts";
import styles from "../styles/Loader.module.css";

import VideoLogo from "../assets/video/logo_animacion.webm";
import ImageLogo from "../assets/img/logo.webp";
import { useLocation } from "react-router-dom";

function Loader() {
  const [stateLoader, setLoader] = useState<null | 0 | 1 | 2>(null);
  const { stateLoaded, setLoaded } = useContext(ContextLoaded)!;

  const path = useLocation().pathname;

  const refVideo = useRef<null | HTMLVideoElement>(null);
  const refImg = useRef<null | HTMLImageElement>(null);
  const refLoader = useRef<null | HTMLDivElement>(null);
  const refProbablyError = useRef<null | HTMLDivElement>(null);

  function RunLoader() {
    if (
      refImg.current?.complete === true &&
      refVideo.current?.readyState === 4 &&
      stateLoader === null
    ) {
      setLoader(0);
      refVideo.current
        .animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
          easing: "ease",
          fill: "forwards",
          delay: 200,
        })
        .finished.then(() => {
          setLoader(1);
          setLoaded((prevState) => ({ ...prevState, Loader: true }));
          refVideo.current?.play();
          setTimeout(StopLoader, 60000);
        });
      refProbablyError.current!.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        easing: "ease",
        fill: "forwards",
        delay: 15000,
      });
    }
  }
  function StopLoader() {
    if (stateLoaded.View && stateLoader === 1) {
      refVideo.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        easing: "ease",
        fill: "forwards",
      });
      refImg.current
        ?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          easing: "ease",
          fill: "forwards",
        })
        .finished.then(() => {
          refVideo.current?.pause();
          refLoader.current
            ?.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 500,
              easing: "ease",
              fill: "forwards",
              delay: 1000,
            })
            .finished.then(() => {
              setLoader(2);
              window.document.body.style.overflowY = "auto";
            });
        });
    }
  }

  useEffect(StopLoader, [stateLoaded, stateLoader]);
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
    if (stateLoader === 2) {
      setLoaded((prevState) => ({ ...prevState, View: false }));
    }
  }, [path]);

  return stateLoader !== 2 ? (
    <div className={styles.container} ref={refLoader}>
      <video
        muted
        loop
        ref={refVideo}
        draggable="false"
        style={{ opacity: 0 }}
        onLoadedData={RunLoader}
      >
        <source src={VideoLogo} />
      </video>
      <img
        src={ImageLogo}
        ref={refImg}
        draggable="false"
        style={{ opacity: 0 }}
        onLoad={RunLoader}
      />
      <p ref={refProbablyError} style={{ opacity: 0 }}>
        If you have problems with our website, please contact us:{" "}
        <a href="mailto:info@uizarq.com">info@uizarq.com</a>
      </p>
    </div>
  ) : (
    <></>
  );
}

export default Loader;
