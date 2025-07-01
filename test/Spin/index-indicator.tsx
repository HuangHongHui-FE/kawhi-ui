import { Icon, Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin spinning indicator={<Icon type="icon-kawhi-biyan" spin />}></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin
        spinning
        indicator={<Icon type="icon-kawhi-chuangjianduihua" spin />}
      ></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning indicator={<Icon type="icon-kawhi-daochu" spin />}></Spin>
    </div>
  );
};

export default Index;
