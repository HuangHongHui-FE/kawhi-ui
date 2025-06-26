import RcTour from '@rc-component/tour';
import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../Button';
import './index.less';

interface IProps {
  open: boolean;
  steps: any[];
  onClose: () => void;
  className?: string;
  zIndex?: number;
}

type TPlacement = 'rightTop' | 'bottomLeft';

// 声明全局的ts
const prefixClsTour = `${prefixCls}-tour`;

const Tour = (props: IProps) => {
  const { open, onClose, steps, className, zIndex } = props;

  const [currentStep, setCurrentStep] = useState(0);

  const end = () => {
    setCurrentStep(0);
    onClose();
  };

  return (
    <RcTour
      open={open}
      defaultCurrent={0}
      current={currentStep}
      steps={steps}
      className="kawhi-tour"
      renderPanel={(stepProps, stepCurrent) => {
        const { placement } = stepProps;

        return (
          <div className={classNames(`${prefixClsTour}-content`, className)}>
            <div
              className={`${prefixClsTour}-content-arrow-placement-${placement}`}
            ></div>
            <div className={`${prefixClsTour}-content-title`}>
              {stepProps.title}
            </div>
            <div className={`${prefixClsTour}-content-description`}>
              {stepProps.description}
            </div>

            <div className={`${prefixClsTour}-content-footer`}>
              <div className={`${prefixClsTour}-content-footer-ratio`}>
                <span className={`${prefixClsTour}-content-footer-current`}>
                  {(stepProps.current || 0) + 1}
                </span>

                <span className={`${prefixClsTour}-content-footer-total`}>
                  &nbsp;/&nbsp;{stepProps.total}
                </span>
              </div>

              {currentStep < steps?.length - 1 && (
                <span
                  className={`${prefixClsTour}-content-footer-skip`}
                  onClick={end}
                >
                  跳过
                </span>
              )}

              {currentStep > 0 && (
                <Button
                  size="small"
                  className={`${prefixClsTour}-content-footer-prev`}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  上一步
                </Button>
              )}

              {currentStep < steps?.length - 1 && (
                <Button
                  type="primary"
                  size="small"
                  className={`${prefixClsTour}-content-footer-next`}
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  下一步
                </Button>
              )}

              {currentStep === steps?.length - 1 && (
                <Button
                  type="primary"
                  size="small"
                  className={`${prefixClsTour}-content-footer-next`}
                  onClick={end}
                >
                  结束引导
                </Button>
              )}
            </div>
          </div>
        );
      }}
      zIndex={zIndex}
    />
  );
};

export default Tour;
