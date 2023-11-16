"use client"

import Link from "next/link"
import styles from "./page.module.css"

export default function Error() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>Erro !</h1>
        <p className={styles.description}>Algum erro ocurreu !</p>
        <Link className={styles.link} href='/'>Voltar para Home</Link>
    </main>
  )
}