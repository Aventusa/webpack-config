import React from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Content } from '../Content/Content';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <div className={styles.root}>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
