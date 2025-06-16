import classNames from 'classnames';
import React, { useMemo } from 'react';

import './index.less';

interface IProps {
  type?: string;
  children?: React.ReactNode;
  size?: 'default' | 'large' | 'small';
  icon?: React.ReactNode;
  disabled?: boolean;
}

// 声明全局的ts
const prefixClsButton = `${prefixCls}-button`;

const Button = (props: IProps) => {
  const {
    type = 'default',
    children,
    size = 'default',
    icon,
    disabled = false,
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

    return cls;
  }, [type, size, disabled]);

  return (
    <button type="button" className={classnames} disabled={disabled} {...rest}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
