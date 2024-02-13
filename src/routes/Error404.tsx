import { Link } from "react-router-dom";
import styles from "../styles/Error404.module.css";
import Logo from "../assets/img/logo.webp";

export default function Error404() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="" draggable="false" />
      <div className={styles.text}>
        <h1>Error 404!</h1>
        <p>The page you are trying to access does not exist or was deleted.</p>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
}
