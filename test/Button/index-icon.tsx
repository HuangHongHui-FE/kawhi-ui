import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="start"
      >
        start Button
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      >
        end Button
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      ></Button>
    </div>
  );
};

export default Index;
