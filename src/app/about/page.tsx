import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <Link href='/'>Voltar ao App</Link>
    </main>
  )
}
