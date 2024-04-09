import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import Swiper from "./c-cpns/swiper/swiper";
import { RecommendWrapper } from "./style";
import { useAppDispatch } from "@/store";
import HotRecommend from "./c-cpns/hot-recommend";
import { fetchRecommendDataAction } from "@/store/modules/recommend";
import NewAlbum from "./c-cpns/new-album";

interface IProps {
  children?: ReactNode;
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);
  return (
    <RecommendWrapper>
      <Swiper />
      <div className="wrap-v2 content">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommand);
