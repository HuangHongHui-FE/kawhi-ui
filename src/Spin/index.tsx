import { Icon } from 'kawhi-ui';
import React from 'react';

import classNames from 'classnames';
import './index.less';

interface IProps {
  spinning?: boolean;
  children?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  indicator?: React.ReactNode;
  style?: React.CSSProperties;
  tip?: string;
}

// 声明全局的ts
const prefixClsSpin = `${prefixCls}-spin`;

const Spin = (props: IProps) => {
  const { spinning, children, size = 'default', indicator, style, tip } = props;

  return (
    <div className={prefixClsSpin}>
      {children}
      {spinning && (
        <div className={classNames(`${prefixClsSpin}-overlay`)}>
          {indicator ? (
            indicator
          ) : (
            <>
              <Icon
                type="icon-kawhi-loading"
                className={`${prefixClsSpin}-size-${size}`}
                style={style}
                spin
              />
              <span className={`${prefixClsSpin}-tip`}>{tip}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Spin;
