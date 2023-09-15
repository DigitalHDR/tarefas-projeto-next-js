import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head'

import { getSession } from 'next-auth/react'
import { Textarea } from '@/components/textarea'


export default function DashBoard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>

            <form>
              <Textarea placeholder='Digite qual sua tarefa...' />
              <div className={styles.checkBoxArea}>
                <input type="checkbox" className={styles.checkBox} />
                <label>Deixar tarefa publica</label>
              </div>

              <button className={styles.buttun} type="submit">
                Register
              </button>
            </form>
          </div>
        </section>
      </main>
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
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
