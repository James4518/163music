import React, { memo, useEffect, useRef } from "react";
import type { FC, ReactNode } from "react";
import { IndicatorWrapper } from "./style";

interface IProps {
  selectedIndex: number;
  children?: ReactNode;
}

const Indicator: FC<IProps> = (props) => {
  const { selectedIndex } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current.children[selectedIndex] as HTMLElement;
      const offset = el.offsetLeft;
      const itemWidth = el.clientWidth;
      const contentWidth = contentRef.current.clientWidth;
      const contentScroll = contentRef.current.scrollWidth;
      const totalDistance = contentScroll - contentWidth;
      let distance = offset + itemWidth * 0.5 - contentWidth * 0.5;
      if (distance < 0) distance = 0;
      if (distance > totalDistance) distance = totalDistance;
      contentRef.current.style.transform = `translate(${-distance}px)`;
    }
  }, [selectedIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
};

export default memo(Indicator);
