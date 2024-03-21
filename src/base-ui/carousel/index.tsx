import React, { memo, useCallback, useRef } from "react";
import type { FC, ReactNode } from "react";
import classNames from "classnames";
import Slider, { Settings } from "react-slick";
import Indicator from "@/base-ui/indicator";
import { PrevArrow, NextArrow } from "./arrow";
import { CarouselWrapper } from "./style";
import { IBanner } from "@/store/modules/recommend/type";

interface IProps {
  children?: ReactNode;
  itemData: IBanner[];
  currentIndex: number;
  setSelectedIndex: (num: number) => number;
}

const Carousel: FC<IProps> = (props) => {
  const { itemData, currentIndex, setSelectedIndex } = props;
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow controlClick={(num: number) => controlClickHandle(num)} />
    ),
    prevArrow: (
      <PrevArrow controlClick={(num: number) => controlClickHandle(num)} />
    ),
    beforeChange: (oldIndex: number, newIndex: number) =>
      handleBeforeChange(oldIndex, newIndex),
    afterChange: (index: number) => dotClickHandle(index)
  };
  const controlClickHandle = useCallback(
    (num: number) => {
      let newIndex = currentIndex + num;
      if (newIndex < 0) {
        newIndex = itemData.length - 1;
      } else if (newIndex >= itemData.length) {
        newIndex = 0;
      }
      setSelectedIndex(newIndex);
      sliderRef.current?.slickGoTo(newIndex);
    },
    [currentIndex, itemData.length]
  );
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setSelectedIndex(newIndex);
  };
  const dotClickHandle = (index: number) => {
    setSelectedIndex(index);
    sliderRef.current?.slickGoTo(index);
  };
  return (
    <CarouselWrapper>
      <div className="carousel">
        <div className="indicator">
          <Indicator selectedIndex={currentIndex}>
            {itemData.map((item, index) => {
              return (
                <div
                  className="item"
                  key={item.imageUrl}
                  onClick={() => dotClickHandle(index)}
                >
                  <span
                    className={classNames("dot", {
                      active: currentIndex === index
                    })}
                  ></span>
                </div>
              );
            })}
          </Indicator>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {itemData.map((item) => {
            return (
              <div className="cover" key={item.imageUrl}>
                <img src={item.imageUrl} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default memo(Carousel);
