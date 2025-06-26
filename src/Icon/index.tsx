import classNames from 'classnames';
import React from 'react';
import './index.less';

interface IProps {
  type?: string;
  style: React.CSSProperties;
}

// 声明全局的ts
const prefixClsIcon = `${prefixCls}-icon`;

const Icon = (props: IProps) => {
  const { type, style } = props;
  return (
    <i
      className={classNames(prefixClsIcon, `iconfont ${type}`)}
      style={style}
    />
  );
};

export default Icon;
