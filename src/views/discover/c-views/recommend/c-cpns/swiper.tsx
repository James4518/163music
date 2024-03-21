import React, { memo, useCallback, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { SwiperWrapper } from "./style";
import { useAppSelector, useAppShallowEqual } from "@/store";
import Carousel from "@/base-ui/carousel";

interface IProps {
  children?: ReactNode;
}

const Swiper: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    useAppShallowEqual
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBanner = banners[selectedIndex];
  const bgImgUrl = useMemo(() => {
    if (selectedBanner) {
      return selectedBanner.imageUrl + "?imageView&blur=40x20";
    }
  }, [selectedBanner]);
  const changeSelectedIndex = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      return index;
    },
    [selectedIndex]
  );
  return (
    <SwiperWrapper
      style={{
        background: `url('${bgImgUrl}') center center / 6000px`
      }}
    >
      <div className="swiper">
        {banners.length > 0 && (
          <Carousel
            itemData={banners.slice(0, 6)}
            currentIndex={selectedIndex}
            setSelectedIndex={changeSelectedIndex}
          />
        )}
      </div>
    </SwiperWrapper>
  );
};
export default memo(Swiper);
