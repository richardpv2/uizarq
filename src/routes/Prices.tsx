import styles from "../styles/Prices.module.css";
import stylesButtons from "../styles/Buttons.module.css";
import Form from "../components/Form";

function Prices() {
  return (
    <div className={styles.container}>
      <h3>RENDER QUOTE</h3>
      <div
        className={styles.infoParagraph}
        style={{
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        <p>
          Select in every line how many renders you need according to the type.
        </p>
        <p style={{ color: "lightblue" }}>
          If you don't know exactly how many render you will need, we can have a
          meeting and help you.
        </p>
        <a
          href="https://calendly.com/uizarq/30min"
          rel="noopener noreferrer"
          target="_blank"
          className={stylesButtons.bttnLink}
          style={{ margin: "30px auto 30px" }}
        >
          Schedule Meeting
        </a>
      </div>
      <Form />
      <h3 style={{ borderTop: "1px solid gray" }}>QUESTIONS</h3>
      <div className={styles.infoParagraph} style={{ textAlign: "justify" }}>
        <p>
          The prices indicated above cannot cover all aspects of the evaluation,
          however, they will be very close to the real ones. Moreover, during
          our conversation, we will be able to discuss the possibilities for a
          discount for you. Do not hesitate to contact us at any time! You will
          also find answers to frequently asked questions below.
        </p>
        <a
          href="https://calendly.com/uizarq/30min"
          rel="noopener noreferrer"
          target="_blank"
          className={stylesButtons.bttnLink}
          style={{ margin: "60px auto 0" }}
        >
          Schedule Meeting
        </a>
      </div>
    </div>
  );
}
export default Prices;
