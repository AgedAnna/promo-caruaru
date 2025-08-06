"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./History.module.css";
import { cards } from "@/utils/cards";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const img = "/volta-pra-casa/assets/img/traco.png";
const arrow = "/volta-pra-casa/assets/img/setinha.png";
const base_fotos = "/volta-pra-casa/assets/img/base_fotos.png";

const History = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [current, setCurrent] = useState(0);

  // --- Swipe logic ---
  const startX = useRef(null);
  const threshold = 40; // mínimo para contar swipe

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onTouchStart(e: any) {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onTouchEnd(e: any) {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (startX.current !== null) {
      const diff = startX.current - endX;
      if (diff > threshold && current < cards.length - 1) goNext();
      if (diff < -threshold && current > 0) goPrev();
      startX.current = null;
    }
  }

  const goPrev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () =>
    setCurrent((prev) => (prev < cards.length - 1 ? prev + 1 : prev));

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

      <div className={styles.sliderWrapper}>
        {/* Setinha esquerda */}
        <button
          className={styles.arrow}
          onClick={goPrev}
          aria-label="Anterior"
          type="button"
        >
          <span className={styles.arrowIconLeft}>
            {current > 0 && (
              <Image
                src={arrow}
                alt="seta para a esquerda"
                fill={false}
                width={32}
                height={32}
              />
            )}
          </span>
        </button>

        {/* CARD com swipe */}
        <div
          className={styles.cardsWrapper}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onTouchStart}
          onMouseUp={onTouchEnd}
        >
          <Image
            src={base_fotos}
            alt="Base fotos"
            fill
            className={styles.baseFotos}
            priority
            draggable={false}
          />

          <div className={styles.cardContent}>
            {!isMobile && (
              <div className={styles.left}>
                <span className={styles.description}>
                  {cards[current].description}
                </span>
              </div>
            )}

            <div className={styles.right}>
              <Image
                src={cards[current].img}
                alt="Foto do evento"
                fill
                className={styles.cardImage}
                priority
                draggable={false}
              />
            </div>

            {isMobile && (
              <div className={styles.left}>
                <span className={styles.description} style={{ paddingTop: 80 }}>
                  {cards[current].description}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Setinha direita */}
        <button
          className={styles.arrow}
          onClick={goNext}
          aria-label="Próximo"
          type="button"
        >
          <span className={styles.arrowIconRight}>
            {current < cards.length - 1 && (
              <Image
                src={arrow}
                alt="seta para a direita"
                fill={false}
                width={32}
                height={32}
              />
            )}
          </span>
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              idx === current ? styles.activeDot : ""
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      <footer className={styles.footer}>
        <div className={styles.dottedLineWrapper}>
          <div className={styles.dottedLine}></div>
          <img
            src="/volta-pra-casa/assets/img/flor.png"
            alt="decorativo esquerdo"
            className={styles.footerImgLeft}
            draggable={false}
          />
          <img
            src="/volta-pra-casa/assets/img/boi.png"
            alt="decorativo direito"
            className={styles.footerImgRight}
            draggable={false}
          />
        </div>
      </footer>
    </div>
  );
};

export default History;
