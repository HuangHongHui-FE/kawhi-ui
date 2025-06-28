import { Icon, Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin
        spinning
        indicator={
          <Icon
            type="icon-kawhi-wenjianjia-dakai"
            style={{ fontSize: '32px' }}
            spin
          />
        }
      >
        <div style={{ width: '300px' }}>
          我是内容 我是内容 我是内容 我是内容
        </div>
        <div style={{ width: '300px' }}>
          我是内容 我是内容 我是内容 我是内容
        </div>
      </Spin>
      <div>我是内容 我是内容 我是内容 我是内容</div>
      <div>我是内容 我是内容 我是内容 我是内容</div>
    </div>
  );
};

export default Index;
