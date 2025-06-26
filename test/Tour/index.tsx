import { Button, Tour } from 'kawhi-ui';
import React, { useRef, useState } from 'react';
const Index = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: '第一步',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: '第二步',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: '第三步',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)}>Begin Tour</Button>
      </div>
      <Button ref={ref1}>第一步</Button>
      <Button ref={ref2}>第二步</Button>
      <Button ref={ref3}>第三步</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default Index;
