import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button>Default Button</Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="dashed">Dashed Button</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="text">Text Button</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="link">Link Button</Button>
    </div>
  );
};

export default Index;
