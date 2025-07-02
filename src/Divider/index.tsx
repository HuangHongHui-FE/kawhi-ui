import classNames from 'classnames';
import React from 'react';

import './index.less';

interface IProps {
  dashed?: boolean;
  children?: React.ReactNode;
  orientation?: 'left' | 'right' | 'center';
}

// __todo: onClick事件加下

// 声明全局的ts
const prefixClsDivider = `${prefixCls}-divider`;

const Divider = (props: IProps) => {
  const { dashed, children, orientation = 'center' } = props;

  return (
    <div
      className={classNames(
        prefixClsDivider,
        {
          [`${prefixClsDivider}-dashed`]: dashed,
          [`${prefixClsDivider}-with-text`]: !!children,
        },
        `${prefixClsDivider}-with-text-${orientation}`,
      )}
    >
      {children && (
        <span className={`${prefixClsDivider}-inner-text`}>{children}</span>
      )}
    </div>
  );
};

export default Divider;
