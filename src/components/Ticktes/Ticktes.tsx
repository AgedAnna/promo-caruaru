"use client";

import Image from "next/image";
import styles from "./Ticktes.module.css";
import { motion } from "motion/react";

const floatingAssets = [
  {
    src: "/volta-pra-casa/assets/img/presente_direita_cima.png",
    size: "clamp(60px, 14vw, 240px)",
    corner: "topRight",
    delay: 0.5,
  },
  {
    src: "/volta-pra-casa/assets/img/presente_direita_baixo.png",
    size: "clamp(70px, 14vw, 250px)",
    corner: "bottomRight",
    delay: 0.5,
  },
  {
    src: "/volta-pra-casa/assets/img/presente_esquerda_cima.png",
    size: "clamp(30px, 14vw, 170px)",
    corner: "topLeft",
    delay: 1.5,
  },
  {
    src: "/volta-pra-casa/assets/img/presente_esquerda_baixo.png",
    size: "clamp(60px, 14vw, 190px)",
    corner: "bottomLeft",
    delay: 1.5,
  },
];

const floatVariant = {
  animate: (i: number) => ({
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: i * 0.5,
      },
      x: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    },
  }),
};

const Ticktes = () => {
  const bilhete = "/volta-pra-casa/assets/img/bilhete.png";

  return (
    <>
      <div className={styles.container}>
        {floatingAssets.map((asset, idx) => {
          const inlineStyle: React.CSSProperties = {
            width: asset.size,
          };
          const cornerClass = asset.corner
            ? (styles as any)[`corner_${asset.corner}`]
            : "";
          return (
            <motion.img
              key={idx}
              src={asset.src}
              alt={`flutuante-${idx}`}
              className={`${styles.floating} ${cornerClass}`}
              custom={asset.delay}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              variants={floatVariant as any}
              animate="animate"
              style={inlineStyle}
            />
          );
        })}
        <span className={styles.text} style={{ zIndex: 99 }}>
          <b>
            PRA TU QUE É RAIZ DE CARUARU E FEZ
            <br />
            PARTE DA NOSSA HISTÓRIA, A GENTE SEPAROU
            <br />
            UM MIMO ARRETADO!
          </b>
        </span>

        <div className={styles.imageWrapper}>
          <Image
            src={bilhete}
            alt="bilhete"
            className={styles.bilhete}
            width={450}
            height={450}
          />
        </div>

        <div style={{ zIndex: 99 }}>
          <button className={styles.button}>
            RESGATAR MINHAS RODADAS AGORA
          </button>
        </div>
      </div>
    </>
  );
};

export default Ticktes;
