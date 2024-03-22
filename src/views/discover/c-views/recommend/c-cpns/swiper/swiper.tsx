import React, { memo, useCallback, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { SwiperRight, SwiperWrapper } from "./style";
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
      <SwiperRight>
        <a href="/download">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span className="banner_sprite shadow shadowL"></span>
        <span className="banner_sprite shadow shadowR"></span>
      </SwiperRight>
    </SwiperWrapper>
  );
};
export default memo(Swiper);
