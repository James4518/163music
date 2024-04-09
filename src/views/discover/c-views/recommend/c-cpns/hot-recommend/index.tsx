import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector, useAppShallowEqual } from "@/store";
import SongMenuItem from "@/components/song-menu-item";
import { RecommendWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    useAppShallowEqual
  );
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((item) => {
          return <SongMenuItem itemData={item} key={item.id}></SongMenuItem>;
        })}
      </div>
    </RecommendWrapper>
  );
};

export default memo(HotRecommend);
