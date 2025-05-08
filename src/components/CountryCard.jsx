import React from "react";
import Image from "next/image";
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ country, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(country)}>
      <Image
        src={country.flags.png}
        alt={`Bandeira de ${country.translations.por.common}`}
        className={styles.flag}
        width={200} 
        height={120} 
        onError={(e) => (e.target.src = "/images/flag-placeholder.png")}
      />
      <h3 className={styles.name}>{country.translations.por.common}</h3>
    </div>
  );
}