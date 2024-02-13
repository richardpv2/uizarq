import { useRef, useState, useEffect } from "react";
import { NavLink as GenericNavLink, Link, useLocation } from "react-router-dom";
import styles from "../Styles/Header.module.css";
import LangSwitch from "./LangSwitch";
import Logo from "../assets/img/logo.webp";
import ContextLang from "../ContextLang";
import { useContext } from "react";

const NavLink = ({ ...props }) => {
  return (
    <li>
      <GenericNavLink
        to={props.to}
        {...props}
        style={({ isActive }) => ({
          color: isActive ? "rgb(75, 75, 75)" : "white",
          borderBottom: "1px solid " + (isActive ? "rgb(75, 75, 75)" : "white"),
        })}
      >
        {props.children}
      </GenericNavLink>
    </li>
  );
};

export default function Header() {
  const { useLang } = useContext(ContextLang)!;
  const Lang = useLang();
  const path = useLocation().pathname;
  const HeaderRef = useRef<HTMLHeadElement>(null);
  const [stateMenu, setMenuState] = useState(false);

  function HeaderListener() {
    if (
      document.documentElement.scrollTop >=
      document.documentElement.clientHeight -
        document.documentElement.clientHeight / 2
    ) {
      HeaderRef.current!.classList.add(styles.headerActive);
    } else {
      HeaderRef.current!.classList.remove(styles.headerActive);
    }
  }

  useEffect(() => {
    setMenuState(false);
    if (path === "/") {
      HeaderRef.current!.classList.remove(styles.headerActive);
      window.addEventListener("scroll", HeaderListener);
      return () => window.removeEventListener("scroll", HeaderListener);
    } else {
      if (path !== "/404")
        HeaderRef.current!.classList.add(styles.headerActive);
    }
  }, [path]);

  return path === "/404" ? (
    <LangSwitch error={true} />
  ) : (
    <>
      <header ref={HeaderRef} className={styles.header}>
        <LangSwitch error={false} />
        <Link
          to="/"
          className={styles.logo}
          title={Lang.goTo + Lang.NavBar.Home}
        >
          <img src={Logo} alt="Logo Uizarq" draggable="false" />
        </Link>
        <button
          className={
            styles.button + (stateMenu ? " " + styles.buttonActive : "")
          }
          onClick={() => setMenuState(!stateMenu)}
        />
        <nav className={styles.nav + (stateMenu ? " " + styles.navActive : "")}>
          <ul>
            <NavLink to="/" title={Lang.goTo + Lang.NavBar.Projects}>
              {Lang.NavBar.Projects}
            </NavLink>
            <NavLink to="Prices" title={Lang.goTo + Lang.NavBar.RenderQuotes}>
              {Lang.NavBar.RenderQuotes}
            </NavLink>
            <NavLink to="AboutUs" title={Lang.goTo + Lang.NavBar.AboutUs}>
              {Lang.NavBar.AboutUs}
            </NavLink>
            <NavLink to="Contact" title={Lang.goTo + Lang.NavBar.Contact}>
              {Lang.NavBar.Contact}
            </NavLink>
          </ul>
        </nav>
      </header>
      {stateMenu ? (
        <span
          className={styles.backgroundClose}
          onClick={() => setMenuState(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
}
