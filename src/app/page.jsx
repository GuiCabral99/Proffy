import Link from "next/link";

import styles from "./landing.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page_landing}>
        <div className={`${styles.container} ${styles.page_landing_content}`}>
          <div className={styles.logo_container}>
            <img src="/images/logo.svg" alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
          <img
            src="/images/landing.svg"
            alt="Plataforma de estudos"
            className={styles.hero_image}
          />
          <div className={styles.btn_container}>
            <Link href="/study" className={`${styles.link} ${styles.study}`}>
              <img src="/images/icons/study.svg" alt="Livro" />
              Estudar
            </Link>
            <Link
              href="/give-classes"
              className={`${styles.link} ${styles.give_classes}`}
            >
              <img src="/images/icons/give-classes.svg" alt="Quadro" />
              Dar aulas
            </Link>
          </div>
          <div className={styles.total_connections}>
            <p>
              Total de X conexões já realizadas
              <img src="/images/icons/purple-heart.svg" alt="Coração roxo" />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
