import classNames from 'classnames';
import React from 'react';
import './index.less';

interface IProps {
  type: string;
  style?: React.CSSProperties;
  className?: string;
  spin?: boolean;
}

// 声明全局的ts
const prefixClsIcon = `${prefixCls}-icon`;

const Icon = (props: IProps) => {
  const { type, style, className, spin } = props;

  return (
    <i
      className={classNames(prefixClsIcon, className, `iconfont ${type}`, {
        [`${prefixClsIcon}-spin`]: spin,
      })}
      style={style}
    />
  );
};

export default Icon;
