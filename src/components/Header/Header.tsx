import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { PAGES_CONFIG } from '../../constants/pages';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.auth}>
          <Link to={PAGES_CONFIG.signIn.path}>Вход</Link>
        </div>
      </div>
    </div>
  );
};
