import styles from "../styles/Contact.module.css";
export default function Contact() {
  return (
    <div className={styles.container}>
      <p>UIZARQ LLC.</p>
      <h3>Address</h3>
      <p>30 N Gould St STE N</p>
      <p>Sheridan, WY 82801</p>
      <p>ZIP Code 82801</p>
      <h3>Phone</h3>
      <a href="tel:+5493644354975">+54 9 364 435-4975</a>
      <h3>Email</h3>
      <a href="mailto:info@uizarq.com">info@uizarq.com</a>
      <span style={{ display: "block", height: "60px" }} />
      <p>Northwest Registered Agent Service, Inc.</p>
      <p>Efective from 1/12/2022</p>
    </div>
  );
}
