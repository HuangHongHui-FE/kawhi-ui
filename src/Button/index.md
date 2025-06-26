# Button

按钮

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
      <Button type="primary" size="small">
        small Button
      </Button>
          
      <Button type="primary" size="default">
        default Button
      </Button>
          
      <Button type="primary" size="large">
        large Button
      </Button>
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
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="start"
      >
        start Button
      </Button>
          
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      >
        end Button
      </Button>
          
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      ></Button>
    </div>
  );
};

export default Index;

```

#### 按钮失效

```jsx
import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" disabled>
        disabled Button
      </Button>
    </div>
  );
};

export default Index;

```
