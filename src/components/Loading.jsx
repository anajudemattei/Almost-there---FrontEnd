import React from "react";
import Image from "next/image"; 
import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Image
    src="/images/earth.gif"
    alt="Loading"
    width={200}
    height={200}
    unoptimized 
/>
      <p>Carregando países...</p>
    </div>
  );
}