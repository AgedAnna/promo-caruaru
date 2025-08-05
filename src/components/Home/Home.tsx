"use client";

import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Home.module.css";

const logo = "/volta-pra-casa/assets/logos/logo.png";
const moon = "/volta-pra-casa/assets/img/moon.png";
const airplane = "/volta-pra-casa/assets/img/airplane.png";
const city = "/volta-pra-casa/assets/img/city.png";
const woman = "/volta-pra-casa/assets/img/woman.png";
const volta_pra_casa = "/volta-pra-casa/assets/logos/volta_pra_casa.png";

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const waveY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Image
        src={moon}
        alt="Lua"
        className={styles.moon}
        width={220}
        height={220}
        priority
      />
      <Image
        src={airplane}
        alt="Avião"
        className={styles.airplane}
        width={180}
        height={100}
        priority
      />
      <Image
        src={city}
        alt="Cidade"
        className={styles.city}
        width={200}
        height={120}
        priority
      />
      <Image
        src={woman}
        alt="Personagem"
        className={styles.woman}
        width={170}
        height={190}
        priority
      />

      <header className={styles.header}>
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={40}
          priority
          style={{ height: "auto", width: "auto", maxWidth: 300 }}
          objectFit="contain"
        />
      </header>

      <main className={styles.main}>
        <Image
          src={volta_pra_casa}
          alt="volta pra casa"
          width={400}
          height={120}
          priority
          className={styles.voltaPraCasaImg}
        />

        <p className={styles.subtitle}>
          Oia, a cidade tá sentindo tua falta, visse? A Aposta Ganha também.
          <br />
          Bora chegar junto de novo e fazer parte desse movimento
          <br />
          que bota Caruaru no topo?
        </p>
        <button className={styles.button}>Voltar pra casa</button>
        <div className={styles.bonus}>
          <strong>GANHE 50 RODADAS GRÁTIS</strong> NO JOGO DO <br />
          RATINHO SORTUDO APOSTANDO SÓ R$1,00!
        </div>
      </main>
    </div>
  );
};

export default HomePage;
