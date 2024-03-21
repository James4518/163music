import React from "react";
import type { FC } from "react";

interface IArrowProps {
  className?: string;
  controlClick: (num: number) => void;
}

export const NextArrow: FC<IArrowProps> = (props) => {
  const { className, controlClick } = props;
  function nextClickHandle(num: number) {
    controlClick(num);
  }
  return <div className={className} onClick={() => nextClickHandle(1)} />;
};

export const PrevArrow: FC<IArrowProps> = (props) => {
  const { className, controlClick } = props;
  function prevClickHandle(num: number) {
    controlClick(num);
  }
  return <div className={className} onClick={() => prevClickHandle(-1)} />;
};
