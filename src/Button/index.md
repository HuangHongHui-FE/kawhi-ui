# Button

按钮

```jsx
import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" size="default">
        Primary Button
      </Button>
          
      <Button>Default Button</Button>    
      <Button type="dashed" size="large">
        Dashed Button
      </Button>
          
      <Button type="text" size="small">
        Text Button
      </Button>
          
      <Button type="link">Link Button</Button>
    </div>
  );
};
export default Index;
```
