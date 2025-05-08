import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/images/earth.gif"
        alt="Maiko Xikixiki"
        width={200} // Ajuste o tamanho conforme necessário
        height={200}
      />
      <h1 className={styles.title}> Maiko Xikixiki Bahia</h1>
      <div className={styles.description}>
        <p>Tá perdido no código? Relaxa e vem de Maiko, que vamos te mostrar a usar:</p>
        <ul className={styles.list}>
          <li>Next.js (App Router)</li>
          <li>CSS Modules</li>
          <li>React Components</li>
          <li>React Hooks</li>
          <li>PreLoad</li>
          <li>PreFetch</li>
          <li>Fetch Axios</li>
          <li>LocalStorage</li>
          <li>React Toastify</li>
          <li>AntD</li>
          <li>Skeleton</li>
        </ul>
      </div>
      <a href="/countries">
        <button className={styles.button}>Acessar Países</button>
      </a>
    </div>
  );
}