import Navigation from '@/components/Navigation';
import styles from './page.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <Navigation />
      <main className="antialiased  ">{children}</main>
      <footer className={styles.footer}>&bull; Developer using React.js, Next.js and tailwindcss &bull;</footer>
    </>
  );
}
