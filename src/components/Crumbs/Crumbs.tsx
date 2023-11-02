import React from 'react';
import styles from './Crumbs.module.scss';
import { Link } from 'react-router-dom';

interface CrumbsProps {
  crumbs: { label: string; to: string }[];
}

export const Crumbs: React.FC<CrumbsProps> = ({
  crumbs,
}) => {
  return (
    <div className={styles.root}>
      {crumbs.map((crumb) => (
        <Link className={styles.crumb} to={crumb.to}>
          {crumb.label}
        </Link>
      ))}
    </div>
  );
};
