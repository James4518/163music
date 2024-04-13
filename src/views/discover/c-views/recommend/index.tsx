import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import Swiper from "./c-cpns/swiper/swiper";
import { RecommendWrapper } from "./style";
import { useAppDispatch } from "@/store";
import HotRecommend from "./c-cpns/hot-recommend";
import {
  fetchRankingsData,
  fetchRecommendDataAction
} from "@/store/modules/recommend";
import NewAlbum from "./c-cpns/new-album";
import HotRanking from "./c-cpns/hot-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";

interface IProps {
  children?: ReactNode;
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRankingsData());
  }, []);
  return (
    <RecommendWrapper>
      <Swiper />
      <div className="wrap-v2 content">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <HotRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommand);
