import classNames from 'classnames';
import React from 'react';

import './index.less';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  description?: string;
  imageStyle?: React.CSSProperties;
  image: string | React.ReactNode;
}

// 声明全局的ts
const prefixClsEmpty = `${prefixCls}-empty`;

const Empty = (props: IProps) => {
  const {
    className,
    description,
    imageStyle,
    image = 'https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1024FPA/null/20257/55c6bb72-398c-4dd7-8527-35d87fcaf8e7.jpg',
    ...rest
  } = props;

  return (
    <div className={classNames(prefixClsEmpty, className)} {...rest}>
      <div className={`${prefixClsEmpty}-image`}>
        {typeof image === 'string' ? (
          <img src={image} style={imageStyle} />
        ) : (
          image
        )}
      </div>
      <div className={`${prefixClsEmpty}-description`}>
        {description ? description : '暂无数据'}
      </div>
    </div>
  );
};

export default Empty;
