import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [ name, setName ] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>RIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Enter your name:
        </h1>
        <input onChange={(event) => setName(event.target.value) }/>
        <img src={`/api/generate?name=${name}`} />
      </main>

      <footer />
    </div>
  )
}
