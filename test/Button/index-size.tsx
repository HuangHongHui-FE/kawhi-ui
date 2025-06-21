import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" size="small">
        small Button
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="primary" size="default">
        default Button
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="primary" size="large">
        large Button
      </Button>
    </div>
  );
};

export default Index;
