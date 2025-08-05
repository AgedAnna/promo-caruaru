"use client";

import Image from "next/image";
import styles from "./History.module.css";

const img = "/volta-pra-casa/assets/img/traco.png";

const History = () => {
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
          <b>Tu se lembra do que vivemos juntos ?</b>
        </h1>
      </div>

      <div className={styles.subtitle}>
        <span>
          Não foi pouca, tá? Quando a Aposta Ganha chegou em Caruaru, foi pra
          somar, <br />
          dar orgulho ao nosso povo e fazer bonito!
        </span>
      </div>
    </div>
  );
};

export default History;
