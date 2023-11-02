import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputProps extends UseFormRegisterReturn {
  className?: string;
  value?: string;
}

export const Input = React.forwardRef<any, InputProps>(
  ({ className, ...restProps }, ref) => {
    return (
      <input
        {...restProps}
        ref={ref}
        className={cn(styles.root, className)}
        type="text"
      />
    );
  }
);
