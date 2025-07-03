import classNames from 'classnames';
import React from 'react';

import './index.less';

interface IProps {
  dashed?: boolean;
  children?: React.ReactNode;
  orientation?: 'left' | 'right' | 'center';
  size: 'small' | 'large' | 'middle';
  style: React.CSSProperties;
  className?: string;
  type: 'horizontal' | 'vertical';
}

// __todo: onClick事件加下

// 声明全局的ts
const prefixClsDivider = `${prefixCls}-divider`;

const Divider = (props: IProps) => {
  const {
    dashed,
    children,
    orientation = 'center',
    size,
    className,
    type,
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        prefixClsDivider,
        {
          [`${prefixClsDivider}-dashed`]: dashed,
          [`${prefixClsDivider}-with-text`]: !!children,
          [`${prefixClsDivider}-size-${size}`]: !!size,
          [`${prefixClsDivider}-type-${type}`]: !!type,
        },
        `${prefixClsDivider}-with-text-${orientation}`,
        className,
      )}
      {...rest}
    >
      {children && (
        <span className={`${prefixClsDivider}-inner-text`}>{children}</span>
      )}
    </div>
  );
};

export default Divider;
