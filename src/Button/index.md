# Button

## 代码演示

#### 按钮类型

```jsx
import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
          
      <Button>Default Button</Button>    
      <Button type="dashed">Dashed Button</Button>
          
      <Button type="text">Text Button</Button>
          
      <Button type="link">Link Button</Button>
    </div>
  );
};

export default Index;

```

#### 按钮大小

```jsx
import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" size="small">Primary Button</Button>
          
      <Button type="primary" size="default">Default Button</Button>    
      <Button type="primary" size="large">Dashed Button</Button>
    </div>
  );
};

export default Index;
```

#### 按钮icon

```jsx
import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button
        type="dash"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
      >
        Primary Button
      </Button>
          
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
      ></Button>
    </div>
  );
};

export default Index;
```
