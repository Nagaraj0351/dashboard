import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "../components/login";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DIFX</title>
        <meta
          name="description"
          content="Trade traditional and crypto assets on the go"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to DIFX</h1>
        <h2 className={styles.sub_title}>Digital Financial Exchange</h2>
        <div className={styles.description}>
          Fully Insured Cross-Asset Platform
        </div>

        <Login />
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by DIFX
        </a>
      </footer>
    </div>
  );
};

export default Home;
