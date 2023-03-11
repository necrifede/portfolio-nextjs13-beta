import Navigation from '@/components/Navigation';
import styles from './page.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <Navigation />
      <main className="antialiased  ">{children}</main>
      <footer className={styles.footer}>&bull; Footer here &bull;</footer>
    </>
  );
}
