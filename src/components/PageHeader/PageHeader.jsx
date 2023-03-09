import Link from "next/link";

import styles from "./page_header.module.css";

const PageHeader = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.page_header}>
        <div className={styles.top_bar}>
          <Link href="/" className={styles.link}>
            <img src="/images/icons/back.svg" alt="Seta para esquerda" />
          </Link>
          <img src="/images/logo.svg" alt="Proffy" />
        </div>
        <div className={styles.header_content}>
          <strong>{props.title}</strong>
          <p>{props.subtitle}</p>
          {props.children}
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
