import classNames from 'classnames';
import React from 'react';

import './index.less';

interface IProps {
  type?: string;
  children?: React.ReactNode;
  size?: 'default' | 'large' | 'small';
  icon?: React.ReactNode;
}

// 声明全局的ts
const prefixClsButton = `${prefixCls}-button`;

const Button = (props: IProps) => {
  const { type = 'default', children, size = 'default', icon } = props;

  const classnames = classNames(
    prefixClsButton,
    `${prefixClsButton}-type-${type}`,
    `${prefixClsButton}-size-${size}`,
  );

  return (
    <button type="button" className={classnames}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
