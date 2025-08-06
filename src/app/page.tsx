"use client";

import styles from "./page.module.css";
import HomePage from "@/components/Home/Home";
import History from "@/components/History/History";
import Points from "@/components/Points/Points";
import Footer from "@/components/Fotter/Footer";
import FooterPersonalite from "@/components/FooterPersonalite/FooterPersonalite";
import Ticktes from "@/components/Ticktes/Ticktes";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0.4, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const slideLeftVariants = {
  hidden: { opacity: 0.4, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const slideZoomVariants = {
  hidden: { opacity: 0, y: 72, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const [ageChecked, setAgeChecked] = useState(false);
  const [isUnderage, setIsUnderage] = useState(false);

  const handleYes = () => setAgeChecked(true);
  const handleNo = () => setIsUnderage(true);

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={sectionVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <HomePage />
          </motion.div>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={slideZoomVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <History />
          </motion.div>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={slideZoomVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Points />
          </motion.div>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={slideZoomVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Ticktes />
          </motion.div>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={slideZoomVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <FooterPersonalite />
          </motion.div>
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            variants={slideZoomVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Footer />
          </motion.div>
        </main>
      </div>

      {/* Age gate */}
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
