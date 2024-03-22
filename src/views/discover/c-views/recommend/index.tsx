import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import Swiper from "./c-cpns/swiper/swiper";
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction
} from "@/store/modules/recommend";
import { useAppDispatch } from "@/store";
import HotRecommend from "./c-cpns/hot-recommend";
import { RecommendWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannersDataAction());
    dispatch(fetchHotRecommendDataAction());
  }, []);
  return (
    <RecommendWrapper>
      <Swiper />
      <div className="wrap-v2 content">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommand);
