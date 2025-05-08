import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ country, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(country)}>
      <Image
        src={country.flags.png}
        alt={`Bandeira de ${country.translations.por.common}`}
        className={styles.flag}
        width={200} // Defina a largura da imagem
        height={120} // Defina a altura da imagem
        onError={(e) => (e.target.src = "/images/flag-placeholder.png")}
      />
      <h3 className={styles.name}>{country.translations.por.common}</h3>
    </div>
  );
}