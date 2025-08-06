import Image from "next/image";
import styles from "./FooterPersonalite.module.css";

const FooterPersonalite = () => {
  const img = "/volta-pra-casa/assets/img/footer_img.png";

  return (
    <div className={styles.footer}>
      <span className={styles.text}>
        Voltar para Aposta Ganha é como voltar pro <b>São João</b>, pro{" "}
        <b>abraço de mãe, pra casa.</b>
        <br />É voltar pra Caruaru, pro orgulho de ser da nossa terra.
      </span>

      <span className={styles.text}>
        Com tu junto <b>a gente segue investindo no melhor dessa terra.</b> Bora
        fazer <br />
        Caruaru brilhar ainda mais!
      </span>

      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt="footer_img"
          fill
          className={styles.img}
          sizes="(max-width: 600px) 70vw, 300px"
        />
      </div>
    </div>
  );
};

export default FooterPersonalite;
