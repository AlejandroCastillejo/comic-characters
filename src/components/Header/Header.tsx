import React from 'react';
import Image from 'next/image';

// import shortLogo from "/public/images/healthcheck-short-logo.svg";
// import largeLogo from "/public/images/healthcheck-large-logo.svg";
import marvelLogo from 'images/marvel-logo.svg';
import heartIcon from 'images/heart-icon.svg';

import styles from './Header.module.scss';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href={'/'}>
        <Image src={marvelLogo} alt="MARVEL logo" priority />
      </Link>

      <div className={styles.favoritesSelect}>
        <Image src={heartIcon} alt="heart icon" />
        <span>3</span>
      </div>
    </div>
  );
}

export default Header;
