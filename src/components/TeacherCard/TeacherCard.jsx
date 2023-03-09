import Link from "next/link";

import styles from "./teacher_card.module.css";

export default function TeacherCard() {
  return (
    <article className={styles.teacher_item}>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/106414554?v=4"
          alt="Foto de perfil"
        />
        <div className={styles.profile_title}>
          <h2>Nome do professor</h2>
          <p>Matéria</p>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
        corrupti, id pariatur sunt, excepturi deleniti at, nostrum nobis
        quibusdam et quia repellendus suscipit enim voluptatum nemo cumque
        maxime blanditiis.
      </p>
      <footer>
        <div className={styles.price}>
          <p>Preço/hora</p>
          <strong>Preço</strong>
        </div>
        <Link href="/" className={styles.btn_whatsapp}>
          <img src="/images/icons/whatsapp.svg" alt="Whatsapp icone" />
          Entrar em contato
        </Link>
      </footer>
    </article>
  );
}
