import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href="/dashbord" className={styles.link}>Meu Pinel</Link>
        </nav>

        <button className={styles.loginButton}>Acessar</button>
      </section>
    </header>
  )
}

export default Header
