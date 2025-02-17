import Navigation from '@/components/Navigation';
import styles from './layout.module.css';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <Navigation />
      <main className="antialiased  ">{children}</main>
      <footer className={styles.footer}>
        <div className="flex flex-col text-center text-sm my-10 opacity-50">
          <p>Nestor Felipe &bull; 2025</p>
          <p>
            <span className={styles.next}>NEXT.js 14</span> &bull;
            <span className={styles.react}>{` ReactJS `}</span>
            &bull;
            <span className={styles.tailwind}> tailwindcss</span>
          </p>
        </div>
      </footer>
    </>
  );
}
