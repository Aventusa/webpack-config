import React from 'react';
import styles from './SignUp.module.scss';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { PAGES_CONFIG } from '../../constants/pages';

export const SignUp = () => {
  return (
    <div className={styles.root}>
      <Crumbs
        crumbs={[
          { label: 'Главная', to: PAGES_CONFIG.home.path },
        ]}
      />

      <div className={styles.content}>
        <h1>Регистрация</h1>
      </div>
    </div>
  );
};
