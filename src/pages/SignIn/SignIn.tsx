import React from 'react';
import styles from './SignIn.module.scss';
import AuthForm from '../../components/AuthForm/AuthForm';

export const SignIn = () => {
  return (
    <div className={styles.root}>
      <h1>Вход</h1>
      <AuthForm />
    </div>
  );
};
