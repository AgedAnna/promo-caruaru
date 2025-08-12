"use client";

import styles from "./page.module.css";
import HomePage from "@/components/Home/Home";
import History from "@/components/History/History";
import Points from "@/components/Points/Points";
import Footer from "@/components/Fotter/Footer";
import FooterPersonalite from "@/components/FooterPersonalite/FooterPersonalite";
import Ticktes from "@/components/Ticktes/Ticktes";
import { useState } from "react";

export default function Home() {
  const [ageChecked, setAgeChecked] = useState(false);
  const [isUnderage, setIsUnderage] = useState(false);

  const handleYes = () => setAgeChecked(true);
  const handleNo = () => setIsUnderage(true);

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <HomePage />
          <History />
          <Points />
          <Ticktes />
          <FooterPersonalite />
          <Footer />
        </main>
      </div>

      {!ageChecked && !isUnderage && (
        <div className={styles.agegate__overlay}>
          <div className={styles.agegate__modal}>
            <p className={styles.agegate__question}>
              Você possui 18 anos ou mais?
            </p>
            <div className={styles.agegate__buttons}>
              <button className={styles.agegate__btn} onClick={handleNo}>
                NÃO
              </button>
              <button className={styles.agegate__btn} onClick={handleYes}>
                SIM
              </button>
            </div>
          </div>
        </div>
      )}

      {isUnderage && !ageChecked && (
        <div className={styles.agegate__overlay}>
          <div className={styles.agegate__modal}>
            <p className={styles.agegate__message}>
              Você não possui idade suficiente para esse conteúdo.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
