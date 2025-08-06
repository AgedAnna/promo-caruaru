"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Points.module.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { pontos } from "@/utils/pontos";
import Wave from "react-wavify";

const moldura_pontos = "/volta-pra-casa/assets/img/moldura_pontos.png";

const Points = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [current, setCurrent] = useState(0);

  // --- Swipe logic ---
  const startX = useRef<number | null>(null);
  const threshold = 40;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onTouchStart(e: any) {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onTouchEnd(e: any) {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (startX.current !== null) {
      const diff = startX.current - endX;
      if (diff > threshold && current < pontos.length - 1) goNext();
      if (diff < -threshold && current > 0) goPrev();
      startX.current = null;
    }
  }

  const goPrev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () =>
    setCurrent((prev) => (prev < pontos.length - 1 ? prev + 1 : prev));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <b>
              A gente ama Caruaru e a <br />
              prova disso tá aqui!
            </b>
          </h1>
        </div>

        <div className={styles.subtitle}>
          <span>
            A Aposta Ganha é mais que uma casa de aposta, é uma casa de
            <br />
            respeito, valoriza nossa história, cultura e raízes.
          </span>
        </div>

        {!isMobile ? (
          <div className={styles.cardsGrid}>
            {pontos.map((p) => (
              <div className={styles.card} key={p.description}>
                <div className={styles.imgBox}>
                  <Image src={p.img} alt="" fill className={styles.imgPonto} />
                </div>
                <div className={styles.molduraBox}>
                  <Image
                    src={moldura_pontos}
                    alt="moldura_pontos"
                    fill
                    className={styles.imgMoldura}
                    draggable={false}
                  />
                  <span
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: p.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={styles.swipeWrapper}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onTouchStart}
            onMouseUp={onTouchEnd}
          >
            <div className={styles.card}>
              <div className={styles.imgBox}>
                <Image
                  src={pontos[current].img}
                  alt="imgPonto"
                  fill
                  className={styles.imgPonto}
                />
              </div>
              <div className={styles.molduraBox}>
                <Image
                  src={moldura_pontos}
                  alt="moldura_pontos"
                  width={320}
                  height={140}
                  className={styles.imgMoldura}
                  draggable={false}
                />

                <span
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: pontos[current].description,
                  }}
                />
              </div>
            </div>
            <div className={styles.dots}>
              {pontos.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${
                    idx === current ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        )}
        <div className={styles.waveBottom}>
          <Wave
            fill="#FE5500"
            paused={false}
            options={{
              height: 35,
              amplitude: 8,
              speed: 0.35,
              points: 30,
            }}
            style={{
              width: "100%",
              minWidth: "unset",
              height: "60px",
            }}
          />
          <Wave
            fill="#FE5500"
            paused={false}
            options={{
              height: 35,
              amplitude: 8,
              speed: 0.4,
              points: 30,
            }}
            style={{
              width: "100%",
              minWidth: "unset",
              height: "60px",
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Points;
