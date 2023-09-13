import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head'

import { getSession } from 'next-auth/react'
import { log } from 'console'

export default function DashBoard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Página Pinel</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.user) {
    //se não tem usuário vamos redirecionar para /
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
    }
  }

  return {
    props: {},
  }
}
