import Navigation from '@/components/Navigation';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <Navigation />
      <main className="antialiased  ">{children}</main>
      <footer className={styles.footer}>
        <div className="flex flex-col text-center text-sm my-10 opacity-50">
          <p>Nestor Felipe &bull; 2023</p>
          <p>
            <span className={styles.next}>NEXT.js 13</span> (Beta) &bull;
            <span className={styles.react}>{` ReactJS `}</span>
            &bull;
            <span className={styles.tailwind}> tailwindcss</span>
          </p>
        </div>
      </footer>
    </>
  );
}
