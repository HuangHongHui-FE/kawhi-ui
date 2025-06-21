import { Button, Tour } from 'kawhi-ui';
import React, { useRef, useState } from 'react';
const Index = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [open, setOpen] = useState(false);

  //   center left leftTop leftBottom right rightTop rightBottom top topLeft topRight bottom bottomLeft bottomRight

  const steps = [
    {
      title: '上',
      description: '卡片位置在target上方',
      placement: 'top',
      target: () => ref1.current,
    },
    {
      title: '下',
      description: '卡片位置在target下方',
      placement: 'bottom',
      target: () => ref2.current,
    },
    {
      title: '左',
      description: '卡片位置在target左方',
      placement: 'left',
      target: () => ref3.current,
    },
    {
      title: '右',
      placement: 'right',
      description: '卡片位置在target右方',
      target: () => ref4.current,
    },
  ];

  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)}>Begin Tour</Button>
      </div>
      <Button ref={ref1}>上方</Button>
      <Button ref={ref2}>下方</Button>
      <Button ref={ref3}>左方</Button>
      <Button ref={ref4}>右方</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default Index;
