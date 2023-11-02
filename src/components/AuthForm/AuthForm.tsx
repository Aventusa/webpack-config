import React from 'react';
import styles from './AuthForm.module.scss';
import { Input } from '../ui-kit/Input/Input';
import { Button } from '../ui-kit/Button/Button';
import { PAGES_CONFIG } from '../../constants/pages';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const form = useForm();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={form.handleSubmit((date) => {
        console.log(date);
      })}
      className={styles.root}
    >
      <label className={styles.label}>
        Логин
        <Input {...form.register('username')} />
      </label>

      <label className={styles.label}>
        Пароль
        <Input {...form.register('password')} />
      </label>

      <Button>Войти</Button>
      <Button
        onClick={() => navigate(PAGES_CONFIG.signUp.path)}
      >
        Регистрация
      </Button>
    </form>
  );
};

export default AuthForm;
