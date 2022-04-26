import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavbarHeader from './component/header/NavbarHeader'
import Main from "./component/main/Main"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarHeader/>

      <main className={styles.main}>
        {/* Main content */}
        <Main/>
      </main>

      <footer className={styles.footer}>
        {/* footer content */}
        footer
      </footer>
    </div>
  )
}

export default Home
