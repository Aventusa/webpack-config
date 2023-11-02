import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <button {...restProps} className={cn(styles.root, className)}>
      {children}
    </button>
  );
};
