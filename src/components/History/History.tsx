"use client";

import Image from "next/image";
import styles from "./History.module.css";
import { cards } from "@/utils/cards";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const img = "/volta-pra-casa/assets/img/traco.png";
const base_fotos = "/volta-pra-casa/assets/img/base_fotos.png";
const History = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <Image
          src={img}
          alt="img"
          className={styles.moon}
          width={220}
          height={220}
          priority
        />
      </div>

      <div className={styles.title}>
        <h1>
          <b>Tu se lembra do que vivemos juntos?</b>
        </h1>
      </div>

      <div className={styles.subtitle}>
        <span>
          Não foi pouca, tá? Quando a Aposta Ganha chegou em Caruaru, foi pra
          somar, <br />
          dar orgulho ao nosso povo e fazer bonito!
        </span>
      </div>

      <div className={styles.cardsWrapper}>
        <Image
          src={base_fotos}
          alt="Base fotos"
          fill
          className={styles.baseFotos}
          priority
          draggable={false}
        />

        {cards.map((c, idx) => (
          <div className={styles.cardContent} key={idx}>
            {/* Descrição à esquerda (desktop) ou em cima (mobile) */}
            {!isMobile && (
              <div className={styles.left}>
                <span className={styles.description}>{c.description}</span>
              </div>
            )}

            {/* Imagem à direita (desktop) ou embaixo (mobile) */}
            <div className={styles.right}>
              <Image
                src={c.img}
                alt="Foto do evento"
                fill
                className={styles.cardImage}
                priority
                draggable={false}
              />
            </div>

            {isMobile && (
              <div className={styles.left}>
                <span className={styles.description}>{c.description}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
