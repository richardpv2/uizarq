import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ContextLoaded from "./ContextLoaded";
import ContextLang from "./ContextLang";

// Componentes
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Lenguajes
import LangEs from "./languages/es.json";
import LangEn from "./languages/en.json";

function AppLayout() {
  const [stateLoaded, setLoaded] = useState({
    Loader: false,
    View: false,
  });
  const [stateLang, setLang] = useState<"es" | "en">("en");
  const useLang = useCallback(() => {
    switch (stateLang) {
      case "es":
        return LangEs;
      case "en":
        return LangEn;

      default:
        break;
    }
  }, [stateLang]);

  useEffect(() => {
    const imgs = [...window.document.getElementsByTagName("img")];
    if (imgs.length > 1 && !stateLoaded.View) {
      const CheckLoadedImgs = () => imgs.every((img) => img.complete === true);
      CheckLoadedImgs()
        ? setLoaded((prevState) => ({ ...prevState, View: true }))
        : imgs.forEach((img) => {
            img.onload = () => {
              if (CheckLoadedImgs())
                setLoaded((prevState) => ({ ...prevState, View: true }));
            };
          });
    } else if (stateLoaded.View) {
      imgs.forEach((img) =>
        setTimeout(() => img.classList.remove("ImgLoading"), 200)
      );
    }
  }, [stateLoaded]);

  return (
    <ContextLang.Provider value={{ stateLang, setLang, useLang }}>
      <ContextLoaded.Provider value={{ stateLoaded, setLoaded }}>
        <Loader />
        {stateLoaded.Loader ? (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ) : (
          <></>
        )}
      </ContextLoaded.Provider>
    </ContextLang.Provider>
  );
}
export default AppLayout;
