import { Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin spinning size="small"></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning size="default"></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning size="large"></Spin>
    </div>
  );
};

export default Index;
