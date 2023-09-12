import React from 'react'
import styles from './styles.module.css'
import Head from 'next/head'

const DashBoard = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Meu painel de tarefas</title>
        </Head>

        <h1>Página Pinel</h1>
    </div>
  )
}

export default DashBoard