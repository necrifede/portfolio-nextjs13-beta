import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
// import ModeSwitcher from './ModeSwitcher';

const paths = [
  { label: 'Home', route: '/' },
  { label: 'Projects', route: '/projects' },
  { label: 'Posts', route: '/posts' },
  { label: 'Connect', route: '/contact' },
];

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <div>
          <Link href="/">
            <Image src="/n.svg" alt="Nestor Logo" width={48} height={48} priority />
          </Link>
        </div>
        <div className={styles.menus}>
          <ul className={styles.pages}>
            {paths.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <ul className={styles.functions}>
            {/* <li>
              <ModeSwitcher />
            </li> */}
            <li>
              <div className={styles.hamburger}>
                <input type="checkbox" className={styles.toogle} />
                <div className={styles.hamburgericon}></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
