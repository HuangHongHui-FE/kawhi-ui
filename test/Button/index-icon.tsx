import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
      >
        Primary Button
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
      ></Button>
    </div>
  );
};

export default Index;
