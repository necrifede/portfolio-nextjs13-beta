'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.css';
// import ModeSwitcher from './ModeSwitcher';

const paths = [
  { label: 'Home', route: '/' },
  // { label: 'Posts', route: '/posts' },
  // { label: 'Projects', route: '/projects' },
  // { label: 'About', route: '/about' },
  { label: 'Contact', route: '/contact' },
];

export default function Navigation() {
  const [checked, setChecked] = useState(false);

  const handleClickItem = (event) => {
    setChecked((previous) => false);
  };

  const handleChangeHamburger = (event) => {
    setChecked((previous) => !previous);
  };

  return (
    <nav className={styles.navigation}>
      <div>
        <Link href="/">
          <Image src="/n.svg" className={styles.logo} alt="Nestor Logo" width={48} height={48} priority />
        </Link>
      </div>
      <div className={styles.menus}>
        <ul className={styles.pages}>
          {paths.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} onClick={handleClickItem} className={styles.growText}>
                <span className={styles.underline} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {/* <li>
            <ModeSwitcher />
          </li> */}
          <li>
            <div className={styles.hamburger}>
              <input type="checkbox" className={styles.toogle} checked={checked} onChange={handleChangeHamburger} />
              <div className={styles.hamburgericon}></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
