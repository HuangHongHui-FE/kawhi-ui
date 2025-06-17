import classNames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import { iconPositionMap } from './config';

import './index.less';

interface IProps {
  type?: string;
  children?: React.ReactNode;
  size?: 'default' | 'large' | 'small';
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: 'start' | 'end';
  className?: string;
}

// 声明全局的ts
const prefixClsButton = `${prefixCls}-button`;

const Button = forwardRef(
  (props: IProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      type = 'default',
      children,
      size = 'default',
      icon,
      disabled = false,
      iconPosition,
      className,
      ...rest
    } = props;

    const classnames = useMemo(() => {
      let cls = classNames(
        prefixClsButton,
        `${prefixClsButton}-type-${type}`,
        `${prefixClsButton}-size-${size}`,
      );

      if (disabled) {
        cls = classNames(cls, `${prefixClsButton}-disabled`);
      }

      if (className) {
        cls = classNames(cls, className);
      }

      return cls;
    }, [type, size, disabled, className]);

    return (
      <button
        type="button"
        className={classnames}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {icon && iconPosition === iconPositionMap.start && icon}
        {children}
        {icon && iconPosition === iconPositionMap.end && icon}
      </button>
    );
  },
);

export default Button;
