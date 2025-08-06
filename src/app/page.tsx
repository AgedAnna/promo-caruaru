import styles from "./page.module.css";
import HomePage from "@/components/Home/Home";
import History from "@/components/History/History";
import Points from "@/components/Points/Points";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
        <History />
        <Points />
      </main>
    </div>
  );
}
