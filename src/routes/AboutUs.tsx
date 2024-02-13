import styles from "../styles/AboutUs.module.css";

import LinkedInLogo from "../assets/img/footer/networks/linkedinblanco.png";
import InstagramLogo from "../assets/img/footer/networks/instagramblanco.png";

var isChrome = !!window.chrome;

const InfoStaff = {
  descripciones: [
    {
      imagen: "1.webp",
      nombre: "ALESSANDRO POZZATTI",
      rango: "CEO | FOUNDER",
      texto: [
        "Alessandro is architect, specialized in 3D art and animations.",
        "His main role at Uizarq is to challenge the team to new projects and ways of working.",
        "He is obsessed with meeting the times and interpreting ideas correctly.",
      ],
      redes: {
        linkedin: "https://www.linkedin.com/in/alessandropozzatti/",
        instagram: "https://www.instagram.com/alessandro.pozzatti/",
      },
    },
    {
      imagen: "2.webp",
      nombre: "AGUSTÍN ORUE",
      rango: "PROJECT MANAGER | FOUNDER",
      texto: [
        "Agustín is architect, specialized in virtual tours, 3D modeling, and BIM.",
        "His main role at Uizarq is to manage the resources for each project.",
        "He is obsessed with details and process improvement.",
      ],
      redes: {
        linkedin: "https://www.linkedin.com/in/agustinorue/",
        instagram: "https://www.instagram.com/_agustin.o/",
      },
    },
    {
      imagen: "3.webp",
      nombre: "MAGALI BAEZ",
      rango: "3D ARTIST | PARTNER",
      texto: [
        "Magalí is architect specialized in design and 3D art.",
        "Her main role at Uizarq is to be in charge of exterior visualizations.",
        "She is obsessed with details and good lighting.",
      ],
      redes: {
        linkedin: "https://www.linkedin.com/in/magalibaez",
        instagram: "https://www.instagram.com/baezmagali/",
      },
    },
    {
      imagen: "4.webp",
      nombre: "LETISSIA POZZATTI",
      rango: "3D ARTIST | PARTNER",
      texto: [
        "Letissia is architect, specialized in design and 3D art.",
        "Her main role at Uizarq is to be in charge of interior visualizations.",
        "She is obsessed with knowing the new trends of Architecture, and loves to understand the identity of every project.",
      ],
      redes: {
        linkedin: "https://www.linkedin.com/in/letissiapozzattiarquitecta",
        instagram: "https://www.instagram.com/letipozzatti",
      },
    },
    {
      imagen: "5.webp",
      nombre: "GIANFRANCO CHEVALLIER",
      rango: "COMMERCIAL MANAGER | PARTNER",
      texto: [
        "Gianfranco is a coaching and communication specialist.",
        "His main role at Uizarq is to help the client in the prior process at the start of the new project.",
        "He is obsessed with reading, sports, and personal development.",
      ],
      redes: {
        linkedin:
          "https://www.linkedin.com/in/gianfranco-chevalier-marketing-inmobiliario-71b1261a6/",
        instagram: "https://www.instagram.com/gianchevalier/",
      },
    },
    {
      imagen: "6.webp",
      nombre: "SEBASTIAN POZZATTI",
      rango: "PHOTOGRAPHER",
      texto: [
        "Sebastian is photographer, specialized in video production.",
        "His main role at Uizarq is to take photos of the landscapes of every project and to do each video production.",
        "He is obsessed with technology, photography and nature.",
      ],
      redes: {
        linkedin:
          "https://www.linkedin.com/in/sebastian-pozzatti-seltzer-513a21189/",
        instagram: "https://www.instagram.com/spozzatt/",
      },
    },
    {
      imagen: "7.webp",
      nombre: "FIONA UI",
      rango: "HOUSE KEEPER",
      texto: [
        "She is the mistress of the house, specialized in greeting when a client arrives and barking if something is not right.",
        "She is obsessed with balls, bones and walking around the square.",
      ],
      redes: {
        instagram: "https://www.instagram.com/fiona_ui/",
      },
    },
  ],
  goTo: {
    LinkedIn: "Go to LinkedIn",
    Instagram: "Go to Instagram",
  },
};

function AboutUs() {
  function StaffRenderLoop() {
    const items: JSX.Element[] = [];
    InfoStaff.descripciones.forEach((item, index) => {
      items.push(
        <div className={styles.staffItem} key={index}>
          <div style={{ position: "relative" }}>
            <picture className={styles.staffImg}>
              <img
                src={
                  new URL(
                    "../assets/img/aboutus/" + item.imagen,
                    import.meta.url
                  ).href
                }
                alt=""
                draggable="false"
              />
            </picture>
            <div className={styles.staffName}>
              <p>{item.nombre}</p>
              <span>{item.rango}</span>
            </div>
            <div className={styles.staffSocialMedia}>
              {item.redes.linkedin ? (
                <a
                  href={item.redes.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={InfoStaff.goTo.Instagram}
                >
                  <img
                    src={LinkedInLogo}
                    alt="Logo LinkedIn"
                    draggable="false"
                  />
                </a>
              ) : (
                <></>
              )}
              <a
                href={item.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title={InfoStaff.goTo.Instagram}
              >
                <img
                  src={InstagramLogo}
                  alt="Logo Instagram"
                  draggable="false"
                />
              </a>
            </div>
          </div>
          <div className={styles.staffText}>
            {item.texto.map((texto, i) => (
              <p key={i}>{texto}</p>
            ))}
          </div>
        </div>
      );
    });
    return <div className={styles.staff}>{items}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoStaff}>
        <h1>THE TEAM</h1>
        <p>
          <span>Uizarq</span> is an architecture visualization studio. Last year
          we worked on 39 projects in countries such as: France, England,
          Switzerland, Costa Rica, Chile, Argentina, Paraguay and Africa.
        </p>
        <p>
          We think architecture is the mother of all arts. That is why we not
          only seek to make images commercially correct, but also we want them
          to gather a bit of that art that motivates us.
        </p>
        <p>
          Apart from carrying out visualization and architecture projects, we
          enjoy passing on what we know. For that reason we will son begin to
          offer coutses in some programs.
        </p>
        <a
          className={
            isChrome ? styles.buttonStaffChrome : styles.buttonStaffFirefox
          }
          href="https://youtu.be/pYdqY4nJoP8"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      {StaffRenderLoop()}
    </div>
  );
}

export default AboutUs;
